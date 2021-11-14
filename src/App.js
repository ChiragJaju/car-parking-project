import AuthContext from "./context/AuthContext";
import { useContext } from "react";
import Login from "./pages/login";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Routes,
  Switch,
} from "react-router-dom";
import Signup from "./pages/signup";
import Home from "./pages/home";

function App() {
  const { test } = useContext(AuthContext);
  const loggedIn = false;
  return (
    <Router>
      <Switch>
        <Route path="/login">
          {loggedIn !== true ? <Login /> : <Redirect to="/"></Redirect>}
        </Route>
        <Route path="/signup">
          {loggedIn !== true ? <Signup /> : <Redirect to="/"></Redirect>}
        </Route>
        <Route path="/" exact>
          {loggedIn !== true ? <Login /> : <Home />}
        </Route>

        {/* <Route path="/signup">
          <Signup />
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
