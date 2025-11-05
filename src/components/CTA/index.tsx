import { useTranslation } from "react-i18next";
import { useSignInForm } from "@/hooks/useSignInForm";
import { Wrapper, Subtitle, CtaButton, Title } from "./styles";

export const CTA = () => {
  const { t } = useTranslation();
  const { handleButtonSignIn } = useSignInForm();

  return (
    <Wrapper>
      <Title>{t("CTA.title")}</Title>

      <Subtitle>{t("CTA.subtitle")}</Subtitle>

      <CtaButton
        variant="contained"
        color="primary"
        onClick={handleButtonSignIn}
      >
        {t("CTA.buttonText")}
      </CtaButton>
    </Wrapper>
  );
};
