import { alpha, styled } from "@mui/material/styles";
import { Typography, Box } from "@mui/material";

export const LogoContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== "$variant",
})<{ $variant?: "default" | "hero" | "page" | "footer" }>(
  ({ theme, $variant }) => ({
    display: "flex",
    alignItems: "center",
    gap: 15,
    width: "fit-content",
    cursor: "pointer",

    [theme.breakpoints.down("sm")]: {
      gap: 10,
    },

    [theme.breakpoints.down("md")]: {
      ...($variant === "footer" && {
        margin: "0 auto 10px",
        justifyContent: "center",
        gap: "15px",
      }),
    },
  }),
);

export const LogoImage = styled("img", {
  shouldForwardProp: (prop) => prop !== "$variant",
})<{ $variant?: "default" | "hero" | "page" | "footer" }>(
  ({ $variant, theme }) => ({
    width: 40,
    height: 40,
    objectFit: "cover",
    display: "block",
    filter: `0px 4px 4px ${alpha(theme.colors.SHADOW_BLACK, 0.25)}`,

    ...($variant === "hero" && {
      width: 44,
      height: 44,
    }),

    ...($variant === "page" && {
      width: 56,
      height: 56,
      filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
    }),

    [theme.breakpoints.down("sm")]: {
      width: 27,
      height: 27,
      borderRadius: 5,

      ...($variant === "hero" && {
        width: 33,
        height: 33,
      }),

      ...($variant === "page" && {
        width: 33,
        height: 33,
        filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
      }),
    },
  }),
);

export const LogoText = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "$light" && prop !== "$variant",
})<{ $light?: boolean; $variant?: "default" | "hero" | "page" | "footer" }>(
  ({ theme, $light, $variant }) => ({
    fontFamily: theme.fontFamily.DM_SANS,
    fontWeight: theme.fontWeight.BOLD,
    fontSize: theme.fontSizes.fontSize36,
    lineHeight: theme.lineHeights.lineHeight100,
    color: $light ? theme.colors.WHITE : theme.colors.PRIMARY_DARK,
    paddingBottom: 8,
    textShadow: `0px 4px 4px ${alpha(theme.colors.SHADOW_BLACK, 0.25)}`,

    ...($variant === "hero" && {
      fontSize: theme.fontSizes.fontSize48,
      textShadow: `0 4px 4px ${alpha(theme.colors.PRIMARY_DARK, 0.3)}`,
    }),

    ...($variant === "page" && {
      fontSize: theme.fontSizes.fontSize55,
      lineHeight: "100%",
      paddingBottom: 0,
      filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
    }),

    [theme.breakpoints.down("sm")]: {
      fontSize: theme.fontSizes.fontSize20,
      fontWeight: theme.fontWeight.BOLD,
      lineHeight: 1.31,
      padding: 0,

      ...($variant === "hero" && {
        fontSize: theme.fontSizes.fontSize36,
        lineHeight: 1.31,
        textShadow: `0 4px 4px ${alpha(theme.colors.PRIMARY_DARK, 0.3)}`,
      }),

      ...($variant === "page" && {
        fontSize: theme.fontSizes.fontSize36,
        lineHeight: 1.31,
        paddingBottom: 0,
        filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
      }),

      ...($variant === "footer" && {
        fontSize: theme.fontSizes.fontSize20,
        paddingBottom: 0,
        textShadow: `0 4px 4px ${alpha(theme.colors.SHADOW_BLACK, 0.25)}`,
      }),
    },
  }),
);
