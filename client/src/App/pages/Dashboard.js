import React, { Component } from 'react';

import { Divider, Header, Icon } from 'semantic-ui-react';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Divider horizontal>
          <Header as='h4'>
            <Icon name='dashboard' />
            Your dashboard
          </Header>
        </Divider>
        
        <Divider hidden/>
      </div>
    );
  }
}
export default Dashboard;