import { useContext, useEffect } from "react";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import { Grid } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import AddBoxIcon from "@mui/icons-material/AddBox";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import AppBar from "@mui/material/AppBar";
import { DataLocations, User, Workers } from "../components/Data";
import BreakfastDiningIcon from "@mui/icons-material/BreakfastDining";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import { Link } from "react-router-dom";
import ViewListIcon from "@mui/icons-material/ViewList";
import AuthContext from "../context/AuthContext";
import axios from "axios";
const drawerWidth = 240;

export default function PermanentDrawerLeft(props) {
  useEffect(() => {
    handleClick();
  });
  const handleClick = async () => {
    const response = await axios.post("http://localhost:8080/update", {
      data: DataLocations,
    });
    await axios.post("http://localhost:8080/update/users", {
      data: User,
    });
    await axios.post("http://localhost:8080/update/workers", {
      data: Workers,
    });
  };
  const { whatToShow, setWhatToShow, userData } = useContext(AuthContext);
  // console.log(userData);
  const BookClick = () => {
    setWhatToShow("BookSlot");
  };

  const ViewClick = () => {
    setWhatToShow("View Booking");
  };
  const BalanceClick = () => {
    setWhatToShow("Add Balance");
  };
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
          background: "#131419",
        }}
      >
        <Toolbar>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
          >
            <Grid item xs={6}>
              <Typography variant="h6" noWrap component="div">
                {whatToShow.charAt(0).toUpperCase() + whatToShow.slice(1)}
              </Typography>
            </Grid>
            <Grid item xs={6} sx={{ textAlign: "right" }}>
              {whatToShow !== "worker" && (
                <Typography sx={{ fontSize: "1.5rem" }}>
                  Balance: ₹{userData.balance}
                </Typography>
              )}
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            background: "#131419",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {whatToShow !== "worker" && (
            <ListItem button onClick={BookClick}>
              <ListItemIcon sx={{ color: "#229EF3" }}>
                <AddBoxIcon></AddBoxIcon>
              </ListItemIcon>
              <ListItemText sx={{ color: "#ffff" }}>Book a slot</ListItemText>
            </ListItem>
          )}

          {whatToShow !== "worker" && (
            <ListItem button onClick={ViewClick}>
              <ListItemIcon>
                <ViewListIcon sx={{ color: "#229EF3" }}></ViewListIcon>
              </ListItemIcon>
              <ListItemText sx={{ color: "#ffff" }}>View Bookings</ListItemText>
            </ListItem>
          )}
          {whatToShow !== "worker" && (
            <ListItem button onClick={BalanceClick}>
              <ListItemIcon>
                <MonetizationOnIcon
                  sx={{ color: "#229EF3" }}
                ></MonetizationOnIcon>
              </ListItemIcon>
              <ListItemText sx={{ color: "#ffff" }}>Add Balance</ListItemText>
            </ListItem>
          )}

          {/* </List>
        <Divider />
        <List> */}
          <Link to="/logout" style={{ textDecoration: "none" }}>
            <ListItem button>
              <ListItemIcon>
                <PowerSettingsNewIcon
                  sx={{ color: "#229EF3" }}
                ></PowerSettingsNewIcon>
              </ListItemIcon>
              <ListItemText sx={{ color: "#ffff" }}>Sign out</ListItemText>
            </ListItem>
          </Link>
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
        {props.children}
      </Box>
    </Box>
  );
}
