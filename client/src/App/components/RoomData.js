import React from 'react';
import { Divider, List } from 'semantic-ui-react';
import Temperature from './sensor/Temperature';
import LightState from './sensor/LightState';

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