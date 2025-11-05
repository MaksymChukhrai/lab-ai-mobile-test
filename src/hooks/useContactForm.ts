import { useState, type ChangeEvent, type FormEvent } from "react";
import { t } from "i18next";
import { z } from "zod";

export interface ContactFormData {
  fullName: string;
  email: string;
  message: string;
}

const INITIAL_FORM_STATE: ContactFormData = {
  fullName: "",
  email: "",
  message: "",
};

const createContactFormSchema = () =>
  z.object({
    fullName: z
      .string()
      .trim()
      .min(1, t("validation_messages.full_name_required"))
      .min(2, t("validation_messages.full_name_min_length")),

    email: z
      .email(t("validation_messages.email_invalid"))
      .trim()
      .min(1, t("validation_messages.email_required")),

    message: z
      .string()
      .trim()
      .min(1, t("validation_messages.message_required"))
      .min(10, t("validation_messages.message_min_length")),
  });

export const useContactForm = (onSuccess?: () => void) => {
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM_STATE);
  const [errors, setErrors] = useState<ContactFormData>(INITIAL_FORM_STATE);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const contactSchema = createContactFormSchema();

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void => {
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    const fieldSchema = contactSchema.shape[name as keyof ContactFormData];
    const result = fieldSchema.safeParse(value);

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name as keyof ContactFormData]: result.success
        ? ""
        : result.error.issues[0]?.message || "",
    }));
  };

  const validateForm = (): boolean => {
    const result = contactSchema.safeParse(formData);

    if (result.success) {
      setErrors(INITIAL_FORM_STATE);
      return true;
    }

    const formattedErrors = result.error.format();
    const newErrors: ContactFormData = {
      fullName: formattedErrors.fullName?._errors[0] || "",
      email: formattedErrors.email?._errors[0] || "",
      message: formattedErrors.message?._errors[0] || "",
    };

    setErrors(newErrors);
    return false;
  };

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }
    setIsSubmitting(true);

    try {
      if (onSuccess) {
        onSuccess();
      }
      setFormData(INITIAL_FORM_STATE);
      setErrors(INITIAL_FORM_STATE);
    } catch (error) {
      setErrors((prev) => ({ ...prev, general: error }));
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    errors,
    isSubmitting,
    handleInputChange,
    handleSubmit,
  };
};
