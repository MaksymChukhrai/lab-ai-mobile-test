interface NavLink {
  key: string;
  path: string;
}

export const PATHS = {
  DEFAULT: "/",
  USE_CASES: "#use-cases",
  ABOUT: "#about",
  SIGN_IN: "/sign-in",
  UPLOAD: "/upload",
  OPTION: "/options",
  REVIEW: "/review",
  RESULT: "/result",
  OAUTH_CALLBACK: "/auth/callback",
  MAGIC_LINK: "/auth/magic-link/consume",
  TERMS: "/terms",
  PRIVACY: "/privacy",
  LOADER: "/loader",
};

export const COMPANY_LINKS: NavLink[] = [
  { key: "footer.links.useCases", path: PATHS.USE_CASES },
  { key: "footer.links.aboutUs", path: PATHS.ABOUT },
];

export const SUPPORT_LINKS: NavLink[] = [
  { key: "footer.links.privacyPolicy", path: PATHS.PRIVACY },
  { key: "footer.links.termsOfService", path: PATHS.TERMS },
];
