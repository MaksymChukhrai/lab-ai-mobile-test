import { styled } from "@mui/material/styles";
import { Button, Box, Typography } from "@mui/material";

export const StyledLogoutButton = styled(Button)(({ theme }) => ({
  minWidth: 140,
  [theme.breakpoints.down("sm")]: {
    minWidth: 120,
    minHeight: "30px",
    padding: "0",
    gap: 5,
    fontSize: theme.fontSizes.fontSize14,
  },
}));

export const StyledModalBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 713,
  height: 356,
  backgroundColor: theme.colors.WHITE,
  borderRadius: 20,
  padding: 40,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.15)",

  [theme.breakpoints.down("sm")]: {
    width: 335,
    height: 231,
    padding: 28,
  },
}));

export const StyledModalIcon = styled(Box)(({ theme }) => ({
  width: 37,
  height: 37,
  borderRadius: "50%",
  backgroundColor: "#081537",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.colors.WHITE,
  fontSize: theme.fontSizes.fontSize24,
  fontWeight: theme.fontWeight.BOLD,
  marginBottom: 32,

  "&::after": {
    content: '"i"',
  },

  [theme.breakpoints.down("sm")]: {
    width: 24,
    height: 24,
    fontSize: theme.fontSizes.fontSize16,
  },
}));

export const StyledModalTitle = styled(Typography)(({ theme }) => ({
  width: 580,
  height: 60,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  color: theme.colors.PRIMARY_DARK,
  fontFamily: "Poppins",
  fontSize: theme.fontSizes.fontSize32,
  fontWeight: theme.fontWeight.MEDIUM,
  letterSpacing: 0,
  textAlign: "center",
  marginBottom: 57,

  [theme.breakpoints.down("sm")]: {
    width: 258,
    height: 50,
    fontSize: theme.fontSizes.fontSize20,
    marginBottom: 31,
  },
}));

export const StyledModalButtonContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: 112,

  [theme.breakpoints.down("sm")]: {
    width: 224,
    height: 35,
    gap: 50,
  },
}));

export const StyledConfirmButton = styled(Button)(({ theme }) => ({
  minWidth: 118,
  height: 45,
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: 10,
  padding: 10,
  boxSizing: "border-box",
  border: `1px solid ${theme.colors.PRIMARY_DARK}`,
  borderRadius: 15,
  backgroundColor: theme.colors.WHITE,
  borderColor: theme.colors.PRIMARY_DARK,
  color: theme.colors.PRIMARY_DARK,
  fontFamily: "DM Sans",
  fontSize: theme.fontSizes.fontSize24,
  fontWeight: theme.fontWeight.REGULAR,
  lineHeight: theme.lineHeights.lineHeight35,
  letterSpacing: 0,
  textTransform: "none",
  boxShadow: "none",

  "&:hover": {
    backgroundColor: theme.colors.WHITE,
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
    opacity: 0.9,
  },

  [theme.breakpoints.down("sm")]: {
    minWidth: 87,
    fontSize: theme.fontSizes.fontSize16,
    fontWeight: theme.fontWeight.REGULAR,
    lineHeight: theme.lineHeights.lineHeight35,
  },
}));

export const StyledCancelButton = styled(Button)(({ theme }) => ({
  minWidth: 118,
  height: 45,
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: 10,
  padding: 10,
  boxSizing: "border-box",
  border: `1px solid ${theme.colors.PRIMARY_DARK}`,
  borderRadius: 15,
  backgroundColor: theme.colors.WHITE,
  color: theme.colors.PRIMARY_DARK,
  fontFamily: "DM Sans",
  fontSize: theme.fontSizes.fontSize24,
  fontWeight: theme.fontWeight.REGULAR,
  lineHeight: theme.lineHeights.lineHeight35,
  letterSpacing: 0,
  textTransform: "none",
  boxShadow: "none",

  "&:hover": {
    backgroundColor: theme.colors.WHITE,
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
    opacity: 0.9,
  },

  [theme.breakpoints.down("sm")]: {
    minWidth: 87,

    fontSize: theme.fontSizes.fontSize16,
    fontWeight: theme.fontWeight.REGULAR,
    lineHeight: theme.lineHeights.lineHeight35,
  },
}));

export const modalBackdropStyles = {
  backdropFilter: "blur(8px)",
  background: "rgba(54, 54, 54, 0.68)",
};
