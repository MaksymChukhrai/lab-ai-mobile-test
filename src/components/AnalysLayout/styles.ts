import { alpha, styled, Typography } from "@mui/material";
import { Box } from "@mui/material";

export const GradientBox = styled(Box)(({ theme }) => ({
  width: "100%",
  background: `linear-gradient(100.17deg, ${alpha(theme.colors.WHITE, 0.09)} 0.19%, ${alpha(theme.colors.PRIMARY_LIGHT, 0.3)} 100%)`,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  paddingTop: "54px",
  paddingBottom: "79px",
}));

export const HeadingContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "50px",

  [theme.breakpoints.down("sm")]: {
    marginBottom: "15px",
    width: "60%",
  },
}));

export const Heading = styled(Typography)(({ theme }) => ({
  fontSize: theme.fontSizes.fontSize20,
  fontFamily: theme.fontFamily.POPPINS,
  fontWeight: theme.fontWeight.LIGHT,
  textAlign: "center",
  color: theme.colors.PRIMARY_DARK,

  [theme.breakpoints.down("sm")]: {
    fontSize: theme.fontSizes.fontSize15,
  },
}));
