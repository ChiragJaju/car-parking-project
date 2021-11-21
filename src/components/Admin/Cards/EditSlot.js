import { useContext, useState } from "react";
import AuthContext from "../../../context/AuthContext";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  card: {
    margin: "2.5vw 2.5vw",
    backgroundColor: "#524c4c",
    width: "40vw",
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
  input: {
    color: "#ffffff",
    fontSize: "1rem",
    borderColor: "white",
  },
}));
const EditSlot = (props) => {
  const { slotToEdit } = useContext(AuthContext);
  const [floor, setFloor] = useState(slotToEdit.slot.floor);
  const [carType, setCarType] = useState(slotToEdit.slot.carType);
  const handleFloorChange = (e) => {
    setFloor(e.target.value);
  };
  const handleCarChange = (e) => {
    setCarType(e.target.value);
  };

  const classes = useStyles();
  const handleDone = () => {
    var data = {
      number: slotToEdit.slot.number,
      floor: parseInt(floor),
      carType: carType,
    };
    props.locations.filter((x) => {
      if (x.name === slotToEdit.location.name) {
        // console.log(x.slots);
        var xx = x.slots.filter((y) => {
          if (y.number === slotToEdit.slot.number) return false;
          else return true;
        });
        xx.push(data);
        x.slots = xx;
      } else return false;
    });
    // console.log(props.locations);
    props.setLocations(props.locations);
    props.setEditSlot(false);
  };
  //   console.log(slotToEdit);
  const card = (
    <div>
      <CardContent>
        <Typography sx={{}} variant="h3" color="#ffffff" gutterBottom>
          Location: {slotToEdit.location.name} &nbsp;&nbsp;&nbsp;&nbsp;{" "}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
          &nbsp;&nbsp; {slotToEdit.slot.number}
        </Typography>
        <Typography
          variant="h5"
          sx={{ marginBottom: "5px" }}
          component="div"
          color="#ffffff"
        >
          Address - &nbsp;&nbsp; {slotToEdit.location.address}
        </Typography>

        <Typography
          variant="h5"
          sx={{ marginBottom: "5px" }}
          component="div"
          color="#ffffff"
        >
          Owner - &nbsp;&nbsp; {slotToEdit.location.owner}
        </Typography>

        <Typography
          variant="h5"
          sx={{
            marginBottom: "5px",
            lineHeight: "2",
          }}
          component="div"
          color="#ffffff"
        >
          Floor - &nbsp;&nbsp;{" "}
          <TextField
            type="number"
            inputProps={{ className: classes.input }}
            id="outlined-number"
            value={floor}
            onChange={handleFloorChange}
            sx={{
              "& .MuiOutlinedInput-root:hover": {
                "& > fieldset": {
                  borderColor: "white",
                },
              },
            }}
          ></TextField>
        </Typography>

        <Typography
          variant="h5"
          sx={{ marginBottom: "5px", lineHeight: "2" }}
          component="div"
          color="#ffffff"
        >
          Car Type - &nbsp;&nbsp;
          <TextField
            type="text"
            inputProps={{ className: classes.input }}
            id="carType"
            value={carType}
            onChange={handleCarChange}
            sx={{
              "& .MuiOutlinedInput-root:hover": {
                "& > fieldset": {
                  borderColor: "white",
                },
              },
            }}
          ></TextField>
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          sx={{ backgroundColor: "white", color: "#242121" }}
          variant="outlined"
          className={classes.button}
          color="success"
          onClick={handleDone}
        >
          Done
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
};

export default EditSlot;
