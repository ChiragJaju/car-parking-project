import { useContext } from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@mui/material";

import { makeStyles } from "@material-ui/core/styles";

import AuthContext from "../../../context/AuthContext";

const useStyles = makeStyles((theme) => ({
  card: {
    margin: "2.5vw 2.5vw",
    backgroundColor: "#0D0D12",
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
      backgroundColor: "#229EF3",
    },
  },
}));

export default function OutlinedCard(props) {
  const classes = useStyles();
  const { setSlotToEdit } = useContext(AuthContext);
  const startEdit = () => {
    props.setWhatSlot("edit");
    setSlotToEdit(props.slot);
  };
  const startDelete = () => {
    // console.log(props.slot);
    var locations = props.locations;
    locations.filter((x) => {
      if (x.name === props.slot.location.name) {
        // console.log(x.slots);
        var xx = x.slots.filter((y) => {
          if (y.number === props.slot.slot.number) return false;
          else return true;
        });
        x.slots = xx;
      } else return false;
    });
    // console.log(props.locations);
    props.setLocations(locations);
  };
  const card = (
    <div>
      <CardContent>
        <Typography sx={{}} variant="h3" color="#ffffff" gutterBottom>
          Location: {props.slot.location.name} &nbsp;&nbsp;&nbsp;&nbsp;{" "}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
          &nbsp;&nbsp; {props.slot.slot.number}
        </Typography>
        <Typography
          variant="h5"
          sx={{ marginBottom: "5px" }}
          component="div"
          color="#ffffff"
        >
          Address - &nbsp;&nbsp; {props.slot.location.address}
        </Typography>

        <Typography
          variant="h5"
          sx={{ marginBottom: "5px" }}
          component="div"
          color="#ffffff"
        >
          Owner - &nbsp;&nbsp; {props.slot.location.owner}
        </Typography>

        <Typography
          variant="h5"
          sx={{ marginBottom: "5px" }}
          component="div"
          color="#ffffff"
        >
          Floor - &nbsp;&nbsp; {props.slot.slot.floor}
        </Typography>

        <Typography
          variant="h5"
          sx={{ marginBottom: "5px" }}
          component="div"
          color="#ffffff"
        >
          Car Type - &nbsp;&nbsp;{props.slot.slot.carType}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          sx={{ backgroundColor: "white", color: "#242121" }}
          variant="outlined"
          className={classes.button}
          color="success"
          onClick={startEdit}
        >
          Edit
        </Button>
        <Button
          sx={{ backgroundColor: "white", color: "#242121" }}
          variant="outlined"
          className={classes.button}
          color="success"
          onClick={startDelete}
        >
          Delete
        </Button>
      </CardActions>
    </div>
  );

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card
        variant="outlined"
        sx={{ backgroundColor: "#403b3b" }}
        className={classes.card}
      >
        {card}
      </Card>
    </Box>
  );
}
