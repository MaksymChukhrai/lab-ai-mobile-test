import { styled, Box, Typography, Select, alpha } from "@mui/material";

export const DatePickerWrapper = styled(Box)({
  position: "relative",
  width: "100%",
});

export const StyledInput = styled("input")(({ theme }) => ({
  width: "100%",
  height: "45px",
  padding: "0 15px",
  fontFamily: theme.fontFamily.DM_SANS,
  fontSize: theme.fontSizes.fontSize20,
  color: theme.colors.PRIMARY_DARK,
  border: `1px solid ${theme.colors.PRIMARY_DARK}`,
  borderRadius: "10px",
  boxShadow: `0px 4px 4px 0px ${alpha(theme.colors.PRIMARY_DARK, 0.25)}`,
  outline: "none",
  transition: "all 0.5s ease-in-out",
  boxSizing: "border-box",
  backgroundColor: theme.colors.WHITE,
  cursor: "pointer",

  "&::placeholder": {
    color: alpha(theme.colors.PRIMARY_DARK, 0.3),
  },

  "&:hover": {
    boxShadow: `0px 4px 4px 0px ${alpha(theme.colors.PRIMARY_DARK, 0.25)} inset`,
  },
}));

export const CalendarDropdown = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "calc(100% + 8px)",
  left: 0,
  zIndex: 1000,
  backgroundColor: theme.colors.WHITE,
  borderRadius: "20px",
  boxShadow: `0px 4px 12px 0px ${alpha(theme.colors.PRIMARY_DARK, 0.7)}`,
  padding: "16px",
  minWidth: "320px",
}));

export const MonthYearSelectors = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  justifyContent: "flex-start",
  marginBottom: "12px",
});

export const StyledSelect = styled(Select)(({ theme }) => ({
  fontFamily: theme.fontFamily.DM_SANS,
  fontSize: theme.fontSizes.fontSize20,
  fontWeight: theme.fontWeight.BOLD,
  color: theme.colors.PRIMARY_DARK,
  backgroundColor: theme.colors.WHITE,
  border: "none",

  "& .MuiSelect-select": {
    padding: "0",
  },
}));

export const DaysGrid = styled(Box)({
  display: "grid",
  gridTemplateColumns: "repeat(7, 1fr)",
  gap: "4px",
});

export const DayHeader = styled(Typography)(({ theme }) => ({
  fontFamily: theme.fontFamily.DM_SANS,
  fontWeight: theme.fontWeight.MEDIUM,
  fontSize: theme.fontSizes.fontSize12,
  color: alpha(theme.colors.PRIMARY_LIGHT, 0.7),
  textAlign: "center",
  margin: "12px 0",
}));

export const DayCell = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isSelected",
})<{ isSelected: boolean }>(({ theme, isSelected }) => ({
  fontFamily: theme.fontFamily.DM_SANS,
  fontSize: theme.fontSizes.fontSize16,
  fontWeight: theme.fontWeight.REGULAR,
  textAlign: "center",
  padding: "6px 6px",
  cursor: "pointer",
  borderRadius: "50%",
  border: "1px solid transparent",
  color: theme.colors.PRIMARY_DARK,
  backgroundColor: isSelected ? theme.colors.PRIMARY_DARK : "transparent",
  ...(isSelected && {
    color: theme.colors.WHITE,
  }),
  "&:hover": {
    border: `1px solid ${theme.colors.PRIMARY_DARK}`,
  },
}));
