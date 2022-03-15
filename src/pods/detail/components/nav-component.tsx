import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import ListItemText from "@material-ui/core/ListItemText";
import { Member, Company } from "../api-detail.vm";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  main: {
    marginBottom: "3px",
    paddingBottom: "3px",
    paddingTop: "0px",
    background: "#9eabff",
    transition: "0.7s",
    "&:hover": {
      cursor: "pointer",
      background: "#3F51B5",
      transition: "0.7s",
      "& $arrow": {
        color: "white",
        transition: "0.1s",
      },
    },
  },
  arrow: () => ({
    height: "auto",
    transition: "0.1s",
  }),
  mainText: {
    marginBottom: "3px",
    paddingBottom: "2rem",
    paddingTop: "2rem",
    fontWeight: 300,
    transition: "0.1s",
    "&:hover": {
      fontWeight: 600,
      color: "#cfd5fb",
      transition: "0.1s",
    },
  },
}));

interface Props {
  item: Member | Company;
  collapseState: boolean;
  setCollapseState: (state: boolean) => void;
}

export const NavElement: React.FC<Props> = (props) => {
  const { item, collapseState, setCollapseState } = props;
  const classes = useStyles();

  return (
    <ListItem
      button
      className={classes.main}
      onClick={() => setCollapseState(!collapseState)}
    >
      {collapseState ? (
        <ExpandLess className={classes.arrow} />
      ) : (
        <ExpandMore className={classes.arrow} />
      )}
      <ListItemText
        className={classes.mainText}
        primary={
          collapseState
            ? `\xa0\xa0\ Repliega para esconder información de ${item.name}`
            : `\xa0\xa0\ Despliega para ver información de ${item.name}`
        }
      />
    </ListItem>
  );
};
