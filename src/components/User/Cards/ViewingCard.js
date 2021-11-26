import { useContext } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AuthContext from "../../../context/AuthContext";
import { User } from "../../Data";
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
  console.log(props.details);
  const { setSlotToEdit, userData } = useContext(AuthContext);
  const card = (
    <div>
      <CardContent></CardContent>
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
