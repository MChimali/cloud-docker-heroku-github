import React from "react";

interface organizationContext {
  org: string;
  setOrg: (org: string) => void;
}

export const orgContext = React.createContext<organizationContext>({
  org: "",
  setOrg: (org: string) => {},
});

export const OrgProvider: React.FC = (props) => {
  const { children } = props;
  const [org, setOrg] = React.useState<string>("lemoncode");

  return (
    <orgContext.Provider value={{ org, setOrg }}>
      {children}
    </orgContext.Provider>
  );
};
