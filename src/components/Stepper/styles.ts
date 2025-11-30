import { styled, Box, Typography, alpha } from "@mui/material";
import type { Theme } from "@mui/material";

interface StepProps {
  status: "completed" | "active" | "upcoming";
}

const getStatusColor = (status: string, theme: Theme): string => {
  switch (status) {
    case "active":
      return theme.colors.PRIMARY_DARK;
    case "completed":
      return theme.colors.PRIMARY_LIGHT;
    default:
      return alpha(theme.colors.PRIMARY_DARK, 0.3);
  }
};

export const StepsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  marginTop: "40px",
  gap: "12px",

  [theme.breakpoints.down("sm")]: {
    marginTop: "10px",
  },
}));

export const StepWrapper = styled(Box)({
  display: "flex",
  alignItems: "center",
});

export const StepContent = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",

  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    justifyContent: "center",
  },
}));

export const StepIcon = styled(Box)<StepProps>(({ theme, status }) => ({
  width: "33px",
  height: "33px",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.colors.WHITE,
  fontWeight: theme.fontWeight.MEDIUM,
  fontSize: theme.fontSizes.fontSize20,
  fontFamily: theme.fontFamily.POPPINS,
  transition: "all 0.3s ease",
  backgroundColor: getStatusColor(status, theme),

  [theme.breakpoints.down("sm")]: {
    fontSize: theme.fontSizes.fontSize12,
    width: "23px",
    height: "23px",
  },
}));

export const StepLabel = styled(Typography)<StepProps>(({ theme, status }) => ({
  marginLeft: "12px",
  fontWeight: theme.fontWeight.MEDIUM,
  fontSize: theme.fontSizes.fontSize22,
  fontFamily: theme.fontFamily.POPPINS,
  color: getStatusColor(status, theme),

  [theme.breakpoints.down("sm")]: {
    fontSize: theme.fontSizes.fontSize12,
    marginLeft: 0,
  },
}));

export const StepConnector = styled(Box)(({ theme }) => ({
  borderBottom: `1px solid ${alpha(theme.colors.PRIMARY_DARK, 0.3)}`,
  width: "57px",
  marginLeft: "12px",

  [theme.breakpoints.down("sm")]: {
    width: "25px",
    marginBottom: "10px",
  },
}));
