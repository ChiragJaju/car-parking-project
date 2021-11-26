import { useContext } from "react";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";

import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import AddBoxIcon from "@mui/icons-material/AddBox";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import AppBar from "@mui/material/AppBar";
import BreakfastDiningIcon from "@mui/icons-material/BreakfastDining";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import { Link } from "react-router-dom";
import ViewListIcon from "@mui/icons-material/ViewList";
import AuthContext from "../context/AuthContext";
const drawerWidth = 240;

export default function PermanentDrawerLeft(props) {
  const { whatToShow, setWhatToShow } = useContext(AuthContext);
  const BookClick = () => {
    setWhatToShow("BookSlot");
  };

  const ViewClick = () => {
    setWhatToShow("View Booking");
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
            Welcome /Name/ -
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
          <ListItem button onClick={BookClick}>
            <ListItemIcon>
              <AddBoxIcon></AddBoxIcon>
            </ListItemIcon>
            <ListItemText sx={{ color: "#242121" }}>Book a slot</ListItemText>
          </ListItem>
          <ListItem button onClick={ViewClick}>
            <ListItemIcon>
              <ViewListIcon></ViewListIcon>
            </ListItemIcon>
            <ListItemText sx={{ color: "#242121" }}>View Bookings</ListItemText>
          </ListItem>
          {/* </List>
        <Divider />
        <List> */}
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
