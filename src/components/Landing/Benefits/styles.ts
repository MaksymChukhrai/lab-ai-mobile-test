import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

export const BenefitsContainer = styled(Box)(({ theme }) => ({
  margin: "2% auto",
  gap: "3%",
  display: "flex",
  maxWidth: "1600px",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "center",
  height: "450px",

  [theme.breakpoints.down("sm")]: {
    height: "890px",
  },
}));

export const BenefitsText = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  [theme.breakpoints.down("sm")]: {
    marginTop: "50px",
    marginBottom: "20px",
  },
}));

export const BenefitsHeading = styled(Typography)(({ theme }) => ({
  fontFamily: theme.fontFamily.DM_SANS,
  fontWeight: theme.fontWeight.BOLD,
  fontSize: theme.fontSizes.fontSize48,
  color: theme.colors.PRIMARY_DARK,
  textAlign: "center",
  marginBottom: "20px",

  [theme.breakpoints.down("lg")]: {
    fontSize: theme.fontSizes.fontSize36,
  },

  [theme.breakpoints.down("md")]: {
    fontSize: theme.fontSizes.fontSize32,
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: theme.fontSizes.fontSize24,
    marginBottom: "10px",
  },
}));

export const BenefitsDescription = styled(Typography)(({ theme }) => ({
  fontFamily: theme.fontFamily.POPPINS,
  fontWeight: theme.fontWeight.LIGHT,
  fontSize: theme.fontSizes.fontSize24,
  color: theme.colors.PRIMARY_DARK,
  textAlign: "center",
  letterSpacing: 0,

  [theme.breakpoints.down("lg")]: {
    fontSize: theme.fontSizes.fontSize20,
  },

  [theme.breakpoints.down("md")]: {
    fontSize: theme.fontSizes.fontSize18,
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: theme.fontSizes.fontSize16,
    width: "90%",
  },
}));

export const CardsBox = styled(Box)(({ theme }) => ({
  width: "90%",
  display: "flex",
  justifyContent: "space-between",

  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export const Card = styled(Box)(({ theme }) => ({
  width: "30%",
  height: "230px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "center",

  "& img": {
    width: "59px",
    height: "59px",
  },

  [theme.breakpoints.down("sm")]: {
    width: "95%",
    "& img": {
      width: "41px",
      height: "41px",
    },
  },
}));

export const CardTitle = styled(Typography)(({ theme }) => ({
  fontFamily: theme.fontFamily.DM_SANS,
  fontWeight: theme.fontWeight.SEMIBOLD,
  fontSize: theme.fontSizes.fontSize22,
  color: theme.colors.PRIMARY_DARK,

  [theme.breakpoints.down("lg")]: {
    fontSize: theme.fontSizes.fontSize18,
  },

  [theme.breakpoints.down("md")]: {
    fontSize: theme.fontSizes.fontSize14,
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: theme.fontSizes.fontSize20,
  },
}));

export const CardDescription = styled(Typography)(({ theme }) => ({
  width: "85%",
  fontFamily: theme.fontFamily.POPPINS,
  fontWeight: theme.fontWeight.LIGHT,
  fontSize: theme.fontSizes.fontSize16,
  lineHeight: 1.8,
  color: theme.colors.PRIMARY_DARK,
  textAlign: "center",
  letterSpacing: 0,

  [theme.breakpoints.down("lg")]: {
    fontSize: theme.fontSizes.fontSize14,
  },

  [theme.breakpoints.down("md")]: {
    fontSize: theme.fontSizes.fontSize12,
    lineHeight: 1.5,
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: theme.fontSizes.fontSize15,
  },
}));
