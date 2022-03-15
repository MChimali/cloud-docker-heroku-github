import React from "react";

interface AuthContext {
  user: string;
  setUser: (username: string) => void;
}

export const AuthContext = React.createContext<AuthContext>({
  user: null,
  setUser: (user: string) => {
    console.log("You are not using the context");
  },
});

export const AuthProvider: React.FC = (props) => {
  const { children } = props;
  const [user, setUser] = React.useState<string>(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
