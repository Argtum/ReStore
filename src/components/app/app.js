import React, {Component} from "react";

import ErrorBoundry from "../error-boundry";

import "./app.css";

export default class App extends Component {
  render() {
    return (
      <ErrorBoundry>
        <div className="app-container">

        </div>
      </ErrorBoundry>
    );
  }
};
