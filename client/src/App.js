import React, { Component } from "react";
import 'semantic-ui-css/semantic.min.css'
import axios from "axios";
import Remote from "./components/remote/Remote";
import APIRequestHandler from "./api/APIRequestHandler";

class App extends Component {
  render() {
    return (
      <div>
        <Remote />
      </div>
    );
  }
}

export default App;