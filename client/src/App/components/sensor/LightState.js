import React, { Component } from "react";
import SensorAPI from "../../api/sensors/SensorAPI";

export default class LightState extends Component {
  constructor(props) {
    super(props)

    this.state = {
      error: null,
      isLoaded: false,
      level: null,
    };
  }

  async componentDidMount() {
    let level = await SensorAPI.getLightLevel();
    this.setState({
      isLoaded: true,
      level: level
    });
  }

  render() {
    const { error, isLoaded, level } = this.state;
    const state = (level < 20 ? "Off" : "On")
    if (error) {
      return <span>Error: {error.message}</span>;
    } else if (!isLoaded) {
      return <span>...</span>;
    } else {
      return (
        <span className={state}>
          {state}
        </span>
      );
    }
  }
}