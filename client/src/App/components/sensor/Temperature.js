import React, { Component } from "react";
import SensorAPI from "../../api/sensors/SensorAPI";

export default class Temperature extends Component {
  constructor(props) {
    super(props)

    this.state = {
      error: null,
      isLoaded: false,
      temperature: null,
    };
  }

  async componentDidMount() {
    let temp = await SensorAPI.getTemperature();
    this.setState({
      isLoaded: true,
      temperature: temp
    });
  }

  render() {
    const { error, isLoaded, temperature } = this.state;
    if (error) {
      return <span>Error: {error.message}</span>;
    } else if (!isLoaded) {
      return <span>...</span>;
    } else {
      return (
        <span>
          {temperature}	&#8451;
        </span>
      );
    }
  }
}