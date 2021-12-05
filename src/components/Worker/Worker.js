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
import AuthContext from "../../context/AuthContext";
import { User, DataLocations } from "../Data";
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
  const { setSlotToEdit, userData } = useContext(AuthContext);
  const card = <div>asdsd</div>;
  console.log(userData);

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
