import React, { Component } from "react";
import { List, Divider, Icon, Header } from "semantic-ui-react"

export default class Process extends Component {
  render() {
    const process = this.props.data;

    return (
      <span>
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
      </span>
    );
  }
}