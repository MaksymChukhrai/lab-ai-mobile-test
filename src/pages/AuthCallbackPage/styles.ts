import { styled, Box, Typography, alpha } from "@mui/material";

export const CallbackWrapper = styled(Box)(({ theme }) => ({
  background: `linear-gradient(100.41deg, ${alpha(theme.colors.WHITE, 0.09)} 0%, ${alpha(theme.colors.PRIMARY_LIGHT, 0.3)} 100%)`,
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
}));

export const CallbackMessage = styled(Typography)(({ theme }) => ({
  fontSize: "20px",
  fontWeight: theme.fontWeight.LIGHT,
  fontFamily: theme.fontFamily.POPPINS,
  color: theme.colors.PRIMARY_DARK,
  marginTop: "25px",
  textAlign: "center",
}));
