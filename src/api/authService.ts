import Cookies from "js-cookie";
import { COOKIE_EXPIRY } from "@/constants/auth";
import { ENV } from "@/config/env";

const API_BASE_URL = ENV.API_BASE_URL;

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

    const isSecure = window.location.protocol === "https:";

    const cookieOptions = {
      secure: isSecure,
      sameSite: isSecure ? ("none" as const) : ("lax" as const),
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

export const logout = async (): Promise<void> => {
  try {
    const accessToken = authService.getAccessTokenFromCookie();

    if (accessToken) {
      const response = await fetch(`${API_BASE_URL}/api/auth/logout`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `Backend logout failed: ${response.status} ${response.statusText} - ${errorText}`,
        );
      }
    }
  } catch (error) {
    console.error("Logout error:", error);
  } finally {
    Cookies.remove("accessToken");
    Cookies.remove("refreshToken");
  }
};
