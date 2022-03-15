import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(() => ({
  grow: {
    display: "flex",
    flexGrow: 1,
    paddingLeft: "0px",
  },
  justo: { display: "flex", alignItems: "flex-end" },
  info: {
    fontWeight: 400,
    borderRadius: "34px",
    padding: "11px 20px 8px 20px",
    color: "#040e47",
    marginLeft: "",
    lineHeight: 1.66,
    background: "#cfd5fb",
    fontSize: "0.75rem",
  },
  field: {
    fontWeight: 500,
    borderRadius: "34px",
    padding: "11px 10px 8px 20px",
    color: "#040e47",
    lineHeight: 1.66,
    fontSize: "0.75rem",
    marginLeft: "30px",
  },
  bar: {
    paddingLeft: "0px",
  },
}));

interface Props {
  memberName: string,
  companyName: string
}

export const UserDetailHeader: React.FC<Props> = (props) => {
  const { memberName, companyName } = props;
  const classes = useStyles();
  return (
    <>
      <div className={classes.grow}>
        <AppBar position="static">
          <Toolbar className={classes.bar}>
            <div className={classes.justo}>
              <Typography className={classes.field} variant="button">
                Name:
              </Typography>
              <Typography className={classes.info} variant="button">
                {memberName}
              </Typography>
              <Typography className={classes.field} variant="button">
                Company:
              </Typography>
              <Typography className={classes.info} variant="button">
                {companyName}
              </Typography>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
};
