export default {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^components/(.*)$": "<rootDir>/src/components/$1",
    "^locales/(.*)$": "<rootDir>/src/locales/$1",
    "^pages/(.*)$": "<rootDir>/src/pages/$1",
    "^constants/(.*)$": "<rootDir>/src/constants/$1",
    "^hooks/(.*)$": "<rootDir>/src/hooks/$1",
    "^store/(.*)$": "<rootDir>/src/store/$1",
  },
  transform: {
    "^.+\\.(ts|tsx)$": [
      "ts-jest",
      {
        useESM: true,
      },
    ],
  },
  extensionsToTreatAsEsm: [".ts", ".tsx"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  testMatch: [
    "<rootDir>/src/**/__tests__/**/*.(ts|tsx)",
    "<rootDir>/src/**/*.(test|spec).(ts|tsx)",
  ],
  collectCoverageFrom: ["src/**/*.{ts,tsx}", "!src/**/*.d.ts"],
};
