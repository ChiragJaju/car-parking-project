import { Redirect } from "react-router-dom";
const Signout = (props) => {
  props.setLoggedIn(false);
  return <Redirect to="/"></Redirect>;
};

export default Signout;
