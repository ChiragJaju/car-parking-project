import { useContext, useState } from "react";
import AuthContext from "../../context/AuthContext";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
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
import { DataLocations } from "../Data";
const useStyles = makeStyles((theme) => ({
  card: {
    margin: ".5vw .5vw ",
    backgroundColor: "#0D0D12",
    width: "41vw",
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
  const s = props.details.details;
  const aS = {
    wash: props.details.wash,
    tyre: props.details.tyre,
    wheel: props.details.wheel,
    oil: props.details.oil,
    valet: props.details.valet,
  };
  console.log(aS);
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
  const { setSlotToEdit, userData } = useContext(AuthContext);
  const card = (
    <div>
      <Typography variant="h3" sx={{ color: "#ffffff", marginBottom: "40px" }}>
        Location: {s.location.name}
      </Typography>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Grid xs={6}>
          <Typography
            variant="h5"
            sx={{ color: "#ffffff", marginBottom: "20px" }}
          >
            Slot: {s.slot.number}
          </Typography>
        </Grid>
        <Grid xs={6}>
          <Typography
            variant="h5"
            sx={{ color: "#ffffff", marginBottom: "20px" }}
          >
            Floor: {s.slot.floor}
          </Typography>
        </Grid>
        <Grid xs={6}>
          <Typography
            variant="h5"
            sx={{ color: "#ffffff", marginBottom: "20px" }}
          >
            Check In Time : {s.inputTime.checkIn.toLocaleTimeString("en-US")}
          </Typography>
        </Grid>
        <Grid xs={6}>
          <Typography
            variant="h5"
            sx={{ color: "#ffffff", marginBottom: "20px" }}
          >
            Check In Time : {s.inputTime.checkOut.toLocaleTimeString("en-US")}
          </Typography>
        </Grid>
        <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
          <FormLabel sx={{ color: "#ffffff" }}>
            Choose Additional Services:{" "}
          </FormLabel>
          <FormGroup>
            {aS.wash && (
              <FormControlLabel
                control={
                  <Checkbox
                    checked={wash}
                    onChange={handleChange}
                    name="wash"
                  />
                }
                label="Car Wash"
              />
            )}
            {aS.tyre && (
              <FormControlLabel
                control={
                  <Checkbox
                    checked={tyre}
                    onChange={handleChange}
                    name="tyre"
                  />
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
      </Grid>
    </div>
  );
  //   console.log({ ...props.details, ...userData });

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
