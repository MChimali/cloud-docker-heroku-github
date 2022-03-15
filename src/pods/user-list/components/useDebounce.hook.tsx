import React from "react";
import { orgContext } from "../../../core/organisation.context";

type useDebounced = [string, (org: string) => void];

export const useDebounced = (org: string,setOrg: (org: string) => void, debouncedLength: number): useDebounced => {
  const [debOrg, setDebOrg] = React.useState(org);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setOrg(debOrg);
    }, debouncedLength);

    return () => clearTimeout(timer);
    
  }, [debOrg]);

  return [debOrg, setDebOrg];
};
