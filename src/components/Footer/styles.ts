import {
  styled,
  Box,
  Typography,
  Link,
  Divider,
  alpha,
  Grid,
} from "@mui/material";

interface FooterProps {
  $variant?: "full" | "compact";
}

const options = {
  shouldForwardProp: (prop: PropertyKey) => prop !== "$variant",
};

export const FooterWrapper = styled(
  Box,
  options,
)<FooterProps>(({ theme, $variant }) => ({
  backgroundColor: theme.colors.FOOTER_BG,
  color: theme.colors.WHITE,
  padding: "60px 78px 20px",
  width: "100%",

  [theme.breakpoints.down("md")]: {
    padding: "0",
  },

  ...($variant === "compact" && {
    paddingTop: "30px",

    [theme.breakpoints.down("md")]: {
      padding: "21px 17px",
    },
  }),
}));

export const GridWrapper = styled(
  Grid,
  options,
)<FooterProps>(({ theme, $variant }) => ({
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    gap: "30px",
    padding: "30px 20px 10px",
  },
  ...($variant === "compact" && {
    justifyContent: "space-between",
    alignItems: "center",

    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      gap: "20px",
    },
  }),
}));

export const Description = styled(
  Typography,
  options,
)<FooterProps>(({ theme, $variant }) => ({
  marginTop: "20px",
  fontFamily: theme.fontFamily.DM_SANS,
  fontWeight: theme.fontWeight.LIGHT,
  fontSize: theme.fontSizes.fontSize20,
  color: alpha(theme.colors.WHITE, 0.75),
  maxWidth: "515px",

  [theme.breakpoints.down("md")]: {
    fontSize: theme.fontSizes.fontSize14,
    marginTop: "0px",
    margin: "0 auto",
  },
  ...($variant === "compact" && {
    display: "none",
  }),
}));

export const FooterLinkContainer = styled(
  Box,
  options,
)<FooterProps>(({ theme, $variant }) => ({
  ...($variant === "compact" && {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "row",
      width: "100%",
      gap: "10px",
    },
  }),
}));

export const LinkTitle = styled(Typography)(({ theme }) => ({
  fontFamily: theme.fontFamily.DM_SANS,
  fontWeight: theme.fontWeight.BOLD,
  fontSize: theme.fontSizes.fontSize22,
  marginBottom: "14px",
  color: theme.colors.WHITE,

  [theme.breakpoints.down("md")]: {
    fontSize: theme.fontSizes.fontSize15,
    marginBottom: "10px",
  },
}));

export const FooterLink = styled(Link)(({ theme }) => ({
  fontFamily: theme.fontFamily.DM_SANS,
  fontWeight: theme.fontWeight.LIGHT,
  fontSize: theme.fontSizes.fontSize20,
  color: theme.colors.WHITE,
  textDecoration: "none",
  opacity: 0.7,
  transition: "all 0.2s ease-in-out",
  borderRadius: "4px",
  padding: "4px 0px",
  cursor: "pointer",

  [theme.breakpoints.down("md")]: {
    fontSize: theme.fontSizes.fontSize13,
    padding: "0px",
  },

  "&:hover": {
    opacity: 1,
    textShadow: `0 0 8px ${alpha(theme.colors.WHITE, 0.5)}`,
  },
  "&:active": {
    color: theme.colors.PRIMARY_LIGHT,
    transform: "translateY(1px)",
    textShadow: "none",
  },
  "&.Mui-disabled": {
    color: theme.colors.SECONDARY_GRAY,
    opacity: 0.5,
    pointerEvents: "none",
    textShadow: "none",
  },
  "&:focus-visible": {
    opacity: 1,
    textShadow: "none",
    outline: "1px solid",
    outlineColor: theme.colors.WHITE,
    outlineOffset: "0px",
    maxWidth: "fit-content",
  },
}));

export const FooterDivider = styled(Divider)(({ theme }) => ({
  marginTop: "90px",
  borderColor: theme.colors.WHITE,
  opacity: 0.5,
  [theme.breakpoints.down("md")]: {
    marginTop: "26px",
  },
}));

export const Caption = styled(Typography)(({ theme }) => ({
  fontFamily: theme.fontFamily.DM_SANS,
  fontWeight: theme.fontWeight.LIGHT,
  fontSize: theme.fontSizes.fontSize16,
  color: alpha(theme.colors.WHITE, 0.75),
  textAlign: "center",
  display: "block",
  paddingTop: "20px",
  marginTop: "0px",

  [theme.breakpoints.down("md")]: {
    fontSize: theme.fontSizes.fontSize12,
    padding: "10px 0",
  },
}));
