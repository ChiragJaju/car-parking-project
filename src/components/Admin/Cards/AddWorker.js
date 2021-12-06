import { useContext, useState } from "react";
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
import "./addLocation.css";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import AuthContext from "../../../context/AuthContext";

const useStyles = makeStyles((theme) => ({
  card: {
    margin: "2.5vw 2.5vw",
    backgroundColor: "#0D0D12",
    height: "16.5vw",
    padding: "20px",
    width: "37vw",
    textColor: "#ffffff",
    border: "1px dashed  #ffffff",
  },
  arrow: {
    fontSize: "h6.fontSize",
    color: theme.palette.grey[800],
    display: "inline",
  },
  button: {
    "&:hover": {
      backgroundColor: "#229EF3",
    },
  },
}));

export default function AddWorker(props) {
  const classes = useStyles();

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card
        id="card"
        variant="outlined"
        sx={{ backgroundColor: "#403b3b" }}
        className={classes.card}
        onClick={() => {
          props.setWhatWorker("add");
        }}
      >
        <AddCircleOutlineIcon
          sx={{ color: "#ffff", margin: "15% 45%", fontSize: "100px" }}
        />
      </Card>
    </Box>
  );
}
