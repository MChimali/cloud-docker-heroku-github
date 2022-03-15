import { AuthProvider } from "./core/auth.context";
import React from "react";

import { AppRouter } from "./router/app.router";

export const App = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
};
