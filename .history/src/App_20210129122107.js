import "./App.css";
import Home from "./pages/Home";
import CleaningServices from "./pages/CleaningServices";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Route, Switch } from "react-router-dom";

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
