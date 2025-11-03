import { useTranslation } from "react-i18next";
import flask from "locals/flask.svg";
import heart2 from "locals/heart2.svg";
import check2 from "locals/check2.svg";
import bulb from "locals/bulb.svg";
import book from "locals/book.svg";
import {
  GradientBox,
  BgImage,
  Container1,
  Container2,
  Container3,
  Container4,
  ContainerName,
  ContainerTitle,
  ContainerText,
  ContainerIcon,
  AboutTitleBox,
  AboutTitle,
  AboutDescription,
  TextBox,
  AboutTextTitle,
  AboutText,
} from "./styles";

function About() {
  const { t } = useTranslation();
  return (
    <>
      <GradientBox id="about">
        <AboutTitleBox>
          <AboutTitle>{t("aboutSection.title")}</AboutTitle>
          <AboutDescription>{t("aboutSection.description")}</AboutDescription>
        </AboutTitleBox>
        <BgImage src={flask} />
        <Container1>
          <ContainerTitle>
            <ContainerIcon src={heart2} />
            <ContainerName>{t("aboutSection.name1")}</ContainerName>
          </ContainerTitle>
          <ContainerText>{t("aboutSection.text1")}</ContainerText>
        </Container1>
        <Container2>
          <ContainerTitle>
            <ContainerIcon src={check2} />
            <ContainerName>{t("aboutSection.name2")}</ContainerName>
          </ContainerTitle>
          <ContainerText>{t("aboutSection.text2")}</ContainerText>
        </Container2>
        <Container3>
          <ContainerTitle>
            <ContainerIcon src={bulb} />
            <ContainerName>{t("aboutSection.name3")}</ContainerName>
          </ContainerTitle>
          <ContainerText>{t("aboutSection.text3")}</ContainerText>
        </Container3>
        <Container4>
          <ContainerTitle>
            <ContainerIcon src={book} />
            <ContainerName>{t("aboutSection.name4")}</ContainerName>
          </ContainerTitle>
          <ContainerText>{t("aboutSection.text4")}</ContainerText>
        </Container4>
        <TextBox>
          <AboutTextTitle>{t("aboutSection.caption")}</AboutTextTitle>
          <AboutText>{t("aboutSection.text")}</AboutText>
        </TextBox>
      </GradientBox>
    </>
  );
}

export default About;
