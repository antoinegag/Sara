import React, { Component } from "react";
import { List, Divider, Icon, Header } from "semantic-ui-react"

export default class Database extends Component {
  render() {
    const database = this.props.data;

    return (
      <span>
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
            <List.Icon name="hdd" />
            <List.Content>Size: {database.size}</List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name="archive" />
            <List.Content>{database.version}</List.Content>
          </List.Item>
        </List>
      </span>
    );
  }
}