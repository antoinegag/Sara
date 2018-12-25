import React, { Component } from "react";
import SystemAPI from "../../api/system/SystemAPI";
import { List, Divider, Icon, Header } from "semantic-ui-react"

export default class Arduino extends Component {
  render() {
    const arduino = this.props.data;
    return (
      <span>
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
              <Icon link name="redo" style={{ marginLeft: '1.5em' }} onClick={() => SystemAPI.reconnectArduino()} />
            </List.Content>
          </List.Item>
        </List>
      </span>
    );
  }
}