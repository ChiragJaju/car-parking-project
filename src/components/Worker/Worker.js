import { useContext } from "react";
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
import { makeStyles } from "@material-ui/core/styles";
import AuthContext from "../../context/AuthContext";
import { User, DataLocations } from "../Data";
import WorkerCard from "./WorkerCard";
const useStyles = makeStyles((theme) => ({
  card: {
    margin: "1vw 1vw",
    backgroundColor: "#38393d",
    width: "40.5vw",
    padding: "30px",

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
export default function OutlinedCard(props) {
  const classes = useStyles();
  const { setSlotToEdit, userData } = useContext(AuthContext);
  console.log(userData);
  const card = (
    <div>
      <Typography variant="h5" sx={{ color: "#ffffff", marginBottom: "20px" }}>
        Name: {userData.name}
      </Typography>
      <Typography variant="h5" sx={{ color: "#ffffff", marginBottom: "20px" }}>
        Salary: ₹{userData.salary}
      </Typography>
      <Typography variant="h5" sx={{ color: "#ffffff", marginBottom: "20px" }}>
        Date Of Join: {userData.dateOfJoin}
      </Typography>
    </div>
  );

  const bookings = [];
  User.map((x) => {
    // bookings.push(x.bookings);
    x.bookings.map((y) => {
      // console.log(y);
      bookings.push(y);
    });
  });
  console.log(User);
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card
        variant="outlined"
        sx={{ backgroundColor: "#0D0D12" }}
        className={classes.card}
      >
        {card}
      </Card>
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
