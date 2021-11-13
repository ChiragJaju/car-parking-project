import AuthContext from "./context/AuthContext";
import { useContext } from "react";
import Home from "./pages/home";

function App() {
  const { test } = useContext(AuthContext);
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
