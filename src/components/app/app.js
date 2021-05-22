import React from "react";

import {withBookstoreService} from "../hoc"

import "./app.css";
import {Route, Switch} from "react-router-dom";
import {CartPage, HomePage} from "../pages";

const App = () => {
  return (
    <Switch>
      <Route path="/" component={HomePage} exact />
      <Route path="/cart" component={CartPage} />

      <Route render={() => <h2>Page not found</h2>} />
    </Switch>
  );
};

export default withBookstoreService()(App);
