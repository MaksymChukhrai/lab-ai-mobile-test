import { styled, Box, Typography, Button, alpha } from "@mui/material";

export const Wrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "80px 20px",
  background: `linear-gradient(359.35deg, ${alpha(theme.colors.PRIMARY_LIGHT, 0.3)} -1.53%, ${alpha(theme.colors.WHITE, 0.09)} 105.58%)`,
  minHeight: "50vh",
}));

export const Title = styled(Typography)(({ theme }) => ({
  fontFamily: theme.fontFamily.DM_SANS,
  fontWeight: theme.fontWeight.BOLD,
  fontSize: theme.fontSizes.fontSize64,
  lineHeight: theme.lineHeights.lineHeight70,
  textAlign: "center",
  color: theme.colors.PRIMARY_DARK,
}));

export const Subtitle = styled(Typography)(({ theme }) => ({
  maxWidth: "720px",
  marginTop: "20px",
  marginBottom: "40px",
  fontFamily: theme.fontFamily.POPPINS,
  fontWeight: theme.fontWeight.LIGHT,
  fontSize: theme.fontSizes.fontSize24,
  lineHeight: theme.lineHeights.lineHeight35,
  textAlign: "center",
  color: theme.colors.PRIMARY_DARK,
}));

export const CtaButton = styled(Button)(({ theme }) => ({
  padding: "15px 35px",
  borderRadius: "15px",
  color: theme.colors.WHITE,
  boxShadow: `0px 8px 15px ${alpha(theme.colors.PRIMARY_DARK, 0.4)}`,
  transition: "all 0.3s ease",
}));
