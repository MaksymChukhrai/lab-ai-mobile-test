import { styled, alpha } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

export const GradientBox = styled(Box)({
  width: "100%",
  height: "1280px",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  background: `linear-gradient(317.68deg, rgba(255, 255, 255, 0.09) 44.63%, rgba(105, 151, 237, 0.3) 102.47%)`,
});

export const BgImage = styled("img")(({ theme }) => ({
  color: alpha(theme.colors.PRIMARY_DARK, 0.5),
  marginTop: "65px",
}));

export const AboutTitleBox = styled(Box)({
  width: "56%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  paddingTop: "30px",
});

export const AboutTitle = styled(Typography)(({ theme }) => ({
  fontFamily: theme.fontFamily.DM_SANS,
  fontWeight: theme.fontWeight.BOLD,
  fontSize: theme.fontSizes.fontSize48,
  lineHeight: theme.lineHeights.lineHeight56,
  marginTop: "0.67em",
  marginBottom: "0.27em",
  letterSpacing: "2%",
  verticalAlign: "middle",
  color: theme.colors.PRIMARY_DARK,
}));

export const AboutDescription = styled(Typography)(({ theme }) => ({
  fontFamily: theme.fontFamily.POPPINS,
  fontWeight: theme.fontWeight.LIGHT,
  fontSize: theme.fontSizes.fontSize24,
  lineHeight: theme.lineHeights.lineHeight35,
  letterSpacing: 0,
  verticalAlign: "middle",
  color: theme.colors.PRIMARY_DARK,
  textAlign: "center",
}));

export const Container = styled(Box)(({ theme }) => ({
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "447px",
  height: "170px",
  borderRadius: "20px",
  gap: "10px",
  background: alpha(theme.colors.PRIMARY_LIGHT, 0.15),
  border: `1px solid ${alpha(theme.colors.PRIMARY_LIGHT, 0.45)}`,
  boxShadow: `0px 5px 4px 0px ${alpha(theme.colors.PRIMARY_DARK, 0.25)}`,
}));

export const Container1 = styled(Container)({
  top: "50%",
  left: "50%",
  transform: "translate(-135%, -180%)",
});

export const Container2 = styled(Container)({
  top: "50%",
  left: "50%",
  transform: "translate(30%, -180%)",
});

export const Container3 = styled(Container)({
  top: "50%",
  left: "50%",
  transform: "translate(-150%, -20%)",
});

export const Container4 = styled(Container)({
  top: "50%",
  left: "50%",
  transform: "translate(45%, -30%)",
});

export const ContainerName = styled(Typography)(({ theme }) => ({
  fontFamily: theme.fontFamily.DM_SANS,
  fontWeight: theme.fontWeight.SEMIBOLD,
  fontSize: theme.fontSizes.fontSize22,
  lineHeight: theme.lineHeights.lineHeight30,
  letterSpacing: 0,
  verticalAlign: "middle",
  color: theme.colors.PRIMARY_DARK,
}));

export const ContainerIcon = styled("img")({
  width: "22px",
  height: "22px",
});

export const ContainerTitle = styled(Box)({
  width: "90%",
  display: "flex",
  justifyContent: "flex-start",
  gap: "2%",
  alignItems: "center",
  margin: "1% 3% 0 1%",
});

export const ContainerText = styled(Typography)(({ theme }) => ({
  fontFamily: theme.fontFamily.POPPINS,
  fontWeight: theme.fontWeight.LIGHT,
  width: "90%",
  fontSize: theme.fontSizes.fontSize16,
  lineHeight: theme.lineHeights.lineHeight25,
  letterSpacing: "0%",
  verticalAlign: "middle",
  textAlign: "left",
  color: theme.colors.PRIMARY_DARK,
}));

export const TextBox = styled(Box)({
  position: "absolute",
  bottom: "5%",
  width: "90%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
});

export const AboutTextTitle = styled(Typography)(({ theme }) => ({
  fontFamily: theme.fontFamily.DM_SANS,
  fontWeight: theme.fontWeight.BOLD,
  fontSize: theme.fontSizes.fontSize32,
  lineHeight: theme.lineHeights.lineHeight70,
  letterSpacing: 0,
  verticalAlign: "middle",
  textAlign: "left",
  color: theme.colors.PRIMARY_DARK,
}));

export const AboutText = styled(Typography)(({ theme }) => ({
  fontFamily: theme.fontFamily.POPPINS,
  fontWeight: theme.fontWeight.LIGHT,
  fontSize: theme.fontSizes.fontSize20,
  lineHeight: theme.lineHeights.lineHeight35,
  letterSpacing: 0,
  verticalAlign: "middle",
  textAlign: "left",
  color: theme.colors.PRIMARY_DARK,
  whiteSpace: "pre-line",
}));
