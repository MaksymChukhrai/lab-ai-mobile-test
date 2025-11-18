import { styled, alpha } from "@mui/material/styles";
import { Card, Box, Typography, Button } from "@mui/material";

export const Upload = styled(Card)<{ wide?: boolean }>(({ theme, wide }) => ({
  width: wide ? "1200px" : "43%",
  height: wide ? "911px" : "84%",
  background: "transparent",
  borderRadius: "20px",
  backgroundColor: `${theme.colors.WHITE}`,
  boxShadow: `0px 4px 4px 0px ${theme.colors.PRIMARY_DARK}`,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

export const UploadContainer = styled(Box)<{ wide?: boolean }>(({ wide }) => ({
  height: "88%",
  width: "88%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: wide ? "center" : "flex-start",
}));

export const PreTitleBox = styled(Box)({
  width: "100%",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: "1%",
});

export const PreTitle = styled(Typography)(({ theme }) => ({
  fontFamily: theme.fontFamily.DM_SANS,
  fontWeight: theme.fontWeight.LIGHT,
  fontSize: theme.fontSizes.fontSize16,
  lineHeight: theme.lineHeights.lineHeight35,
  color: theme.colors.PRIMARY_DARK,
  letterSpacing: "1%",
  textAlign: "center",
  marginLeft: "1%",
}));

export const Title = styled(Typography)<{ wide?: boolean }>(
  ({ theme, wide }) => ({
    fontFamily: theme.fontFamily.DM_SANS,
    fontWeight: theme.fontWeight.BOLD,
    fontSize: wide ? theme.fontSizes.fontSize32 : theme.fontSizes.fontSize24,
    lineHeight: wide
      ? theme.lineHeights.lineHeight70
      : theme.lineHeights.lineHeight35,
    letterSpacing: "1%",
    marginLeft: "25px",
    textAlign: wide ? "center" : "left",
    color: theme.colors.PRIMARY_DARK,
  }),
);

export const Description = styled(Typography)<{ wide?: boolean }>(
  ({ theme, wide }) => ({
    fontFamily: theme.fontFamily.POPPINS,
    fontWeight: theme.fontWeight.LIGHT,
    fontSize: wide ? theme.fontSizes.fontSize20 : theme.fontSizes.fontSize16,
    lineHeight: wide
      ? theme.lineHeights.lineHeight35
      : theme.lineHeights.lineHeight20,
    letterSpacing: "1%",
    marginLeft: wide ? "0" : "25px",
    textAlign: wide ? "center" : "left",
    color: theme.colors.PRIMARY_DARK,
  }),
);

export const UploadBox = styled(Box)<{ wide?: boolean }>(({ theme, wide }) => ({
  width: "100%",
  position: "relative",
  minHeight: wide ? "250px" : "190px",
  borderRadius: "20px",
  borderWidth: "1px",
  borderStyle: "dashed",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "16px",
  gap: "4px",
  transition: "background-color 0.3s ease",
  "&:hover": {
    backgroundColor: alpha(theme.colors.PRIMARY_DARK, 0.1),
  },
}));

export const HiddenInput = styled("input")({
  display: "none",
});

export const LoaderBox = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "112px",
  borderRadius: "20px",
  border: `1px dashed ${theme.colors.PRIMARY_DARK}`,
  backgroundColor: theme.colors.WHITE,
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  overflow: "hidden",
}));

export const LoaderText = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "flex-start",
});

export const ProgressBar = styled(Box)<{ progress: number }>(
  ({ progress, theme }) => ({
    position: "absolute",
    bottom: 0,
    left: 0,
    height: "100%",
    width: `${progress}%`,
    backgroundColor: alpha(theme.colors.PRIMARY_LIGHT, 0.2),
    borderRadius: "20px",
    transition: "width 0.4s ease",
    zIndex: 0,
  }),
);

export const ResultsBox = styled(Box)({
  height: "100%",
  width: "90%",
  display: "flex",
  gap: "15px",
  alignItems: "center",
});

export const DeleteIconBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  height: "100px",
  display: "flex",
  alignItems: "center",
  top: "8px",
  right: "8px",
  color: theme.colors.SECONDARY_RED,
  zIndex: 2,
}));

export const DropText = styled(Typography)<{ wide?: boolean }>(
  ({ theme, wide }) => ({
    fontFamily: theme.fontFamily.DM_SANS,
    fontWeight: theme.fontWeight.LIGHT,
    fontSize: wide ? theme.fontSizes.fontSize20 : theme.fontSizes.fontSize16,
    lineHeight: theme.lineHeights.lineHeight28,
    color: alpha(theme.colors.PRIMARY_DARK, 0.8),
    textAlign: "center",
    letterSpacing: "1%",
  }),
);

export const DropTextPrefix = styled(DropText)(({ theme }) => ({
  fontFamily: theme.fontFamily.DM_SANS,
  fontWeight: theme.fontWeight.LIGHT,
  fontSize: theme.fontSizes.fontSize16,
  lineHeight: theme.lineHeights.lineHeight35,
  letterSpacing: "1%",
  textAlign: "center",
  color: theme.colors.PRIMARY_DARK,
}));

export const CLickText = styled(Typography)<{ wide?: boolean }>(
  ({ theme, wide }) => ({
    fontFamily: theme.fontFamily.DM_SANS,
    fontWeight: theme.fontWeight.LIGHT,
    fontSize: wide ? theme.fontSizes.fontSize18 : theme.fontSizes.fontSize14,
    lineHeight: wide ? theme.lineHeights.lineHeight35 : 0,
    color: alpha(theme.colors.PRIMARY_DARK, 0.5),
    letterSpacing: "1%",
    textAlign: "center",
  }),
);

export const SupportsText = styled(Typography)<{ wide?: boolean }>(
  ({ theme, wide }) => ({
    fontFamily: theme.fontFamily.DM_SANS,
    fontWeight: theme.fontWeight.LIGHT,
    fontSize: wide ? theme.fontSizes.fontSize20 : theme.fontSizes.fontSize14,
    lineHeight: theme.lineHeights.lineHeight40,
    color: alpha(theme.colors.PRIMARY_DARK, 0.4),
    letterSpacing: "1%",
    textAlign: "center",
  }),
);

export const UploadButton = styled(Button)<{ wide?: boolean }>(
  ({ theme, wide }) => ({
    width: wide ? "180px" : "150px",
    minHeight: "34px",
    padding: "10px",
    margin: "0 auto",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.colors.PRIMARY_DARK,
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

    "&:hover": {
      backgroundColor: alpha(theme.colors.PRIMARY_LIGHT, 0.55),
    },

    "&.Mui-focusVisible": {
      backgroundColor: theme.colors.PRIMARY_DARK,
      border: `3px solid ${theme.colors.PRIMARY_LIGHT}`,
      boxShadow: "none",
      outline: "none",
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
  }),
);

export const ErrorMessage = styled(Typography)(({ theme }) => ({
  color: theme.colors.SECONDARY_RED,
  fontSize: theme.fontSizes.fontSize20,
  fontWeight: theme.fontWeight.MEDIUM,
  textAlign: "center",
  position: "absolute",
  marginTop: "8px",
  bottom: "-20px",
  backgroundColor: theme.colors.WHITE,
  borderRadius: "20px",
  padding: "10px 20px",
  lineHeight: "100%",
  left: "50%",
  transform: "translateX(-50%)",
  whiteSpace: "nowrap",
}));

export const GreenBox = styled(Box)(({ theme }) => ({
  width: "100%",
  minHeight: "200px",
  borderRadius: "20px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  backgroundColor: alpha(theme.colors.SECONDARY_GREEN, 0.15),
}));

export const TextBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "flex-start",
  margin: "2% 0 0 3%",
});

export const GreenUl = styled("ul")(({ theme }) => ({
  color: theme.colors.SECONDARY_GREEN,
}));

export const GreenText = styled(Typography)(({ theme }) => ({
  color: theme.colors.SECONDARY_GREEN,
  fontWeight: theme.fontWeight.MEDIUM,
}));

export const ButtonsBox = styled(Box)({
  display: "flex",
  width: "100%",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
});

export const ContinueButton = styled(Button)({
  width: "240px",
  height: "44px",
});
