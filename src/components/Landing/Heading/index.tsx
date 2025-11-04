import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import CountUp from "react-countup";
import { Logo } from "@/components/Logo";
import UploadCard from "@/components/UploadCard";
import { COMPANY_LINKS } from "@/constants/navigation";
import { stats } from "@/constants/heading";
import { useSignInForm } from "@/hooks/useSignInForm";
import CheckIcon from "locals/check.svg";
import {
  StyledAppBar,
  StyledToolbar,
  NavBox,
  Background,
  BgTextContainer,
  LeftHeading,
  LeftSubtitle,
  Criteria,
  CriteriaIcon,
  CriteriaText,
  CriteriaItem,
  NavLink,
  StatContainer,
  StatBox,
  Stat,
  Line,
  StatName,
} from "./styles";

function Heading() {
  const { t } = useTranslation();
  const { handleButtonSignIn } = useSignInForm();

  return (
    <>
      <StyledAppBar position="static">
        <StyledToolbar>
          <Logo />
          <NavBox>
            {COMPANY_LINKS.map((link) => (
              <NavLink
                href={link.path}
                key={link.key}
                underline="none"
                color="text.primary"
              >
                {t(link.key)}
              </NavLink>
            ))}
            <Button
              variant="contained"
              color="primary"
              onClick={handleButtonSignIn}
            >
              {t("navLanding.button")}
            </Button>
          </NavBox>
        </StyledToolbar>
      </StyledAppBar>

      <Background>
        <BgTextContainer>
          <LeftHeading>{t("bg.heading")}</LeftHeading>
          <LeftSubtitle>{t("bg.text")}</LeftSubtitle>
          <Criteria>
            <CriteriaItem>
              <CriteriaIcon src={CheckIcon} alt="check" />
              <CriteriaText>{t("bg.criteria1")}</CriteriaText>
            </CriteriaItem>

            <CriteriaItem>
              <CriteriaIcon src={CheckIcon} alt="check" />
              <CriteriaText>{t("bg.criteria2")}</CriteriaText>
            </CriteriaItem>

            <CriteriaItem>
              <CriteriaIcon src={CheckIcon} alt="check" />
              <CriteriaText>{t("bg.criteria3")}</CriteriaText>
            </CriteriaItem>
          </Criteria>
        </BgTextContainer>
        <UploadCard mode="preview" />
      </Background>
      <StatContainer>
        {stats.map((stat, i) => (
          <StatBox key={i}>
            <StatName>
              <CountUp
                start={0}
                end={stat.value}
                duration={0.4}
                separator=" "
                decimals={stat.value % 1 !== 0 ? 1 : 0}
                suffix={stat.suffix ?? ""}
              />
            </StatName>
            <Stat>{stat.desc}</Stat>
          </StatBox>
        ))}
      </StatContainer>

      <Line />
    </>
  );
}

export default Heading;
