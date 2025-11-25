import { styled, alpha } from "@mui/material/styles";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Link,
  Divider,
  Button,
} from "@mui/material";

export const StyledAppBar = styled(AppBar)({
  background: "transparent",
  boxShadow: "none",
  margin: "1% 0",
});

export const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  width: "90%",
  margin: "0 auto",
});

export const NavBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "24px",
  alignItems: "center",

  [theme.breakpoints.down("md")]: {
    gap: "16px",
  },

  [theme.breakpoints.down("sm")]: {
    gap: "10px",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
}));

export const GetStartedButton = styled(Button)(({ theme }) => ({
  minWidth: "160px",
  minHeight: "44px",
  padding: "10px",
  borderRadius: 15,
  fontFamily: theme.fontFamily.DM_SANS,
  fontWeight: theme.fontWeight.MEDIUM,
  fontSize: theme.fontSizes.fontSize20,
  textTransform: "none",

  color: theme.colors.WHITE,
  backgroundColor: theme.colors.PRIMARY_DARK,
  boxShadow: `0px 4px 4px ${alpha(theme.colors.SHADOW_BLACK, 0.25)}`,

  transition: "all 0.3s cubic-bezier(0.45, 1.45, 0.8, 1)",

  "&:hover": {
    backgroundColor: alpha(theme.colors.PRIMARY_LIGHT, 0.55),
    boxShadow: "none",
  },

  "&:active": {
    backgroundColor: alpha(theme.colors.PRIMARY_LIGHT, 0.5),
    transition: "all 0.4s ease-in",
  },

  "&.Mui-focusVisible": {
    outline: "none",
    border: `3px solid ${theme.colors.PRIMARY_LIGHT}`,
    boxShadow: "none",
    color: theme.colors.WHITE,
  },

  "&.Mui-disabled": {
    backgroundColor: theme.colors.SECONDARY_GRAY,
    color: theme.colors.WHITE,
    boxShadow: "none",
    opacity: 1,
  },

  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

export const Background = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "100%",
  height: "604px",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  background: `linear-gradient(99.53deg, ${theme.colors.WHITE} 30%, ${theme.colors.PRIMARY_LIGHT}55 100%)`,

  [theme.breakpoints.up("xs")]: {
    height: "500px",
  },

  [theme.breakpoints.up("sm")]: {
    height: "604px",
  },
}));

export const BackgroundWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "100%",
  maxWidth: "1600px",
  height: "100%",
  justifyContent: "center",
  alignItems: "center",
  gap: "60px",

  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
  },
}));

export const BgTextContainer = styled(Box)(({ theme }) => ({
  width: "40%",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  textAlign: "left",
  gap: "15px",

  [theme.breakpoints.down("sm")]: {
    width: "90%",
    gap: "20px",
  },
}));

export const LeftHeading = styled(Typography)(({ theme }) => ({
  fontFamily: theme.fontFamily.DM_SANS,
  fontWeight: theme.fontWeight.BOLD,
  fontSize: theme.fontSizes.fontSize64,
  lineHeight: theme.lineHeights.lineHeight70,
  color: theme.colors.PRIMARY_DARK,
  textAlign: "left",
  letterSpacing: 0,

  [theme.breakpoints.down("sm")]: {
    fontSize: theme.fontSizes.fontSize36,
    lineHeight: theme.lineHeights.lineHeight45,
  },
}));

export const LeftSubtitle = styled(Typography)(({ theme }) => ({
  fontFamily: theme.fontFamily.POPPINS,
  fontWeight: theme.fontWeight.LIGHT,
  fontSize: theme.fontSizes.fontSize24,
  lineHeight: theme.lineHeights.lineHeight35,
  color: theme.colors.PRIMARY_DARK,
  letterSpacing: 0,
  textAlign: "left",

  [theme.breakpoints.down("sm")]: {
    fontSize: theme.fontSizes.fontSize16,
    lineHeight: theme.lineHeights.lineHeight25,
  },
}));

export const ButtonWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  margin: "0 auto",
  gap: "5px",

  [theme.breakpoints.up("sm")]: {
    height: "1px",
    display: "none",
  },
}));

export const UploadButton = styled(Button)(({ theme }) => ({
  minWidth: "150px",
  minHeight: "34px",
  width: "150px",
  height: "34px",
  padding: "10px",
  margin: "0 auto",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.colors.PRIMARY_DARK,
  fontSize: theme.fontSizes.fontSize16,
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
}));

export const PreTitleBox = styled(Box)({
  width: "100%",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  flexWrap: "nowrap",
  gap: "1%",
});

export const PreTitle = styled(Typography)(({ theme }) => ({
  fontFamily: theme.fontFamily.DM_SANS,
  fontWeight: theme.fontWeight.LIGHT,
  fontSize: theme.fontSizes.fontSize12,
  lineHeight: theme.lineHeights.lineHeight35,
  color: theme.colors.PRIMARY_DARK,
  letterSpacing: "1%",
  textAlign: "center",
  marginLeft: "1%",
  whiteSpace: "nowrap",
}));

export const Criteria = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "95%",

  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
}));

export const CriteriaItem = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "8px",
});

export const CriteriaIcon = styled("img")({
  width: "20px",
  height: "20px",
});

export const CriteriaText = styled(Typography)(({ theme }) => ({
  fontFamily: theme.fontFamily.DM_SANS,
  fontWeight: theme.fontWeight.LIGHT,
  letterSpacing: "1%",
  fontSize: theme.fontSizes.fontSize16,
  lineHeight: theme.lineHeights.lineHeight35,
  textAlign: "center",
  color: theme.colors.PRIMARY_DARK,

  [theme.breakpoints.down("sm")]: {
    fontSize: theme.fontSizes.fontSize13,
  },
}));

export const NavLink = styled(Link)(({ theme }) => ({
  background: "none",
  border: "none",
  boxShadow: "none",
  padding: 0,
  minWidth: "auto",
  textTransform: "none",
  transition: "all 0.3s ease",

  fontFamily: theme.fontFamily.DM_SANS,
  fontWeight: theme.fontWeight.MEDIUM,
  fontSize: theme.fontSizes.fontSize20,
  lineHeight: theme.lineHeights.lineHeight24,
  color: theme.colors.PRIMARY_DARK,

  "&:hover": {
    backgroundColor: "transparent",
    color: theme.colors.PRIMARY_LIGHT,
  },

  "&:active": {
    backgroundColor: "transparent",
    color: theme.colors.PRIMARY_LIGHT,
    boxShadow: `0px 2px 4px 0px ${alpha(theme.colors.PRIMARY_DARK, 0.25)}`,
    transition: "all 0.3s ease-out",
  },

  "&.Mui-focusVisible": {
    outline: `2px solid ${theme.colors.PRIMARY_LIGHT}`,
    outlineOffset: "3px",
    backgroundColor: "transparent",
  },

  "&.Mui-disabled": {
    color: alpha(theme.colors.PRIMARY_DARK, 0.4),
    backgroundColor: "transparent",
  },
  [theme.breakpoints.down("lg")]: {
    fontSize: theme.fontSizes.fontSize18,
  },

  [theme.breakpoints.down("md")]: {
    fontSize: theme.fontSizes.fontSize16,
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: theme.fontSizes.fontSize14,
  },
}));

export const StatContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  maxWidth: "1600px",
  height: "auto",
  justifyContent: "space-evenly",
  alignItems: "center",
  margin: "5% auto 3% auto",

  [theme.breakpoints.down("md")]: {
    display: "grid",
    marginTop: "40px",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateAreas: `
    "a c"
    "b d"
  `,
    alignContent: "space-evenly",
    rowGap: "20px",
    columnGap: "20px",
    height: "200px",
  },
}));

export const StatBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  "&.stat-0": { gridArea: "a" },
  "&.stat-1": { gridArea: "b" },
  "&.stat-2": { gridArea: "c" },
  "&.stat-3": { gridArea: "d" },
});

export const StatName = styled(Typography)(({ theme }) => ({
  fontFamily: theme.fontFamily.DM_SANS,
  fontWeight: theme.fontWeight.BOLD,
  fontSize: theme.fontSizes.fontSize64,
  lineHeight: theme.lineHeights.lineHeight70,
  color: theme.colors.PRIMARY_DARK,
  textAlign: "center",
  letterSpacing: 0,
  textShadow: `0px 4px 4px ${alpha(theme.colors.SHADOW_BLACK, 0.25)}`,

  [theme.breakpoints.down("sm")]: {
    fontSize: theme.fontSizes.fontSize36,
    lineHeight: theme.lineHeights.lineHeight40,
  },
}));

export const Stat = styled(Typography)(({ theme }) => ({
  fontFamily: theme.fontFamily.DM_SANS,
  fontWeight: theme.fontWeight.LIGHT,
  fontSize: theme.fontSizes.fontSize24,
  lineHeight: theme.lineHeights.lineHeight35,
  textAlign: "center",
  color: theme.colors.PRIMARY_DARK,
  textShadow: `0px 4px 4px ${alpha(theme.colors.SHADOW_BLACK, 0.25)}`,

  [theme.breakpoints.down("sm")]: {
    fontSize: theme.fontSizes.fontSize15,
  },
}));

export const Line = styled(Divider)(({ theme }) => ({
  width: "82%",
  margin: "0 auto",
  backgroundColor: alpha(theme.colors.PRIMARY_DARK, 0.1),
}));
