import React, { Component } from "react";
import { List, Divider, Icon, Header } from "semantic-ui-react"

const platformIcon = {
  "Linux": "linux",
  "Darwin": "apple",
  "Windows_NT": "windows"
}

export default class Server extends Component {
  render() {
    const server = this.props.data;
    const disk = server.disk;
    const memory = server.memory;

    if (server.platform === "linux") {
      server.platform = "GNU/Linux";
    }
    return (
      <span>
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
      </span>
    );
  }
}