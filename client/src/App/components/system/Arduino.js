import React, { Component } from "react";
import SystemAPI from "../../api/system/SystemAPI";
import { List, Divider, Icon, Header, Confirm } from "semantic-ui-react"

export default class Arduino extends Component {

  state = { confirmOpen: false }

  open = (confirmAction, content) => this.setState({
    confirmContent: content,
    confirmOpen: true,
    confirmAction: confirmAction
  });

  confirmReconnect = () => this.open(
    SystemAPI.reconnectArduino,
    "Are you sure you want to reset the connection to the Arduino?"
  );

  confirmDisconnect = () => this.open(
    SystemAPI.disconnectArduino,
    "Are you sure you want to disconnect the Arduino?"
  );

  handleConfirm = () => {
    this.state.confirmAction();
    this.setState({
      confirmOpen: false
    })
  };

  handleCancel = () => this.setState({
    confirmOpen: false
  });

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
              <Icon link name="play" style={{ marginLeft: '1em' }} onClick={this.open} />
              <Icon link name="x" style={{ marginLeft: '1em' }} onClick={this.confirmDisconnect} />
              <Icon link name="redo" style={{ marginLeft: '1em' }} onClick={this.confirmReconnect} />
            </List.Content>
          </List.Item>
        </List>
        <Confirm open={this.state.confirmOpen} content={this.state.confirmContent} onCancel={this.handleCancel} onConfirm={this.handleConfirm} />
      </span>
    );
  }
}