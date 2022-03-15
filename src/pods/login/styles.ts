import makeStyles from "@material-ui/core/styles/makeStyles";
export const useStyles = makeStyles(() => ({
    root: {
      width: "100%",
      textAlign: "center",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
    },
    button: {
      width: "200px",
      marginTop: "16px"
    },
    buttonError: {
      width: "200px",
    },
    card: {
      width: "50%",
      margin: "auto",
      paddingTop: "2rem",
      paddingBottom: "3rem",
      backgroundColor: "#f3f3f3",
    }
  }));