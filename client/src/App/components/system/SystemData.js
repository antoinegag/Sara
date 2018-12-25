import React, { Component } from "react";
import SystemAPI from "../../api/system/SystemAPI";
import { List, Divider, Icon, Header } from "semantic-ui-react"
import Arduino from "./Arduino";
import Server from "./Server";
import Process from "./Process";
import Database from "./Database";

export default class SystemData extends Component {
  constructor(props) {
    super(props)

    this.state = {
      error: null,
      isLoaded: false,
      data: null
    };
  }

  async componentDidMount() {
    let data = await SystemAPI.getAll();
    this.setState({
      isLoaded: true,
      data: data
    });
  }

  render() {
    const { error, isLoaded, data } = this.state;
    if (error) {
      return <span>Error: {error.message}</span>;
    } else if (!isLoaded) {
      return <span>Loading system data...</span>;
    } else {
      //TODO: split that stuff into multiple components
      let { arduino, server, process, database } = data;
      return (
        <div>
          <Arduino data={arduino} />
          <Server data={server} />
          <Process data={process} />
          <Database data={database} />
        </div>
      );
    }
  }
}