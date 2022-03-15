import React from "react";
import { LoginComponent } from "./login.component";
import { getUsersCredentials } from "./api/api";
import { User } from "./api/api.model";

interface Props {
  handleNavigate: () => void;
}

const justo = (string) => console.log(string);
const test = (string) => justo(string);

export const LoginContainer: React.FC<Props> = (props) => {
  const [userCredentialList, setUserCredentialList] =
    React.useState<User[]>(null);

  const { handleNavigate } = props;

  React.useEffect(() => {
    getUsersCredentials().then(setUserCredentialList);
  }, []);

  return (
    <LoginComponent
      credentialList={userCredentialList}
      handleNavigate={handleNavigate}
    />
  );
};