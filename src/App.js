import "./App.css";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Destination from "./components/Destination/Destination";
import { createContext } from "react";
import { useState } from "react";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <div className="App container">
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Header />
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/destination/:vehicleId">
              <Destination />
            </PrivateRoute>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="*"></Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
