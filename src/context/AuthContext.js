import React, { createContext, useState } from "react";

const AuthContext = createContext();

function AuthContextProvider(props) {
  const [test, setTest] = useState("Works");
  return (
    <AuthContext.Provider value={{ test }}>
      {props.children}
    </AuthContext.Provider>
  );
}
export default AuthContext;
export { AuthContextProvider };
