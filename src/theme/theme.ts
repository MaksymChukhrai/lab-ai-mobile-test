import { createTheme, alpha } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    customSizes: typeof SIZES;
    fontSizes: typeof FONT_SIZES;
    lineHeights: typeof LINE_HEIGHTS;
    fontFamily: typeof FONT_FAMILY;
    fontWeight: typeof FONT_WEIGHT;
    colors: typeof COLORS;
  }
  interface ThemeOptions {
    customSizes?: typeof SIZES;
    fontSizes?: typeof FONT_SIZES;
    lineHeights?: typeof LINE_HEIGHTS;
    fontFamily?: typeof FONT_FAMILY;
    fontWeight?: typeof FONT_WEIGHT;
    colors?: typeof COLORS;
  }
}

const FONT_SIZES = {
  fontSize12: "12px",
  fontSize14: "14px",
  fontSize16: "16px",
  fontSize18: "18px",
  fontSize20: "20px",
  fontSize22: "22px",
  fontSize24: "24px",
  fontSize32: "32px",
  fontSize36: "36px",
  fontSize48: "48px",
  fontSize50: "50px",
  fontSize64: "64px",
  fontSize400: "400px",
};

const LINE_HEIGHTS = {
  lineHeight20: "20px",
  lineHeight24: "24px",
  lineHeight25: "25px",
  lineHeight28: "28px",
  lineHeight30: "30px",
  lineHeight35: "35px",
  lineHeight40: "40px",
  lineHeight50: "50px",
  lineHeight56: "56px",
  lineHeight70: "70px",
  lineHeight100: "100%",
};

const FONT_FAMILY = {
  DM_SANS: '"DM Sans", sans-serif',
  POPPINS: '"Poppins", sans-serif',
};
const FONT_WEIGHT = {
  BOLD: 700,
  SEMIBOLD: 600,
  MEDIUM: 500,
  REGULAR: 400,
  LIGHT: 300,
};
const COLORS = {
  PRIMARY_DARK: "#0B1F56",
  PRIMARY_LIGHT: "#6997ED",
  WHITE: "#FFFFFF",
  SECONDARY_TEAL: "#4EB9BE",
  SECONDARY_GRAY: "#878F9E",
  SECONDARY_BEIGE: "#DBD69D",
  SECONDARY_GREEN: "#45A76A",
  SECONDARY_RED: "#BC0003",
  FOOTER_BG: "#05184D",
};
const SIZES = {
  HERO_LOGO_FONT: "50px",
  ERROR_CODE: "400px",
  UPLOAD_CARD_SMALL_FONT: "14px",
  UPLOAD_CARD_MEDIUM_FONT: "18px",
};
export const theme = createTheme({
  palette: {
    primary: {
      main: COLORS.PRIMARY_DARK,
      light: COLORS.PRIMARY_LIGHT,
      contrastText: COLORS.WHITE,
    },
    secondary: {
      main: COLORS.SECONDARY_TEAL,
      dark: COLORS.SECONDARY_GRAY,
      light: COLORS.SECONDARY_BEIGE,
    },
    text: {
      primary: COLORS.PRIMARY_DARK,
      secondary: COLORS.SECONDARY_GRAY,
    },
    background: {
      default: COLORS.WHITE,
      paper: COLORS.FOOTER_BG,
    },
    info: {
      main: COLORS.SECONDARY_GREEN,
    },
    action: {
      disabledBackground: COLORS.SECONDARY_GRAY,
      disabled: COLORS.WHITE,
    },
    error: {
      main: COLORS.SECONDARY_RED,
    },
  },
  typography: {
    h1: {
      fontFamily: FONT_FAMILY.DM_SANS,
      fontWeight: FONT_WEIGHT.BOLD,
      fontSize: "64px",
      lineHeight: "70px",
      textAlign: "center",
      color: COLORS.PRIMARY_DARK,
    },
    h2: {
      fontFamily: FONT_FAMILY.DM_SANS,
      fontWeight: FONT_WEIGHT.SEMIBOLD,
      fontSize: "48px",
      lineHeight: "56px",
      color: COLORS.PRIMARY_DARK,
    },
    h3: {
      fontFamily: FONT_FAMILY.DM_SANS,
      fontWeight: FONT_WEIGHT.BOLD,
      fontSize: "36px",
      lineHeight: "100%",
    },
    h6: {
      fontFamily: FONT_FAMILY.DM_SANS,
      fontWeight: FONT_WEIGHT.BOLD,
      fontSize: "22px",
      lineHeight: "25px",
      marginBottom: "14px",
    },
    subtitle1: {
      fontFamily: FONT_FAMILY.POPPINS,
      fontWeight: FONT_WEIGHT.LIGHT,
      fontSize: "24px",
      lineHeight: "35px",
      textAlign: "center",
      color: COLORS.PRIMARY_DARK,
    },
    subtitle2: {
      fontFamily: FONT_FAMILY.DM_SANS,
      fontWeight: FONT_WEIGHT.LIGHT,
      letterSpacing: "1%",
      fontSize: "16px",
      lineHeight: "35px",
      textAlign: "center",
      color: COLORS.PRIMARY_DARK,
    },
    body1: {
      fontFamily: FONT_FAMILY.DM_SANS,
      fontWeight: FONT_WEIGHT.LIGHT,
      fontSize: "20px",
      lineHeight: "25px",
      color: alpha(COLORS.WHITE, 0.75),
    },
    body2: {
      fontFamily: FONT_FAMILY.DM_SANS,
      fontWeight: FONT_WEIGHT.LIGHT,
      fontSize: "32px",
      lineHeight: "25px",
      color: alpha(COLORS.WHITE, 0.75),
    },
    caption: {
      fontFamily: FONT_FAMILY.DM_SANS,
      fontWeight: FONT_WEIGHT.LIGHT,
      fontSize: "16px",
      lineHeight: "25px",
      color: alpha(COLORS.WHITE, 0.75),
      textAlign: "center",
      display: "block",
      marginTop: "20px",
    },
    button: {
      fontFamily: FONT_FAMILY.DM_SANS,
      fontWeight: FONT_WEIGHT.MEDIUM,
      fontSize: "20px",
      lineHeight: "24px",
      textTransform: "none",
    },
  },
  shape: {
    borderRadius: 15,
  },
  components: {
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          padding: "0",
          margin: "0",
          display: "flex",
          alignItems: "center",
          gap: "4px",
          fontFamily: FONT_FAMILY.DM_SANS,
          fontWeight: FONT_WEIGHT.LIGHT,
          fontSize: "12px",
          color: COLORS.SECONDARY_RED,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          minWidth: "160px",
          minHeight: "44px",
          padding: "10px",
          borderRadius: 15,
          fontFamily: FONT_FAMILY.DM_SANS,
          fontWeight: FONT_WEIGHT.MEDIUM,
          fontSize: "20px",
          lineHeight: "24px",
          textTransform: "none",
          color: COLORS.WHITE,
          backgroundColor: COLORS.PRIMARY_DARK,
          boxShadow: `0px 4px 4px ${alpha(COLORS.PRIMARY_DARK, 0.25)}`,
          transition: "all 0.3s cubic-bezier(0.45, 1.45, 0.8, 1)",
          "&:hover": {
            backgroundColor: alpha(COLORS.PRIMARY_LIGHT, 0.55),
            boxShadow: "none",
          },
          "&:active": {
            backgroundColor: alpha(COLORS.PRIMARY_LIGHT, 0.5),
            boxShadow: `0px 4px 4px ${alpha(COLORS.PRIMARY_DARK, 0.25)}`,
            transition: "all 0.4s ease-in",
          },
          "&.Mui-focusVisible": {
            outline: "none",
            border: `3px solid ${COLORS.PRIMARY_LIGHT}`,
            boxShadow: "none",
            color: COLORS.WHITE,
          },
          "&.Mui-disabled": {
            backgroundColor: COLORS.SECONDARY_GRAY,
            color: COLORS.WHITE,
            boxShadow: "none",
            opacity: 1,
          },
        },
      },
    },
  },
  customSizes: SIZES,
  fontSizes: FONT_SIZES,
  lineHeights: LINE_HEIGHTS,
  fontFamily: FONT_FAMILY,
  fontWeight: FONT_WEIGHT,
  colors: COLORS,
});
export default theme;
