import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { STEP_PATHS, STEPS, type Steper } from "constants/steps";
import {
  StepsContainer,
  StepWrapper,
  StepContent,
  StepIcon,
  StepLabel,
  StepConnector,
} from "./styles";

interface StepperProps {
  currentStep: Steper;
}

export const Stepper = ({ currentStep }: StepperProps) => {
  const { t } = useTranslation();
  const currentIndex = STEPS.indexOf(currentStep);
  const navigate = useNavigate();

  const handleStepClick = (step: Steper, index: number) => {
    if (index <= currentIndex) {
      navigate(STEP_PATHS[step]);
    }
  };

  return (
    <StepsContainer>
      {STEPS.map((step, index) => {
        let status: "completed" | "active" | "upcoming";
        if (index < currentIndex) {
          status = "completed";
        } else if (index === currentIndex) {
          status = "active";
        } else {
          status = "upcoming";
        }

        const isClickable = index <= currentIndex;

        return (
          <StepWrapper
            key={step}
            onClick={() => handleStepClick(step, index)}
            style={{
              cursor: isClickable ? "pointer" : "default",
            }}
          >
            <StepContent>
              <StepIcon status={status}>{index + 1}</StepIcon>
              <StepLabel status={status}>{t(`steps.${step}`)}</StepLabel>
            </StepContent>
            {index < STEPS.length - 1 && <StepConnector />}
          </StepWrapper>
        );
      })}
    </StepsContainer>
  );
};
