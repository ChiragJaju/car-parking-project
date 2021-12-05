import { useContext, useState } from "react";
import AuthContext from "../../context/AuthContext";
import { makeStyles } from "@material-ui/core/styles";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import "./BookSlot.css";

import LocalizationProvider from "@mui/lab/LocalizationProvider";
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
} from "@mui/material";
import { DataLocations } from "../Data";
import DateTimePicker from "@mui/lab/DateTimePicker";
import BookingCard from "./Cards/BookingCard";
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
}));
const BookSlot = (props) => {
  const { slotToEdit } = useContext(AuthContext);
  const classes = useStyles();
  const [inTime, setInTime] = useState(new Date("2020-12-18T21:11:54"));
  const [outTime, setOutTime] = useState(new Date("2020-12-18T21:11:54"));
  const [inputLocation, setInputLocation] = useState("Home");
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [invalidTime, setInvalidTime] = useState(false);
  const [goodResults, setGoodResults] = useState();
  const [badResults, setBadResults] = useState();
  var toShow = [];
  var successfulResults = []; // Filter Results
  var failedResults = [];
  var numberOfHours = Math.ceil(
    (outTime.getTime() - inTime.getTime()) / 3600000
  );
  DataLocations.map((x) => {
    toShow.push({ name: x.name });
  });
  const handleLocationChange = (e) => {
    setInputLocation(e.target.value);
  };
  const handleOutTime = (e) => {
    setOutTime(e);
  };
  const handleInTime = (e) => {
    setInTime(e);
  };

  const handleDone = () => {
    const inputTime = {
      checkIn: inTime,
      checkOut: outTime,
    };
    successfulResults = []; // Filter Results
    failedResults = [];
    if ((outTime.getTime() - inTime.getTime()) / 3600000 > 23) {
      setInvalidTime(true);
    } else {
      var locationToCheck = DataLocations.filter((x) => {
        if (x.name === inputLocation) return true;
        else return false;
      });

      locationToCheck[0].slots.map((slot) => {
        var check;
        var done = false;
        slot.bookings.map((booking) => {
          var x = booking.checkIn;
          var y = booking.checkOut;
          var a = inTime.getTime();
          var b = outTime.getTime();
          if (
            (a - x) * (a - y) <= 0 ||
            (b - x) * (b - y) <= 0 ||
            (x > a && y < b)
          ) {
            check = true;
          }
          if (check && !done) {
            var minTime = 10000000;
            slot.bookings.map((booking) => {
              var x = booking.checkIn.getTime();
              var y = booking.checkOut.getTime();
              var a = inTime.getTime();
              var b = outTime.getTime();
              if (x > a) {
                minTime = Math.min(minTime, x - a);
              }
            });
            failedResults.push({ slot, minTime });
            check = false;
            done = true;
          }
        });
        if (!done)
          successfulResults.push({
            slot: slot,
            location: locationToCheck[0],
            inputTime,
          });
      });
      setGoodResults(successfulResults);
      setBadResults(failedResults);
      setIsButtonClicked(true);
      // console.log(DataLocations);
    }
  };
  //   console.log(slotToEdit);
  const card = (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Grid item xs={12}>
          <Typography
            variant="h3"
            sx={{ color: "#ffff", paddingBottom: "30px" }}
          >
            Book a Slot -
          </Typography>
        </Grid>

        <Grid
          item
          xs={4}
          className={classes.gridItem}
          sx={{ paddingLeft: "100px" }}
        >
          <DateTimePicker
            label="Check-in Time"
            value={inTime}
            onChange={handleInTime}
            renderInput={(params) => <TextField {...params} />}
          />
        </Grid>
        <Grid
          item
          xs={4}
          className={classes.gridItem}
          sx={{ paddingLeft: "100px" }}
        >
          <DateTimePicker
            label="Check-out Time"
            value={outTime}
            onChange={handleOutTime}
            renderInput={(params) => <TextField {...params} />}
          />
        </Grid>
        <Grid
          item
          xs={4}
          className={classes.gridItem}
          sx={{ paddingLeft: "100px" }}
        >
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Location</InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={inputLocation}
              onChange={handleLocationChange}
              className={classes.selectEmpty}
            >
              {/* <MenuItem value={"Campus"}>Campus</MenuItem>
              <MenuItem value={"Airport"}>Airport</MenuItem>
              <MenuItem value={"Bustop"}>Bustop</MenuItem> */}
              {toShow.map((x) => {
                return <MenuItem value={x.name}>{x.name}</MenuItem>;
              })}
            </Select>
            {/* <FormHelperText>Required</FormHelperText> */}
          </FormControl>
        </Grid>
        <Grid
          item
          xs={6}
          className={classes.gridItem}
          sx={{ paddingLeft: "100px" }}
        >
          <Typography variant="h5">
            Booking Duration: {numberOfHours} hours
          </Typography>
        </Grid>
        <Grid
          item
          xs={6}
          className={classes.gridItem}
          sx={{ paddingLeft: "100px" }}
        >
          <Button
            sx={{ backgroundColor: "white", color: "#242121" }}
            variant="outlined"
            className={classes.button}
            color="success"
            onClick={handleDone}
          >
            Check Availability
          </Button>
        </Grid>
        {invalidTime && (
          <Typography
            variant="h5"
            sx={{ paddingLeft: "100px", paddingTop: "30px" }}
            color="error"
          >
            Booking Exceeds 24 hours, Please check the dates.
          </Typography>
        )}
      </Grid>
    </LocalizationProvider>
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
      <hr />
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        {isButtonClicked &&
          goodResults.map((x) => {
            return (
              <Grid item xs={6}>
                <BookingCard details={x} numberHours={numberOfHours} />
              </Grid>
            );
          })}
      </Grid>
    </Box>
  );
};

export default BookSlot;
