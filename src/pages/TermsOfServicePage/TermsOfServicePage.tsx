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

export const TermsOfServicePage = () => {
  const { t } = useTranslation();

  const sections = [
    "acceptance",
    "description",
    "accounts",
    "conduct",
    "intellectual",
    "disclaimer",
    "liability",
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
            {t("termsOfService.title")}
          </Typography>

          <Typography variant="legalPageSubtitle">
            {t("termsOfService.lastUpdated")}
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
                {t(`termsOfService.sections.${section}.title`)}
              </Typography>

              <Typography variant="legalSectionBody" paragraph>
                {t(`termsOfService.sections.${section}.content`)}
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
