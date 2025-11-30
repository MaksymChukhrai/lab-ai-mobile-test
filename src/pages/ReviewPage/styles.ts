import {
  styled,
  Box,
  Typography,
  TextField,
  Select,
  IconButton,
  Button,
  alpha,
} from "@mui/material";

export const ContentContainer = styled(Box)(({ theme }) => ({
  maxWidth: "1284px",
  width: "100%",
  borderRadius: "15px",
  minHeight: "61.5vh",
  height: "100%",
  padding: "59px",
  backgroundColor: theme.colors.WHITE,
  boxShadow: `0px 4px 4px 0px ${alpha(theme.colors.PRIMARY_LIGHT, 0.25)}`,

  [theme.breakpoints.down("md")]: {
    padding: "33px 16px",
  },
}));

export const PageTitle = styled(Typography)(({ theme }) => ({
  fontFamily: theme.fontFamily.DM_SANS,
  fontWeight: theme.fontWeight.BOLD,
  fontSize: theme.fontSizes.fontSize32,
  lineHeight: theme.lineHeights.lineHeight70,
  color: theme.colors.PRIMARY_DARK,
  textAlign: "center",

  [theme.breakpoints.down("md")]: {
    fontSize: theme.fontSizes.fontSize20,
    lineHeight: "normal",
    textTransform: "capitalize",
    maxWidth: "300px",
    margin: "0 auto 10px",
  },
}));

export const PageDescription = styled(Typography)(({ theme }) => ({
  fontFamily: theme.fontFamily.POPPINS,
  fontWeight: theme.fontWeight.LIGHT,
  fontSize: theme.fontSizes.fontSize20,
  lineHeight: theme.lineHeights.lineHeight35,
  color: theme.colors.PRIMARY_DARK,
  textAlign: "center",

  [theme.breakpoints.down("md")]: {
    fontSize: theme.fontSizes.fontSize16,
    lineHeight: "normal",
    maxWidth: "280px",
    margin: "0 auto",
  },
}));

export const SectionInfoBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  backgroundColor: alpha(theme.colors.PRIMARY_LIGHT, 0.2),
  border: `1px solid ${theme.colors.PRIMARY_LIGHT}`,
  borderRadius: "20px",
  padding: "10px 45px 40px",
  marginTop: "35px",
  marginBottom: "55px",

  [theme.breakpoints.down("md")]: {
    padding: "20px 13px 25px",
  },
}));

export const SectionTitle = styled(Typography)(({ theme }) => ({
  fontFamily: theme.fontFamily.DM_SANS,
  fontWeight: theme.fontWeight.BOLD,
  fontSize: theme.fontSizes.fontSize28,
  lineHeight: theme.lineHeights.lineHeight70,
  color: theme.colors.PRIMARY_DARK,
  textAlign: "center",

  [theme.breakpoints.down("md")]: {
    fontSize: theme.fontSizes.fontSize18,
    lineHeight: "normal",
    marginBottom: "15px",
  },
}));

export const PatientInfoBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "50px",

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    gap: "20px",
  },
}));

export const InputWrapper = styled(Box)({
  flex: 1,
  display: "flex",
  flexDirection: "column",
});

export const InputLabel = styled(Typography)(({ theme }) => ({
  fontFamily: theme.fontFamily.DM_SANS,
  fontWeight: theme.fontWeight.REGULAR,
  fontSize: theme.fontSizes.fontSize24,
  lineHeight: theme.lineHeights.lineHeight35,
  color: theme.colors.PRIMARY_DARK,
  marginBottom: "10px",

  [theme.breakpoints.down("md")]: {
    fontSize: theme.fontSizes.fontSize16,
    lineHeight: "normal",
    marginBottom: "3px",
  },
}));

export const StyledSelect = styled(Select)(({ theme }) => ({
  fontFamily: theme.fontFamily.DM_SANS,
  fontSize: theme.fontSizes.fontSize20,
  height: "45px",
  textTransform: "capitalize",
  boxShadow: `0px 4px 4px 0px ${alpha(theme.colors.PRIMARY_DARK, 0.25)}`,
  "&:hover": {
    boxShadow: `0px 4px 4px 0px ${alpha(theme.colors.PRIMARY_DARK, 0.25)} inset`,
  },
  "&.Mui-focused": {
    border: `1px solid ${theme.colors.PRIMARY_DARK}`,
  },
  "& .MuiSelect-icon": {
    color: theme.colors.PRIMARY_DARK,
  },
}));

export const TableContainer = styled(Box)(({ theme }) => ({
  marginTop: "20px",
  marginBottom: "35px",
  borderRadius: "20px",
  boxShadow: `0px 4px 4px 0px ${alpha(theme.colors.PRIMARY_DARK, 0.25)} `,
}));

export const TableHeader = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1.25fr 2fr 1fr 48px",
  gap: "40px",
  padding: "20px 44px",
  backgroundColor: theme.colors.PRIMARY_DARK,
  color: theme.colors.WHITE,
  borderStartStartRadius: "20px",
  borderStartEndRadius: "20px",

  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "93px 72px 2fr",
    padding: "17px 15px",
    gap: "10px",
  },
}));

export const TableHeaderCell = styled(Typography)(({ theme }) => ({
  fontFamily: theme.fontFamily.POPPINS,
  fontWeight: theme.fontWeight.SEMIBOLD,
  fontSize: theme.fontSizes.fontSize22,
  lineHeight: theme.lineHeights.lineHeight35,
  color: theme.colors.WHITE,

  [theme.breakpoints.down("md")]: {
    fontSize: theme.fontSizes.fontSize15,
    lineHeight: "normal",
  },
}));

export const TableRow = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1.25fr 2fr 1fr 48px",
  gap: "40px",
  padding: "20px 44px",
  alignItems: "center",
  borderBottom: `2px solid ${alpha(theme.colors.PRIMARY_LIGHT, 0.1)}`,
  borderRadius: "20px",
  backgroundColor: theme.colors.WHITE,

  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "91px 72px 2fr 20px",
    padding: "17px 15px",
    gap: "5px",
    borderBottom: "none",
  },
}));

export const MarkerNameText = styled(Typography)(({ theme }) => ({
  fontFamily: theme.fontFamily.POPPINS,
  fontSize: theme.fontSizes.fontSize18,
  fontWeight: theme.fontWeight.REGULAR,
  lineHeight: theme.lineHeights.lineHeight35,
  color: theme.colors.PRIMARY_DARK,
  display: "flex",
  alignItems: "center",

  [theme.breakpoints.down("md")]: {
    fontSize: theme.fontSizes.fontSize15,
    lineHeight: "normal",
  },
}));

export const MarkerPlaceholder = styled(Typography)(({ theme }) => ({
  fontFamily: theme.fontFamily.POPPINS,
  fontSize: theme.fontSizes.fontSize18,
  fontWeight: theme.fontWeight.REGULAR,
  lineHeight: theme.lineHeights.lineHeight35,
  color: alpha(theme.colors.PRIMARY_DARK, 0.4),
  display: "flex",
  alignItems: "center",

  [theme.breakpoints.down("md")]: {
    fontSize: theme.fontSizes.fontSize16,
    lineHeight: "normal",
  },
}));

export const MarkerSelect = styled(Select)(({ theme }) => ({
  fontFamily: theme.fontFamily.POPPINS,
  fontSize: theme.fontSizes.fontSize18,
  fontWeight: theme.fontWeight.REGULAR,
  lineHeight: theme.lineHeights.lineHeight35,
  height: "40px",
  border: `1px solid ${alpha(theme.colors.PRIMARY_DARK, 0.5)}`,
  "&:hover": {
    boxShadow: `0px 4px 4px 0px ${alpha(theme.colors.PRIMARY_DARK, 0.25)} inset `,
    border: `1px solid ${theme.colors.PRIMARY_DARK}`,
  },
  "&.Mui-focused": {
    border: `1px solid ${theme.colors.PRIMARY_DARK}`,
  },
  "& .MuiSelect-icon": {
    color: theme.colors.PRIMARY_DARK,
  },
  [theme.breakpoints.down("md")]: {
    fontSize: theme.fontSizes.fontSize16,
    lineHeight: "normal",
    height: "30px",
    borderRadius: "5px",
    "& .MuiInputBase-input": {
      padding: "4px ",
    },
  },
}));

export const TableInput = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-root": {
    fontFamily: theme.fontFamily.POPPINS,
    fontSize: theme.fontSizes.fontSize18,
    fontWeight: theme.fontWeight.REGULAR,
    lineHeight: theme.lineHeights.lineHeight35,
    height: "40px",
    maxWidth: "390px",
    border: `1px solid ${alpha(theme.colors.PRIMARY_DARK, 0.5)}`,
    borderRadius: "10px",

    [theme.breakpoints.down("md")]: {
      fontSize: theme.fontSizes.fontSize16,
      lineHeight: "normal",
      height: "30px",
      width: "60px",
      textAlign: "center",
      margin: "0 auto",
      borderRadius: "5px",
    },
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: alpha(theme.colors.PRIMARY_DARK, 0.5),
    },
    "&:hover": {
      boxShadow: `0px 4px 4px 0px ${alpha(theme.colors.PRIMARY_DARK, 0.25)}`,
    },
    "&.Mui-focused fieldset": {
      borderColor: theme.colors.PRIMARY_DARK,
    },
  },
  "& .MuiInputBase-input": {
    padding: "4px ",
  },
  "& input[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button ":
    {
      opacity: 1,
    },
}));

export const AddRowButton = styled(Button)(({ theme }) => ({
  display: "block",
  margin: "35px auto 55px",
  padding: "10px 50px",

  [theme.breakpoints.down("md")]: {
    padding: "10px 20px",
  },
}));

export const CommentLabel = styled(Typography)(({ theme }) => ({
  fontFamily: theme.fontFamily.POPPINS,
  fontWeight: theme.fontWeight.LIGHT,
  fontSize: theme.fontSizes.fontSize18,
  lineHeight: theme.lineHeights.lineHeight25,
  color: theme.colors.PRIMARY_DARK,
  marginBottom: "15px",

  [theme.breakpoints.down("md")]: {
    fontSize: theme.fontSizes.fontSize16,
    lineHeight: "normal",
  },
}));

export const StyledTextarea = styled("textarea")(({ theme }) => ({
  width: "100%",
  minHeight: "150px",
  padding: "15px",
  fontFamily: theme.fontFamily.POPPINS,
  fontWeight: theme.fontWeight.REGULAR,
  fontSize: theme.fontSizes.fontSize20,
  lineHeight: theme.lineHeights.lineHeight25,
  color: theme.colors.PRIMARY_DARK,
  border: `1px solid ${alpha(theme.colors.PRIMARY_DARK, 0.5)}`,
  borderRadius: "15px",
  outline: "none",
  resize: "none",
  transition: "all 0.1s ease-in-out",
  boxSizing: "border-box",
  backgroundColor: theme.colors.WHITE,
  "&::placeholder": {
    color: alpha(theme.colors.PRIMARY_DARK, 0.5),
    fontWeight: theme.fontWeight.LIGHT,
  },
  "&:hover": {
    boxShadow: `0px 4px 4px 0px ${alpha(theme.colors.PRIMARY_DARK, 0.25)}`,
  },
  "&:focus": {
    border: `3px solid ${theme.colors.PRIMARY_LIGHT}`,
    boxShadow: "none",
  },

  [theme.breakpoints.down("md")]: {
    fontSize: theme.fontSizes.fontSize16,
    lineHeight: 1,
  },
}));

export const FooterActions = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: "40px",
});

export const BackButton = styled(IconButton)({
  transition: "all 0.3s ease-in-out",
});

export const GenerateButton = styled(Button)(({ theme }) => ({
  minWidth: "240px",
  height: "44px",

  [theme.breakpoints.down("md")]: {
    minWidth: "auto",
    padding: "10px 30px",
  },
}));
