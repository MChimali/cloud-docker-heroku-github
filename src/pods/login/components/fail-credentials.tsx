import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(() => ({
  errorTypography: {
    color: "#F44336",
    paddingTop: "16px",
    paddingBottom: "16px",
  },
}));

interface Props {
  flagUser: boolean;
}

export const FailLoginText: React.FC<Props> = (props) => {
  const { flagUser } = props;
  const classes = useStyles();
  return (
    <>
      {flagUser && (
        <>
          <Typography className={classes.errorTypography} variant="caption">
            username: admin & password: test
          </Typography>
        </>
      )}
    </>
  );
};
