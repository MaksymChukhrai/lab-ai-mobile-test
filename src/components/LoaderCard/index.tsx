import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { IconButton, useMediaQuery, useTheme } from "@mui/material";
import {
  ANIMATION_DELAY_MS,
  DONE_DELAY_MS,
  PROGRESS_STEP,
  TIMER_INTERVAL_MS,
  TIMER_INTERVAL_MS_LONG,
} from "constants/loader";
import arrow from "locals/arrow.svg";
import { useLoader } from "hooks/useLoader";
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
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const [animateSuccess, setAnimateSuccess] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { analysisResult } = useResultPage();

  const location = useLocation();
  const loaderStep: 1 | 2 = location.state?.loaderStep ?? 1;
  const waitingForApi = loaderStep === 1 ? isFetchingMarkers : !analysisResult;
  const currentInterval =
    loaderStep === 1 ? TIMER_INTERVAL_MS : TIMER_INTERVAL_MS_LONG;

  useEffect(() => {
    if (done) return;

    if (progress < 80) {
      const timer = setTimeout(
        () => setProgress((progress) => progress + PROGRESS_STEP),
        currentInterval,
      );

      return () => clearTimeout(timer);
    }

    if (progress >= 80 && waitingForApi) {
      return;
    }

    if (progress < 100 && !waitingForApi) {
      const timer = setTimeout(
        () =>
          setProgress((progress) => Math.min(100, progress + PROGRESS_STEP)),
        TIMER_INTERVAL_MS,
      );

      return () => clearTimeout(timer);
    }

    if (progress === 100) {
      const doneTimeout = setTimeout(() => {
        setDone(true);
        setTimeout(() => setAnimateSuccess(true), ANIMATION_DELAY_MS);
      }, DONE_DELAY_MS);

      return () => clearTimeout(doneTimeout);
    }
  }, [progress, waitingForApi, done, currentInterval]);

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
