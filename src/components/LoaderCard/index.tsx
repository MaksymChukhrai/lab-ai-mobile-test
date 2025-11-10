import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { IconButton } from "@mui/material";
import {
  ANIMATION_DELAY_MS,
  DONE_DELAY_MS,
  PROGRESS_STEP,
  TIMER_INTERVAL_MS,
} from "constants/loader";
import arrow from "locals/arrow.svg";
import { useLoader } from "hooks/useLoader";
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
} from "./styles";

function LoaderCard() {
  const { t } = useTranslation();
  const { handleBack, handleContinueSelf } = useLoader();
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const [animateSuccess, setAnimateSuccess] = useState(false);

  useEffect(() => {
    if (progress < 100) {
      const timer = setTimeout(
        () => setProgress((progress) => progress + PROGRESS_STEP),
        TIMER_INTERVAL_MS,
      );

      return () => clearTimeout(timer);
    } else {
      const timeout = setTimeout(() => setDone(true), DONE_DELAY_MS);
      const animTimeout = setTimeout(
        () => setAnimateSuccess(true),
        ANIMATION_DELAY_MS,
      );

      return () => {
        clearTimeout(timeout);
        clearTimeout(animTimeout);
      };
    }
  }, [progress]);

  return (
    <LoaderBox>
      <TextBox>
        <Title>{t("loader.title")}</Title>
        <Subtitle>{t("loader.wait")}</Subtitle>
      </TextBox>

      <CircleWrapper>
        <Circle progress={progress} done={done} animateSuccess={animateSuccess}>
          {done && <StyledCheckIcon animateSuccess={animateSuccess} />}
        </Circle>
        <PercentageText done={done} animateSuccess={animateSuccess}>
          {done
            ? animateSuccess
              ? t("loader.done")
              : t("loader.100")
            : `${progress}%`}
        </PercentageText>
      </CircleWrapper>

      <ButtonsBox>
        <IconButton onClick={handleBack}>
          <img src={arrow} alt="arrow" />
        </IconButton>
        <ContinueButton
          variant="contained"
          disabled={!animateSuccess}
          onClick={handleContinueSelf}
        >
          {t("loader.continue1")}
        </ContinueButton>
      </ButtonsBox>
    </LoaderBox>
  );
}

export default LoaderCard;
