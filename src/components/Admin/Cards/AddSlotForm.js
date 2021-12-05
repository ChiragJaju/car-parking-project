import { useContext, useState } from "react";
import AuthContext from "../../../context/AuthContext";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import { TextField } from "@mui/material";
import FormLabel from "@mui/material/FormLabel";
import FormHelperText from "@mui/material/FormHelperText";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { DataLocations } from "../../Data";

const useStyles = makeStyles((theme) => ({
  card: {
    margin: "2.5vw 2.5vw",
    backgroundColor: "#0D0D12",
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
      backgroundColor: "#229EF3",
    },
  },
  input: {
    color: "#ffffff",
    fontSize: "1rem",
    borderColor: "white",
  },
}));
export default function AddLocationForm(props) {
  const classes = useStyles();
  const [location, setLocation] = useState("");
  const [floor, setFloor] = useState("");
  const [carType, setCarType] = useState("");
  const handleFloorChange = (e) => {
    setFloor(e.target.value);
  };
  const handleCarTypeChange = (e) => {
    setCarType(e.target.value);
  };
  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };
  const createSlot = () => {
    const data = { floor, carType };
    DataLocations.map((x) => {
      if (x.name === location) {
        x.slots.push({
          floor,
          carType,
          number: x.slots.length + 1,
          bookings: [],
          userRating: 3,
        });
      }
    });
    props.setWhatSlot("show");
  };
  const card = (
    <div>
      <CardContent>
        <TextField
          required
          fullWidth
          value={location}
          onChange={handleLocationChange}
          autoComplete="off"
          InputLabelProps={{ style: { color: "#ffffff" } }}
          sx={{ input: { color: "#ffffff" }, marginBottom: "20px" }}
          id="Name"
          label="Location"
          name="Name"
        ></TextField>
        <TextField
          required
          fullWidth
          value={floor}
          onChange={handleFloorChange}
          autoComplete="off"
          InputLabelProps={{ style: { color: "#ffffff" } }}
          sx={{ input: { color: "#ffffff" }, marginBottom: "20px" }}
          id="Name"
          label="Floor"
          type="number"
          name="Name"
        ></TextField>
        <TextField
          required
          fullWidth
          value={carType}
          onChange={handleCarTypeChange}
          autoComplete="off"
          InputLabelProps={{ style: { color: "#ffffff" } }}
          sx={{ input: { color: "#ffffff" }, marginBottom: "20px" }}
          id="Name"
          label="Car Type"
          name="Name"
        ></TextField>
      </CardContent>
      <CardActions>
        <Button
          sx={{
            backgroundColor: "white",
            color: "#242121",
            marginLeft: "20px",
          }}
          variant="outlined"
          className={classes.button}
          color="success"
          onClick={createSlot}
        >
          Create
        </Button>
      </CardActions>
    </div>
  );
  console.log("hii bicc");
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
