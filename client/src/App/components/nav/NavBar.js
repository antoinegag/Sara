import React from 'react';

import {
  Image,
  Menu,
  Icon,
} from 'semantic-ui-react'

import { Link } from 'react-router-dom'

export default class NavBar extends React.Component {
  render() {
    return (
      <Menu inverted attached>
        <Menu.Item as={Link} to='/' header>
          <Image size='mini' src='/icon.png' style={{ marginRight: '1.5em' }} /> Sara
          </Menu.Item>
        <Menu.Item as={Link} to='/remote'><Icon name="lightbulb outline" />Remote</Menu.Item>
        <Menu.Item as={Link} to='/dashboard'><Icon name="dashboard" />Dashboard</Menu.Item>
      </Menu>
    );
  }
}