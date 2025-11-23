import { useTranslation } from "react-i18next";
import type { Steper } from "constants/steps";
import { Logo } from "../Logo";
import { Stepper } from "../Stepper";
import { GradientBox, Heading, HeadingContainer } from "./styles";

interface AnalysLayoutProps {
  currentStep: Steper;
  children: React.ReactNode;
}

export const AnalysLayout = ({ currentStep, children }: AnalysLayoutProps) => {
  const { t } = useTranslation();

  return (
    <>
      <GradientBox>
        <HeadingContainer>
          <Logo variant="hero" />
          <Heading>{t("logo.subtitle")}</Heading>
          <Stepper currentStep={currentStep} />
        </HeadingContainer>
        {children}
      </GradientBox>
    </>
  );
};

export default AnalysLayout;
