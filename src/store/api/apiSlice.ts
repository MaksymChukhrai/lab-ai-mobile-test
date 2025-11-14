import {
  createApi,
  fetchBaseQuery,
  type BaseQueryFn,
  type FetchArgs,
  type FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

interface MagicLinkSuccessResponse {
  success: boolean;
}

interface MagicLinkRequest {
  email: string;
}

interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_BASE_URL,
  prepareHeaders: (headers) => {
    const token = Cookies.get("accessToken");
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }

    return headers;
  },
});

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    const refreshToken = Cookies.get("refreshToken");
    if (refreshToken) {
      const refreshResult = await baseQuery(
        {
          url: "/api/auth/refresh",
          method: "POST",
          body: { refreshToken },
        },
        api,
        extraOptions,
      );

      if (refreshResult.data) {
        const { accessToken, refreshToken: newRefreshToken } =
          refreshResult.data as AuthTokens;
        const cookieOptions = {
          secure: true,
          sameSite: "strict" as const,
        };
        Cookies.set("accessToken", accessToken, {
          ...cookieOptions,
          expires: 1 / 48,
        });
        Cookies.set("refreshToken", newRefreshToken, {
          ...cookieOptions,
          expires: 7,
        });

        result = await baseQuery(args, api, extraOptions);
      } else {
        Cookies.remove("accessToken");
        Cookies.remove("refreshToken");
        window.location.href = "/sign-in";
      }
    }
  }

  return result;
};

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    requestMagicLink: builder.mutation<
      MagicLinkSuccessResponse,
      MagicLinkRequest
    >({
      query: (credentials) => ({
        url: "/api/auth/magic-link/request",
        method: "POST",
        body: credentials,
      }),
    }),
    consumeMagicLink: builder.query<AuthTokens, { token: string }>({
      query: ({ token }) => `/api/auth/magic-link/consume?token=${token}`,
    }),
  }),
});

export const { useRequestMagicLinkMutation, useConsumeMagicLinkQuery } =
  apiSlice;
