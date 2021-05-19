import React, {Component} from "react";

import ErrorBoundry from "../error-boundry";

import "./app.css";

export default class App extends Component {
  state = {
    hasError: false,
  }

  componentDidCatch(error, errorInfo) {
    this.setState({hasError: true});
  }

  render() {
    return (
      <ErrorBoundry>
        <div className="app-container">

        </div>
      </ErrorBoundry>
    );
  }
};
