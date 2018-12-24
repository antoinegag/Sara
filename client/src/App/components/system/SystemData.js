import React, { Component } from "react";
import SystemAPI from "../../api/system/SystemAPI";
import { List, Divider, Icon, Header } from "semantic-ui-react"

export default class SystemData extends Component {
  constructor(props) {
    super(props)

    this.state = {
      error: null,
      isLoaded: false,
      data: null,
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
      const { arduino, server, process, database } = data;
      return (
        <div>
          <Divider horizontal>
            <Header as='h4'>
              <Icon name='microchip' />Arduino
            </Header>
          </Divider>
          <List>
            <List.Item>
              <List.Icon name="power" />
              <List.Content className={arduino.online ? "On" : "Off"}>{arduino.online ? "Online" : "Offline"}</List.Content>
            </List.Item>
          </List>
          <Divider horizontal>
            <Header as='h4'>
              <Icon name='server' />Server
            </Header>
          </Divider>
          <List>
            <List.Item>
              <List.Icon name="clock" />
              <List.Content>Uptime: {server.uptime}</List.Content>
            </List.Item>
          </List>
          <Divider horizontal>
            <Header as='h4'>
              <Icon name='wrench' />Process
            </Header>
          </Divider>
          <List>
            <List.Item>
              <List.Icon name="clock" />
              <List.Content>Uptime: {process.uptime}</List.Content>
            </List.Item>
          </List>
          <Divider horizontal>
            <Header as='h4'>
              <Icon name='database' />Database
            </Header>
          </Divider>
          <List>
            <List.Item>
              <List.Icon name="power" />
              <List.Content className={database.online ? "On" : "Off"}>{database.online ? "Online" : "Offline"}</List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name="archive" />
              <List.Content>{database.version}</List.Content>
            </List.Item>
          </List>
        </div>
      );
    }
  }
}