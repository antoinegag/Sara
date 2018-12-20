import React, { Component } from "react";
import 'semantic-ui-css/semantic.min.css'
import Remote from "./components/remote/Remote";

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