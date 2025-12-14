import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { IconButton, useMediaQuery, useTheme } from "@mui/material";
import arrow from "locals/arrow.svg";
import { useLoader, useLoaderProgress } from "hooks/useLoader";
import { useResultPage } from "@/hooks/useResultPage";
import { useGetBloodMarkersQuery } from "store/api/bloodMarkersApi";
import {
  LoaderBox,
  Subtitle,
  TextBox,
  Title,
  ButtonsBox,
  ContinueButton,
  CircleWrapper,
  Circle,
  PercentageText,
  StyledCheckIcon,
  BackImg,
} from "./styles";

function LoaderCard() {
  const { t } = useTranslation();
  const { handleBack, handleContinueSelf } = useLoader();
  const { isLoading: isFetchingMarkers } = useGetBloodMarkersQuery();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { analysisResult } = useResultPage();
  const location = useLocation();
  const loaderStep: 1 | 2 = location.state?.loaderStep ?? 1;
  const waitingForApi = loaderStep === 1 ? isFetchingMarkers : !analysisResult;

  const { progress, done, animateSuccess } = useLoaderProgress(
    loaderStep,
    waitingForApi,
  );

  return (
    <LoaderBox>
      <TextBox>
        <Title>{t("loader.title")}</Title>
        <Subtitle>{t("loader.wait")}</Subtitle>
      </TextBox>

      <CircleWrapper>
        <Circle
          progress={progress}
          $done={done}
          $animateSuccess={animateSuccess}
        >
          {done && <StyledCheckIcon $animateSuccess={animateSuccess} />}
        </Circle>
        <PercentageText $done={done} $animateSuccess={animateSuccess}>
          {done
            ? animateSuccess
              ? t("loader.done")
              : t("loader.100")
            : `${progress}%`}
        </PercentageText>
      </CircleWrapper>
      {isMobile && (
        <ContinueButton
          variant="contained"
          disabled={!animateSuccess}
          onClick={() => handleContinueSelf(loaderStep)}
        >
          {t("loader.continue1")}
        </ContinueButton>
      )}

      <ButtonsBox>
        <IconButton onClick={handleBack}>
          <BackImg src={arrow} alt="arrow" />
        </IconButton>
        {!isMobile && (
          <ContinueButton
            variant="contained"
            disabled={!animateSuccess}
            onClick={() => handleContinueSelf(loaderStep)}
          >
            {t("loader.continue1")}
          </ContinueButton>
        )}
      </ButtonsBox>
    </LoaderBox>
  );
}

export default LoaderCard;
