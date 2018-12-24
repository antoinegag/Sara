import React, { Component } from 'react';

import { Divider, Header, Icon } from 'semantic-ui-react';
import SystemData from '../components/system/SystemData';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Divider horizontal>
          <Header as='h2'>
            <Icon name='dashboard' />
            Your dashboard
          </Header>
        </Divider>
        <Divider horizontal>
          <Header as='h3'>
            <Icon name='wrench' />
            System
          </Header>
        </Divider>
        <SystemData />
      </div>
    );
  }
}
export default Dashboard;