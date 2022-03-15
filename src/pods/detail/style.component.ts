import { makeStyles } from "@material-ui/core/styles";
import {Theme} from '@material-ui/core';

interface StyleProps {
  avatar: string;
}

export const useStyles = makeStyles<Theme, StyleProps>((theme) => ({
  root: {
    //
    width: "100%",
    paddingBottom: "0px",
    paddingTop: "7px",
  },
  flexParent: {
    //

    marginBottom: "3px",
    display: "grid",
    gridTemplateColumns: "156px auto",
    gridTemplateRows: "156px",
    columnGap: "3px",
  },
  image: {
    //
    width: "156px",
    gridColumnStart: "1",
    gridColumnEnd: "2",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundImage: ({ avatar }) => `url(${avatar})`,
  },
  list: {
    //
    paddingLeft: "0px",
    listStylePosition: "inside",
    listStyleType: "disc",
    minHeight: "156px",
    margin: "0px",
    gridColumnStart: "2",
    gridColumnEnd: "3",
    "& li:nth-child(2)": {
      marginTop: "3px",
      marginBottom: "3px",
    },
  },
  collapse: { marginBottom: "3px" }, //
}));
