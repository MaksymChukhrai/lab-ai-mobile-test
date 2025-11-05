import {
  styled,
  Box,
  Button,
  TextField,
  Link,
  Paper,
  alpha,
  Typography,
  Divider,
  Alert,
} from "@mui/material";

export const PageWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  maxHeight: "100vh",
  height: "100vh",
  paddingTop: "54px",
  paddingBottom: "79px",
  background: `linear-gradient(100.41deg, ${alpha(theme.colors.WHITE, 0.09)} 0%, ${alpha(theme.colors.PRIMARY_LIGHT, 0.3)} 100%)`,
}));

export const Subtitle = styled(Typography)(({ theme }) => ({
  fontFamily: theme.fontFamily.POPPINS,
  fontWeight: theme.fontWeight.LIGHT,
  lineHeight: theme.lineHeights.lineHeight35,
  fontSize: theme.fontSizes.fontSize20,
  color: theme.colors.PRIMARY_DARK,
  textAlign: "center",
}));

export const DividerPage = styled(Divider)(({ theme }) => ({
  marginTop: "20px",
  marginBottom: "40px",
  borderColor: theme.colors.PRIMARY_DARK,
  opacity: 0.1,
  width: "650px",
}));

export const FormContainer = styled(Paper)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "45px",
  borderRadius: "15px",
  maxWidth: "929px",
  width: "100%",
  boxShadow: `0px 4px 4px 0px ${alpha(theme.colors.PRIMARY_DARK, 0.25)}`,
  backgroundColor: `${alpha(theme.colors.WHITE, 0.8)}`,
}));

export const FormTitle = styled(Typography)(({ theme }) => ({
  fontFamily: theme.fontFamily.DM_SANS,
  fontWeight: theme.fontWeight.BOLD,
  lineHeight: theme.lineHeights.lineHeight70,
  fontSize: theme.fontSizes.fontSize32,
  color: theme.colors.PRIMARY_DARK,
  textAlign: "center",
}));

export const FormSubtitle = styled(Typography)(({ theme }) => ({
  fontFamily: theme.fontFamily.POPPINS,
  fontWeight: theme.fontWeight.LIGHT,
  lineHeight: theme.lineHeights.lineHeight35,
  fontSize: theme.fontSizes.fontSize16,
  color: theme.colors.PRIMARY_DARK,
  textAlign: "center",
}));

export const SocialButtonContainer = styled(Box)({
  width: "344px",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  marginTop: "20px",
  gap: "15px",
});

export const SocialButton = styled(Button)(({ theme }) => ({
  width: "100%",
  height: "45px",
  border: `1px solid ${theme.colors.PRIMARY_DARK}`,
  borderRadius: "15px",
  color: theme.colors.PRIMARY_DARK,
  justifyContent: "center",
  backgroundColor: "transparent",
  boxShadow: "none",
  letterSpacing: "1%",
  fontSize: "16px",
  lineHeight: "35px",
  textAlign: "center",
  fontWeight: theme.fontWeight.REGULAR,
  fontFamily: theme.fontFamily.DM_SANS,
  padding: "0",

  "&:hover": {
    boxShadow: `0px 3px 5px 0px ${alpha(theme.colors.PRIMARY_DARK, 0.4)}`,
    backgroundColor: "transparent",
  },
  "&:active": {
    border: "1px solid transparent",
    backgroundColor: theme.colors.PRIMARY_DARK,
    boxShadow: `0px 4px 4px 0px ${alpha(theme.colors.PRIMARY_DARK, 0.4)}`,
    color: theme.colors.WHITE,
  },
  "&:focus-visible": {
    border: `2px solid ${theme.colors.PRIMARY_LIGHT}`,
  },
  "&.Mui-disabled": {
    backgroundColor: alpha(theme.colors.SECONDARY_GRAY, 0.1),
    border: `1px solid ${theme.palette.divider}`,
    boxShadow: "none",
  },
}));

export const InputContainer = styled(Box)({
  width: "344px",
  marginBottom: "60px",
});

export const EmailInput = styled(TextField)(({ theme }) => ({
  width: "100%",
  padding: "0 ",
  marginBottom: "20px",
  input: {
    "&::placeholder": {
      color: alpha(theme.colors.PRIMARY_DARK, 0.9),
      fontFamily: theme.fontFamily.DM_SANS,
      letterSpacing: "1%",
      fontSize: "16px",
      lineHeight: "35px",
      textAlign: "start",
      fontWeight: theme.fontWeight.REGULAR,
      margin: "0",
    },
  },

  ".css-16wblaj-MuiInputBase-input-MuiOutlinedInput-input": {
    padding: "5px 14px !important",
    height: "35px",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: alpha(theme.colors.PRIMARY_DARK, 0.5),
    },
    "&:hover fieldset": {
      boxShadow: `0px 2px 4px ${alpha(theme.colors.SECONDARY_GRAY, 0.1)}`,
      borderColor: theme.colors.SECONDARY_GRAY,
    },
    "&.Mui-focused fieldset": {
      border: `2px solid ${theme.colors.PRIMARY_DARK}`,
    },
    "&.Mui-error fieldset": {
      border: `2px solid ${theme.palette.error.main}`,
    },
    "&.Mui-disabled fieldset": {
      backgroundColor: alpha(theme.colors.SECONDARY_GRAY, 0.1),
      boxShadow: "none",
    },
  },
}));

export const FormAlert = styled(Alert)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontFamily: theme.fontFamily.DM_SANS,
  lineHeight: theme.lineHeights.lineHeight70,
  textAlign: "center",
  color: theme.colors.PRIMARY_DARK,
  fontWeight: theme.fontWeight.MEDIUM,
  fontSize: theme.fontSizes.fontSize20,
  letterSpacing: 0,
}));

export const DividerForm = styled(Box)(({ theme }) => ({
  width: "344px",
  display: "flex",
  alignItems: "center",
  textAlign: "center",
  color: alpha(theme.colors.PRIMARY_DARK, 0.3),
  margin: "35px 0 0px",
  fontWeight: theme.fontWeight.LIGHT,
  letterSpacing: "1%",
  fontSize: "16px",
  lineHeight: "35px",
  fontFamily: theme.fontFamily.POPPINS,

  "&::before, &::after": {
    content: '""',
    flex: 1,
    borderBottom: `1px solid ${alpha(theme.colors.PRIMARY_DARK, 0.3)}`,
  },
  "&:not(:empty)::before": {
    marginRight: "12px",
  },
  "&:not(:empty)::after": {
    marginLeft: "12px",
  },
}));

export const LabelMail = styled(Typography)(({ theme }) => ({
  fontFamily: theme.fontFamily.DM_SANS,
  fontSize: "14px",
  lineHeight: theme.lineHeights.lineHeight35,
  fontWeight: theme.fontWeight.REGULAR,
  textDecoration: "none",
  color: theme.colors.PRIMARY_DARK,
}));

export const LegalLink = styled(Link)(({ theme }) => ({
  textDecoration: "underline",
  color: theme.colors.PRIMARY_LIGHT,
  "&:hover": {
    textShadow: `0px 5px 4px ${alpha(theme.colors.PRIMARY_DARK, 0.34)}`,
  },
  "&:active": {
    color: theme.colors.PRIMARY_DARK,
  },
  "&:focus-visible": {
    outline: `2px solid ${theme.colors.PRIMARY_LIGHT}`,
  },
  "&.Mui-disabled": {
    color: theme.palette.text.disabled,
    textShadow: "none",
  },
}));
