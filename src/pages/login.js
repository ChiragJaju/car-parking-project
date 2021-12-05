// useState from React
import React, { useState, useContext } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import "./login.css";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Link,
  Paper,
  Box,
  Grid,
  Typography,
} from "@mui/material";
import LockOutlined from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { DataLocations, User, Workers } from "../components/Data";
import styled from "styled-components";
import { auth, provider } from "../firebase/firebase";
import AuthContext from "../context/AuthContext";

const theme = createTheme();

const useStyles = makeStyles((theme) => ({
  textfield: {
    border: "1px solid white",
  },
}));
export default function Login(props) {
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passMatch, setPassMatch] = useState();
  const { setUserData, setWhatToShow, userData } = useContext(AuthContext);
  const [userValid, setUserValid] = useState(true);
  const handleUsername = (event) => {
    setUsername(event.target.value);
  };
  const handlePass = (event) => {
    setPassword(event.target.value);
  };
  const googleSignIn = async () => {
    const res = await auth.signInWithPopup(provider).catch(alert);
    props.setLoggedIn("user");
    setWhatToShow("BookSlot");
    const data = {
      username: res.user.displayName,
      password: "google",
      name: res.user.displayName,
      bookings: [],
      email: res.user.email,
      numberOfVisits: 0,
      balance: 100,
    };
    setUserData(data);
    User.push(data);
    console.log(User);

    // console.log(res.user.displayName);
  };
  // const WhiteBorderTextField = styled(TextField)`
  //   & label.Mui-focused {
  //     color: white;
  //   }
  //   & .MuiOutlinedInput-root {
  //     &.Mui-focused fieldset {
  //       border-color: #229ef3;
  //     }
  //     &:hover fieldset {
  //       border-color: #2d2f3b;
  //     }
  //   }
  // `;
  // check if pass matches with corresponding email

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (username[0] === "w") {
      var countera = 0;
      Workers.map((x) => {
        if (x.username === username && x.password === password) {
          setUserData(x);
          countera = 1;
        }
      });
      if (countera === 1) {
        props.setLoggedIn("user");
        setWhatToShow("worker");
      } else {
        setUserValid(false);
      }
    } else {
      var counter = 0;
      User.map((x) => {
        if (x.username === username && x.password === password) {
          setUserData(x);
          counter = 1;
        }
      });
      if (username === "admin" && password === "admin") counter = 1;
      if (counter === 1) {
        setUserValid(true);
        if (username === "admin") {
          props.setLoggedIn("admin");
          setWhatToShow("location");
        } else {
          props.setLoggedIn("user");
          setWhatToShow("BookSlot");
        }
      } else {
        setUserValid(false);
      }
    }

    // console.log(userData);
    // const response = await axios.post("localhost:8080/");
    //Axios send data
    //receive response
    //according to that set PassMatch
    // if(PassMatch===true){
    //   props.setLoggedIn(true);
    //   setUserData(response)
    // }
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(https://source.unsplash.com/random)",
            backgroundRepeat: "no-repeat",
            backgroundColor: "#131419",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid
          sx={{ backgroundColor: "#131419" }}
          item
          xs={12}
          sm={8}
          md={5}
          component={Paper}
          elevation={6}
          square
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "#131419",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlined />
            </Avatar>
            <Typography component="h1" variant="h5" sx={{ color: "#ffffff" }}>
              Sign in
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                value={username}
                autoComplete="off"
                onChange={handleUsername}
                InputLabelProps={{ style: { color: "#ffffff" } }}
                sx={{ input: { color: "#ffffff" } }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                InputLabelProps={{ style: { color: "#ffffff" } }}
                onChange={handlePass}
                value={password}
                sx={{ input: { color: "#ffffff" } }}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>

              {!userValid && (
                <Typography
                  component="h1"
                  variant="h6"
                  sx={{ color: "#ff0000" }}
                >
                  Invalid Username/Password
                </Typography>
              )}
              <Grid container>
                <Grid item xs>
                  {/* add redirect link */}
                  <Link href="#" variant="body2" id="link">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/signup" variant="body2" id="link">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Grid
                item
                xs={12}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  marginTop: "10px",
                }}
              >
                <Typography variant="body2" sx={{ color: "#ffff" }}>
                  {/* <a href="https://localhost:3000/auth/google" id="link">
                    {"Login with "} &nbsp;<i with i class="fab fa-google"></i>
                  </a> */}
                  <Button onClick={googleSignIn}>Login with Google</Button>
                </Typography>
              </Grid>
              {passMatch === false && (
                <Typography style={{ color: "#ff0000" }}>
                  Invalid Email or Password!
                </Typography>
              )}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
