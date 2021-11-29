import { useContext } from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  Grid,
} from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import AuthContext from "../../../context/AuthContext";
import { User } from "../../Data";
const useStyles = makeStyles((theme) => ({
  card: {
    margin: ".5vw .5vw ",
    backgroundColor: "#524c4c",
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
  console.log(props.details.details);
  const x = props.details.details;
  const duration = Math.ceil(
    (x.inputTime.checkOut.getTime() - x.inputTime.checkIn.getTime()) / 3600000
  );
  // const x = props.details.details;
  const { setSlotToEdit, userData } = useContext(AuthContext);
  const card = (
    <div>
      <CardContent>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          <Grid item xs={6}>
            <Typography variant="h4" sx={{ color: "#ffffff" }}>
              Location: {x.location.name}
            </Typography>
          </Grid>
          <Grid item xs={6} sx={{ textAlign: "right" }}>
            <Typography variant="h2" sx={{ color: "#ffffff" }}>
              {x.slot.number}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5" sx={{ color: "#ffffff" }}>
              Date: {x.inputTime.checkIn.getDate()}/
              {x.inputTime.checkIn.getMonth() + 1}/
              {x.inputTime.checkIn.getFullYear()}
            </Typography>
          </Grid>
          <Grid item xs={6} sx={{ marginTop: "20px" }}>
            <Typography variant="h5" sx={{ color: "#ffffff" }}>
              Check In:
            </Typography>
          </Grid>
          <Grid item xs={6} sx={{ textAlign: "right", marginTop: "20px" }}>
            <Typography variant="h5" sx={{ color: "#ffffff" }}>
              Check Out:
            </Typography>
          </Grid>
          <Grid item xs={6} sx={{}}>
            <Typography variant="h5" sx={{ color: "#ffffff" }}>
              {x.inputTime.checkIn.toLocaleTimeString("en-US")}
            </Typography>
          </Grid>
          <Grid item xs={6} sx={{ textAlign: "right" }}>
            <Typography variant="h5" sx={{ color: "#ffffff" }}>
              {x.inputTime.checkOut.toLocaleTimeString("en-US")}
            </Typography>
          </Grid>
          <Grid item xs={6} sx={{ marginTop: "20px" }}>
            <Typography variant="h5" sx={{ color: "#ffffff" }}>
              Duration of parking:
              {duration}
            </Typography>
          </Grid>
          <Grid item xs={6} sx={{ textAlign: "right", marginTop: "20px" }}>
            <Typography variant="h5" sx={{ color: "#ffffff" }}>
              Cost: ₹{duration * 25}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions></CardActions>
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
