import React from "react";
import { RouteProps, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "./auth.context";

export const AuthRouter: React.FunctionComponent<RouteProps> = ({
  children,
}) => {
  const { user } = React.useContext(AuthContext);

  const navigate = useNavigate();

  const location = useLocation();

  React.useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [location.pathname]);

  return <>{children}</>;
};
