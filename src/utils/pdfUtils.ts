/**
 * Calculates the height of content for PDF generation.
 * To find out how much height the content will take up in the PDF, we must simulate the rendering conditions.
 */

export const calculateDynamicPdfHeight = (elementId: string): number => {
  const originalElement = document.getElementById(elementId);
  if (!originalElement) return 842;

  const clone = originalElement.cloneNode(true) as HTMLElement;

  clone.style.width = "1980px";
  clone.style.position = "absolute";
  clone.style.top = "-9999px";
  clone.style.left = "-9999px";
  clone.style.visibility = "hidden";
  clone.style.height = "auto";
  clone.style.maxHeight = "none";
  clone.style.overflow = "visible";

  document.body.appendChild(clone);
  const contentHeightPx = clone.scrollHeight;
  document.body.removeChild(clone);

  const calculatedPoints = contentHeightPx * 0.57;

  return Math.max(842, calculatedPoints);
};
