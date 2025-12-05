import { t } from "i18next";

const ACCEPTED_FILE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "application/pdf",
];

const MAX_FILE_SIZE = 10 * 1024 * 1024;

/**
 * Validate file type (before compression)
 * @param file - File to validate
 * @returns Error message or null if valid
 */
export const validateFileType = (file: File): string | null => {
  if (!ACCEPTED_FILE_TYPES.includes(file.type)) {
    return t("error.invalidFileType");
  }

  return null;
};

/**
 * Validate file size (after compression)
 * @param file - File to validate
 * @returns Error message or null if valid
 */
export const validateFileSize = (file: File): string | null => {
  if (file.size > MAX_FILE_SIZE) {
    return t("error.fileTooLarge");
  }

  return null;
};

/**
 * Validate both file type and size
 * @param file - File to validate
 * @returns Error message or null if valid
 * @deprecated Use validateFileType and validateFileSize separately
 */
export const validateFile = (file: File): string | null => {
  const typeError = validateFileType(file);
  if (typeError) return typeError;

  const sizeError = validateFileSize(file);
  if (sizeError) return sizeError;

  return null;
};
