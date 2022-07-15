import { useContext } from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@mui/material";
import { DataLocations } from "../../Data";
import { makeStyles } from "@material-ui/core/styles";

import AuthContext from "../../../context/AuthContext";

const useStyles = makeStyles((theme) => ({
  card: {
    margin: "2.5vw 2.5vw",
    backgroundColor: "#0D0D12",

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
  bullet: {
    fontSize: "5px",
    margin: "15px",
    position: "relative",
    top: "-7px",
  },
}));

export default function LocationCard(props) {
  const classes = useStyles();
  const { setLocationToEdit } = useContext(AuthContext);

  const startEdit = () => {
    props.setWhatLocation("edit");
    setLocationToEdit(props.location);
  };
  const startDelete = () => {
    var allLocations = props.allLocations;
    const temp = allLocations.filter((x) => {
      if (x.name === props.location.name) return false;
      else return true;
    });
    console.log(temp);

    props.setAllLocations(temp);
  };
  const card = (
    <div>
      <CardContent>
        <Typography variant="h3" color="white" gutterBottom>
          Name: {props.location.name}
        </Typography>
        <Typography variant="h5" color="white" gutterBottom>
          Address: {props.location.address}
        </Typography>
        <Typography variant="h5" color="white" gutterBottom>
          Owner: {props.location.owner}
        </Typography>
        <Typography variant="h5" color="white" gutterBottom>
          Number of Slots: {props.location.slots.length}
        </Typography>
        <Typography variant="h5" color="white" gutterBottom>
          Services Provided:
          {props.location.servicesProvided.map((x) => {
            return (
              <Typography variant="h5" color="white">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <i
                  class="fas fa-circle"
                  className={"fas fa-circle " + classes.bullet}
                ></i>
                {x}
              </Typography>
            );
          })}
        </Typography>
        <Typography variant="h5" color="white" gutterBottom>
          Number of Workers: {props.location.workers.length}
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
