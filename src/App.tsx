import { useTranslation } from "react-i18next";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { AuthCallbackPage } from "pages/AuthCallbackPage/AuthCallbackPage";
import { SignInPage } from "pages/SignInPage/SignInPage";
import { OptionsPage } from "pages/OptionPage";
import Landing from "pages/LandingPage/Landing";
import UploadPage from "pages/UploadPage/UploadPage";
import { TermsOfServicePage } from "pages/TermsOfServicePage/TermsOfServicePage";
import { PrivacyPolicyPage } from "pages/PrivacyPolicyPage";
import { ReviewPage } from "pages/ReviewPage";
import { ErrorPageTemplate } from "components/ErrorPageTemplate";
import { PrivateRoute } from "components/PrivateRoute";
import { PATHS } from "constants/navigation";
import { theme } from "./theme/theme";

function App() {
  const { t } = useTranslation();

  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path={PATHS.DEFAULT} element={<Landing />} />
            <Route path={PATHS.SIGN_IN} element={<SignInPage />} />{" "}
            <Route path={PATHS.MAGIC_LINK} element={<AuthCallbackPage />} />
            <Route path={PATHS.TERMS} element={<TermsOfServicePage />} />
            <Route path={PATHS.PRIVACY} element={<PrivacyPolicyPage />} />
            <Route
              path={PATHS.UPLOAD}
              element={
                <PrivateRoute>
                  <UploadPage />
                </PrivateRoute>
              }
            />
            <Route
              path={PATHS.OPTION}
              element={
                <PrivateRoute>
                  <OptionsPage />
                </PrivateRoute>
              }
            />
            <Route
              path={PATHS.REVIEW}
              element={
                <PrivateRoute>
                  <ReviewPage />
                </PrivateRoute>
              }
            />
            <Route
              path="*"
              element={
                <ErrorPageTemplate
                  errorCode={t("errorPage.code404")}
                  message={t("errorPage.message404")}
                  redirectPath={PATHS.DEFAULT}
                />
              }
            />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
