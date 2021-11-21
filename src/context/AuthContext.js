import React, { createContext, useState } from "react";

const AuthContext = createContext();

function AuthContextProvider(props) {
  const [test, setTest] = useState("Works");
  const [whatToShow, setWhatToShow] = useState("location");
  const [userData, setUserData] = useState();
  const [slotToEdit, setSlotToEdit] = useState();
  const [slotToDelete, setSlotToDelete] = useState();
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
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
export default AuthContext;
export { AuthContextProvider };
