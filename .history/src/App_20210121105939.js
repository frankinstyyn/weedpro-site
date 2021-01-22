import "./App.css";
import Home from "./pages/Home";
import CleaningServices from "./pages/CleaningServices";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import { Nav, Navbar, NavDropdown, Form, FormControl, Button } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';

import { Route, Switch } from "react-router-dom";

// import Navbar from "./components/Navbar";
import NewNav from "./components/NewNav";

function App() {
  return (
    <>
      <NewNav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cleaning-services" component={CleaningServices} />
        <Route exact path="/cleaningservices/:slug" component={SingleRoom} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
