import "./App.css";
import Home from "./pages/Home";
import About from "./pages/AboutUs"
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
        <Route exact path="/about-us" component={About} />
        <Route exact path="/about-us/:slug" component={About} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
