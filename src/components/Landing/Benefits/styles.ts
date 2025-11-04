import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

export const BenefitsContainer = styled(Box)({
  margin: "2% 0",
  gap: "3%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "center",
  height: "500px",
});

export const BenefitsText = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

export const BenefitsHeading = styled(Typography)(({ theme }) => ({
  fontFamily: theme.fontFamily.DM_SANS,
  fontWeight: theme.fontWeight.BOLD,
  fontSize: theme.fontSizes.fontSize48,
  lineHeight: theme.lineHeights.lineHeight70,
  color: theme.colors.PRIMARY_DARK,
  textAlign: "center",
  letterSpacing: 0,
}));

export const BenefitsDescription = styled(Typography)(({ theme }) => ({
  fontFamily: theme.fontFamily.POPPINS,
  fontWeight: theme.fontWeight.LIGHT,
  fontSize: theme.fontSizes.fontSize24,
  lineHeight: theme.lineHeights.lineHeight35,
  color: theme.colors.PRIMARY_DARK,
  textAlign: "center",
  letterSpacing: 0,
}));

export const CardsBox = styled(Box)({
  width: "90%",
  display: "flex",
  justifyContent: "space-between",
});

export const Card = styled(Box)({
  width: "30%",
  height: "230px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
});

export const CardTitle = styled(Typography)(({ theme }) => ({
  fontFamily: theme.fontFamily.DM_SANS,
  fontWeight: theme.fontWeight.SEMIBOLD,
  fontSize: theme.fontSizes.fontSize22,
  lineHeight: theme.lineHeights.lineHeight56,
  color: theme.colors.PRIMARY_DARK,
}));

export const CardDescription = styled(Typography)(({ theme }) => ({
  width: "85%",
  fontFamily: theme.fontFamily.POPPINS,
  fontWeight: theme.fontWeight.LIGHT,
  fontSize: theme.fontSizes.fontSize16,
  lineHeight: theme.lineHeights.lineHeight25,
  color: theme.colors.PRIMARY_DARK,
  textAlign: "center",
  letterSpacing: 0,
}));
