import React from 'react';
import { Icon, Divider, List } from 'semantic-ui-react';
import Temperature from './Temperature';
import LightState from './LightState';
import LightAPI from '../api/lights/LightAPI';

export default function RoomData(props) {
  let title = props.name || "Unnamed room";
  return (
    <span>
      <h1>{title}</h1>
      <Divider />
      <List>
        <List.Item>
          <List.Icon name="thermometer" />
          <List.Content><Temperature /></List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="lightbulb" />
          <List.Content><LightState /></List.Content>
        </List.Item>
      </List>

    </span>
  )
}