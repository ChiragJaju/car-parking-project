import { useContext } from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  Grid,
} from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import AuthContext from "../../context/AuthContext";
import { User, DataLocations } from "../Data";
import WorkerCard from "./WorkerCard";
import BookSlot from "../User/BookSlot";
const useStyles = makeStyles((theme) => ({
  card: {
    margin: ".5vw .5vw ",
    backgroundColor: "#0D0D12",
    width: "41vw",
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
  const card = (
    <div>
      <Typography variant="h3" sx={{ color: "#ffffff" }}>
        Hello {userData.name}
      </Typography>
    </div>
  );

  const bookings = [];
  User.map((x) => {
    // bookings.push(x.bookings);
    x.bookings.map((y) => {
      console.log(y);
      bookings.push(y);
    });
  });
  console.log(User);
  return (
    <Box sx={{ minWidth: 275 }}>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        {bookings.map((x) => {
          return (
            <Grid item xs={6}>
              <WorkerCard details={x} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
