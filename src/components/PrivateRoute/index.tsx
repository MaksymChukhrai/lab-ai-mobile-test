import type { JSX } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "hooks/useAuth";
import { PATHS } from "constants/navigation";

interface PrivateRouteProps {
  children: JSX.Element;
}

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to={PATHS.SIGN_IN} replace />;
  }

  return children;
};
