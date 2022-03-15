import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { LoginScene, UsersListScene, UserDetailScene } from "scenes";
import { AuthRouter } from "../core/AuthRouter";
import { OrgProvider } from "core/organisation.context";

export const AppRouter: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<LoginScene />} />
        <Route
          path="/list"
          element={
            <AuthRouter>
              <OrgProvider>
                <UsersListScene />
              </OrgProvider>
            </AuthRouter>
          }
        />
        <Route
          path="/detail/:id"
          element={
            <AuthRouter>
              <OrgProvider>
                <UserDetailScene />
              </OrgProvider>
            </AuthRouter>
          }
        />
      </Routes>
    </HashRouter>
  );
};
