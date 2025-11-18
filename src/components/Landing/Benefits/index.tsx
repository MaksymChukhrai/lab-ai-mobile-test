import { useTranslation } from "react-i18next";
import person from "locals/person.svg";
import potion from "locals/potion.svg";
import lightning from "locals/lightning.svg";
import {
  BenefitsContainer,
  BenefitsHeading,
  BenefitsText,
  CardsBox,
  Card,
  CardTitle,
  CardDescription,
  BenefitsDescription,
} from "./styles";

function Benefits() {
  const { t } = useTranslation();

  return (
    <>
      <BenefitsContainer id="use-cases">
        <BenefitsText>
          <BenefitsHeading>{t("benefits.title")}</BenefitsHeading>
          <BenefitsDescription>{t("benefits.description")}</BenefitsDescription>
        </BenefitsText>
        <CardsBox>
          <Card>
            <img src={person} alt="person" />
            <CardTitle>{t("benefits.title1")}</CardTitle>
            <CardDescription>{t("benefits.description1")}</CardDescription>
          </Card>
          <Card>
            <img src={potion} alt="potion" />
            <CardTitle>{t("benefits.title2")}</CardTitle>
            <CardDescription>{t("benefits.description2")}</CardDescription>
          </Card>
          <Card>
            <img src={lightning} alt="lightning" />
            <CardTitle>{t("benefits.title3")}</CardTitle>
            <CardDescription>{t("benefits.description3")}</CardDescription>
          </Card>
        </CardsBox>
      </BenefitsContainer>
    </>
  );
}

export default Benefits;
