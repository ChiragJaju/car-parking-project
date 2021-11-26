/* eslint-disable react/jsx-pascal-case */
import Sidebar from "../components/Sidebar";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import Admin_Location from "../components/Admin/Location";
import Admin_Worker from "../components/Admin/Worker";
import Admin_Slot from "../components/Admin/Slot";
import Admin_Request from "../components/Admin/Request";
import Admin_Car from "../components/Admin/Car";
import UserSidebar from "../components/UserSidebar";
import BookSlot from "../components/User/BookSlot";
import ViewBooking from "../components/User/ViewBooking";
const Home = (props) => {
  const { whatToShow } = useContext(AuthContext);
  var slotsToShow = [];
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
          {whatToShow === "slot" && <Admin_Slot slotsToShow={slotsToShow} />}
          {whatToShow === "request" && <Admin_Request />}
          {whatToShow === "car" && <Admin_Car />}
        </Sidebar>
      )}
      {props.loggedIn === "user" && (
        <UserSidebar>
          {whatToShow === "BookSlot" && <BookSlot />}
          {whatToShow === "View Booking" && <ViewBooking />}
        </UserSidebar>
      )}
    </div>
  );
};

export default Home;
