import React, { Component } from "react";
import { Button, Icon, Divider, Container } from "semantic-ui-react"

import LightAPI from "../../api/lights/LightAPI";

class Remote extends Component {
  render() {
    return (
      <div> 
        <Button attached="bottom" icon onClick={() => {LightAPI.toggleLights()}}>
          <Icon name='power off' />
        </Button>
        <Button attached="bottom" icon onClick={() => {LightAPI.increaseBrightness()}}>
          <Icon name='plus' />
        </Button>
        <Button attached="bottom" icon onClick={() => {LightAPI.decreaseBrightness()}}>
          <Icon name='minus' />
        </Button>
        <Button attached="bottom" icon onClick={() => {LightAPI.setWhite()}}>
            White
        </Button>
        <Button attached="bottom" icon onClick={() => {LightAPI.cycleColor()}}>
            Color
        </Button> 
      </div>
    );
  }
}

export default Remote;