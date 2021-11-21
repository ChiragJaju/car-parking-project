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
          background: "#242121",
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
              <BreakfastDiningIcon></BreakfastDiningIcon>
            </ListItemIcon>
            <ListItemText sx={{ color: "#242121" }}>
              Manage Locations
            </ListItemText>
          </ListItem>
          <ListItem button onClick={slotClick}>
            <ListItemIcon>
              <ViewModuleSharpIcon></ViewModuleSharpIcon>
            </ListItemIcon>
            <ListItemText sx={{ color: "#242121" }}>Manage Slots</ListItemText>
          </ListItem>
          {/* </List>
        <Divider />
        <List> */}
          <ListItem button onClick={workerClick}>
            <ListItemIcon>
              <GroupSharpIcon></GroupSharpIcon>
            </ListItemIcon>
            <ListItemText sx={{ color: "#242121" }}>
              Manage Workers
            </ListItemText>
          </ListItem>
          <ListItem button onClick={requestClick}>
            <ListItemIcon>
              <MailIcon></MailIcon>
            </ListItemIcon>
            <ListItemText sx={{ color: "#242121" }}>
              Pending Requests
            </ListItemText>
          </ListItem>
          <ListItem button onClick={carClick}>
            <ListItemIcon>
              <DirectionsCarIcon></DirectionsCarIcon>
            </ListItemIcon>
            <ListItemText sx={{ color: "#242121" }}>Manage Cars</ListItemText>
          </ListItem>
          <Link to="/logout" style={{ textDecoration: "none" }}>
            <ListItem button>
              <ListItemIcon>
                <PowerSettingsNewIcon></PowerSettingsNewIcon>
              </ListItemIcon>
              <ListItemText sx={{ color: "#242121" }}>Sign out</ListItemText>
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
