import { renderHook, act } from "@testing-library/react";
import { useResultPage } from "hooks/useResultPage";
import { STEP_PATHS } from "constants/steps";

const mockNavigate = jest.fn();
const mockDispatch = jest.fn();

jest.mock("react-router-dom", () => ({
  useNavigate: () => mockNavigate,
}));

jest.mock("store/hooks", () => ({
  useAppDispatch: () => mockDispatch,
  useAppSelector: <T>(selector: () => T) => selector(),
}));

jest.mock("store/slices/analysisResultSlice", () => ({
  clearAnalysisResult: jest.fn(() => ({ type: "analysis/clear" })),
  selectAnalysisResult: jest.fn(() => ({ someData: "test" })),
}));

jest.mock("store/slices/uploadFileSlice", () => ({
  clearUploadedFile: jest.fn(() => ({ type: "upload/clear" })),
}));

jest.mock("store/slices/bloodMarkersSlice", () => ({
  clearBloodMarkersData: jest.fn(() => ({ type: "markers/clear" })),
}));

jest.mock("store/slices/optionSlice", () => ({
  clearSelectedOptions: jest.fn(() => ({ type: "options/clear" })),
}));

const mockSave = jest.fn();
const mockFrom = jest.fn(() => ({ save: mockSave }));
const mockSet = jest.fn(() => ({ from: mockFrom }));
const mockHtml2PdfInstance = jest.fn(() => ({ set: mockSet }));

jest.mock("html2pdf.js", () => ({
  __esModule: true,
  default: mockHtml2PdfInstance,
}));

describe("useResultPage", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    window.print = jest.fn();
  });

  test("should return analysis result from store", () => {
    const { result } = renderHook(() => useResultPage());
    expect(result.current.analysisResult).toEqual({ someData: "test" });
  });

  test("handleBack should navigate to review page", () => {
    const { result } = renderHook(() => useResultPage());

    act(() => {
      result.current.handleBack();
    });

    expect(mockNavigate).toHaveBeenCalledWith(STEP_PATHS.review);
  });

  test("handlePrintReport should call window.print", () => {
    const { result } = renderHook(() => useResultPage());

    act(() => {
      result.current.handlePrintReport();
    });

    expect(window.print).toHaveBeenCalled();
  });

  test("handleStartNewAnalysis should dispatch clear actions and navigate to upload", () => {
    const { result } = renderHook(() => useResultPage());

    act(() => {
      result.current.handleStartNewAnalysis();
    });

    expect(mockDispatch).toHaveBeenCalledTimes(4);
    expect(mockDispatch).toHaveBeenCalledWith({ type: "upload/clear" });
    expect(mockDispatch).toHaveBeenCalledWith({ type: "markers/clear" });
    expect(mockDispatch).toHaveBeenCalledWith({ type: "options/clear" });
    expect(mockDispatch).toHaveBeenCalledWith({ type: "analysis/clear" });

    expect(mockNavigate).toHaveBeenCalledWith(STEP_PATHS.upload);
  });

  describe("handleDownloadPDF", () => {
    test("should generate PDF when element exists", async () => {
      const mockElement = document.createElement("div");
      Object.defineProperty(mockElement, "scrollWidth", {
        configurable: true,
        value: 800,
      });
      Object.defineProperty(mockElement, "scrollHeight", {
        configurable: true,
        value: 1200,
      });

      jest.spyOn(document, "getElementById").mockReturnValue(mockElement);

      const { result } = renderHook(() => useResultPage());

      await act(async () => {
        await result.current.handleDownloadPDF();
      });

      expect(document.getElementById).toHaveBeenCalledWith("result-content");
      expect(mockHtml2PdfInstance).toHaveBeenCalled();

      expect(mockSet).toHaveBeenCalledWith(
        expect.objectContaining({
          filename: expect.stringMatching(/blood-test-analysis-.*\.pdf/),
          jsPDF: expect.objectContaining({
            unit: "mm",
            format: expect.any(Array),
          }),
        }),
      );
      expect(mockFrom).toHaveBeenCalledWith(mockElement);
      expect(mockSave).toHaveBeenCalled();
    });

    test("should do nothing if element does not exist", async () => {
      jest.spyOn(document, "getElementById").mockReturnValue(null);

      const { result } = renderHook(() => useResultPage());

      await act(async () => {
        await result.current.handleDownloadPDF();
      });

      expect(mockHtml2PdfInstance).not.toHaveBeenCalled();
    });

    test("should handle errors gracefully", async () => {
      const mockElement = document.createElement("div");
      jest.spyOn(document, "getElementById").mockReturnValue(mockElement);

      const consoleSpy = jest
        .spyOn(console, "error")
        .mockImplementation(() => {});

      mockHtml2PdfInstance.mockImplementationOnce(() => {
        throw new Error("PDF Gen Error");
      });

      const { result } = renderHook(() => useResultPage());

      await act(async () => {
        await result.current.handleDownloadPDF();
      });

      expect(consoleSpy).toHaveBeenCalledWith(
        "Failed to generate PDF:",
        expect.any(Error),
      );

      consoleSpy.mockRestore();
    });
  });
});
