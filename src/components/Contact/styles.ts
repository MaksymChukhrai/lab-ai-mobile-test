import { alpha, styled } from "@mui/material/styles";
import { Box, Button, Modal, TextField, Typography } from "@mui/material";

export const StyledModalOverlay = styled(Modal)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backdropFilter: "blur(6px)",
  padding: "16px",
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

  [theme.breakpoints.down("md")]: {
    background: `linear-gradient(359.35deg, ${alpha(theme.colors.PRIMARY_LIGHT, 0.3)} -1.53%, ${alpha(theme.colors.WHITE, 0.09)} 105.58%)`,
    backgroundColor: theme.colors.WHITE,
    padding: "24px 20px",
    maxWidth: "100%",
  },
}));

export const StyledTitle = styled(Typography)(({ theme }) => ({
  fontFamily: theme.fontFamily.DM_SANS,
  fontWeight: theme.fontWeight.BOLD,
  fontSize: theme.fontSizes.fontSize36,
  color: theme.colors.PRIMARY_DARK,
  textAlign: "center",
  marginBottom: "5px",

  [theme.breakpoints.down("md")]: {
    fontSize: theme.fontSizes.fontSize24,
    textAlign: "left",
    marginBottom: "12px",
    lineHeight: "normal",
  },
}));

export const StyledDescription = styled(Typography)(({ theme }) => ({
  fontFamily: theme.fontFamily.POPPINS,
  fontWeight: theme.fontWeight.LIGHT,
  fontSize: theme.fontSizes.fontSize20,
  color: theme.colors.PRIMARY_DARK,
  textAlign: "center",
  marginBottom: "32px",

  [theme.breakpoints.down("md")]: {
    fontSize: theme.fontSizes.fontSize16,
    textAlign: "left",
    marginBottom: "24px",
  },
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

  [theme.breakpoints.down("md")]: {
    fontSize: theme.fontSizes.fontSize13,
  },
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

  [theme.breakpoints.down("md")]: {
    width: "100%",
  },

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
    border: `1px solid ${alpha(theme.colors.PRIMARY_DARK, 0.5)}`,

    "&:hover:not(.Mui-focused):not(.Mui-error):not(.Mui-disabled)": {
      boxShadow: `0px 4px 4px 0px ${alpha(theme.colors.PRIMARY_DARK, 0.5)}`,
      borderColor: alpha(theme.colors.PRIMARY_DARK, 0.7),
    },
    "&.Mui-focused": {
      border: `1px solid ${theme.colors.PRIMARY_DARK}`,
      boxShadow: "none",
    },
    "&.Mui-focused input, & input:not(:placeholder-shown)": {
      color: theme.colors.PRIMARY_DARK,
      fontWeight: theme.fontWeight.MEDIUM,
    },
    "&.Mui-error ": {
      borderColor: theme.colors.SECONDARY_RED,
      borderWidth: "1px",
      boxShadow: "none",
    },
  },
}));

export const StyledTextarea = styled(TextField)(({ theme }) => ({
  width: "100%",
  minHeight: "120px",
  transition: "all 0.1s ease-in-out",

  ".MuiInputBase-input": {
    fontFamily: theme.fontFamily.DM_SANS,
    fontSize: theme.fontSizes.fontSize16,
    fontWeight: theme.fontWeight.REGULAR,
    color: theme.colors.PRIMARY_DARK,
  },

  "& .MuiOutlinedInput-root": {
    borderRadius: "15px",
    padding: "10px 15px",
    border: `2px solid ${alpha(theme.colors.PRIMARY_DARK, 0.5)}`,

    [theme.breakpoints.down("md")]: {
      border: `1px solid ${alpha(theme.colors.PRIMARY_DARK, 0.5)}`,
    },

    "&:hover fieldset": {
      boxShadow: `0px 4px 4px ${alpha(theme.colors.PRIMARY_DARK, 0.25)}`,
      borderColor: alpha(theme.colors.PRIMARY_DARK, 0.7),
    },
    "&.Mui-focused": {
      border: `2px solid ${theme.colors.PRIMARY_DARK}`,
      [theme.breakpoints.down("md")]: {
        border: `1px solid ${theme.colors.PRIMARY_DARK}`,
      },
      boxShadow: "none",
    },
    "&.Mui-error": {
      borderColor: theme.colors.SECONDARY_RED,
      boxShadow: "none",
    },
    "&.Mui-error.Mui-focused": {
      borderColor: theme.colors.SECONDARY_RED,
    },
  },
}));

export const StyledInputWrapper = styled(Box)({
  marginBottom: "20px",
});

export const StyledButton = styled(Button)(({ theme }) => ({
  width: "100%",
  maxWidth: "240px",
  minHeight: "44px",
  margin: "0 auto",
  display: "block",

  [theme.breakpoints.down("md")]: {
    maxWidth: "100%",
    marginTop: "20px",
  },
}));
