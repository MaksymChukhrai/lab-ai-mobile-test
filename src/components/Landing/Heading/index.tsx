import { useTranslation } from "react-i18next";
import { useMediaQuery } from "@mui/material";
import CountUp from "react-countup";
import { useTheme } from "@mui/material";
import { Logo } from "@/components/Logo";
import { LogoutButton } from "@/components/LogoutButton";
import UploadCard from "@/components/UploadCard";
import { COMPANY_LINKS } from "@/constants/navigation";
import { stats } from "@/constants/heading";
import { useSignInForm } from "@/hooks/useSignInForm";
import { useAuth } from "@/hooks/useAuth";
import CheckIcon from "locals/check.svg";
import heart from "locals/heart.svg";
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
  GetStartedButton,
  ButtonWrapper,
  PreTitleBox,
  PreTitle,
  BackgroundWrapper,
  UploadButton,
} from "./styles";

function Heading() {
  const { t } = useTranslation();
  const { handleButtonSignIn } = useSignInForm();
  const { isAuthenticated } = useAuth();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <StyledAppBar position="static">
        <StyledToolbar>
          <Logo />
          <NavBox>
            {!isMobile &&
              COMPANY_LINKS.map((link) => (
                <NavLink
                  href={link.path}
                  key={link.key}
                  underline="none"
                  color="text.primary"
                >
                  {t(link.key)}
                </NavLink>
              ))}

            {isAuthenticated ? (
              <LogoutButton />
            ) : (
              <>
                {isMobile &&
                  COMPANY_LINKS.map((link) => (
                    <NavLink
                      href={link.path}
                      key={link.key}
                      underline="none"
                      color="text.primary"
                    >
                      {t(link.key)}
                    </NavLink>
                  ))}
                {!isMobile && (
                  <GetStartedButton
                    variant="contained"
                    color="primary"
                    onClick={handleButtonSignIn}
                  >
                    {t("navLanding.button")}
                  </GetStartedButton>
                )}
              </>
            )}
          </NavBox>
        </StyledToolbar>
      </StyledAppBar>

      <Background>
        <BackgroundWrapper>
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
        </BackgroundWrapper>
        <ButtonWrapper>
          <UploadButton
            variant="contained"
            color="primary"
            onClick={handleButtonSignIn}
          >
            {t("card.button")}
          </UploadButton>
          <PreTitleBox>
            <img src={heart} alt="heart" width={18} height={18} />
            <PreTitle>{t("card.preTitle")}</PreTitle>
          </PreTitleBox>
        </ButtonWrapper>
      </Background>
      <StatContainer>
        {stats.map((stat, i) => (
          <StatBox key={i} className={`stat-${i}`}>
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
