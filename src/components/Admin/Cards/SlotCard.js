import { useContext } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AuthContext from "../../../context/AuthContext";

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
  const { setSlotToEdit } = useContext(AuthContext);
  const startEdit = () => {
    props.setEditSlot(true);
    setSlotToEdit(props.slot);
  };
  const startDelete = () => {
    // console.log(props.slot);

    props.locations.filter((x) => {
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
    props.setLocations(props.locations);
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
