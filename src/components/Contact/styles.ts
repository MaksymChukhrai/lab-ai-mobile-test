import { alpha, styled } from "@mui/material/styles";
import { Box, Button, Modal, TextField, Typography } from "@mui/material";

export const StyledModalOverlay = styled(Modal)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backdropFilter: "blur(6px)",
});

export const StyledFormCard = styled(Box)(({ theme }) => ({
  backgroundColor: theme.colors.WHITE,
  borderRadius: "20px",
  padding: "41px",
  paddingBottom: "27px",
  maxWidth: "880px",
  width: "100%",
  maxHeight: "90vh",
  overflowY: "auto",
  position: "relative",
}));

export const StyledTitle = styled(Typography)(({ theme }) => ({
  fontFamily: theme.fontFamily.DM_SANS,
  fontWeight: theme.fontWeight.BOLD,
  fontSize: theme.fontSizes.fontSize36,
  lineHeight: theme.lineHeights.lineHeight40,
  color: theme.colors.PRIMARY_DARK,
  textAlign: "center",
  marginBottom: "5px",
}));

export const StyledDescription = styled(Typography)(({ theme }) => ({
  fontFamily: theme.fontFamily.POPPINS,
  fontWeight: theme.fontWeight.LIGHT,
  fontSize: theme.fontSizes.fontSize20,
  lineHeight: theme.lineHeights.lineHeight25,
  color: theme.colors.PRIMARY_DARK,
  textAlign: "center",
  marginBottom: "32px",
}));

export const StyledEmailLink = styled("a")(({ theme }) => ({
  color: theme.colors.PRIMARY_LIGHT,
  textDecoration: "underline",
}));

export const StyledLabel = styled(Typography)(({ theme }) => ({
  fontFamily: theme.fontFamily.DM_SANS,
  fontWeight: theme.fontWeight.REGULAR,
  fontSize: theme.fontSizes.fontSize16,
  lineHeight: theme.lineHeights.lineHeight35,
  color: theme.colors.PRIMARY_DARK,
}));

export const StyledInput = styled(TextField)(({ theme }) => ({
  width: "344px",
  fontFamily: theme.fontFamily.DM_SANS,
  fontSize: theme.fontSizes.fontSize16,
  lineHeight: theme.lineHeights.lineHeight35,
  fontWeight: theme.fontWeight.REGULAR,
  color: theme.colors.PRIMARY_DARK,
  borderRadius: "15px",
  outline: "none",
  transition: "all 0.2s ease-in-out",
  boxSizing: "border-box",

  ".MuiInputBase-input": {
    padding: "5px 15px !important",
    height: "35px",
    fontFamily: theme.fontFamily.DM_SANS,
    fontSize: theme.fontSizes.fontSize16,
    lineHeight: theme.lineHeights.lineHeight35,
    fontWeight: theme.fontWeight.REGULAR,
    color: theme.colors.PRIMARY_DARK,
  },

  "& .MuiOutlinedInput-root": {
    borderRadius: "15px",
    "& fieldset": {
      borderColor: alpha(theme.colors.PRIMARY_DARK, 0.5),
      borderWidth: "1px",
      transition: "all 0.2s ease-in-out",
    },
    "&:hover:not(.Mui-focused):not(.Mui-error):not(.Mui-disabled) fieldset": {
      boxShadow: `0px 2px 4px ${alpha(theme.colors.SECONDARY_GRAY, 0.25)}`,
      borderColor: alpha(theme.colors.PRIMARY_DARK, 0.7),
    },
    "&.Mui-focused fieldset": {
      border: `1px solid ${theme.colors.PRIMARY_DARK}`,
      boxShadow: "none",
    },
    "&.Mui-focused input, & input:not(:placeholder-shown)": {
      color: theme.colors.PRIMARY_DARK,
      fontWeight: theme.fontWeight.MEDIUM,
    },
    "&.Mui-error fieldset": {
      borderColor: theme.colors.SECONDARY_RED,
      borderWidth: "1px",
      boxShadow: "none",
    },
    "&.Mui-error:hover fieldset": {
      borderColor: theme.colors.SECONDARY_RED,
      boxShadow: "none",
    },
    "&.Mui-error.Mui-focused fieldset": {
      borderColor: theme.colors.SECONDARY_RED,
      borderWidth: "1px",
    },
    "&.Mui-disabled": {
      backgroundColor: alpha(theme.colors.SECONDARY_GRAY, 0.1),
      "& fieldset": {
        borderColor: alpha(theme.colors.SECONDARY_GRAY, 0.3),
        boxShadow: "none",
      },
    },
    "&.Mui-disabled input": {
      WebkitTextFillColor: alpha(theme.colors.SECONDARY_GRAY, 0.6),
    },
  },
}));

export const StyledTextarea = styled(TextField)(({ theme }) => ({
  width: "100%",
  minHeight: "120px",
  transition: "all 0.2s ease-in-out",
  boxSizing: "border-box",

  ".MuiInputBase-input": {
    fontFamily: theme.fontFamily.DM_SANS,
    fontSize: theme.fontSizes.fontSize16,
    lineHeight: theme.lineHeights.lineHeight25,
    fontWeight: theme.fontWeight.REGULAR,
    color: theme.colors.PRIMARY_DARK,
  },

  "& .MuiOutlinedInput-root": {
    borderRadius: "15px",
    padding: "10px 15px",
    "& fieldset": {
      borderColor: alpha(theme.colors.PRIMARY_DARK, 0.5),
      borderWidth: "2px",
      transition: "all 0.2s ease-in-out",
    },
    "&:hover fieldset": {
      boxShadow: `0px 4px 4px ${alpha(theme.colors.PRIMARY_DARK, 0.25)}`,
      borderColor: alpha(theme.colors.PRIMARY_DARK, 0.7),
    },
    "&.Mui-focused fieldset": {
      border: `2px solid ${theme.colors.PRIMARY_DARK}`,
      boxShadow: "none",
      padding: "9px 14px",
    },
    "&.Mui-error fieldset": {
      borderColor: theme.colors.SECONDARY_RED,
      borderWidth: "2px",
      boxShadow: "none",
    },
    "&.Mui-error.Mui-focused fieldset": {
      borderColor: theme.colors.SECONDARY_RED,
      borderWidth: "2px",
    },
  },
}));

export const StyledInputWrapper = styled(Box)({
  marginBottom: "20px",
});

export const StyledButton = styled(Button)({
  width: "100%",
  maxWidth: "240px",
  minHeight: "44px",
  margin: "0 auto",
  display: "block",
});
