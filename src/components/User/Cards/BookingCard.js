import { useContext, useState } from "react";
import {
  Box,
  Card,
  Grid,
  CardActions,
  CardContent,
  Typography,
  Button,
  Rating,
} from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import AuthContext from "../../../context/AuthContext";
import { DataLocations, User } from "../../Data";
const useStyles = makeStyles((theme) => ({
  card: {
    margin: "2vw 1vw",
    backgroundColor: "#0D0D12",
    width: "40.5vw",
    padding: "5px",
    textColor: "#ffffff",
  },
  arrow: {
    fontSize: "h6.fontSize",
    color: theme.palette.grey[800],
    display: "inline",
  },
  gridItem: {
    marginBottom: "15px",
  },
  button: {
    "&:hover": {
      backgroundColor: "#229EF3",
    },
  },
  hr: {
    border: "1px solid #524c4c",
    width: "45vw",
    marginTop: "15px",
  },
}));

export default function OutlinedCard(props) {
  const classes = useStyles();
  // console.log(props.details.slot.userRating);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isPromoCode, setIsPromoCode] = useState(false);
  const { setSlotToEdit, userData, setWhatToShow, setBookingDetails } =
    useContext(AuthContext);
  const bookSlot = () => {
    const inputData = {
      name: userData.name,
      username: userData.username,
      email: userData.email,
      checkIn: props.details.inputTime.checkIn,
      checkOut: props.details.inputTime.checkOut,
    };
    // console.log(props.details);
    DataLocations.map((x) => {
      if (x.name === props.details.location.name) {
        x.slots.map((y) => {
          if (y.number === props.details.slot.number)
            y.bookings.push(inputData);
        });
      }
    });
    const userBookingData = {
      details: props.details,
    };
    User.map((x) => {
      if (x.username === userData.username) {
        // x.bookings.push(userBookingData);
        x.numberOfVisits += 1;
        if (x.numberOfVisits === 5) {
          setIsPromoCode(true);
          x.numberOfVisits = 0;
        }
      }
    });
    // console.log(DataLocations);
    // console.log(User);
    // console.log(userBookingData);
    setIsConfirmed(true);
    setBookingDetails(userBookingData);

    setWhatToShow("Checkout");
  };
  // console.log(userData);
  const card = (
    <div>
      <CardContent>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          <Grid item xs={6}>
            <Typography variant="h4" sx={{ color: "#ffffff" }}>
              Location: {props.details.location.name}
            </Typography>
          </Grid>
          <Grid
            item
            xs={6}
            sx={{ textAlign: "right", marginBottom: "15px", color: "#ffffff" }}
          >
            <Typography variant="h3">{props.details.slot.number}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5" sx={{ color: "#ffffff" }}>
              Address: {props.details.location.address}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5" sx={{ color: "#ffffff" }}>
              Owner: {props.details.location.owner}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" sx={{ color: "#ffffff" }}>
              Max Time Available: {props.details.location.maxTime} hours
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" sx={{ color: "#ffffff" }}>
              Cost: ₹{props.numberHours * 25}{" "}
            </Typography>
          </Grid>
          <hr className={classes.hr} />
          <Grid item xs={12} sx={{ marginTop: "5px", color: "#ffffff" }}>
            <Typography variant="h4">
              Features:{" "}
              {props.details.location.servicesProvided.map((x) => {
                return (
                  <Typography
                    variant="h6"
                    sx={{ marginLeft: "150px", color: "#ffffff" }}
                  >
                    {x}
                  </Typography>
                );
              })}
            </Typography>
          </Grid>
          <Grid item xs={12} sx={{ marginTop: "20px" }}>
            <Typography variant="h6" sx={{ color: "#ffffff" }}>
              User Rating : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Rating
                name="half-rating-read"
                defaultValue={props.details.slot.userRating}
                precision={0.5}
                readOnly
              />
            </Typography>
          </Grid>

          {/* <Grid item xs={6} sx={{ textAlign: "right" }}>
            <Typography variant="h5">
              Slot Number: {props.details.slot.number}
            </Typography>
          </Grid> */}
        </Grid>
      </CardContent>
      <CardActions>
        <Button
          sx={{ backgroundColor: "white", color: "#242121" }}
          variant="outlined"
          className={classes.button}
          color="success"
          onClick={bookSlot}
        >
          Book
        </Button>
      </CardActions>
    </div>
  );

  return (
    <Box>
      <Card
        variant="outlined"
        sx={{ backgroundColor: "#b3abab" }}
        className={classes.card}
      >
        {card}
        {isConfirmed && (
          <Typography
            variant="h6"
            sx={{ marginLeft: "10px", color: "#229EF3" }}
          >
            Booking Confirmed.
          </Typography>
        )}
      </Card>
    </Box>
  );
}
