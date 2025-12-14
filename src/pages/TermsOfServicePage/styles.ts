import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import { alpha } from "@mui/material/styles";

export const PageWrapper = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  backgroundColor: theme.colors.WHITE,
  padding: 0,

  "& > div": {
    paddingLeft: 0,
    paddingRight: 0,
    maxWidth: 1020,

    [theme.breakpoints.down("md")]: {
      paddingLeft: 16,
      paddingRight: 16,
    },

    "@media (max-width: 426px)": {
      paddingLeft: 28,
      paddingRight: 27,
    },
  },
}));

export const ContentContainer = styled(Box)(({ theme }) => ({
  marginTop: 0,
  marginBottom: 0,

  "& .MuiTypography-body1": {
    color: theme.colors.PRIMARY_DARK,
  },
}));

export const SectionBox = styled(Box)(({ theme }) => ({
  marginBottom: 32,

  "&:last-child": {
    marginBottom: 0,
  },

  "& h2": {
    marginBottom: 10,
  },

  "@media (max-width: 426px)": {
    marginBottom: 0,

    "& h2": {
      fontWeight: theme.fontWeight.SEMIBOLD,
      fontSize: theme.fontSizes.fontSize16,
      marginBottom: 0,
    },

    "& p": {
      fontWeight: theme.fontWeight.REGULAR,
      fontSize: theme.fontSizes.fontSize16,
      lineHeight: 1,
    },
  },
}));

export const HeaderBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  marginTop: 73,
  marginBottom: 42,

  [theme.breakpoints.down("md")]: {
    marginTop: 32,
    marginBottom: 24,
  },

  "@media (max-width: 426px)": {
    marginTop: 60,
    marginBottom: 6,
  },

  "& .MuiTypography-body2": {
    fontSize: theme.fontSizes.fontSize14,
    color: theme.colors.SECONDARY_GRAY,
  },

  "& h1": {
    marginTop: 0,
    marginBottom: 10,

    "@media (max-width: 426px)": {
      fontSize: theme.fontSizes.fontSize24,
    },
  },

  "& .MuiTypography-legalPageSubtitle": {
    "@media (max-width: 426px)": {
      fontSize: theme.fontSizes.fontSize14,
    },
  },

  "& > div": {
    marginBottom: 42,
  },
}));

export const FooterBox = styled(Box)(({ theme }) => ({
  marginTop: 48,
  marginBottom: 73,

  [theme.breakpoints.down("md")]: {
    marginBottom: 32,
  },

  "@media (max-width: 426px)": {
    marginTop: 60,
    marginBottom: 10,
  },

  "& .MuiTypography-root": {
    fontSize: theme.fontSizes.fontSize20,
    color: theme.colors.SECONDARY_GRAY,
    margin: "0 auto",
    display: "block",
    textAlign: "center",
    width: "fit-content",

    "@media (max-width: 426px)": {
      fontSize: theme.fontSizes.fontSize16,
    },
  },

  "& .MuiTypography-legalPageSubtitle": {
    "@media (max-width: 426px)": {
      fontSize: theme.fontSizes.fontSize14,
    },
  },
}));

export const TopDivider = styled(Box)(({ theme }) => ({
  height: 1,
  width: 1020,
  maxWidth: 1020,
  backgroundColor: alpha(theme.colors.PRIMARY_DARK, 0.1),
  marginTop: 26,
  marginRight: "auto",
  marginBottom: 87,
  marginLeft: "auto",
  opacity: 1,

  [theme.breakpoints.down("md")]: {
    width: "calc(100% - 32px)",
    maxWidth: "100%",
    marginTop: 16,
    marginBottom: 32,
  },

  "@media (max-width: 426px)": {
    marginTop: 10,
    marginBottom: 37,
    width: "100%",
    maxWidth: "100%",
  },
}));

export const BottomDivider = styled(Box)(({ theme }) => ({
  height: 1,
  width: "100%",
  maxWidth: 1020,
  backgroundColor: alpha(theme.colors.PRIMARY_DARK, 0.1),
  marginTop: 100,
  marginRight: "auto",
  marginBottom: 23,
  marginLeft: "auto",
  opacity: 1,

  [theme.breakpoints.down("md")]: {
    maxWidth: "100%",
    marginTop: 48,
    marginBottom: 16,
  },

  "@media (max-width: 426px)": {
    marginTop: 0,
    marginBottom: 10,
  },
}));
