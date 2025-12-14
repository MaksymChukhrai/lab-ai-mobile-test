import { styled, Box, Typography, Button, alpha } from "@mui/material";

export const Wrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "80px 20px",
  background: `linear-gradient(359.35deg, ${alpha(theme.colors.PRIMARY_LIGHT, 0.3)} -1.53%, ${alpha(theme.colors.WHITE, 0.09)} 105.58%)`,
  minHeight: "50vh",

  [theme.breakpoints.down("md")]: {
    padding: "60px 25px 80px",
    minHeight: "30vh",
  },
}));

export const Title = styled(Typography)(({ theme }) => ({
  fontFamily: theme.fontFamily.DM_SANS,
  fontWeight: theme.fontWeight.BOLD,
  fontSize: theme.fontSizes.fontSize64,
  lineHeight: 1,
  textAlign: "center",
  color: theme.colors.PRIMARY_DARK,

  [theme.breakpoints.down("lg")]: {
    fontSize: theme.fontSizes.fontSize24,
  },
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

  [theme.breakpoints.down("md")]: {
    fontSize: theme.fontSizes.fontSize16,
    lineHeight: "normal",
  },
}));

export const CtaButton = styled(Button)(({ theme }) => ({
  padding: "15px 35px",
  borderRadius: "15px",
  color: theme.colors.WHITE,
  boxShadow: `0px 8px 15px ${alpha(theme.colors.PRIMARY_DARK, 0.4)}`,
  transition: "all 0.3s ease",

  [theme.breakpoints.down("md")]: {
    fontSize: theme.fontSizes.fontSize16,
    borderRadius: "20px",
    padding: "8px 27px",
    boxShadow: `0px 5px 20px 7px ${alpha(theme.colors.SHADOW_BLACK, 0.4)} `,
  },
}));
