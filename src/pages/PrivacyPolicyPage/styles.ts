import { styled, Box } from "@mui/material";

export const PageWrapper = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  backgroundColor: theme.palette.background.default,
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
}));

export const ContentContainer = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(4),

  "& .MuiTypography-body1": {
    color: theme.palette.text.primary,
  },
}));

export const SectionBox = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  "&:last-child": {
    marginBottom: 0,
  },
}));

export const HeaderBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  paddingTop: theme.spacing(2),

  "& .MuiTypography-body2": {
    fontSize: 14,
    color: theme.palette.text.secondary,
  },
}));

export const FooterBox = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(6),

  "& .MuiTypography-body2": {
    fontSize: 14,
    color: theme.palette.text.secondary,
  },
}));
