import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  Box,
  Card,
  Button,
  Typography,
  TextField,
  Grid,
  FormGroup,
  FormLabel,
  FormControlLabel,
  Checkbox,
  CardActions,
} from "@mui/material";
import { User } from "../Data";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { makeStyles } from "@material-ui/core/styles";
import { useContext, useState } from "react";
import AuthContext from "../../context/AuthContext";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  card: {
    margin: "1vw 1vw",
    backgroundColor: "#38393d",
    width: "83vw",
    padding: "30px",
    paddingBottom: "70px",
    textColor: "#ffffff",
  },
  arrow: {
    fontSize: "h6.fontSize",
    color: theme.palette.grey[800],
    display: "inline",
  },

  button: {
    "&:hover": {
      backgroundColor: "#229EF3",
    },
  },
  input: {
    color: "#ffffff",
    fontSize: "1rem",
    borderColor: "white",
  },
  gridItem: {
    paddingTop: "20px",
    "&:hover": {
      Textcolor: "#ffffff",
    },
    color: "#ffffff",
  },
  datepicker: {
    color: "#ffffff",
  },
  formControl: {
    width: "200px",
  },
  image: {
    marginLeft: "10px",
    marginTop: "50px",
  },
}));
export default function Checkout() {
  const classes = useStyles();
  const { userData, bookingDetails, setUserData } = useContext(AuthContext);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [validBalance, setBalance] = useState(true);
  // console.log(userData);
  // console.log(bookingDetails);
  const services = bookingDetails.details.location.servicesProvided;
  const d = bookingDetails.details;
  const aS = {
    wash: false,
    tyre: false,
    wheel: false,
    oil: false,
    valet: false,
  };
  services.map((x) => {
    if (x === "Car Wash") aS.wash = true;
    if (x === "Tyre Change") aS.tyre = true;
    if (x === "Wheel Alignment") aS.wheel = true;
    if (x === "Oil Change") aS.oil = true;
    if (x === "Valet Parking") aS.valet = true;
  });
  const [state, setState] = useState({
    wash: false,
    tyre: false,
    wheel: false,
    oil: false,
    valet: false,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };
  var numberOfHours = Math.ceil(
    (d.inputTime.checkOut.getTime() - d.inputTime.checkIn.getTime()) / 3600000
  );
  const { wash, tyre, wheel, oil, valet } = state;
  var counter = 0;
  if (wash) counter += 1;
  if (tyre) counter += 1;
  if (wheel) counter += 1;
  if (oil) counter += 1;
  if (valet) counter += 1;

  var cost = 100 + 25 * numberOfHours + 25 * counter;

  const handleConfirm = () => {
    if (userData.balance <= cost) {
      setBalance(false);
    } else {
      setIsConfirmed(true);
      setBalance(true);
      // const temp = userData;
      // temp.balance -= cost;
      // setUserData(temp);
      // console.log(userData);
      // userData.balance -= cost;
      const res = axios.post("http://localhost:8080/confirm", {
        email: userData.email,
        checkin: d.inputTime.checkIn.toLocaleTimeString("en-US"),
        checkout: d.inputTime.checkOut.toLocaleTimeString("en-US"),
      });
      console.log(res);
      User.map((x) => {
        if (x.username === userData.username) {
          bookingDetails.details.cost = cost;
          x.bookings.push({ ...bookingDetails, ...state });
          x.balance -= cost;
        }
      });
    }
  };

  const card = (
    <div>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Grid item xs={12}>
          <Typography
            variant="h2"
            sx={{ color: "#ffffff", marginBottom: "50px" }}
          >
            Confirm Booking-
          </Typography>
        </Grid>
        <Grid item xs={4} sx={{ marginBottom: "20px" }}>
          <Typography variant="h5" sx={{ color: "#ffffff" }}>
            Location: {d.location.name}
          </Typography>
        </Grid>
        <Grid item xs={4} sx={{ marginBottom: "20px" }}></Grid>
        <Grid item xs={4} sx={{ marginBottom: "20px" }}>
          <Typography variant="h5" sx={{ color: "#ffffff" }}>
            Date: {d.inputTime.checkIn.getDate()}/
            {d.inputTime.checkIn.getMonth() + 1}/
            {d.inputTime.checkIn.getFullYear()}
          </Typography>
        </Grid>
        <Grid item xs={4} sx={{ marginBottom: "20px" }}>
          <Typography variant="h5" sx={{ color: "#ffffff" }}>
            Floor: {d.slot.floor}
          </Typography>
        </Grid>
        <Grid item xs={4} sx={{ marginBottom: "20px" }}></Grid>
        <Grid item xs={4} sx={{ marginBottom: "20px" }}>
          <Typography variant="h5" sx={{ color: "#ffffff" }}>
            Check In time: {d.inputTime.checkIn.toLocaleTimeString("en-US")}
          </Typography>
        </Grid>

        <Grid item xs={4}>
          <Typography variant="h5" sx={{ color: "#ffffff" }}>
            Slot Number: {d.slot.number}
          </Typography>
        </Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          <Typography variant="h5" sx={{ color: "#ffffff" }}>
            Check Out time: {d.inputTime.checkOut.toLocaleTimeString("en-US")}
          </Typography>
        </Grid>
      </Grid>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel sx={{ color: "#ffffff" }}>
          Choose Additional Services:{" "}
        </FormLabel>
        <FormGroup>
          {aS.wash && (
            <FormControlLabel
              control={
                <Checkbox checked={wash} onChange={handleChange} name="wash" />
              }
              label="Car Wash"
            />
          )}
          {aS.tyre && (
            <FormControlLabel
              control={
                <Checkbox checked={tyre} onChange={handleChange} name="tyre" />
              }
              label="Tyre Change"
            />
          )}
          {aS.wheel && (
            <FormControlLabel
              control={
                <Checkbox
                  checked={wheel}
                  onChange={handleChange}
                  name="wheel"
                />
              }
              label="Wheel Alignment"
            />
          )}
          {aS.oil && (
            <FormControlLabel
              control={
                <Checkbox checked={oil} onChange={handleChange} name="oil" />
              }
              label="Oil Change"
            />
          )}
          {aS.valet && (
            <FormControlLabel
              control={
                <Checkbox
                  checked={valet}
                  onChange={handleChange}
                  name="valet"
                />
              }
              label="Valet Parking"
            />
          )}
        </FormGroup>
      </FormControl>
      <Typography variant="h6" sx={{ color: "#ffffff" }}>
        Total Amount: ₹{cost}
      </Typography>
      <CardActions>
        <Button
          sx={{ backgroundColor: "white", color: "#242121" }}
          variant="outlined"
          className={classes.button}
          color="success"
          onClick={handleConfirm}
        >
          Confirm
        </Button>
      </CardActions>
      {isConfirmed && (
        <div>
          <CheckCircleIcon
            sx={{
              color: "#0db518",
              fontSize: "50px",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          />
          <Typography
            variant="h5"
            sx={{ color: "#0db518", marginBottom: "20px" }}
          >
            Booking Confirmed!
          </Typography>
          <Typography variant="h5" sx={{ color: "#ffffff" }}>
            Check Registered Email for confirmation email.
          </Typography>
        </div>
      )}
      {!validBalance && (
        <Typography variant="h5" sx={{ color: "#ff0000" }}>
          Insufficient Balance.
        </Typography>
      )}
    </div>
  );
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card
        variant="outlined"
        sx={{ backgroundColor: "#0D0D12" }}
        className={classes.card}
      >
        {card}
      </Card>
    </Box>
  );
}
