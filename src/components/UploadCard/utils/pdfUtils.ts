import * as pdfjsLib from "pdfjs-dist";
import type { TextContent, TextItem } from "pdfjs-dist/types/src/display/api";
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.min.mjs?url";
import Tesseract from "tesseract.js";
import { t } from "i18next";
import {
  OCR_LANGUAGES,
  OCR_STATUS_RECOGNIZING,
  MIN_TEXT_LENGTH,
  OCR_SCALE_FACTOR,
} from "@/constants/fileUpload";

(pdfjsLib.GlobalWorkerOptions as unknown as { workerSrc: string }).workerSrc =
  pdfjsWorker;

export async function extractTextFromPDF(
  file: File,

  onProgress?: (percent: number) => void,
): Promise<string> {
  try {
    const arrayBuffer = await file.arrayBuffer();
    const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;

    let fullText = "";

    for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
      const page = await pdf.getPage(pageNum);
      const content: TextContent = await page.getTextContent();

      const pageText = content.items
        .filter((item): item is TextItem => "str" in item)
        .map((item) => item.str)
        .join(" ");

      fullText += pageText + "\n";
    }

    if (!fullText.trim() || fullText.trim().length < MIN_TEXT_LENGTH) {
      let combinedOCRText = "";

      for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
        try {
          const page = await pdf.getPage(pageNum);
          const viewport = page.getViewport({ scale: OCR_SCALE_FACTOR });
          const canvas = document.createElement("canvas");
          const context = canvas.getContext("2d");

          if (!context) throw new Error(t("error.canvas"));

          canvas.width = viewport.width;
          canvas.height = viewport.height;

          const renderParams = {
            canvasContext: context,
            viewport: viewport,
            canvas: canvas,
          };

          await page.render(renderParams).promise;

          const imageData = canvas.toDataURL("image/png");

          const result = await Tesseract.recognize(imageData, OCR_LANGUAGES, {
            logger: (m) => {
              if (
                m.status === OCR_STATUS_RECOGNIZING &&
                m.progress &&
                onProgress
              ) {
                const totalProgress =
                  ((pageNum - 1) / pdf.numPages) * 100 +
                  (m.progress * 100) / pdf.numPages;

                onProgress(Math.min(100, Math.round(totalProgress)));
              }
            },
          });

          combinedOCRText += result.data.text + "\n";
        } catch {
          continue;
        } finally {
          const canvas = document.createElement("canvas");
          canvas.width = 0;
          canvas.height = 0;
        }
      }

      onProgress?.(100);

      return combinedOCRText.trim();
    }

    return fullText.trim();
  } catch {
    throw new Error(t("error.pdf"));
  }
}
