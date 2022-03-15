import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  head: {
    backgroundColor: "#7488fa",
  },
  link: {
    background: "#cfd5fb",
    transition: "0.1s",
    "&:hover": {
      cursor: "pointer",
      background: "#7488fa",
      transition: "0.7s",
    },
  },
}));
