import { useState } from "react";
import axios from "axios";
import "./login.css";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Grid,
  Box,
  Typography,
  Container,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
const theme = createTheme();
const useStyles = makeStyles((theme) => ({
  input: {
    "& input[type=number]": {
      "-moz-appearance": "textfield",
    },
    "& input[type=number]::-webkit-outer-spin-button": {
      "-webkit-appearance": "none",
      margin: 0,
    },
    "& input[type=number]::-webkit-inner-spin-button": {
      "-webkit-appearance": "none",
      margin: 0,
    },
  },
  notchedOutline: {
    borderWidth: "1px",
    borderColor: "yellow !important",
  },
}));

export default function SignUp(props) {
  const classes = useStyles();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [address, setAddress] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [carNumber, setCarNumber] = useState("");
  const [isDataValid, setIsDataValid] = useState();

  const [doesPassMatch, setDoesPassMatch] = useState();

  const handleFirstName = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastName = (event) => {
    setLastName(event.target.value);
  };
  const handleUsername = (event) => {
    setUsername(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleRePassword = (event) => {
    setRePassword(event.target.value);
  };
  const handleAddress = (event) => {
    setAddress(event.target.value);
  };
  const handleMobileNumber = (event) => {
    setMobileNumber(event.target.value);
  };
  const handleCarNumber = (event) => {
    setCarNumber(event.target.value);
  };

  const WhiteBorderTextField = styled(TextField)`
    & label.Mui-focused {
      color: white;
    }
    & .MuiOutlinedInput-root {
      &.Mui-focused fieldset {
        border-color: #229ef3;
      }
      &:hover fieldset {
        border-color: #2d2f3b;
      }
    }
  `;
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== rePassword) {
      setDoesPassMatch(false);
      return;
    }

    // Check for unique username and email and number
    // Check carnumber format
    //
    // Send this data and redirect
    const data = {
      firstName,
      lastName,
      email,
      username,
      password,
      address,
      mobileNumber,
      carNumber,
    };
    const sendData = {
      l_name: lastName,
      email: email,
      mobile: mobileNumber,
      u_name: username,
      pwd: password,
    };
    // const res = await axios.post("http://localhost:8080/user/add/A", sendData);
    // console.log(res);

    //send all this data
    //get response whether username,email and phonenumber is unique
    //if all unique then get all his data and get loggedin
    // if(IsUserNew === true){
    //   props.setLoggedIn(true);
    //  isDataValid(true);
    // }
    // else {isDataValid(false)}
    props.setLoggedIn(true);
    setDoesPassMatch(true);
    console.log(data);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "#131419",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon sx={{ color: "#ffffff" }} />
          </Avatar>
          <Typography component="h1" variant="h5" sx={{ color: "#ffffff" }}>
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <WhiteBorderTextField
                  autoComplete="off"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  value={firstName}
                  onChange={handleFirstName}
                  InputLabelProps={{
                    style: { color: "#ffffff" },
                    classes: {
                      notchedOutline: classes.notchedOutline,
                    },
                  }}
                  sx={{ input: { color: "#ffffff" } }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="off"
                  value={lastName}
                  onChange={handleLastName}
                  InputLabelProps={{ style: { color: "#ffffff" } }}
                  sx={{ input: { color: "#ffffff" } }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="off"
                  value={username}
                  onChange={handleUsername}
                  InputLabelProps={{ style: { color: "#ffffff" } }}
                  sx={{ input: { color: "#ffffff" } }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="off"
                  value={email}
                  onChange={handleEmail}
                  InputLabelProps={{ style: { color: "#ffffff" } }}
                  sx={{ input: { color: "#ffffff" } }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="off"
                  value={password}
                  onChange={handlePassword}
                  InputLabelProps={{ style: { color: "#ffffff" } }}
                  sx={{ input: { color: "#ffffff" } }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="RePassword"
                  label="Confirm Password"
                  type="password"
                  id="password"
                  autoComplete="off"
                  value={rePassword}
                  onChange={handleRePassword}
                  InputLabelProps={{ style: { color: "#ffffff" } }}
                  sx={{ input: { color: "#ffffff" } }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="address"
                  label="Address"
                  name="address"
                  autoComplete="off"
                  value={address}
                  onChange={handleAddress}
                  InputLabelProps={{ style: { color: "#ffffff" } }}
                  sx={{ input: { color: "#ffffff" } }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="number"
                  label="Mobile Number"
                  name="number"
                  autoComplete="off"
                  type="number"
                  className={classes.input}
                  value={mobileNumber}
                  onChange={handleMobileNumber}
                  InputLabelProps={{ style: { color: "#ffffff" } }}
                  sx={{ input: { color: "#ffffff" } }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="carNumber"
                  label="Car Registration Number"
                  name="carNumber"
                  autoComplete="off"
                  value={carNumber}
                  onChange={handleCarNumber}
                  InputLabelProps={{ style: { color: "#ffffff" } }}
                  sx={{ input: { color: "#ffffff" } }}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            {doesPassMatch === false && (
              <Typography component="h3" variant="h6" color="error">
                Password doesn't Match!
              </Typography>
            )}
            {isDataValid === false && (
              <Typography component="h3" variant="h6" color="error">
                User Already Exists. Check your details.
              </Typography>
            )}
          </Box>

          <Typography
            component="h1"
            variant="h5"
            sx={{ color: "#ffffff", marginBottom: "10px" }}
          >
            Or
          </Typography>
          <a href="https://localhost:3000/auth/google" id="link">
            {"Login with "} &nbsp;<i with i class="fab fa-google"></i>
          </a>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

// <Link href="/" variant="body2">
//                   Already have an account? Sign in
// </Link>
