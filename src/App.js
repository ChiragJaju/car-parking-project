import AuthContext from "./context/AuthContext";
import { useContext, useState } from "react";
import Login from "./pages/login";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Signup from "./pages/signup";
import Home from "./pages/home";
import Signout from "./pages/signout";

function App() {
  const { test } = useContext(AuthContext);
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Router>
      <Switch>
        <Route path="/login">
          {loggedIn !== true ? (
            <Login setLoggedIn={setLoggedIn} />
          ) : (
            <Redirect to="/"></Redirect>
          )}
        </Route>
        <Route path="/signup">
          {loggedIn !== true ? (
            <Signup setLoggedIn={setLoggedIn} />
          ) : (
            <Redirect to="/"></Redirect>
          )}
        </Route>
        <Route path="/" exact>
          {loggedIn === true ? <Home /> : <Redirect to="/login"></Redirect>}
        </Route>
        <Route path="/logout">
          <Signout setLoggedIn={setLoggedIn} />
        </Route>

        {/* <Route path="/signup">
          <Signup />
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
