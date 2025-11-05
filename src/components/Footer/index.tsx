import { useTranslation } from "react-i18next";
import { Box, Grid } from "@mui/material";
import { COMPANY_LINKS, SUPPORT_LINKS } from "constants/navigation";
import { Logo } from "components/Logo";
import {
  FooterWrapper,
  Description,
  FooterLink,
  FooterDivider,
  FooterLinkContainer,
  GridWrapper,
  LinkTitle,
  Caption,
} from "./styles";

interface FooterProps {
  variant?: "full" | "compact";
}

export const Footer = ({ variant = "full" }: FooterProps) => {
  const { t } = useTranslation();

  return (
    <FooterWrapper $variant={variant}>
      <GridWrapper container spacing={5} $variant={variant}>
        <Grid size={6}>
          <Logo light />
          <Description $variant={variant}>
            {t("footer.description")}
          </Description>
        </Grid>

        {variant === "full" && (
          <Grid size={3}>
            <LinkTitle>{t("footer.companyTitle")}</LinkTitle>
            <Box component="nav">
              {COMPANY_LINKS.map((link) => (
                <FooterLink
                  href={link.path}
                  key={link.key}
                  variant="body1"
                  display="block"
                  mb={"4px"}
                >
                  {t(link.key)}
                </FooterLink>
              ))}
            </Box>
          </Grid>
        )}
        <Grid size={variant === "full" ? 3 : 4}>
          {variant === "full" && (
            <LinkTitle>{t("footer.supportTitle")}</LinkTitle>
          )}
          <FooterLinkContainer $variant={variant}>
            {SUPPORT_LINKS.map((link) => (
              <FooterLink
                href={link.path}
                key={link.key}
                display="block"
                mb={"4px"}
              >
                {t(link.key)}
              </FooterLink>
            ))}
          </FooterLinkContainer>
        </Grid>
      </GridWrapper>
      {variant === "full" && (
        <>
          <FooterDivider />
          <Caption variant="caption">{t("footer.copyright")}</Caption>
        </>
      )}
    </FooterWrapper>
  );
};
