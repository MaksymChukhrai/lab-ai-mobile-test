import theme from "@/theme/theme";
import { styled, Box, Button, Typography, alpha } from "@mui/material";

export const PageWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  minHeight: "100vh",
  background: `linear-gradient(100.41deg, ${alpha(theme.colors.WHITE, 0.09)} 0%, ${alpha(theme.colors.PRIMARY_LIGHT, 0.3)} 100%)`,
  width: "100%",
}));

export const ErrorCode = styled(Typography)(({ theme }) => ({
  fontSize: theme.fontSizes.fontSize400,
  fontWeight: theme.fontWeight.REGULAR,
  fontFamily: theme.fontFamily.DM_SANS,
  color: theme.colors.PRIMARY_DARK,
  lineHeight: "100%",
}));

export const ErrorMessage = styled(Typography)(({ theme }) => ({
  fontSize: theme.fontSizes.fontSize20,
  fontWeight: theme.fontWeight.LIGHT,
  fontFamily: theme.fontFamily.POPPINS,
  color: theme.colors.PRIMARY_DARK,
  marginBottom: "25px",
  textAlign: "center",
}));

export const HomeButton = styled(Button)({
  padding: "12px 40px",
  fontSize: theme.fontSizes.fontSize18,
});

export const MainContent = styled(Box)({
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});
