import React from "react";
import { LoginContainer } from "pods/login";
import { useNavigate } from "react-router-dom";
import { linkRoutes } from "../router/routes";

export const LoginScene: React.FC = () => {
  

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(linkRoutes.list);
  };

  return (
    <>
      <LoginContainer handleNavigate={handleNavigate} />
    </>
  );
};
