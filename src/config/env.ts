const DEFAULT_API_URL = "http://localhost:3000";

// Direct access to import.meta.env (works only in Vite, not in Jest)
export const ENV = {
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL || DEFAULT_API_URL,
  API_URL: import.meta.env.VITE_API_URL || DEFAULT_API_URL,
  NODE_ENV: import.meta.env.MODE || "development",
} as const;
