import React from "react";

import {withBookstoreService} from "../hoc"

import "./app.css";
import {Route, Switch} from "react-router-dom";
import {CartPage, HomePage} from "../pages";
import ShopHeader from "../shop-header";

const App = () => {
  return (
      <main role="main" className="container">
          <ShopHeader numItems={5} total={210} />
          <Switch>
              <Route path="/" component={HomePage} exact />
              <Route path="/cart" component={CartPage} />

              <Route render={() => <h2>Page not found</h2>} />
          </Switch>
      </main>
  );
};

export default withBookstoreService()(App);
