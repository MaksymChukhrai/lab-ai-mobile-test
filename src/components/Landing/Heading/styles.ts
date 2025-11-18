import { styled, alpha } from "@mui/material/styles";
import { AppBar, Toolbar, Box, Typography, Link, Divider } from "@mui/material";

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

export const NavBox = styled(Box)({
  display: "flex",
  gap: "24px",
  alignItems: "center",
});

export const Background = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "4%",
  height: "604px",
  background: `linear-gradient(99.53deg, ${theme.colors.WHITE} 30%, ${theme.colors.PRIMARY_LIGHT}55 100%)`,
}));

export const BgTextContainer = styled(Box)({
  width: "40%",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  textAlign: "left",
  gap: "15px",
});

export const LeftHeading = styled(Typography)(({ theme }) => ({
  fontFamily: theme.fontFamily.DM_SANS,
  fontWeight: theme.fontWeight.BOLD,
  fontSize: theme.fontSizes.fontSize64,
  lineHeight: theme.lineHeights.lineHeight70,
  color: theme.colors.PRIMARY_DARK,
  textAlign: "left",
  letterSpacing: 0,
}));

export const LeftSubtitle = styled(Typography)(({ theme }) => ({
  fontFamily: theme.fontFamily.POPPINS,
  fontWeight: theme.fontWeight.LIGHT,
  fontSize: theme.fontSizes.fontSize24,
  lineHeight: theme.lineHeights.lineHeight35,
  color: theme.colors.PRIMARY_DARK,
  letterSpacing: 0,
  textAlign: "left",
}));

export const Criteria = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "95%",
});

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
    boxShadow: "none",
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
    boxShadow: "none",
    backgroundColor: "transparent",
  },

  "&.Mui-disabled": {
    color: alpha(theme.colors.PRIMARY_DARK, 0.4),
    backgroundColor: "transparent",
    boxShadow: "none",
  },
}));

export const StatContainer = styled(Box)({
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  margin: "5% 0 3% 0",
});

export const StatBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

export const StatName = styled(Typography)(({ theme }) => ({
  fontFamily: theme.fontFamily.DM_SANS,
  fontWeight: theme.fontWeight.BOLD,
  fontSize: theme.fontSizes.fontSize64,
  lineHeight: theme.lineHeights.lineHeight70,
  color: theme.colors.PRIMARY_DARK,
  textAlign: "center",
  letterSpacing: 0,
}));

export const Stat = styled(Typography)(({ theme }) => ({
  fontFamily: theme.fontFamily.DM_SANS,
  fontWeight: theme.fontWeight.LIGHT,
  fontSize: theme.fontSizes.fontSize24,
  lineHeight: theme.lineHeights.lineHeight35,
  textAlign: "center",
  color: theme.colors.PRIMARY_DARK,
}));

export const Line = styled(Divider)(({ theme }) => ({
  width: "82%",
  margin: "0 auto",
  backgroundColor: alpha(theme.colors.PRIMARY_DARK, 0.1),
}));
