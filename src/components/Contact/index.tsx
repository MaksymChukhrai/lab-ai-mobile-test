import { useContactForm } from "hooks/useContactForm";
import { useTranslation } from "react-i18next";
import {
  StyledButton,
  StyledDescription,
  StyledEmailLink,
  StyledFormCard,
  StyledInput,
  StyledInputWrapper,
  StyledLabel,
  StyledModalOverlay,
  StyledTextarea,
  StyledTitle,
} from "./styles";

interface ContactUsProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactUsModal = ({ isOpen, onClose }: ContactUsProps) => {
  const { t } = useTranslation();
  const { formData, isSubmitting, errors, handleInputChange, handleSubmit } =
    useContactForm(onClose);

  return (
    <StyledModalOverlay open={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit}>
        <StyledFormCard>
          <StyledTitle>{t("contact.title")}</StyledTitle>
          <StyledDescription>
            {t("contact.description_part_1")}{" "}
            <StyledEmailLink href={`mailto:${t("contact.support_email")}`}>
              {t("contact.support_email")}
            </StyledEmailLink>
            {t("contact.description_part_2")}
          </StyledDescription>

          <StyledInputWrapper>
            <StyledLabel>{t("contact.full_name_label")}</StyledLabel>
            <StyledInput
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder={t("contact.full_name_placeholder")}
              error={!!errors.fullName}
              helperText={errors.fullName}
              required
            />
          </StyledInputWrapper>

          <StyledInputWrapper>
            <StyledLabel>{t("contact.email_label")}</StyledLabel>
            <StyledInput
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder={t("contact.email_placeholder")}
              error={!!errors.email}
              helperText={errors.email}
              required
            />
          </StyledInputWrapper>

          <StyledInputWrapper>
            <StyledLabel>{t("contact.message_label")}</StyledLabel>
            <StyledTextarea
              name="message"
              multiline
              rows={4}
              value={formData.message}
              onChange={handleInputChange}
              error={!!errors.message}
              helperText={errors.message}
              placeholder=""
              required
            />
          </StyledInputWrapper>

          <StyledButton
            type="submit"
            disabled={
              isSubmitting ||
              !!errors.message ||
              !!errors.email ||
              !!errors.fullName
            }
          >
            {isSubmitting
              ? t("contact.button_sending")
              : t("contact.button_send")}
          </StyledButton>
        </StyledFormCard>
      </form>
    </StyledModalOverlay>
  );
};
