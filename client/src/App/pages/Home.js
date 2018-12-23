import React, { Component } from 'react';

import Temperature from '../components/Temperature';
import Greeting from '../components/misc/Greeting';
import { Icon } from 'semantic-ui-react';

class Home extends Component {
  render() {
    return (
    <div>
      <h1><Greeting /></h1>
      <Icon name="thermometer"/><Temperature/>
    </div>
    );
  }
}
export default Home;