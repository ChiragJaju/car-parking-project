import React, { createContext, useState } from "react";

const AuthContext = createContext();

function AuthContextProvider(props) {
  const [whatToShow, setWhatToShow] = useState("location");
  const [userData, setUserData] = useState();
  const [slotToEdit, setSlotToEdit] = useState();
  const [slotToDelete, setSlotToDelete] = useState();
  const [locationToEdit, setLocationToEdit] = useState();
  const [locationToDelete, setLocationToDelete] = useState();
  const [bookingDetails, setBookingDetails] = useState();

  return (
    <AuthContext.Provider
      value={{
        whatToShow,
        setWhatToShow,
        userData,
        setUserData,
        slotToEdit,
        setSlotToEdit,
        slotToDelete,
        setSlotToDelete,
        locationToEdit,
        setLocationToEdit,
        locationToDelete,
        setLocationToDelete,
        bookingDetails,
        setBookingDetails,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
export default AuthContext;
export { AuthContextProvider };
