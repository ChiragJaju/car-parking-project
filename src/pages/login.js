// useState from React
import React, { useState, useContext } from "react";
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
import { User } from "../components/Data";
import AuthContext from "../context/AuthContext";
const theme = createTheme();

export default function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passMatch, setPassMatch] = useState();
  const { setUserData, setWhatToShow } = useContext(AuthContext);

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };
  const handlePass = (event) => {
    setPassword(event.target.value);
  };

  // check if pass matches with corresponding email

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === "admin") {
      props.setLoggedIn("admin");
      setWhatToShow("location");
    } else {
      props.setLoggedIn("user");
      setWhatToShow("BookSlot");
    }
    const data = {
      username,
      password,
      name: User[0].name,
    };
    setUserData(data);
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
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlined />
            </Avatar>
            <Typography component="h1" variant="h5">
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
                autoFocus
                onChange={handleUsername}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handlePass}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  {/* add redirect link */}
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/signup" variant="body2">
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
                <a href="https://localhost:3000/auth/google">
                  {"Login with "} &nbsp;<i with i class="fab fa-google"></i>
                </a>
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
