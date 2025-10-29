import { Container, Typography, Divider } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Logo } from "components/Logo";
import {
  PageWrapper,
  ContentContainer,
  SectionBox,
  HeaderBox,
  FooterBox,
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
      <Container maxWidth="md">
        <HeaderBox>
          <Logo variant="hero" />
          <Typography
            variant="h3"
            component="h1"
            sx={{ mt: 3, mb: 1, fontWeight: 600 }}
          >
            {t("termsOfService.title")}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {t("termsOfService.lastUpdated")}
          </Typography>
        </HeaderBox>

        <Divider sx={{ my: 4 }} />

        <ContentContainer>
          {sections.map((section) => (
            <SectionBox key={section}>
              <Typography
                variant="h5"
                component="h2"
                sx={{ mb: 2, fontWeight: 500 }}
              >
                {t(`termsOfService.sections.${section}.title`)}
              </Typography>
              <Typography variant="body1" paragraph>
                {t(`termsOfService.sections.${section}.content`)}
              </Typography>
            </SectionBox>
          ))}
        </ContentContainer>

        <FooterBox>
          <Divider sx={{ mb: 2 }} />
          <Typography variant="body2" color="text.secondary" align="center">
            {t("footer.copyright")}
          </Typography>
        </FooterBox>
      </Container>
    </PageWrapper>
  );
};
