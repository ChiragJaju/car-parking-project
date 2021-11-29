import { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@mui/material";
import AuthContext from "../../context/AuthContext";
import ViewingCard from "./Cards/ViewingCard";
import { User } from "../Data";
import { CountertopsOutlined } from "@mui/icons-material";
import { Typography } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  card: {
    margin: "2.5vw 2.5vw",
    backgroundColor: "#524c4c",
    // width: "50vw",
    padding: "20px",
    textColor: "#ffffff",
  },
  arrow: {
    fontSize: "h6.fontSize",
    color: theme.palette.grey[800],
    display: "inline",
  },
  gridItem: {
    marginBottom: "25px",
  },
  button: {
    "&:hover": {
      backgroundColor: "#a39f9e",
    },
  },
}));

export default function OutlinedCard(props) {
  const classes = useStyles();
  const { setSlotToEdit, userData } = useContext(AuthContext);
  // console.log(userData);
  // console.log(User);
  var toShow = [];
  User.map((x) => {
    if (x.username === userData.username) {
      toShow = x.bookings;
    }
  });
  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
    >
      {toShow.map((y) => {
        return (
          <Grid item xs={6}>
            <ViewingCard details={y}> </ViewingCard>
          </Grid>
        );
      })}
    </Grid>
  );
}
