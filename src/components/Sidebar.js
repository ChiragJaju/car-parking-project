import { useContext } from "react";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";

import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import MailIcon from "@mui/icons-material/Mail";
import AppBar from "@mui/material/AppBar";
import BreakfastDiningIcon from "@mui/icons-material/BreakfastDining";
import ViewModuleSharpIcon from "@mui/icons-material/ViewModuleSharp";
import GroupSharpIcon from "@mui/icons-material/GroupSharp";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import { Link } from "react-router-dom";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import AuthContext from "../context/AuthContext";
const drawerWidth = 240;

export default function PermanentDrawerLeft(props) {
  const { whatToShow, setWhatToShow } = useContext(AuthContext);
  const workerClick = () => {
    setWhatToShow("worker");
  };
  const locationClick = () => {
    setWhatToShow("location");
  };
  const slotClick = () => {
    setWhatToShow("slot");
  };
  const requestClick = () => {
    setWhatToShow("request");
  };
  const carClick = () => {
    setWhatToShow("car");
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
          <Typography variant="h6" noWrap component="div">
            Welcome Admin -{" "}
            {whatToShow.charAt(0).toUpperCase() + whatToShow.slice(1)}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#131419",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          <ListItem button onClick={locationClick}>
            <ListItemIcon>
              <BreakfastDiningIcon
                sx={{ color: "#229EF3" }}
              ></BreakfastDiningIcon>
            </ListItemIcon>
            <ListItemText sx={{ color: "#FFFFFF" }}>
              Manage Locations
            </ListItemText>
          </ListItem>
          <ListItem button onClick={slotClick}>
            <ListItemIcon>
              <ViewModuleSharpIcon
                sx={{ color: "#229EF3" }}
              ></ViewModuleSharpIcon>
            </ListItemIcon>
            <ListItemText sx={{ color: "#FFFFFF" }}>Manage Slots</ListItemText>
          </ListItem>
          {/* </List>
        <Divider />
        <List> */}
          <ListItem button onClick={workerClick}>
            <ListItemIcon>
              <GroupSharpIcon sx={{ color: "#229EF3" }}></GroupSharpIcon>
            </ListItemIcon>
            <ListItemText sx={{ color: "#FFFFFF" }}>
              Manage Workers
            </ListItemText>
          </ListItem>

          <ListItem button onClick={carClick}>
            <ListItemIcon>
              <DirectionsCarIcon sx={{ color: "#229EF3" }}></DirectionsCarIcon>
            </ListItemIcon>
            <ListItemText sx={{ color: "#FFFFFF" }}>Manage Cars</ListItemText>
          </ListItem>
          <Link to="/logout" style={{ textDecoration: "none" }}>
            <ListItem button>
              <ListItemIcon>
                <PowerSettingsNewIcon
                  sx={{ color: "#229EF3" }}
                ></PowerSettingsNewIcon>
              </ListItemIcon>
              <ListItemText sx={{ color: "#FFFFFF" }}>Sign out</ListItemText>
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
