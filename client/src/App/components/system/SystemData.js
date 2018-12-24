import React, { Component } from "react";
import SystemAPI from "../../api/system/SystemAPI";
import { List, Divider, Icon, Header } from "semantic-ui-react"

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
      const disk = server.disk;
      const memory = server.memory;

      const platformIcon = {
        "Linux": "linux",
        "Darwin": "apple",
        "Windows_NT": "windows"
      }

      if (server.platform === "linux") {
        server.platform = "GNU/Linux";
      }

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
              <List.Content>
                <span className={arduino.online ? "On" : "Off"}>{arduino.online ? "Online" : "Offline"}</span>
                <Icon link name="play" style={{ marginLeft: '1em' }} onClick={() => SystemAPI.connectArduino()} />
                <Icon link name="x" style={{ marginLeft: '1em' }} onClick={() => SystemAPI.disconnectArduino()} />
                <Icon link name="redo" style={{ marginLeft: '1.5em' }} onClick={() => SystemAPI.reconnectArduino()}/>
              </List.Content>
            </List.Item>
          </List>
          <Divider horizontal>
            <Header as='h4'>
              <Icon name='server' />Server
            </Header>
          </Divider>
          <List>
            <List.Item>
              <List.Icon name="at" />
              <List.Content>{server.hostname}</List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name={platformIcon[server.type]} />
              <List.Content>{server.platform} {server.release}</List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name="microchip" />
              <List.Content>Arch: {server.arch}</List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name="clock" />
              <List.Content>Uptime: {server.uptime}</List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name="ticket alternate" />
              <List.Content>Memory</List.Content>
              <List>
                <List.Item>Free: {memory.free_mem_f}</List.Item>
                <List.Item>Total: {memory.total_mem_f}</List.Item>
              </List>
            </List.Item>
            <List.Item>
              <List.Icon name="hdd" />
              <List.Content>{disk.path}</List.Content>
              <List>
                <List.Item>Available: {disk.available_f}</List.Item>
                <List.Item>Total: {disk.total_f}</List.Item>
              </List>
            </List.Item>
          </List>
          <Divider horizontal>
            <Header as='h4'>
              <Icon name='cogs' />Process
            </Header>
          </Divider>
          <List>
            <List.Item>
              <List.Icon name="clock" />
              <List.Content>Uptime: {process.uptime}</List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name="archive" />
              <List.Content>Node version: {process.node_version}</List.Content>
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