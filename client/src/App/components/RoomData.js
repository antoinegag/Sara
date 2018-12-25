import React, { Component } from 'react';
import { Divider, List, Loader } from 'semantic-ui-react';
import Temperature from './sensor/Temperature';
import LightState from './sensor/LightState';

import SensorAPI from '../api/sensors/SensorAPI';

export default class RoomData extends Component {

  constructor(props) {
    super(props)

    this.state = {
      error: null,
      isLoaded: false,
      sensorData: null,
    };
  }

  async componentDidMount() {
    let data = await SensorAPI.getAll();
    this.setState({
      isLoaded: true,
      sensorData: data
    });
  }

  render() {
    const { isLoaded, error, sensorData } = this.state;

    if (!isLoaded) return (<span><Loader active inline='centered'/></span>);
    if (error) return (<span>Error: {error}</span>);

    const { light_level, temperature } = sensorData;
    return (
      <span>
        <h1>Your room</h1>
        <Divider />
        <List>
          <List.Item>
            <List.Icon name="thermometer" />
            <List.Content><Temperature value={temperature} /></List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name="lightbulb" />
            <List.Content><LightState value={light_level} /></List.Content>
          </List.Item>
        </List>
      </span>
    )
  }

}