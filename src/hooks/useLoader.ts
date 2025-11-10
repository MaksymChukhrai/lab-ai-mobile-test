import { useNavigate } from "react-router-dom";
import { PATHS } from "constants/navigation";

export const useLoader = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(PATHS.OPTION);
  };
  const handleContinue = (nextLoaderStep: 1 | 2 = 1) => {
    navigate(PATHS.LOADER, { state: { loaderStep: nextLoaderStep } });
  };

  return {
    handleBack,
    handleContinue,
  };
};
