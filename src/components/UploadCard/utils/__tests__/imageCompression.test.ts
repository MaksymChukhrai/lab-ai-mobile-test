import { compressImage, validateImageDimensions } from "../imageCompression";

// Mock browser-image-compression library
jest.mock("browser-image-compression", () => ({
  __esModule: true,
  default: jest.fn(),
}));

import imageCompression from "browser-image-compression";

const mockedImageCompression = imageCompression as jest.MockedFunction<
  typeof imageCompression
>;

describe("imageCompression", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("compressImage", () => {
    it("should skip compression for files smaller than 2MB", async () => {
      const smallFile = new File(["x".repeat(1024 * 1024)], "small.jpg", {
        type: "image/jpeg",
      });

      const result = await compressImage(smallFile);

      expect(result).toBe(smallFile);
      expect(mockedImageCompression).not.toHaveBeenCalled();
    });

    it("should compress files larger than 2MB", async () => {
      const largeFile = new File(["x".repeat(3 * 1024 * 1024)], "large.jpg", {
        type: "image/jpeg",
      });

      const mockCompressedFile = new File(
        ["x".repeat(1.5 * 1024 * 1024)],
        "large.jpg",
        {
          type: "image/jpeg",
        },
      );

      mockedImageCompression.mockResolvedValue(mockCompressedFile);

      const result = await compressImage(largeFile);

      expect(mockedImageCompression).toHaveBeenCalledWith(largeFile, {
        maxSizeMB: 2,
        maxWidthOrHeight: 1920,
        useWebWorker: true,
      });
      expect(result).toBe(mockCompressedFile);
      expect(result.size).toBeLessThan(largeFile.size);
    });

    it("should return original file if compression fails", async () => {
      const largeFile = new File(["x".repeat(5 * 1024 * 1024)], "large.jpg", {
        type: "image/jpeg",
      });

      mockedImageCompression.mockRejectedValue(new Error("Compression failed"));

      const result = await compressImage(largeFile);

      expect(result).toBe(largeFile);
    });

    it("should use custom compression options if provided", async () => {
      const largeFile = new File(["x".repeat(10 * 1024 * 1024)], "huge.jpg", {
        type: "image/jpeg",
      });

      const customOptions = {
        maxSizeMB: 5,
        maxWidthOrHeight: 2560,
      };

      const mockCompressedFile = new File(
        ["x".repeat(4.5 * 1024 * 1024)],
        "huge.jpg",
        {
          type: "image/jpeg",
        },
      );

      mockedImageCompression.mockResolvedValue(mockCompressedFile);

      await compressImage(largeFile, customOptions);

      expect(mockedImageCompression).toHaveBeenCalledWith(largeFile, {
        maxSizeMB: 5,
        maxWidthOrHeight: 2560,
        useWebWorker: true,
      });
    });

    it("should handle exactly 2MB file (boundary test)", async () => {
      const exactFile = new File(["x".repeat(2 * 1024 * 1024)], "exact.jpg", {
        type: "image/jpeg",
      });

      const result = await compressImage(exactFile);

      expect(result).toBe(exactFile);
      expect(mockedImageCompression).not.toHaveBeenCalled();
    });

    it("should compress file just above 2MB (boundary test)", async () => {
      const justAboveFile = new File(
        ["x".repeat(2 * 1024 * 1024 + 1)],
        "justAbove.jpg",
        {
          type: "image/jpeg",
        },
      );

      const mockCompressedFile = new File(
        ["x".repeat(1.9 * 1024 * 1024)],
        "justAbove.jpg",
        {
          type: "image/jpeg",
        },
      );

      mockedImageCompression.mockResolvedValue(mockCompressedFile);

      const result = await compressImage(justAboveFile);

      expect(mockedImageCompression).toHaveBeenCalled();
      expect(result).toBe(mockCompressedFile);
    });
  });

  describe("validateImageDimensions", () => {
    const createMockImage = (
      width: number,
      height: number,
      shouldError = false,
    ) => {
      return class MockImage {
        private _src = "";
        public onload: (() => void) | null = null;
        public onerror: (() => void) | null = null;
        public width = width;
        public height = height;

        set src(value: string) {
          this._src = value;
          setTimeout(() => {
            if (shouldError) {
              this.onerror?.();
            } else {
              this.onload?.();
            }
          }, 0);
        }

        get src() {
          return this._src;
        }
      } as unknown as typeof Image;
    };

    let originalImage: typeof Image;
    let originalCreateObjectURL: typeof URL.createObjectURL;
    let originalRevokeObjectURL: typeof URL.revokeObjectURL;

    beforeAll(() => {
      originalImage = window.Image;
      originalCreateObjectURL = URL.createObjectURL;
      originalRevokeObjectURL = URL.revokeObjectURL;
    });

    afterAll(() => {
      window.Image = originalImage;
      URL.createObjectURL = originalCreateObjectURL;
      URL.revokeObjectURL = originalRevokeObjectURL;
    });

    beforeEach(() => {
      URL.createObjectURL = jest.fn(() => "blob:mock-url");
      URL.revokeObjectURL = jest.fn();
    });

    it("should validate image with sufficient dimensions (1920x1080)", async () => {
      window.Image = createMockImage(1920, 1080);

      const validFile = new File(["valid image"], "valid.jpg", {
        type: "image/jpeg",
      });

      const result = await validateImageDimensions(validFile);

      expect(result.width).toBe(1920);
      expect(result.height).toBe(1080);
      expect(result.isValid).toBe(true);
      expect(URL.createObjectURL).toHaveBeenCalledWith(validFile);
      expect(URL.revokeObjectURL).toHaveBeenCalled();
    });

    it("should reject image with insufficient dimensions (320x240)", async () => {
      window.Image = createMockImage(320, 240);

      const smallFile = new File(["small image"], "small.jpg", {
        type: "image/jpeg",
      });

      const result = await validateImageDimensions(smallFile);

      expect(result.width).toBe(320);
      expect(result.height).toBe(240);
      expect(result.isValid).toBe(false);
    });

    it("should handle image load errors", async () => {
      window.Image = createMockImage(0, 0, true);

      const invalidFile = new File(["invalid image"], "invalid.jpg", {
        type: "image/jpeg",
      });

      const result = await validateImageDimensions(invalidFile);

      expect(result.width).toBe(0);
      expect(result.height).toBe(0);
      expect(result.isValid).toBe(false);
    });

    it("should validate minimum dimensions boundary (640x480)", async () => {
      window.Image = createMockImage(640, 480);

      const boundaryFile = new File(["boundary image"], "boundary.jpg", {
        type: "image/jpeg",
      });

      const result = await validateImageDimensions(boundaryFile);

      expect(result.width).toBe(640);
      expect(result.height).toBe(480);
      expect(result.isValid).toBe(true);
    });

    it("should reject just below minimum dimensions (639x479)", async () => {
      window.Image = createMockImage(639, 479);

      const belowBoundaryFile = new File(
        ["below boundary image"],
        "belowBoundary.jpg",
        {
          type: "image/jpeg",
        },
      );

      const result = await validateImageDimensions(belowBoundaryFile);

      expect(result.width).toBe(639);
      expect(result.height).toBe(479);
      expect(result.isValid).toBe(false);
    });
  });
});
