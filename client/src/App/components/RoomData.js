import React from 'react';
import { Icon, Divider } from 'semantic-ui-react';
import Temperature from './Temperature';

export default function RoomData(props) {
  let title = props.name || "Unnamed room";
  return (
    <span>
      <h1>{title}</h1>
      <Divider />
      <Icon name="thermometer" /><Temperature />
    </span>
  )
}