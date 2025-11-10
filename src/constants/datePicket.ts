import { t } from "i18next";

export const WEEKS = [
  t("weeks.monday"),
  t("weeks.tuesday"),
  t("weeks.wednesday"),
  t("weeks.thursday"),
  t("weeks.friday"),
  t("weeks.saturday"),
  t("weeks.sunday"),
];

export const MONTHS = [
  t("months.january"),
  t("months.february"),
  t("months.march"),
  t("months.april"),
  t("months.may"),
  t("months.june"),
  t("months.july"),
  t("months.august"),
  t("months.september"),
  t("months.october"),
  t("months.november"),
  t("months.december"),
];

export const YEARS = Array.from(
  { length: 100 },
  (_, i) => new Date().getFullYear() - i,
);
