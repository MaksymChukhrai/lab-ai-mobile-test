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
}));

export const PageTitle = styled(Typography)(({ theme }) => ({
  fontFamily: theme.fontFamily.DM_SANS,
  fontWeight: theme.fontWeight.BOLD,
  fontSize: theme.fontSizes.fontSize32,
  lineHeight: theme.lineHeights.lineHeight70,
  color: theme.colors.PRIMARY_DARK,
  textAlign: "center",
}));

export const PageDescription = styled(Typography)(({ theme }) => ({
  fontFamily: theme.fontFamily.POPPINS,
  fontWeight: theme.fontWeight.LIGHT,
  fontSize: theme.fontSizes.fontSize20,
  lineHeight: theme.lineHeights.lineHeight35,
  color: theme.colors.PRIMARY_DARK,
  textAlign: "center",
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
}));

export const SectionTitle = styled(Typography)(({ theme }) => ({
  fontFamily: theme.fontFamily.DM_SANS,
  fontWeight: theme.fontWeight.BOLD,
  fontSize: theme.fontSizes.fontSize28,
  lineHeight: theme.lineHeights.lineHeight70,
  color: theme.colors.PRIMARY_DARK,
  textAlign: "center",
}));

export const PatientInfoBox = styled(Box)({
  display: "flex",
  gap: "50px",
});

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
}));

export const TableHeaderCell = styled(Typography)(({ theme }) => ({
  fontFamily: theme.fontFamily.POPPINS,
  fontWeight: theme.fontWeight.SEMIBOLD,
  fontSize: theme.fontSizes.fontSize22,
  lineHeight: theme.lineHeights.lineHeight35,
  color: theme.colors.WHITE,
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
}));

export const MarkerNameText = styled(Typography)(({ theme }) => ({
  fontFamily: theme.fontFamily.POPPINS,
  fontSize: theme.fontSizes.fontSize18,
  fontWeight: theme.fontWeight.REGULAR,
  lineHeight: theme.lineHeights.lineHeight35,
  color: theme.colors.PRIMARY_DARK,
  display: "flex",
  alignItems: "center",
}));

export const MarkerPlaceholder = styled(Typography)(({ theme }) => ({
  fontFamily: theme.fontFamily.POPPINS,
  fontSize: theme.fontSizes.fontSize18,
  fontWeight: theme.fontWeight.REGULAR,
  lineHeight: theme.lineHeights.lineHeight35,
  color: alpha(theme.colors.PRIMARY_DARK, 0.4),
  display: "flex",
  alignItems: "center",
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
  "& input[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button ":
    {
      opacity: 1,
    },
}));

export const AddRowButton = styled(Button)({
  display: "block",
  margin: "35px auto 55px",
  padding: "10px 50px",
});

export const CommentLabel = styled(Typography)(({ theme }) => ({
  fontFamily: theme.fontFamily.POPPINS,
  fontWeight: theme.fontWeight.LIGHT,
  fontSize: theme.fontSizes.fontSize18,
  lineHeight: theme.lineHeights.lineHeight25,
  color: theme.colors.PRIMARY_DARK,
  marginBottom: "15px",
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

export const GenerateButton = styled(Button)({
  minWidth: "240px",
  height: "44px",
});
