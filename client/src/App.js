import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  // initialize our state 
  state = {
    result: null
  };

  componentDidMount() {
    fetch('/api/').then(data => data.json()).then(res => this.setState({result: res}));
  }

  render() {
    const { result } = this.state;
    if(!result) {
      return (<div>Loading...</div>);
    } else {
      return (
        <div>
          API querry test: {JSON.stringify(result)}<br />
        </div>
      );
    }
  }
}

export default App;