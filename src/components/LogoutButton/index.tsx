import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LogoutModal } from "./LogoutModal";
import { StyledLogoutButton } from "./styles";
import { logout } from "@/api/authService";
import { PATHS } from "@/constants/navigation";
import { clearUserState } from "@/store/actions/clearUserState";
import type { AppDispatch } from "@/store";

export const LogoutButton = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogoutClick = () => {
    setIsModalOpen(true);
  };

  const handleConfirmLogout = async () => {
    setIsLoading(true);
    try {
      const clearActions = clearUserState();
      clearActions.forEach((action) => dispatch(action));

      await logout();

      setIsModalOpen(false);
      navigate(PATHS.DEFAULT);
    } catch (error) {
      console.error("Logout failed:", error);
      navigate(PATHS.SIGN_IN);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancelLogout = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <StyledLogoutButton
        variant="contained"
        onClick={handleLogoutClick}
        disabled={isLoading}
      >
        {t("logout.button")}
      </StyledLogoutButton>

      <LogoutModal
        open={isModalOpen}
        onConfirm={handleConfirmLogout}
        onCancel={handleCancelLogout}
        isLoading={isLoading}
      />
    </>
  );
};
