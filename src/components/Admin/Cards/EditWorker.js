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
import { DataLocations, Workers } from "../../Data";
import MobileDatePicker from "@mui/lab/MobileDatePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
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
  const { slotToEdit } = useContext(AuthContext);
  const classes = useStyles();
  const [name, setName] = useState(slotToEdit.name);
  const [salary, setSalary] = useState(slotToEdit.salary);
  const [date, setDate] = useState(new Date("2020-08-18T21:11:54"));
  const handleFloorChange = (e) => {
    setSalary(e.target.value);
  };
  const handleDateChange = (e) => {
    setDate(e);
  };
  const handleLocationChange = (e) => {
    setName(e.target.value);
  };
  const dates = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`;
  const createSlot = () => {
    const worker = {
      name,
      salary,
      dateOfJoin: dates,
      username: `w_${name}`,
      password: name,
    };
    Workers.map((x) => {
      if (x.name === slotToEdit.name) {
        x.salary = salary;
        x.dateOfJoin = dates;
      }
    });
    props.setWhatWorker("show");
    // console.log(worker);
  };
  const card = (
    <div>
      <CardContent>
        <TextField
          required
          fullWidth
          value={name}
          onChange={handleLocationChange}
          autoComplete="off"
          InputLabelProps={{ style: { color: "#ffffff" } }}
          sx={{ input: { color: "#ffffff" }, marginBottom: "20px" }}
          id="Name"
          label="Name"
          name="Name"
          InputProps={{
            readOnly: true,
          }}
        ></TextField>
        <TextField
          required
          fullWidth
          value={salary}
          onChange={handleFloorChange}
          autoComplete="off"
          InputLabelProps={{ style: { color: "#ffffff" } }}
          sx={{ input: { color: "#ffffff" }, marginBottom: "20px" }}
          id="Name"
          label="Salary"
          type="number"
          name="Name"
        ></TextField>
        <MobileDatePicker
          label="Date Of Joining"
          inputFormat="dd/MM/yyyy"
          value={date}
          onChange={handleDateChange}
          renderInput={(params) => (
            <TextField
              InputLabelProps={{ style: { color: "#ffffff" } }}
              sx={{ input: { color: "#ffffff" } }}
              {...params}
            />
          )}
        />
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
          Edit Worker
        </Button>
      </CardActions>
    </div>
  );
  console.log("hii bicc");
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box sx={{ minWidth: 275 }}>
        <Card
          variant="outlined"
          sx={{ backgroundColor: "#403b3b" }}
          className={classes.card}
        >
          {card}
        </Card>
      </Box>
    </LocalizationProvider>
  );
}
