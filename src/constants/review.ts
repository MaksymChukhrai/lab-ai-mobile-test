import { t } from "i18next";

export const GENDER_OPTIONS = [
  { value: "male", label: t("review.male") },
  { value: "female", label: t("review.female") },
] as const;

export const AVAILABLE_MARKERS = [
  "Glucose",
  "Total Cholesterol",
  "HDL Cholesterol",
  "LDL Cholesterol",
  "Triglycerides",
  "Hemoglobin",
  "White Blood Cells",
  "Red Blood Cells",
  "Platelets",
  "TSH",
  "T3",
  "T4",
  "Creatinine",
  "Urea",
  "ALT",
  "AST",
  "GGT",
  "Bilirubin",
  "Albumin",
  "Protein",
  "Calcium",
  "Magnesium",
  "Potassium",
  "Sodium",
  "Iron",
  "Ferritin",
  "Vitamin D",
  "Vitamin B12",
  "Folate",
] as const;
