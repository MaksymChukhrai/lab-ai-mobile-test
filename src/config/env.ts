/**
 * Environment configuration for different deployment environments
 * Uses Vite's import.meta.env which is replaced at build time
 *
 * @see https://vitejs.dev/guide/env-and-mode.html
 */

const getEnvVariable = (key: string, fallback: string): string => {
  const value = import.meta.env?.[key];

  if (value !== undefined && value !== "") {
    return value;
  }

  return fallback;
};

const DEFAULT_API_URL = "http://localhost:3000";

export const ENV = {
  API_BASE_URL: getEnvVariable("VITE_API_BASE_URL", DEFAULT_API_URL),
  API_URL: getEnvVariable("VITE_API_URL", DEFAULT_API_URL),
  NODE_ENV: import.meta.env.MODE || "development",
} as const;
