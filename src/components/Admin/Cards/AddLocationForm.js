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
  const [name, setName] = useState("");
  const [owner, setOwner] = useState("");
  const [address, setAddress] = useState("");
  const [maxTime, setMaxTime] = useState("");
  // Car wash
  // Tyre Change
  // Wheel Alignment
  // Oil Change
  // Valet Parking
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
  const { wash, tyre, wheel, oil, valet } = state;
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleOwnerChange = (e) => {
    setOwner(e.target.value);
  };
  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };
  const handleMaxTimeChange = (e) => {
    setMaxTime(e.target.value);
  };
  const createLocation = () => {
    const servicesProvided = [];
    if (state.wash) servicesProvided.push("Car Wash");
    if (state.tyre) servicesProvided.push("Tyre Change");
    if (state.wheel) servicesProvided.push("Wheel Alignment");
    if (state.oil) servicesProvided.push("Oil Change");
    if (state.valet) servicesProvided.push("Valet Parking");
    const data = {
      name,
      address,
      owner,
      maxTime,
      servicesProvided,
      waitingList: [],
      slots: [
        { number: 1, floor: 1, carType: "Sedan", bookings: [], userRating: 3 },
        {
          number: 2,
          floor: 1,
          carType: "Convertible",
          bookings: [],
          userRating: 4.5,
        },
        { number: 1, floor: 2, carType: "Jeep", bookings: [], userRating: 4 },
      ],
      workers: [],
    };
    DataLocations.push(data);
    props.setWhatSlot("show");
  };
  const classes = useStyles();
  const card = (
    <div>
      <CardContent>
        <TextField
          required
          fullWidth
          value={name}
          onChange={handleNameChange}
          autoComplete="off"
          InputLabelProps={{ style: { color: "#ffffff" } }}
          sx={{ input: { color: "#ffffff" }, marginBottom: "20px" }}
          id="Name"
          label="Name"
          name="Name"
        ></TextField>
        <TextField
          required
          fullWidth
          value={owner}
          onChange={handleOwnerChange}
          autoComplete="off"
          InputLabelProps={{ style: { color: "#ffffff" } }}
          sx={{ input: { color: "#ffffff" }, marginBottom: "20px" }}
          id="Owner"
          label="Owner"
          name="Owner"
        ></TextField>
        <TextField
          required
          fullWidth
          value={address}
          onChange={handleAddressChange}
          autoComplete="off"
          InputLabelProps={{ style: { color: "#ffffff" } }}
          sx={{ input: { color: "#ffffff" }, marginBottom: "20px" }}
          id="Address"
          label="Address"
          name="Address"
        ></TextField>
        <TextField
          required
          type="number"
          fullWidth
          value={maxTime}
          onChange={handleMaxTimeChange}
          autoComplete="off"
          InputLabelProps={{ style: { color: "#ffffff" } }}
          sx={{ input: { color: "#ffffff" }, marginBottom: "20px" }}
          id="Max Time"
          label="Max Time"
          name="Max Time"
        ></TextField>
        <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
          <FormLabel sx={{ color: "#ffffff" }}>Features Available: </FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox checked={wash} onChange={handleChange} name="wash" />
              }
              label="Car Wash"
            />
            <FormControlLabel
              control={
                <Checkbox checked={tyre} onChange={handleChange} name="tyre" />
              }
              label="Tyre Change"
            />
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
            <FormControlLabel
              control={
                <Checkbox checked={oil} onChange={handleChange} name="oil" />
              }
              label="Oil Change"
            />
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
          </FormGroup>
        </FormControl>
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
          onClick={createLocation}
        >
          Create
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
