import { useTranslation } from "react-i18next";
import { useOptionsPage } from "hooks/useOptionsPage";
import { useLoader } from "@/hooks/useLoader";
import { useGetBloodMarkersQuery } from "store/api/bloodMarkersApi";
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
  FormTitleMobile,
  OptionIconBox,
} from "./styles";

export const OptionsPage = () => {
  const { t } = useTranslation();
  const { selectedOptions, handleToggleOption, handleBack } = useOptionsPage();
  const { handleContinue } = useLoader();
  const { isLoading: isFetchingMarkers } = useGetBloodMarkersQuery();

  return (
    <AnalysLayout currentStep={STEPS[1]}>
      <ContentContainer>
        <FormTitle>{t("options.title")}</FormTitle>
        <FormTitleMobile>{t("options.mobileTitle")}</FormTitleMobile>
        <FormSubtitle>{t("options.subtitle")}</FormSubtitle>

        <OptionsGrid>
          {OPTIONS_CONFIG.map((option) => (
            <OptionCard
              key={option.id}
              isSelected={selectedOptions.includes(option.id)}
              onClick={() => handleToggleOption(option.id)}
            >
              <OptionIconBox isSelected={selectedOptions.includes(option.id)}>
                <OptionIcon src={option.icon} alt={t(option.titleKey)} />
              </OptionIconBox>
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
            onClick={() => handleContinue(1, isFetchingMarkers)}
            disabled={selectedOptions.length === 0}
          >
            {t("options.continue")}
          </ContinueButton>
        </FooterActions>
      </ContentContainer>
    </AnalysLayout>
  );
};
