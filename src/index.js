import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import App from "./App";
import MouseContextProvider from "./context/mouse-context";
import "./index.css";

import { AuthContextProvider } from "./context/AuthContext";
require("dotenv").config();

const themeDark = createTheme({
  palette: {
    background: {
      default: "#131419",
    },
    // text: {
    //   primary: "#ffffff",
    //   secondary: "#ffffff",
    // },
  },
});

ReactDOM.render(
  <ThemeProvider theme={themeDark}>
    <MouseContextProvider>
      <CssBaseline />
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </MouseContextProvider>
  </ThemeProvider>,
  document.getElementById("root")
);
