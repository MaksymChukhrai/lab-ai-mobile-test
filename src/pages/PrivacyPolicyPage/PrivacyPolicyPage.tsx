import { Container, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Logo } from "components/Logo";
import {
  PageWrapper,
  ContentContainer,
  SectionBox,
  HeaderBox,
  FooterBox,
  TopDivider,
  BottomDivider,
} from "./styles";

export const PrivacyPolicyPage = () => {
  const { t } = useTranslation();

  const sections = [
    "introduction",
    "collection",
    "usage",
    "storage",
    "thirdParty",
    "rights",
    "cookies",
    "children",
    "changes",
    "contact",
  ];

  return (
    <PageWrapper>
      <Container maxWidth={false} disableGutters>
        <HeaderBox>
          <Logo variant="page" />

          <Typography
            variant="legalPageTitle"
            component="h1"
            sx={{ mt: 3, mb: 1 }}
          >
            {t("privacyPolicy.title")}
          </Typography>

          <Typography variant="legalPageSubtitle">
            {t("privacyPolicy.lastUpdated")}
          </Typography>
        </HeaderBox>

        <TopDivider />

        <ContentContainer>
          {sections.map((section) => (
            <SectionBox key={section}>
              <Typography
                variant="legalSectionTitle"
                component="h2"
                sx={{ mb: 2 }}
              >
                {t(`privacyPolicy.sections.${section}.title`)}
              </Typography>

              <Typography variant="legalSectionBody" paragraph>
                {t(`privacyPolicy.sections.${section}.content`)}
              </Typography>
            </SectionBox>
          ))}
        </ContentContainer>

        <FooterBox>
          <BottomDivider />
          <Typography variant="legalPageSubtitle">
            {t("footer.copyright")}
          </Typography>
        </FooterBox>
      </Container>
    </PageWrapper>
  );
};
