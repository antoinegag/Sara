import React from 'react';

import {
  Image,
  Menu,
  Icon,
} from 'semantic-ui-react'

import { Link } from 'react-router-dom'

export default class Footer extends React.Component {
  render() {
    return (
      <Menu inverted attached>
        <Menu.Menu position='right'>
          <Menu.Item href='//github.com/Poke1650/Sara/wiki' target='_blank' >
            <Icon name="book" fitted size="big" />
          </Menu.Item>
          <Menu.Item href='//github.com/Poke1650/Sara' target='_blank' >
            <Icon name="github" fitted size="big" />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}