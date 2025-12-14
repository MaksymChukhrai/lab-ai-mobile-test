import { styled, alpha } from "@mui/material/styles";
import { Card, Box, Typography, Button, CircularProgress } from "@mui/material";

export const Upload = styled(Card, {
  shouldForwardProp: (prop) => prop !== "$wide",
})<{ $wide?: boolean }>(({ theme, $wide }) => ({
  width: $wide ? "1200px" : "43%",
  height: $wide ? "911px" : "84%",
  background: "transparent",
  borderRadius: "20px",
  backgroundColor: `${theme.colors.WHITE}`,
  boxShadow: `0px 4px 4px 0px ${theme.colors.PRIMARY_DARK}`,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  ...(!$wide && {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  }),

  ...($wide && {
    [theme.breakpoints.down("sm")]: {
      width: "90%",
      height: "555px",
    },
  }),
}));

export const UploadContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== "$wide",
})<{ $wide?: boolean }>(({ theme, $wide }) => ({
  height: "88%",
  width: "88%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: $wide ? "center" : "flex-start",

  ...($wide && {
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
  }),
}));

export const PreTitleBox = styled(Box)({
  width: "100%",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: "1%",
});

export const PreTitle = styled(Typography)(({ theme }) => ({
  fontFamily: theme.fontFamily.DM_SANS,
  fontWeight: theme.fontWeight.LIGHT,
  fontSize: theme.fontSizes.fontSize16,
  lineHeight: theme.lineHeights.lineHeight35,
  color: theme.colors.PRIMARY_DARK,
  letterSpacing: "1%",
  textAlign: "center",
  marginLeft: "1%",
}));

export const Title = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "$wide",
})<{ $wide?: boolean }>(({ theme, $wide }) => ({
  fontFamily: theme.fontFamily.DM_SANS,
  fontWeight: theme.fontWeight.BOLD,
  fontSize: $wide ? theme.fontSizes.fontSize32 : theme.fontSizes.fontSize24,
  letterSpacing: "1%",
  marginLeft: "25px",
  textAlign: $wide ? "center" : "left",
  color: theme.colors.PRIMARY_DARK,

  ...($wide && {
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0",
      fontSize: theme.fontSizes.fontSize20,
    },
  }),

  ...(!$wide && {
    [theme.breakpoints.down("md")]: {
      fontSize: theme.fontSizes.fontSize20,
    },
    [theme.breakpoints.down("lg")]: {
      fontSize: theme.fontSizes.fontSize22,
    },
  }),
}));

export const Description = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "$wide",
})<{ $wide?: boolean }>(({ theme, $wide }) => ({
  fontFamily: theme.fontFamily.POPPINS,
  fontWeight: theme.fontWeight.LIGHT,
  fontSize: $wide ? theme.fontSizes.fontSize20 : theme.fontSizes.fontSize16,
  marginLeft: $wide ? "0" : "25px",
  textAlign: $wide ? "center" : "left",
  color: theme.colors.PRIMARY_DARK,

  ...($wide && {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  }),
  ...(!$wide && {
    [theme.breakpoints.down("md")]: {
      fontSize: theme.fontSizes.fontSize14,
    },
  }),
}));

export const DescriptionMobile = styled(Description, {
  shouldForwardProp: (prop) => prop !== "$wide",
})<{ $wide?: boolean }>(({ theme, $wide }) => ({
  display: "none",
  width: "1px",

  ...($wide && {
    [theme.breakpoints.down("sm")]: {
      display: "block",
      width: "100%",
      fontSize: theme.fontSizes.fontSize15,
      lineHeight: 1,
    },
  }),
}));

export const UploadBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== "$wide",
})<{ $wide?: boolean }>(({ theme, $wide }) => ({
  width: "100%",
  position: "relative",
  minHeight: $wide ? "250px" : "190px",
  borderRadius: "20px",
  borderWidth: "1px",
  borderStyle: "dashed",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "16px",
  gap: "4px",
  transition: "background-color 0.3s ease",
  "&:hover": {
    backgroundColor: alpha(theme.colors.PRIMARY_DARK, 0.1),
  },

  ...($wide && {
    [theme.breakpoints.down("sm")]: {
      width: "1px",
      display: "none",
    },
  }),

  ...(!$wide && {
    [theme.breakpoints.down("md")]: {
      minHeight: "150px",
    },
  }),
}));

export const HiddenInput = styled("input")({
  display: "none",
});

export const LoaderBox = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "112px",
  borderRadius: "20px",
  border: `1px dashed ${theme.colors.PRIMARY_DARK}`,
  backgroundColor: theme.colors.WHITE,
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  overflow: "hidden",

  [theme.breakpoints.down("sm")]: {
    height: "77px",
    borderStyle: "dashed",
    border: `1px dashed ${theme.colors.PRIMARY_DARK}`,
  },
}));

export const LoaderText = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "flex-start",

  [theme.breakpoints.down("sm")]: {
    justifyContent: "center",
  },
}));

export const ProgressBar = styled(Box)<{ progress: number }>(
  ({ progress, theme }) => ({
    position: "absolute",
    bottom: 0,
    left: 0,
    height: "100%",
    width: `${progress}%`,
    backgroundColor: alpha(theme.colors.PRIMARY_LIGHT, 0.2),
    borderRadius: "20px",
    transition: "width 0.4s ease",
    zIndex: 0,
  }),
);

export const CircleLoader = styled(CircularProgress)(({ theme }) => ({
  width: "48px",
  height: "48px",

  [theme.breakpoints.down("sm")]: {
    marginTop: "10px",
    width: "32px !important",
    height: "32px !important",
  },
}));

export const ResultsBox = styled(Box)({
  height: "100%",
  width: "90%",
  display: "flex",
  gap: "15px",
  alignItems: "center",
});

export const PdfImg = styled("img")(({ theme }) => ({
  width: "45px",
  height: "45px",

  [theme.breakpoints.down("sm")]: {
    width: "27px",
    height: "27px",
  },
}));

export const DeleteIconBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  height: "100px",
  display: "flex",
  alignItems: "center",
  top: "8px",
  right: "8px",
  color: theme.colors.SECONDARY_RED,
  zIndex: 2,

  [theme.breakpoints.down("sm")]: {
    top: "-10px",
  },
}));

export const DeleteImg = styled("img")(({ theme }) => ({
  width: "32px",
  height: "32px",

  [theme.breakpoints.down("sm")]: {
    width: "21px",
    height: "21px",
  },
}));

export const DropText = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "$wide",
})<{ $wide?: boolean }>(({ theme, $wide }) => ({
  fontFamily: theme.fontFamily.DM_SANS,
  fontWeight: theme.fontWeight.LIGHT,
  fontSize: $wide ? theme.fontSizes.fontSize20 : theme.fontSizes.fontSize16,
  color: alpha(theme.colors.PRIMARY_DARK, 0.8),
  textAlign: "center",

  ...(!$wide && {
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.fontSizes.fontSize12,
      lineHeight: 1,
    },
  }),
}));

export const DropTextPrefix = styled(DropText)(({ theme }) => ({
  fontFamily: theme.fontFamily.DM_SANS,
  fontWeight: theme.fontWeight.LIGHT,
  fontSize: theme.fontSizes.fontSize16,
  textAlign: "center",
  color: theme.colors.PRIMARY_DARK,

  [theme.breakpoints.down("sm")]: {
    fontSize: theme.fontSizes.fontSize12,
    maxWidth: 180,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    display: "inline-block",
    verticalAlign: "bottom",
  },
}));

export const CLickText = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "$wide",
})<{ $wide?: boolean }>(({ theme, $wide }) => ({
  fontFamily: theme.fontFamily.DM_SANS,
  fontWeight: theme.fontWeight.LIGHT,
  fontSize: $wide ? theme.fontSizes.fontSize18 : theme.fontSizes.fontSize14,
  lineHeight: $wide ? theme.lineHeights.lineHeight35 : 0,
  color: alpha(theme.colors.PRIMARY_DARK, 0.5),
  letterSpacing: "1%",
  textAlign: "center",
}));

export const SupportsText = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "$wide",
})<{ $wide?: boolean }>(({ theme, $wide }) => ({
  fontFamily: theme.fontFamily.DM_SANS,
  fontWeight: theme.fontWeight.LIGHT,
  fontSize: $wide ? theme.fontSizes.fontSize20 : theme.fontSizes.fontSize14,
  color: alpha(theme.colors.PRIMARY_DARK, 0.4),
  letterSpacing: "1%",
  textAlign: "center",
}));

export const UploadButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "$wide",
})<{ $wide?: boolean }>(({ theme, $wide }) => ({
  width: $wide ? "180px" : "150px",
  minHeight: "34px",
  padding: "10px",
  margin: "0 auto",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.colors.PRIMARY_DARK,
  color: theme.colors.WHITE,
  boxShadow: `0px 4px 4px ${alpha(theme.colors.PRIMARY_DARK, 0.25)}`,
  opacity: 1,
  textTransform: "none",
  transition: "all 0.4s ease-out",

  "&:not(:disabled)": {
    backgroundColor: theme.colors.PRIMARY_DARK,
    boxShadow: `0px 4px 4px ${alpha(theme.colors.PRIMARY_DARK, 0.25)}`,
  },

  "&:active": {
    backgroundColor: alpha(theme.colors.PRIMARY_LIGHT, 0.55),
    boxShadow: `0px 4px 4px ${alpha(theme.colors.PRIMARY_DARK, 0.25)}`,
    transition: "all 0.4s ease-out",
  },

  "&:hover": {
    backgroundColor: alpha(theme.colors.PRIMARY_LIGHT, 0.55),
  },

  "&.Mui-focusVisible": {
    backgroundColor: theme.colors.PRIMARY_DARK,
    border: `3px solid ${theme.colors.PRIMARY_LIGHT}`,
    boxShadow: "none",
    outline: "none",
  },

  "&.Mui-disabled": {
    backgroundColor: theme.colors.SECONDARY_GRAY,
    color: theme.colors.WHITE,
    boxShadow: "none",
    opacity: 1,
  },

  "&.error": {
    backgroundColor: theme.colors.WHITE,
    color: theme.colors.SECONDARY_RED,
    border: `1px solid ${theme.colors.SECONDARY_TEAL}`,
    borderColor: theme.colors.SECONDARY_RED,
    boxShadow: "none",
  },

  ...($wide && {
    [theme.breakpoints.down("sm")]: {
      width: "151px",
      height: "34px",
      fontSize: theme.fontSizes.fontSize16,
    },
  }),
  ...(!$wide && {
    [theme.breakpoints.down("md")]: {
      minHeight: "20px",
      padding: "5px",
    },
  }),
}));

export const MobileBox = styled(Box)(({ theme }) => ({
  display: "none",

  [theme.breakpoints.down("sm")]: {
    display: "flex",
    flexDirection: "column",
    alignitems: "center",
    justifyContent: "flex-start",
  },
}));

export const ErrorMessage = styled(Typography)(({ theme }) => ({
  color: theme.colors.SECONDARY_RED,
  fontSize: theme.fontSizes.fontSize20,
  fontWeight: theme.fontWeight.MEDIUM,
  textAlign: "center",
  position: "absolute",
  marginTop: "10px",
  bottom: "-20px",
  backgroundColor: theme.colors.WHITE,
  borderRadius: "20px",
  padding: "10px 15px",
  left: "50%",
  transform: "translateX(-50%)",
  whiteSpace: "nowrap",

  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

export const ErrorMessageBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    width: "90%",
    marginLeft: "5%",
  },
}));

export const ErrorImage = styled("img")(({ theme }) => ({
  width: "26px",
  height: "26px",

  [theme.breakpoints.down("sm")]: {
    width: "15px",
    height: "15px",
  },
}));

export const ErrorMessageMobile = styled(ErrorMessage)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    position: "relative",
    display: "block",
    bottom: 0,
    fontSize: theme.fontSizes.fontSize12,
    borderRadius: 0,
    padding: "0 0 7px 0",
  },
}));

export const GreenBox = styled(Box)(({ theme }) => ({
  width: "100%",
  minHeight: "200px",
  borderRadius: "20px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  backgroundColor: alpha(theme.colors.SECONDARY_GREEN, 0.15),

  [theme.breakpoints.down("sm")]: {
    width: "90%",
    height: "177px",
  },
}));

export const TextBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "flex-start",
  margin: "2% 0 0 3%",

  [theme.breakpoints.down("sm")]: {
    justifyContent: "flex-start",
    margin: "2% 3% 0 3%",
  },
}));

export const GreenUl = styled("ul")(({ theme }) => ({
  color: theme.colors.SECONDARY_GREEN,
  [theme.breakpoints.down("sm")]: {
    margin: "0",
  },
}));

export const GreenText = styled(Typography)(({ theme }) => ({
  color: theme.colors.SECONDARY_GREEN,
  fontWeight: theme.fontWeight.MEDIUM,

  [theme.breakpoints.down("sm")]: {
    fontSize: theme.fontSizes.fontSize13,
    lineHeight: 1.1,
  },
}));

export const ButtonsBox = styled(Box)({
  display: "flex",
  width: "100%",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
});

export const ContinueButton = styled(Button)(({ theme }) => ({
  width: "240px",
  height: "44px",

  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

export const ContinueButtonMobile = styled(UploadButton)(({ theme }) => ({
  display: "none",

  [theme.breakpoints.down("sm")]: {
    fontSize: theme.fontSizes.fontSize16,
    display: "block",
    width: "222px",
    height: "44px",
  },
}));

export const BackImg = styled("img")(({ theme }) => ({
  width: "38px",
  height: "38px",

  [theme.breakpoints.down("sm")]: {
    width: "24px",
    height: "24px",
  },
}));

export const HeartImg = styled("img")({
  width: "18px",
  height: "18px",
});
