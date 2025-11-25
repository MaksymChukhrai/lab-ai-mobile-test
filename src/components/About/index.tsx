import { useTranslation } from "react-i18next";
import flask from "locals/flask.svg";
import heart2 from "locals/heart2.svg";
import check2 from "locals/check2.svg";
import one from "locals/one.svg";
import two from "locals/two.svg";
import three from "locals/three.svg";
import four from "locals/four.svg";
import bulb from "locals/bulb.svg";
import book from "locals/book.svg";
import { useAbout } from "./useAboutHooks";
import { CONTAINER_INDEX, SHOW } from "constants/about";
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
  AboutTextWrapper,
  ParagraphBox,
  AboutTextIcon,
  AboutTextIconEdit,
} from "./styles";

function About() {
  const { t } = useTranslation();
  const { isMobile, sectionRef, showTitle, showContainers } = useAbout();

  return (
    <>
      <GradientBox id="about" ref={sectionRef}>
        <AboutTitleBox className={isMobile && showTitle ? SHOW : ""}>
          <AboutTitle>{t("aboutSection.title")}</AboutTitle>
          <AboutDescription>{t("aboutSection.description")}</AboutDescription>
        </AboutTitleBox>
        <BgImage src={flask} />
        <Container1
          className={
            isMobile && showContainers[CONTAINER_INDEX.HEART] ? SHOW : ""
          }
        >
          <ContainerTitle>
            <ContainerIcon src={heart2} />
            <ContainerName>{t("aboutSection.name1")}</ContainerName>
          </ContainerTitle>
          <ContainerText>{t("aboutSection.text1")}</ContainerText>
        </Container1>
        <Container2
          className={
            isMobile && showContainers[CONTAINER_INDEX.CHECK] ? SHOW : ""
          }
        >
          <ContainerTitle>
            <ContainerIcon src={check2} />
            <ContainerName>{t("aboutSection.name2")}</ContainerName>
          </ContainerTitle>
          <ContainerText>{t("aboutSection.text2")}</ContainerText>
        </Container2>
        <Container3
          className={
            isMobile && showContainers[CONTAINER_INDEX.BULB] ? SHOW : ""
          }
        >
          <ContainerTitle>
            <ContainerIcon src={bulb} />
            <ContainerName>{t("aboutSection.name3")}</ContainerName>
          </ContainerTitle>
          <ContainerText>{t("aboutSection.text3")}</ContainerText>
        </Container3>
        <Container4
          className={
            isMobile && showContainers[CONTAINER_INDEX.BOOK] ? SHOW : ""
          }
        >
          <ContainerTitle>
            <ContainerIcon src={book} />
            <ContainerName>{t("aboutSection.name4")}</ContainerName>
          </ContainerTitle>
          <ContainerText>{t("aboutSection.text4")}</ContainerText>
        </Container4>
        <TextBox>
          <AboutTextTitle>{t("aboutSection.caption")}</AboutTextTitle>
          <AboutTextWrapper>
            <ParagraphBox>
              <AboutText>{t("aboutSection.line1")}</AboutText>
              <AboutTextIconEdit src={one} />
            </ParagraphBox>
            <ParagraphBox>
              <AboutText>{t("aboutSection.line2")}</AboutText>
              <AboutTextIcon src={two} />
            </ParagraphBox>
            <ParagraphBox>
              <AboutText>{t("aboutSection.line3")}</AboutText>
              <AboutTextIcon src={three} />
            </ParagraphBox>
            <ParagraphBox>
              <AboutText>{t("aboutSection.line4")}</AboutText>
              <AboutTextIcon src={four} />
            </ParagraphBox>
          </AboutTextWrapper>
        </TextBox>
      </GradientBox>
    </>
  );
}

export default About;
