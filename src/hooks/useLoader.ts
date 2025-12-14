import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  ANIMATION_DELAY_MS,
  DONE_DELAY_MS,
  PROGRESS_STEP,
  TIMER_INTERVAL_MS,
  TIMER_INTERVAL_MS_LONG,
  PROGRESS_MAX_BEFORE_WAIT,
  PROGRESS_COMPLETE,
} from "constants/loader";
import { PATHS } from "constants/navigation";

export const useLoader = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(PATHS.OPTION);
  };

  const handleContinue = (
    nextLoaderStep: 1 | 2 = 1,
    waitingForApi: boolean = false,
  ) => {
    navigate(PATHS.LOADER, {
      state: { loaderStep: nextLoaderStep, waitingForApi },
    });
  };

  const handleContinueSelf = (currentLoaderStep: 1 | 2) => {
    const targetPath = currentLoaderStep === 2 ? PATHS.RESULT : PATHS.REVIEW;

    navigate(targetPath);
  };

  return {
    handleBack,
    handleContinue,
    handleContinueSelf,
  };
};

export const useLoaderProgress = (
  loaderStep: 1 | 2,
  waitingForApi: boolean,
) => {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const [animateSuccess, setAnimateSuccess] = useState(false);

  const currentInterval =
    loaderStep === 1 ? TIMER_INTERVAL_MS : TIMER_INTERVAL_MS_LONG;

  useEffect(() => {
    if (done) return;

    if (progress < PROGRESS_MAX_BEFORE_WAIT) {
      const timer = setTimeout(
        () => setProgress((p) => p + PROGRESS_STEP),
        currentInterval,
      );

      return () => clearTimeout(timer);
    }

    if (progress >= PROGRESS_MAX_BEFORE_WAIT && waitingForApi) {
      return;
    }

    if (progress < PROGRESS_COMPLETE && !waitingForApi) {
      const timer = setTimeout(
        () =>
          setProgress((p) => Math.min(PROGRESS_COMPLETE, p + PROGRESS_STEP)),
        TIMER_INTERVAL_MS,
      );

      return () => clearTimeout(timer);
    }

    if (progress === PROGRESS_COMPLETE) {
      const doneTimeout = setTimeout(() => {
        setDone(true);
        setTimeout(() => setAnimateSuccess(true), ANIMATION_DELAY_MS);
      }, DONE_DELAY_MS);

      return () => clearTimeout(doneTimeout);
    }
  }, [progress, waitingForApi, done, loaderStep, currentInterval]);

  return {
    progress,
    done,
    animateSuccess,
  };
};
