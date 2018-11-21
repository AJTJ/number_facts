import React, { Component } from "react";

import { CssBaseline } from "@material-ui/core";

import Homepage from "./Homepage";

class App extends Component {
  render() {
    return (
      <CssBaseline>
        <Homepage />
      </CssBaseline>
    );
  }
}

export default App;
