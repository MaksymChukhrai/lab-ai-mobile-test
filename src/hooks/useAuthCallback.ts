import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";
import { COOKIE_EXPIRY } from "constants/auth";
import { PATHS } from "constants/navigation";
import { useConsumeMagicLinkQuery } from "store/api/apiSlice";
import { useAuth } from "./useAuth";

export const useAuthCallback = () => {
  const { isAuthenticated } = useAuth();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const magicToken = searchParams.get("token");

  const oauthAccessToken = searchParams.get("access_token");
  const oauthRefreshToken = searchParams.get("refresh_token");

  const [callbackError, setCallbackError] = useState<{
    code: string;
    message: string;
  } | null>(null);

  const { data, isLoading, isSuccess, isError } = useConsumeMagicLinkQuery(
    { token: magicToken as string },
    { skip: !magicToken },
  );

  useEffect(() => {
    if (isAuthenticated) {
      navigate(PATHS.UPLOAD);
      return;
    }

    if (oauthAccessToken && oauthRefreshToken) {
      const cookieOptions = {
        secure: true,
        sameSite: "strict" as const,
      };

      Cookies.set("accessToken", oauthAccessToken, {
        ...cookieOptions,
        expires: COOKIE_EXPIRY.ACCESS_TOKEN,
      });

      Cookies.set("refreshToken", oauthRefreshToken, {
        ...cookieOptions,
        expires: COOKIE_EXPIRY.REFRESH_TOKEN,
      });

      navigate(PATHS.UPLOAD);
      return;
    }

    if (isSuccess && data) {
      const cookieOptions = {
        secure: true,
        sameSite: "strict" as const,
      };

      Cookies.set("accessToken", data.accessToken, {
        ...cookieOptions,
        expires: COOKIE_EXPIRY.ACCESS_TOKEN,
      });

      Cookies.set("refreshToken", data.refreshToken, {
        ...cookieOptions,
        expires: COOKIE_EXPIRY.REFRESH_TOKEN,
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
      } else if (!magicToken && !oauthAccessToken) {
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
    magicToken,
    oauthAccessToken,
    oauthRefreshToken,
    navigate,
    t,
    isAuthenticated,
  ]);

  return {
    isLoading: isLoading || !!(oauthAccessToken && oauthRefreshToken),
    callbackError,
  };
};
