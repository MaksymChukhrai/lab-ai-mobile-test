import { useTranslation } from "react-i18next";
import { useOptionsPage } from "hooks/useOptionsPage";
import { useLoader } from "@/hooks/useLoader";
import { OPTIONS_CONFIG } from "constants/options";
import { STEPS } from "constants/steps";
import AnalysLayout from "components/AnalysLayout";
import arrow from "locals/arrow.svg";
import {
  ContentContainer,
  OptionsGrid,
  OptionCard,
  CardContent,
  FooterActions,
  BackButton,
  FormTitle,
  FormSubtitle,
  OptionTitle,
  OptionSubtitle,
  ContinueButton,
  OptionIcon,
} from "./styles";

export const OptionsPage = () => {
  const { t } = useTranslation();
  const { selectedOptions, handleToggleOption, handleBack } = useOptionsPage();
  const { handleContinue } = useLoader();

  return (
    <AnalysLayout currentStep={STEPS[1]}>
      <ContentContainer>
        <FormTitle>{t("options.title")}</FormTitle>
        <FormSubtitle>{t("options.subtitle")}</FormSubtitle>

        <OptionsGrid>
          {OPTIONS_CONFIG.map((option) => (
            <OptionCard
              key={option.id}
              isSelected={selectedOptions.includes(option.id)}
              onClick={() => handleToggleOption(option.id)}
            >
              <OptionIcon isSelected={selectedOptions.includes(option.id)}>
                <img src={option.icon} alt={t(option.titleKey)} />
              </OptionIcon>
              <CardContent>
                <OptionTitle>{t(option.titleKey)}</OptionTitle>
                <OptionSubtitle>{t(option.descKey)}</OptionSubtitle>
              </CardContent>
            </OptionCard>
          ))}
        </OptionsGrid>

        <FooterActions>
          <BackButton onClick={handleBack} aria-label={t("common.back")}>
            <img src={arrow} alt="arrow" />
          </BackButton>
          <ContinueButton
            onClick={() => handleContinue(1)}
            disabled={selectedOptions.length === 0}
          >
            {t("options.continue")}
          </ContinueButton>
        </FooterActions>
      </ContentContainer>
    </AnalysLayout>
  );
};
