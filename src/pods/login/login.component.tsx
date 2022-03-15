import React from "react";
import { User } from "./api/api.model";
import { AuthContext } from "../../core";
import { checkCredentials } from "./components/checkcredentials";
import Button from "@material-ui/core/Button/Button";
import { FailLoginText } from "./components/fail-credentials";
import { InputLogin } from "./components/login-input";
import { UsefocusRef } from "./components/inputfocus.hook";
import { useStyles } from "./styles";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";

interface Props {
  credentialList: User[];
  handleNavigate: () => void;
}

export const LoginComponent: React.FC<Props> = (props) => {
  const classes = useStyles();
  const { credentialList, handleNavigate } = props;
  const [username, setUsername] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [flagUser, setFlagUser] = React.useState<boolean>(false);
  const { setUser } = React.useContext(AuthContext);
  const [focusInput, ref] = UsefocusRef();

  const submitUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    checkCredentials(username, password, credentialList)
      ? (handleNavigate(), setUser(username))
      : (setUsername(""), setPassword(""), focusInput(), setFlagUser(true));
  };

  return (
    <Card className={classes.card}>
      <form onSubmit={submitUser} className={classes.root}>
        <Typography variant="subtitle2">
          Por favor, introduzca sus datos
        </Typography>
        <InputLogin
          flagUser={flagUser}
          label="Username"
          refInput={ref}
          username={username}
          setField={setUsername}
          type="text"
        />
        <InputLogin
          type="password"
          flagUser={flagUser}
          label="Password"
          username={password}
          setField={setPassword}
        />

        <FailLoginText flagUser={flagUser} />
        <Button
          className={flagUser ? classes.buttonError : classes.button}
          type="submit"
          variant="contained"
        >
          Log in
        </Button>
      </form>
    </Card>
  );
};
