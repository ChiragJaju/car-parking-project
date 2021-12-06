import { useContext } from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@mui/material";
import { Workers } from "../../Data";
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
    props.setWhatWorker("edit");
    setSlotToEdit(props.worker);
  };
  const startDelete = () => {
    const temp = Workers.filter((x) => {
      if (props.worker.name === x.name) {
        return false;
      } else return true;
    });
    // console.log(props.slot);
  };
  const card = (
    <div>
      <CardContent>
        <Typography sx={{}} variant="h3" color="#ffffff" gutterBottom>
          Name: {props.worker.name}
        </Typography>
        <Typography
          variant="h5"
          sx={{ marginBottom: "5px" }}
          component="div"
          color="#ffffff"
        >
          Date Of Join - &nbsp;&nbsp; {props.worker.dateOfJoin}
        </Typography>

        <Typography
          variant="h5"
          sx={{ marginBottom: "5px" }}
          component="div"
          color="#ffffff"
        >
          Salary - &nbsp;&nbsp; ₹{props.worker.salary}
        </Typography>

        <Typography
          variant="h5"
          sx={{ marginBottom: "5px" }}
          component="div"
          color="#ffffff"
        >
          Username - &nbsp;&nbsp; {props.worker.username}
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
