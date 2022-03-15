import React from "react";
import { alpha, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import { TextField } from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button/Button";
const useStyles = makeStyles((theme) => ({
  grow: {
    display: "flex",
    flexGrow: 1,
  },
  input: {
    width: "300px",
    borderRadius: 8,
    backgroundColor: "#a4aff0",
  },
  inputText: {
    color: "#2b3c9d",
    font: "arial",
    fontSize: "1rem",
  },
  justo: { display: "flex", alignItems: "flex-end" },

  button: {
    transition: "1s",
    marginLeft: "1.5rem",
    borderRadius: "34px",
    background: "#cfd5fb",
    "&:hover": {
      cursor: "pointer",
      background: "#7488fa",
      transition: "1s",
    },
  },

  nextToText: {
    padding: "5px 10px 3px 10px",
    color: "#040e47",
    marginLeft: "",
  },
}));

export const UserListHeader = (props) => {
  const { org, setDebOrg, setOrg } = props;
  const classes = useStyles();
  return (
    <>
      <div className={classes.grow}>
        <AppBar position="static">
          <Toolbar>
            <div className={classes.justo}>
              <TextField
                id="outlined-basic"
                variant="outlined"
                className={classes.input}
                size="small"
                value={org}
                onChange={(e) => setDebOrg(e.target.value)}
                InputProps={{
                  className: classes.inputText,
                  endAdornment: (
                    <InputAdornment position="start" variant="standard">
                      <IconButton>
                        <SearchIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <Button
                onClick={() => setOrg(org)}
                className={classes.button}
                variant="contained"
              >
                <Typography className={classes.nextToText} variant="caption">
                  Search Organization
                </Typography>
              </Button>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
};
