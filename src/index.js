import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "./App";
import Collections from "./components/Collections";
import Restaurants from "./components/Restaurants";

export default function Home() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route
          exact
          path="/collections/:name/:id"
          render={(props) => <Collections {...props} />}
        />
        <Route
          exact
          path="/restaurants/:name/:id"
          render={(props) => <Restaurants {...props} />}
        />
      </Switch>
    </Router>
  );
}

ReactDOM.render(<Home />, document.getElementById("root"));
