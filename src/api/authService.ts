import Cookies from "js-cookie";
import { COOKIE_EXPIRY } from "@/constants/auth";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";

export const authService = {
  getGoogleAuthUrl: (): string => {
    return `${API_BASE_URL}/api/auth/google`;
  },

  getLinkedInAuthUrl: (): string => {
    return `${API_BASE_URL}/api/auth/linkedin`;
  },

  handleOAuthCallback: (searchParams: URLSearchParams): boolean => {
    const accessToken = searchParams.get("access_token");
    const refreshToken = searchParams.get("refresh_token");

    if (!accessToken || !refreshToken) {
      console.error("OAuth callback: Missing tokens in URL");

      return false;
    }

    const cookieOptions = {
      secure: true,
      sameSite: "strict" as const,
    };

    Cookies.set("accessToken", accessToken, {
      ...cookieOptions,
      expires: COOKIE_EXPIRY.ACCESS_TOKEN,
    });

    Cookies.set("refreshToken", refreshToken, {
      ...cookieOptions,
      expires: COOKIE_EXPIRY.REFRESH_TOKEN,
    });

    return true;
  },

  getAccessTokenFromCookie: (): string | null => {
    return Cookies.get("accessToken") || null;
  },

  getRefreshTokenFromCookie: (): string | null => {
    return Cookies.get("refreshToken") || null;
  },

  clearTokens: (): void => {
    Cookies.remove("accessToken");
    Cookies.remove("refreshToken");
  },

  isAuthenticated: (): boolean => {
    return !!authService.getAccessTokenFromCookie();
  },
};
