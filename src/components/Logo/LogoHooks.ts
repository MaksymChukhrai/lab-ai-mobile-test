import { useNavigate } from "react-router-dom";
import { PATHS } from "constants/navigation";

export const useLogoNavigation = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate(PATHS.DEFAULT);
  };

  return { handleLogoClick };
};
