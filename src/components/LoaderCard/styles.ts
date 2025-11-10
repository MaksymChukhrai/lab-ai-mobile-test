import { styled, keyframes, alpha } from "@mui/material/styles";
import { Box, Typography, Button } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

export const LoaderBox = styled(Box)(({ theme }) => ({
  width: "1284px",
  height: "708px",
  borderRadius: "15px",
  backgroundColor: theme.colors.WHITE,
  boxShadow: `0px 4px 4px 0px ${alpha(theme.colors.PRIMARY_DARK, 0.25)}`,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
}));

export const TextBox = styled(Box)({
  width: "556px",
  height: "110px",
  marginTop: "60px",
  display: "flex",
  flexDirection: "column",
  alignItems: "space-between",
});

export const Title = styled(Typography)(({ theme }) => ({
  fontFamily: theme.fontFamily.DM_SANS,
  fontWeight: theme.fontWeight.BOLD,
  fontSize: theme.fontSizes.fontSize32,
  lineHeight: theme.lineHeights.lineHeight70,
  letterSpacing: "0%",
  textAlign: "center",
  color: theme.colors.PRIMARY_DARK,
}));

export const Subtitle = styled(Typography)(({ theme }) => ({
  fontFamily: theme.fontFamily.POPPINS,
  fontWeight: theme.fontWeight.LIGHT,
  fontSize: theme.fontSizes.fontSize20,
  lineHeight: theme.lineHeights.lineHeight35,
  letterSpacing: "0%",
  textAlign: "center",
  color: theme.colors.PRIMARY_DARK,
}));

export const CircleWrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  flexGrow: 1,
});

export const PercentageText = styled("div")<{
  done: boolean;

  animateSuccess: boolean;
}>(({ done, animateSuccess, theme }) => ({
  fontFamily: theme.fontFamily.POPPINS,
  fontWeight: theme.fontWeight.LIGHT,
  fontSize: animateSuccess
    ? theme.fontSizes.fontSize24
    : theme.fontSizes.fontSize36,

  lineHeight: theme.lineHeights.lineHeight35,
  textAlign: "center",
  verticalAlign: "middle",
  color: done
    ? alpha(theme.colors.SECONDARY_GREEN, 0.7)
    : theme.colors.PRIMARY_DARK,

  marginTop: "16px",
  marginLeft: "8px",
  transition: "all 0.6s ease",
}));

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

export const Circle = styled("div")<{
  progress: number;
  done: boolean;
  animateSuccess: boolean;
}>(({ done, animateSuccess, theme }) => {
  const showGap = !done;

  return {
    position: "relative",
    width: "77.1875px",
    height: "77.1875px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "visible",
    transition: "all 0.4s ease",

    background: animateSuccess
      ? theme.colors.SECONDARY_GREEN
      : done
        ? "transparent"
        : `conic-gradient(
          ${theme.colors.PRIMARY_DARK} 0deg,
          ${theme.colors.PRIMARY_LIGHT} 280deg,
          transparent 280deg,
          transparent 360deg
        )`,

    animation: showGap ? `${rotate} 1s linear infinite` : "none",

    ...(done && !animateSuccess
      ? {
          border: `10px solid ${theme.colors.SECONDARY_GREEN}`,
        }
      : {}),

    ...(done || animateSuccess
      ? {}
      : {
          mask: "radial-gradient(farthest-side, transparent calc(100% - 10px), black 0)",
          WebkitMask:
            "radial-gradient(farthest-side, transparent calc(100% - 10px), black 0)",
        }),
  };
});

export const StyledCheckIcon = styled(CheckIcon)<{
  animateSuccess: boolean;
}>(({ animateSuccess, theme }) => ({
  fontSize: theme.fontSizes.fontSize40,

  color: animateSuccess
    ? `${theme.colors.WHITE}`
    : `${theme.colors.SECONDARY_GREEN}`,

  transition: "color 0.6s ease",
}));

export const ButtonsBox = styled(Box)({
  display: "flex",
  width: "90%",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "0px 0px 30px 0px",
});

export const ContinueButton = styled(Button)({
  width: "240px",
  height: "44px",
});
