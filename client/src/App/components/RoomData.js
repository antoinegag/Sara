import React, { Component } from 'react';
import { Divider, List, Loader, Header, Icon, Container } from 'semantic-ui-react';
import Temperature from './sensor/Temperature';
import LightState from './sensor/LightState';

import SensorAPI from '../api/sensors/SensorAPI';
import TemperatureGraph from './historic/TemperatureGraph';
import HistoricAPI from '../api/historic/HistoricAPI';

export default class RoomData extends Component {

  constructor(props) {
    super(props)

    this.state = {
      error: null,
      isLoaded: false,
      sensorData: null,
      historic: null,
    };
  }

  async componentDidMount() {
    Promise.all([
        SensorAPI.getAll().then((data) => {
          this.setState({sensorData: data});
        }),
        HistoricAPI.getLastDayTemperatureHistory(true).then((data) => {
          this.setState({historic: data})
        })
    ]).then(() => {
      this.setState({isLoaded: true});
    });
  }

  render() {
    const { isLoaded, error, sensorData, historic } = this.state;

    if (!isLoaded) return (<span><Loader active inline='centered' /></span>);
    if (error) return (<span>Error: {error}</span>);

    const { light_level, temperature } = sensorData;
    return (
      <div>
        <Divider horizontal>
          <Header as="h3" ><Icon name='bed' />Your room</Header>
        </Divider>
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
        <Container>
          <Divider horizontal>
            <Icon name='thermometer' /> last 24h
        </Divider>
        </Container>
        <TemperatureGraph data={historic}/>
      </div>
    )
  }

}