import React from "react";
import TextField from "@material-ui/core/TextField";
import makeStyles from "@material-ui/core/styles/makeStyles";

interface Props {
  flagUser: boolean;
  label: string;
  refInput?: React.MutableRefObject<HTMLInputElement>;
  username: string;
  setField: React.Dispatch<React.SetStateAction<string>>;
  type?: string;
}

const useStyles = makeStyles((theme) => ({
  input: {
    marginTop: "15px",
    width: "400px",
  },
}));

export const InputLogin: React.FC<Props> = (props) => {
  const { flagUser, label, refInput, username, setField, type } = props;
  const classes = useStyles();
  return (
    <div>
      <TextField
        type={type}
        className={classes.input}
        id="outlined-basic"
        variant="outlined"
        error={flagUser}
        label={label}
        inputProps={{ ref: refInput }}
        value={username}
        onChange={(e) => setField(e.target.value)}
      />
    </div>
  );
};
