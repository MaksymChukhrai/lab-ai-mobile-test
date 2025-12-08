import { createTheme, alpha } from "@mui/material/styles";
import type { CSSProperties } from "react";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    legalPageTitle: CSSProperties;
    legalPageSubtitle: CSSProperties;
    legalSectionTitle: CSSProperties;
    legalSectionBody: CSSProperties;
  }

  interface TypographyVariantsOptions {
    legalPageTitle?: CSSProperties;
    legalPageSubtitle?: CSSProperties;
    legalSectionTitle?: CSSProperties;
    legalSectionBody?: CSSProperties;
  }

  interface Theme {
    fontSizes: typeof FONT_SIZES;
    lineHeights: typeof LINE_HEIGHTS;
    fontFamily: typeof FONT_FAMILY;
    fontWeight: typeof FONT_WEIGHT;
    colors: typeof COLORS;
  }

  interface ThemeOptions {
    fontSizes?: typeof FONT_SIZES;
    lineHeights?: typeof LINE_HEIGHTS;
    fontFamily?: typeof FONT_FAMILY;
    fontWeight?: typeof FONT_WEIGHT;
    colors?: typeof COLORS;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    legalPageTitle: true;
    legalPageSubtitle: true;
    legalSectionTitle: true;
    legalSectionBody: true;
  }
}

const FONT_SIZES = {
  fontSize12: "12px",
  fontSize13: "13px",
  fontSize14: "14px",
  fontSize15: "15px",
  fontSize16: "16px",
  fontSize18: "18px",
  fontSize20: "20px",
  fontSize22: "22px",
  fontSize24: "24px",
  fontSize28: "28px",
  fontSize32: "32px",
  fontSize36: "36px",
  fontSize40: "40px",
  fontSize48: "48px",
  fontSize55: "55px",
  fontSize64: "64px",
  fontSize150: "150px",
  fontSize400: "400px",
};

const SHADOWS = {
  LOGO: "0px 4px 4px rgba(0, 0, 0, 0.25)",
};

const LINE_HEIGHTS = {
  lineHeight24: "24px",
  lineHeight35: "35px",
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
  SECONDARY_SILVER: "#D9D9D9",
  SECONDARY_BEIGE: "#DBD69D",
  SECONDARY_GREEN: "#45A76A",
  SECONDARY_YELLOW: "#FFE207",
  SECONDARY_ORANGE: "#C89600",
  SECONDARY_RED: "#BC0003",
  FOOTER_BG: "#05184D",
  SHADOW_BLACK: "#000000",
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
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 950,
      lg: 1250,
      xl: 1536,
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

    legalPageTitle: {
      fontFamily: FONT_FAMILY.POPPINS,
      fontWeight: FONT_WEIGHT.SEMIBOLD,
      fontStyle: "normal",
      fontSize: "40px",
      lineHeight: "35px",
      textAlign: "center",
      color: COLORS.PRIMARY_DARK,
    },
    legalPageSubtitle: {
      fontFamily: FONT_FAMILY.POPPINS,
      fontWeight: FONT_WEIGHT.LIGHT,
      fontStyle: "normal",
      fontSize: "20px",
      lineHeight: "35px",
      textAlign: "center",
      color: COLORS.SECONDARY_GRAY,
    },
    legalSectionTitle: {
      fontFamily: FONT_FAMILY.POPPINS,
      fontWeight: FONT_WEIGHT.SEMIBOLD,
      fontStyle: "normal",
      fontSize: "24px",
      lineHeight: "35px",
      color: COLORS.PRIMARY_DARK,
    },
    legalSectionBody: {
      fontFamily: FONT_FAMILY.POPPINS,
      fontWeight: FONT_WEIGHT.REGULAR,
      fontStyle: "normal",
      fontSize: "24px",
      lineHeight: "35px",
      color: COLORS.PRIMARY_DARK,
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
          fontSize: FONT_SIZES.fontSize20,
          lineHeight: LINE_HEIGHTS.lineHeight24,
          textTransform: "none",
          color: COLORS.WHITE,
          backgroundColor: COLORS.PRIMARY_DARK,
          boxShadow: SHADOWS.LOGO,
          transition: "all 0.3s cubic-bezier(0.45, 1.45, 0.8, 1)",

          "@media (max-width:900px)": {
            fontSize: FONT_SIZES.fontSize16,
          },

          "&:hover": {
            backgroundColor: alpha(COLORS.PRIMARY_LIGHT, 0.55),
            boxShadow: "none",
          },
          "&:active": {
            backgroundColor: alpha(COLORS.PRIMARY_LIGHT, 0.5),
            boxShadow: SHADOWS.LOGO,
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
    MuiSelect: {
      styleOverrides: {
        root: {
          backgroundColor: COLORS.WHITE,
          padding: "0",
          border: `1px solid ${COLORS.PRIMARY_DARK}`,
          borderRadius: "10px",
        },
        icon: {
          color: alpha(COLORS.PRIMARY_DARK, 0.35),
        },
      },
    },

    MuiMenu: {
      styleOverrides: {
        list: {
          border: `1px solid ${COLORS.PRIMARY_DARK}`,
          borderRadius: "15px",
          boxShadow: `0px 4px 4px 0px ${alpha(COLORS.PRIMARY_DARK, 0.25)}`,
          backgroundColor: COLORS.WHITE,
          overflowY: "auto",
          maxHeight: "270px",

          "&::-webkit-scrollbar": {
            width: "5px",
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: COLORS.SECONDARY_SILVER,
            borderRadius: "8px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: alpha(COLORS.PRIMARY_DARK, 1),
            borderRadius: "8px",
            transition: "background-color 0.3s ease",
          },
        },
      },
    },

    MuiMenuItem: {
      styleOverrides: {
        root: {
          padding: "10px 12px 10px 25px",
          fontFamily: FONT_FAMILY.POPPINS,
          fontSize: FONT_SIZES.fontSize16,
          fontWeight: FONT_WEIGHT.REGULAR,
          color: COLORS.PRIMARY_DARK,
          display: "flex",
          alignItems: "center",
          gap: "8px",

          "&:hover": {
            backgroundColor: alpha(COLORS.PRIMARY_LIGHT, 0.5),
          },
          "&.Mui-selected": {
            backgroundColor: alpha(COLORS.PRIMARY_LIGHT, 0.5),
            position: "relative",
            "&::before": {
              content: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' fill='${encodeURIComponent(
                COLORS.PRIMARY_DARK,
              )}' viewBox='0 0 24 24'><path d='M20.285 6.709l-11.4 11.4-5.657-5.657 1.414-1.414 4.243 4.243 9.986-9.986z'/></svg>")`,
              display: "inline-block",
              position: "absolute",
              left: "5px",
              width: "16px",
              height: "16px",
            },
            "&:hover": {
              backgroundColor: alpha(COLORS.PRIMARY_LIGHT, 0.5),
            },
          },
        },
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          border: "none",
          "& .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
        },
      },
    },
  },

  fontSizes: FONT_SIZES,
  lineHeights: LINE_HEIGHTS,
  fontFamily: FONT_FAMILY,
  fontWeight: FONT_WEIGHT,
  colors: COLORS,
});

export default theme;
