import React from "react";
import { makeStyles } from "@material-ui/core/styles";

interface Props {
  string: string;
  item: string;
}

const useStyles = makeStyles((theme) => ({
  divText: { background: "#CFD5FB", paddingLeft: "2rem" },
  text: { display: "inline-block" },
}));

export const LiElement: React.FC<Props> = (props) => {
  const classes = useStyles();
  const { string, item } = props;
  return (
    <>
      <li className={classes.divText}>
        <p className={classes.text}>{`${string}${item}`}</p>
      </li>
    </>
  );
};

export const LiLinkElement: React.FC<Props> = (props) => {
  const classes = useStyles();
  const { string, item } = props;
  return (
    <>
      <li className={classes.divText}>
        <p className={classes.text}>
          {string} <a href={item}>{item}</a>
        </p>
      </li>
    </>
  );
};
