/* eslint-disable react/jsx-pascal-case */
import Sidebar from "../components/Sidebar";
import { useContext, useState, useEffect } from "react";
import AuthContext from "../context/AuthContext";
import Admin_Location from "../components/Admin/Location";
import Admin_Worker from "../components/Admin/Worker";
import Admin_Slot from "../components/Admin/Slot";
import { DataLocations, User, Workers } from "../components/Data";

import UserSidebar from "../components/UserSidebar";
import BookSlot from "../components/User/BookSlot";
import ViewBooking from "../components/User/ViewBooking";
import Checkout from "../components/User/Checkout";
import AddBalance from "../components/User/AddBalance";
import axios from "axios";
import Worker from "../components/Worker/Worker";
const Home = (props) => {
  const { whatToShow } = useContext(AuthContext);
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
  // console.log(props.loggedIn);
  // console.log(whatToShow);
  // console.log(props.loggedIn);
  return (
    <div>
      {/* props.loggedIn === "admin" && ( 
      <Sidebar>
       {whatToShow === "location" && <Admin_Location />}
       {whatToShow === "worker" && <Admin_Worker />}
       {whatToShow === "slot" && <Admin_Slot />}
       {whatToShow === "request" && <Admin_Request />}
       {whatToShow === "car" && <Admin_Car />}
    
      </Sidebar> */}
      {props.loggedIn === "admin" && (
        <Sidebar>
          {whatToShow === "location" && <Admin_Location />}
          {whatToShow === "worker" && <Admin_Worker />}
          {whatToShow === "slot" && <Admin_Slot />}
        </Sidebar>
      )}
      {props.loggedIn === "user" && (
        <UserSidebar>
          {whatToShow === "BookSlot" && <BookSlot />}
          {whatToShow === "Checkout" && <Checkout />}
          {whatToShow === "View Booking" && <ViewBooking />}
          {whatToShow === "Add Balance" && <AddBalance />}
          {whatToShow === "worker" && <Worker />}
        </UserSidebar>
      )}
      {/* {props.loggedIn === "worker" && (
        <Sidebar>{whatToShow === "worker" && <Worker />}</Sidebar>
      )} */}
      {props.loggedIn === "worker" && (
        <UserSidebar>
          {whatToShow === "BookSlot" && <BookSlot />}
          {whatToShow === "Checkout" && <Checkout />}
          {whatToShow === "View Booking" && <ViewBooking />}
          {whatToShow === "Add Balance" && <AddBalance />}
        </UserSidebar>
      )}
    </div>
  );
};

export default Home;
