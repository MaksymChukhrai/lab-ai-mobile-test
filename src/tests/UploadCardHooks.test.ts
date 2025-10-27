import { renderHook, act } from "@testing-library/react";
import * as Tesseract from "tesseract.js";
import { useSendParsedDataMutation } from "store/api/uploadFileApi";
import { useUploadCard } from "components/UploadCard/UploadCardHooks";
import { extractTextFromPDF } from "components/UploadCard/utils/pdfUtils";
import { validateFile } from "components/UploadCard/utils/fileUtils";

jest.mock("store/api/uploadFileApi", () => ({
  useSendParsedDataMutation: jest.fn(),
}));

jest.mock("components/UploadCard/utils/pdfUtils", () => ({
  extractTextFromPDF: jest.fn(),
}));

jest.mock("components/UploadCard/utils/fileUtils", () => ({
  validateFile: jest.fn(),
}));

jest.mock("tesseract.js", () => ({
  recognize: jest.fn(),
}));

const mockSendParsedData = jest.fn();

const flushPromises = () => new Promise((resolve) => setTimeout(resolve, 0));

describe("useUploadCard", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (useSendParsedDataMutation as jest.Mock).mockReturnValue([
      mockSendParsedData,
    ]);
    (validateFile as jest.Mock).mockReturnValue(null);
  });

  it("should initialize with default state", () => {
    const { result } = renderHook(() => useUploadCard());

    expect(result.current.isDragging).toBe(false);
    expect(result.current.isUploading).toBe(false);
    expect(result.current.ocrText).toBeNull();
    expect(result.current.isFileSelected).toBe(false);
  });

  it("should handle PDF extraction successfully", async () => {
    const mockFile = new File(["dummy"], "test.pdf", {
      type: "application/pdf",
    });
    (extractTextFromPDF as jest.Mock).mockResolvedValue("Extracted PDF text");

    const { result } = renderHook(() => useUploadCard());

    await act(async () => {
      await result.current.handleFile(mockFile);
    });

    expect(extractTextFromPDF).toHaveBeenCalledWith(mockFile);
    expect(result.current.ocrText).toBe("Extracted PDF text");
    expect(result.current.isProcessing).toBe(false);
    expect(result.current.errorMessage).toBeNull();
  });

  it("should handle OCR extraction for image successfully", async () => {
    const mockFile = new File(["image"], "image.png", { type: "image/png" });
    (Tesseract.recognize as jest.Mock).mockResolvedValue({
      data: { text: "Detected OCR text" },
    });

    const { result } = renderHook(() => useUploadCard());

    await act(async () => {
      await result.current.handleFile(mockFile);
    });

    expect(Tesseract.recognize).toHaveBeenCalled();
    expect(result.current.ocrText).toBe("Detected OCR text");
  });

  it("should set error message for invalid file", async () => {
    const mockFile = new File(["data"], "bad.exe", {
      type: "application/x-msdownload",
    });
    (validateFile as jest.Mock).mockReturnValue("Invalid file type");

    const { result } = renderHook(() => useUploadCard());

    await act(async () => {
      await result.current.handleFile(mockFile);
    });

    expect(result.current.errorMessage).toBe("Invalid file type");
    expect(result.current.isFileSelected).toBe(false);
  });

  it("should call sendParsedData on handleContinue with correct payload", async () => {
    const mockFile = new File(["data"], "doc.pdf", { type: "application/pdf" });
    const ocrText = "Extracted content";
    (extractTextFromPDF as jest.Mock).mockResolvedValue(ocrText);
    mockSendParsedData.mockReturnValue({
      unwrap: () => Promise.resolve({ saved: true }),
    });

    const { result } = renderHook(() => useUploadCard());

    await act(async () => {
      await result.current.handleFile(mockFile);
    });

    await act(async () => {
      await result.current.handleContinue();
      await flushPromises();
    });

    expect(mockSendParsedData).toHaveBeenCalledWith({
      fileName: "doc.pdf",
      fileType: "application/pdf",
      extractedText: ocrText,
    });
    expect(result.current.errorMessage).toBeNull();
    expect(result.current.isUploading).toBe(false);
  });

  it("should handle upload errors gracefully", async () => {
    const mockFile = new File(["data"], "broken.pdf", {
      type: "application/pdf",
    });
    const ocrText = "Broken text";
    (extractTextFromPDF as jest.Mock).mockResolvedValue(ocrText);
    mockSendParsedData.mockReturnValue({
      unwrap: () => Promise.reject(new Error("Upload failed")),
    });

    const { result } = renderHook(() => useUploadCard());

    await act(async () => {
      await result.current.handleFile(mockFile);
    });

    await act(async () => {
      await result.current.handleContinue();
      await flushPromises();
    });

    expect(result.current.errorMessage).toBe("Upload failed");
    expect(result.current.isUploading).toBe(false);
  });

  it("should reset state when deleting a file", async () => {
    const mockFile = new File(["data"], "test.png", { type: "image/png" });
    (Tesseract.recognize as jest.Mock).mockResolvedValue({
      data: { text: "Some text" },
    });

    const { result } = renderHook(() => useUploadCard());

    await act(async () => {
      await result.current.handleFile(mockFile);
    });

    expect(result.current.isFileSelected).toBe(true);

    act(() => {
      result.current.handleDeleteFile();
    });

    expect(result.current.isFileSelected).toBe(false);
    expect(result.current.ocrText).toBeNull();
    expect(result.current.errorMessage).toBeNull();
  });
});
