import React, { Component } from 'react';

import Greeting from '../components/misc/Greeting';
import { Divider, Header, Icon } from 'semantic-ui-react';
import RoomData from '../components/RoomData';

class Home extends Component {
  render() {
    return (
      <div>
        <h1><Greeting /></h1>
        <Divider hidden/>
        <RoomData name="Your room"/>
      </div>
    );
  }
}
export default Home;