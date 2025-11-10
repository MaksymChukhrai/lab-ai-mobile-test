import { useTranslation } from "react-i18next";
import logoDark from "locals/logoDark.svg";
import logoLight from "locals/logo.svg";
import { LogoContainer, LogoImage, LogoText } from "./styles";

interface LogoProps {
  light?: boolean;
  variant?: "default" | "hero" | "page";
}

export const Logo = ({ light = false, variant = "default" }: LogoProps) => {
  const { t } = useTranslation();

  const logoSrc = light ? logoLight : logoDark;

  return (
    <LogoContainer>
      <LogoImage src={logoSrc} alt={t("logo.alt")} $variant={variant} />
      <LogoText $light={light} $variant={variant}>
        {t("logo.title")}
      </LogoText>
    </LogoContainer>
  );
};
