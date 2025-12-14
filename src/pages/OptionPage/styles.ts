import {
  styled,
  Box,
  IconButton,
  Typography,
  alpha,
  Button,
} from "@mui/material";

export const ContentContainer = styled(Box)(({ theme }) => ({
  maxWidth: "1284px",
  width: "100%",
  borderRadius: "15px",
  padding: "60px 50px",
  marginBottom: "20px",
  backgroundColor: theme.colors.WHITE,
  boxShadow: `0px 4px 4px 0px ${alpha(theme.colors.PRIMARY_DARK, 0.25)}`,

  [theme.breakpoints.down("md")]: {
    padding: "33px 20px",
  },
}));

export const FormTitle = styled(Typography)(({ theme }) => ({
  fontFamily: theme.fontFamily.DM_SANS,
  fontWeight: theme.fontWeight.BOLD,
  lineHeight: theme.lineHeights.lineHeight70,
  fontSize: theme.fontSizes.fontSize32,
  color: theme.colors.PRIMARY_DARK,
  textAlign: "center",
  display: "block",

  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const FormTitleMobile = styled(Typography)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down("md")]: {
    display: "block",
    fontFamily: theme.fontFamily.DM_SANS,
    fontWeight: theme.fontWeight.BOLD,
    fontSize: theme.fontSizes.fontSize20,
    color: theme.colors.PRIMARY_DARK,
    textAlign: "center",
    maxWidth: "250px",
    margin: "0 auto 10px",
  },
}));

export const FormSubtitle = styled(Typography)(({ theme }) => ({
  fontFamily: theme.fontFamily.POPPINS,
  fontWeight: theme.fontWeight.LIGHT,
  fontSize: theme.fontSizes.fontSize24,
  lineHeight: theme.lineHeights.lineHeight35,
  textAlign: "center",
  color: theme.colors.PRIMARY_DARK,

  [theme.breakpoints.down("md")]: {
    fontSize: theme.fontSizes.fontSize15,
    lineHeight: "normal",
  },
}));

export const OptionsGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "31px",
  margin: "32px auto 0",
  maxWidth: "1070px",

  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "repeat(1, 1fr)",
  },
}));

interface OptionCardProps {
  isSelected: boolean;
}
export const OptionCard = styled(Box, {
  shouldForwardProp: (prop: PropertyKey) => prop !== "isSelected",
})<OptionCardProps>(({ theme, isSelected }) => ({
  display: "flex",
  alignItems: "center",
  gap: "20px",
  padding: "43px 37px ",
  borderRadius: "16px",
  cursor: "pointer",
  border: `1px solid ${alpha(theme.colors.PRIMARY_LIGHT, 0.45)}`,
  backgroundColor: isSelected
    ? alpha(theme.colors.SECONDARY_GREEN, 0.25)
    : theme.colors.WHITE,
  transition: "all 0.2s ease-in-out",
  "&:hover": {
    boxShadow: `1px 8px 10px 0px ${alpha(theme.colors.PRIMARY_DARK, 0.7)}`,
  },

  [theme.breakpoints.down("md")]: {
    borderRadius: "20px",
    padding: "16px",
    gap: "20px",
    "&:hover": {
      boxShadow: "none",
    },
  },
}));

export const CardContent = styled(Box)({
  display: "flex",
  flexDirection: "column",
  maxWidth: "375px",
  gap: "5px",
});

export const OptionTitle = styled(Typography)(({ theme }) => ({
  fontFamily: theme.fontFamily.DM_SANS,
  fontWeight: theme.fontWeight.BOLD,
  fontSize: theme.fontSizes.fontSize22,
  lineHeight: theme.lineHeights.lineHeight100,
  textShadow: `0px 2px 4px ${alpha(theme.palette.primary.dark, 0.25)}`,
  color: theme.colors.PRIMARY_DARK,

  [theme.breakpoints.down("md")]: {
    fontSize: theme.fontSizes.fontSize15,
    fontWeight: theme.fontWeight.SEMIBOLD,
    lineHeight: "normal",
  },
}));

export const OptionSubtitle = styled(Typography)(({ theme }) => ({
  fontFamily: theme.fontFamily.POPPINS,
  fontWeight: theme.fontWeight.LIGHT,
  fontSize: theme.fontSizes.fontSize20,
  color: theme.colors.PRIMARY_DARK,
  textAlign: "start",

  [theme.breakpoints.down("md")]: {
    fontSize: theme.fontSizes.fontSize14,
    lineHeight: "normal",
  },
}));

export const OptionIconBox = styled(Box, {
  shouldForwardProp: (prop: PropertyKey) => prop !== "isSelected",
})<OptionCardProps>(({ theme, isSelected }) => ({
  width: "51px",
  height: "51px",
  borderRadius: "10px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "all 0.2s ease-in-out",
  backgroundColor: isSelected
    ? alpha(theme.colors.SECONDARY_GREEN, 0.45)
    : alpha(theme.colors.PRIMARY_LIGHT, 0.5),

  [theme.breakpoints.down("md")]: {
    width: "34px",
    height: "34px",
    padding: "17px",
  },
}));

export const OptionIcon = styled("img")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    width: "18px",
    height: "20px",
  },
}));

export const FooterActions = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: "40px",
});

export const BackButton = styled(IconButton)(({ theme }) => ({
  color: theme.colors.SECONDARY_GRAY,
  transition: "all 0.3s ease-in-out",
}));

export const ContinueButton = styled(Button)(({ theme }) => ({
  padding: "10px 30px",

  [theme.breakpoints.down("md")]: {
    padding: "10px 20px",
  },
}));
