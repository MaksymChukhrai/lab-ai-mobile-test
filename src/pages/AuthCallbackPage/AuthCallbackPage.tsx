import { useTranslation } from "react-i18next";
import { CircularProgress } from "@mui/material";
import { PATHS } from "constants/navigation";
import { useAuthCallback } from "hooks/useAuthCallback";
import { ErrorPageTemplate } from "components/ErrorPageTemplate";
import { CallbackMessage, CallbackWrapper } from "./styles";

export const AuthCallbackPage = () => {
  const { t } = useTranslation();
  const { isLoading, callbackError } = useAuthCallback();

  if (isLoading) {
    return (
      <CallbackWrapper>
        <CircularProgress />
        <CallbackMessage>{t("authCallback.verifying")}</CallbackMessage>
      </CallbackWrapper>
    );
  }

  if (callbackError) {
    return (
      <ErrorPageTemplate
        errorCode={callbackError.code}
        message={callbackError.message}
        redirectPath={PATHS.SIGN_IN}
      />
    );
  }
  return null;
};
