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
  ...($variant === "compact" && {
    paddingTop: "30px",
  }),
}));

export const GridWrapper = styled(
  Grid,
  options,
)<FooterProps>(({ $variant }) => ({
  ...($variant === "compact" && {
    justifyContent: "space-between",
    alignItems: "center",
  }),
}));

export const Description = styled(
  Typography,
  options,
)<FooterProps>(({ theme, $variant }) => ({
  marginTop: theme.spacing(2),
  fontFamily: theme.fontFamily.DM_SANS,
  fontWeight: theme.fontWeight.LIGHT,
  fontSize: theme.fontSizes.fontSize20,
  lineHeight: theme.lineHeights.lineHeight25,
  color: alpha(theme.colors.WHITE, 0.75),
  maxWidth: "515px",
  ...($variant === "compact" && {
    display: "none",
  }),
}));

export const FooterLinkContainer = styled(
  Box,
  options,
)<FooterProps>(({ $variant }) => ({
  ...($variant === "compact" && {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  }),
}));

export const LinkTitle = styled(Typography)(({ theme }) => ({
  fontFamily: theme.fontFamily.DM_SANS,
  fontWeight: theme.fontWeight.BOLD,
  fontSize: theme.fontSizes.fontSize22,
  lineHeight: theme.lineHeights.lineHeight25,
  marginBottom: "14px",
}));

export const FooterLink = styled(Link)(({ theme }) => ({
  fontFamily: theme.fontFamily.DM_SANS,
  fontWeight: theme.fontWeight.LIGHT,
  fontSize: theme.fontSizes.fontSize20,
  lineHeight: theme.lineHeights.lineHeight25,
  color: theme.colors.WHITE,
  textDecoration: "none",
  opacity: 0.7,
  transition: "all 0.2s ease-in-out",
  borderRadius: "4px",
  padding: "2px 4px",
  margin: "-2px -4px",

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
}));

export const Caption = styled(Typography)(({ theme }) => ({
  fontFamily: theme.fontFamily.DM_SANS,
  fontWeight: theme.fontWeight.LIGHT,
  fontSize: theme.fontSizes.fontSize16,
  lineHeight: theme.lineHeights.lineHeight25,
  color: alpha(theme.colors.WHITE, 0.75),
  textAlign: "center",
  display: "block",
  marginTop: "20px",
}));
