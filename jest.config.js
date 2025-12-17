export default {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  moduleNameMapper: {
    "^@/config/env$": "<rootDir>/src/config/__mocks__/env.ts",
    "^@/(.*)$": "<rootDir>/src/$1",
    "^components/(.*)$": "<rootDir>/src/components/$1",
    "^locales/(.*)$": "<rootDir>/src/locales/$1",
    "^locals/(.*)$": "<rootDir>/locals/$1",
    "^pages/(.*)$": "<rootDir>/src/pages/$1",
    "^constants/(.*)$": "<rootDir>/src/constants/$1",
    "^hooks/(.*)$": "<rootDir>/src/hooks/$1",
    "^store/(.*)$": "<rootDir>/src/store/$1",
    "^@/config/env$": "<rootDir>/src/config/__mocks__/env.ts",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "\\.(svg|png|jpg|jpeg|gif)$": "<rootDir>/__mocks__/fileMock.js",
  },
  transform: {
    "^.+\\.(ts|tsx)$": [
      "ts-jest",
      {
        useESM: true,
        tsconfig: {
          jsx: "react-jsx",
          esModuleInterop: true,
          allowSyntheticDefaultImports: true,
          target: "ES2022",
          lib: ["ES2022", "DOM", "DOM.Iterable"],
          module: "ESNext",
          moduleResolution: "bundler",
          strict: true,
          skipLibCheck: true,
          types: ["jest", "@testing-library/jest-dom", "node"],
        },
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
  globals: {
    "import.meta": {
      env: {
        VITE_API_BASE_URL: "http://localhost:3000",
        VITE_API_URL: "http://localhost:3000",
      },
    },
  },
};
