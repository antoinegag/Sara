import React, { Component } from "react";
import { Button, Icon } from "semantic-ui-react"

import LightAPI from "../../api/lights/LightAPI";

class Remote extends Component {
  render() {
    return (
      <div className="ui one column center aligned grid"> 
        <Button className="column" icon onClick={() => {LightAPI.toggleLights()}}>
          <Icon name='power off' />
        </Button>
        <Button className="column" icon onClick={() => {LightAPI.increaseBrightness()}}>
          <Icon name='plus' />
        </Button>
        <Button className="column" icon onClick={() => {LightAPI.decreaseBrightness()}}>
          <Icon name='minus' />
        </Button> 
        <Button className="column" icon onClick={() => {LightAPI.setWhite()}}>
            White
        </Button> 
        <Button className="column" icon onClick={() => {LightAPI.cycleColor()}}>
            Color
        </Button> 
      </div>
    );
  }
}

export default Remote;