import { styled, alpha, lighten } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

export const GradientBox = styled(Box)(({ theme }) => ({
  height: "1180px",
  overflow: "hidden",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  background: `linear-gradient(317.68deg, rgba(255, 255, 255, 0.09) 44.63%, rgba(105, 151, 237, 0.3) 102.47%)`,

  transform: "scale(0.9)",
  transformOrigin: "top left",
  width: `calc(100% / 0.9)`,

  [theme.breakpoints.down("lg")]: {
    height: `calc(1300px / 1)`,
  },

  [theme.breakpoints.down("md")]: {
    height: 1100,
  },

  [theme.breakpoints.down("sm")]: {
    height: 1350,
  },
}));

export const BgImage = styled("img")(({ theme }) => ({
  color: alpha(theme.colors.PRIMARY_DARK, 0.5),
  marginTop: "50px",
  position: "relative",

  [theme.breakpoints.down("lg")]: {
    marginTop: "50px",
  },

  [theme.breakpoints.down("md")]: {
    position: "absolute",
    pointerEvents: "none",
    right: "10%",
    top: "180px",
    width: "auto",
    maxWidth: "none",
  },

  [theme.breakpoints.down("sm")]: {
    position: "absolute",
    pointerEvents: "none",
    right: "-40%",
    top: "110px",
    width: "auto",
    maxWidth: "none",
  },
}));

export const AboutTitleBox = styled(Box)(({ theme }) => ({
  width: "56%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  paddingTop: "30px",
  paddingBottom: "0px",

  [theme.breakpoints.down("xl")]: {
    width: "65%",
  },

  [theme.breakpoints.down("md")]: {
    width: "80%",
    paddingBottom: "30px",

    opacity: 0,
    transition: "opacity 0.7s ease-out",
    "&.show": {
      opacity: 1,
    },
  },
}));

export const AboutTitle = styled(Typography)(({ theme }) => ({
  fontFamily: theme.fontFamily.DM_SANS,
  fontWeight: theme.fontWeight.BOLD,
  fontSize: theme.fontSizes.fontSize48,
  lineHeight: 1.2,
  marginTop: "0.67em",
  marginBottom: "0.27em",
  letterSpacing: "2%",
  verticalAlign: "middle",
  color: theme.colors.PRIMARY_DARK,

  [theme.breakpoints.down("md")]: {
    fontSize: theme.fontSizes.fontSize24,
    marginTop: "0.2em",
  },
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

  [theme.breakpoints.down("md")]: {
    fontSize: theme.fontSizes.fontSize20,
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: theme.fontSizes.fontSize16,
    lineHeight: 1.5,
  },
}));

const smContainerStyles = () => ({
  position: "relative",
  width: "238px",
  height: "127px",
  marginBottom: "20px",
  marginLeft: "10%",
  marginRight: "auto",
  gap: "5px",

  opacity: 0,
  transform: "translateY(20px)",
  transition: "opacity 0.7s ease-out, transform 1.1s ease-out",

  "&.show": {
    opacity: 1,
    transform: "translateY(0)",
  },
});

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
  background: lighten(theme.colors.PRIMARY_LIGHT, 0.75),
  border: `1px solid ${alpha(theme.colors.PRIMARY_LIGHT, 0.45)}`,
  boxShadow: `0px 5px 4px 0px ${alpha(theme.colors.PRIMARY_DARK, 0.25)}`,

  [theme.breakpoints.down("lg")]: {
    width: "400px",
  },

  [theme.breakpoints.down("md")]: {
    ...smContainerStyles(),

    width: "300px",
  },

  [theme.breakpoints.down("sm")]: {
    ...smContainerStyles(),
  },
}));

export const Container1 = styled(Container)(({ theme }) => ({
  top: "52%",
  left: "50%",
  transform: "translate(-135%, -180%)",

  [theme.breakpoints.down("lg")]: {
    transform: "translate(-125%, -180%)",
  },

  [theme.breakpoints.down("md")]: {
    top: "auto",
    left: "auto",
    transform: "none",
  },
}));

export const Container2 = styled(Container)(({ theme }) => ({
  top: "52%",
  left: "50%",
  transform: "translate(30%, -180%)",

  [theme.breakpoints.down("lg")]: {
    transform: "translate(30%, -180%)",
  },

  [theme.breakpoints.down("md")]: {
    top: "auto",
    left: "auto",
    transform: "none",
  },
}));

export const Container3 = styled(Container)(({ theme }) => ({
  top: "52%",
  left: "50%",
  transform: "translate(-150%, -20%)",

  [theme.breakpoints.down("lg")]: {
    transform: "translate(-140%, -20%)",
  },

  [theme.breakpoints.down("md")]: {
    top: "auto",
    left: "auto",
    transform: "none",
  },
}));

export const Container4 = styled(Container)(({ theme }) => ({
  top: "52%",
  left: "50%",
  transform: "translate(45%, -30%)",

  [theme.breakpoints.down("lg")]: {
    transform: "translate(45%, -30%)",
  },

  [theme.breakpoints.down("md")]: {
    top: "auto",
    left: "auto",
    transform: "none",
  },
}));

export const ContainerName = styled(Typography)(({ theme }) => ({
  fontFamily: theme.fontFamily.DM_SANS,
  fontWeight: theme.fontWeight.SEMIBOLD,
  fontSize: theme.fontSizes.fontSize22,
  letterSpacing: 0,
  verticalAlign: "middle",
  color: theme.colors.PRIMARY_DARK,

  [theme.breakpoints.down("md")]: {
    fontSize: theme.fontSizes.fontSize18,
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: theme.fontSizes.fontSize13,
  },
}));

export const ContainerIcon = styled("img")(({ theme }) => ({
  width: "22px",
  height: "22px",

  [theme.breakpoints.down("md")]: {
    width: "16px",
    height: "16px",
  },
}));

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
  letterSpacing: "0%",
  verticalAlign: "middle",
  textAlign: "left",
  color: theme.colors.PRIMARY_DARK,

  [theme.breakpoints.down("md")]: {
    fontSize: theme.fontSizes.fontSize12,
    lineHeight: 1,
  },
}));

export const TextBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  bottom: "5%",
  width: "90%",
  maxWidth: "1400px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",

  [theme.breakpoints.down("md")]: {
    bottom: "10px",
  },

  [theme.breakpoints.down("sm")]: {
    width: "85%",
  },
}));

export const AboutTextTitle = styled(Typography)(({ theme }) => ({
  fontFamily: theme.fontFamily.DM_SANS,
  fontWeight: theme.fontWeight.BOLD,
  fontSize: theme.fontSizes.fontSize32,
  verticalAlign: "middle",
  textAlign: "left",
  color: theme.colors.PRIMARY_DARK,
  marginBottom: "10px",

  [theme.breakpoints.down("md")]: {
    fontSize: theme.fontSizes.fontSize24,
  },
}));

export const AboutTextWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  marginTop: "10px",

  [theme.breakpoints.down("sm")]: {
    gap: "30px",
  },
}));

export const ParagraphBox = styled(Box)({
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-end",
});

export const AboutText = styled(Typography)(({ theme }) => ({
  fontFamily: theme.fontFamily.POPPINS,
  fontWeight: theme.fontWeight.LIGHT,
  fontSize: theme.fontSizes.fontSize20,
  lineHeight: 1.8,
  letterSpacing: 0,
  verticalAlign: "middle",
  textAlign: "left",
  color: theme.colors.PRIMARY_DARK,
  whiteSpace: "pre-line",

  [theme.breakpoints.down("md")]: {
    fontSize: theme.fontSizes.fontSize16,
    lineHeight: 1.5,
  },
}));

export const AboutTextIcon = styled("img")(({ theme }) => ({
  width: "1px",
  display: "none",

  [theme.breakpoints.down("sm")]: {
    width: "auto",
    height: "auto",
    display: "inline",
    transform: "translateY(5px)",
  },
}));

export const AboutTextIconEdit = styled(AboutTextIcon)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    marginBottom: "10px",
  },
}));
