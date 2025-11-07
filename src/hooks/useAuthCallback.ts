import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";
import { PATHS } from "constants/navigation";
import { useConsumeMagicLinkQuery } from "store/api/apiSlice";
import { useAuth } from "./useAuth";

export const useAuthCallback = () => {
  const { isAuthenticated } = useAuth();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const token = searchParams.get("token");

  const { data, isLoading, isSuccess, isError, error } =
    useConsumeMagicLinkQuery({ token: token as string }, { skip: !token });

  const [callbackError, setCallbackError] = useState<{
    code: string;
    message: string;
  } | null>(null);

  useEffect(() => {
    if (isAuthenticated) navigate(PATHS.UPLOAD);

    if (isSuccess && data) {
      const cookieOptions = {
        secure: true,
        sameSite: "strict" as const,
      };

      Cookies.set("accessToken", data.accessToken, {
        ...cookieOptions,
        expires: 1 / 48,
      });
      Cookies.set("refreshToken", data.refreshToken, {
        ...cookieOptions,
        expires: 7,
      });
      navigate(PATHS.UPLOAD);
      return;
    }

    if (!isLoading) {
      let errorOccurred = false;

      if (isError) {
        setCallbackError({
          code: t("errorPage.code400"),
          message: t("authCallback.errorInvalidToken"),
        });
        errorOccurred = true;
      } else if (!token) {
        setCallbackError({
          code: t("errorPage.codeGeneric"),
          message: t("authCallback.noTokenFound"),
        });
        errorOccurred = true;
      }

      if (errorOccurred) {
        const timer = setTimeout(() => {
          navigate(PATHS.SIGN_IN);
        }, 3000);

        return () => clearTimeout(timer);
      }
    }
  }, [
    isSuccess,
    isError,
    isLoading,
    data,
    token,
    navigate,
    error,
    t,
    isAuthenticated,
  ]);

  return {
    isLoading,
    callbackError,
  };
};
