import qr from "../../qr.png";
import { useContext, useState } from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Button,
  TextField,
  Typography,
  Grid,
} from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import AuthContext from "../../context/AuthContext";
import { User } from "../Data";

const useStyles = makeStyles((theme) => ({
  card: {
    margin: ".5vw .5vw ",
    backgroundColor: "#0D0D12",
    width: "80vw",
    padding: "20px",
    textColor: "#ffffff",
    height: "20vw",
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

export default function AddBalance() {
  const classes = useStyles();
  const [balance, setBalance] = useState();
  const [isAdded, setIsAdded] = useState(false);
  const { userData } = useContext(AuthContext);
  const handleBalance = (e) => {
    setBalance(e.target.value);
  };
  const handleConfirm = () => {
    User.map((x) => {
      if (x.username === userData.username) {
        x.balance = parseInt(x.balance) + parseInt(balance);
      }
    });
    setIsAdded(true);
    setBalance(0);
  };
  const card = (
    <div>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Grid item xs={6}>
          <Typography
            variant="h5"
            sx={{ color: "#ffffff", marginBottom: "30px" }}
          >
            Enter the Amount you want to Add:
          </Typography>
          <TextField
            margin="normal"
            required
            type="number"
            id="username"
            label="Amount"
            name="username"
            value={balance}
            autoComplete="off"
            onChange={handleBalance}
            InputLabelProps={{ style: { color: "#ffffff" } }}
            sx={{
              input: { color: "#ffffff" },
              display: "block",
              marginBottom: "30px",
            }}
          />
          <Button
            sx={{ backgroundColor: "white", color: "#242121" }}
            variant="outlined"
            className={classes.button}
            color="success"
            onClick={handleConfirm}
          >
            Add Balance
          </Button>
          {isAdded && (
            <Typography
              variant="h5"
              sx={{ color: "#0db518", marginTop: "20px" }}
            >
              Amount Added!
            </Typography>
          )}
        </Grid>
        <Grid item xs={6} sx={{ textAlign: "right", padding: "30px" }}>
          <img src={qr} alt="QR code"></img>
        </Grid>
      </Grid>
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
