import React, { Component } from "react";
import { Button, Icon } from "semantic-ui-react"
import axios from "axios";
import APIRequestHandler from "../../api/APIRequestHandler";

class Remote extends Component {
  render() {
    return (
      <div className="ui one column center aligned grid"> 
        <Button className="column" icon onClick={() => {APIRequestHandler.query('api/lights/action/toggle')}}>
          <Icon name='power off' />
        </Button>
        <Button className="column" icon onClick={() => {APIRequestHandler.query('api/lights/action/ib')}}>
          <Icon name='plus' />
        </Button>
        <Button className="column" icon onClick={() => {APIRequestHandler.query('api/lights/action/db')}}>
          <Icon name='minus' />
        </Button> 
        <Button className="column" icon onClick={() => {APIRequestHandler.query('api/lights/action/w')}}>
            White
        </Button> 
        <Button className="column" icon onClick={() => {APIRequestHandler.query('api/lights/action/cc')}}>
            Color
        </Button> 
      </div>
    );
  }
}

export default Remote;