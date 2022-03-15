import React from "react";
import { useNavigate } from "react-router-dom";
import { UserListContainer } from "../pods/user-list";
import { linkRoutes } from "../router/routes";
export const UsersListScene: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigate = (id: string) => {
    navigate(linkRoutes.detail(id));
  };
  
  return <UserListContainer handleNavigate={handleNavigate} />;
};
