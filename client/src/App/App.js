import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import NavBar from './components/nav/NavBar';
import { Container } from 'semantic-ui-react';
import Remote from './pages/Remote';
import Dashboard from './pages/Dashboard';

class App extends Component {
  render() {
    const App = () => (
      <div>
        <NavBar />
        <Container className='main'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/remote' component={Remote} />
            <Route exact path='/dashboard' component={Dashboard} />
          </Switch>
        </Container>
      </div>
    )
    return (
      <Switch>
        <App />
      </Switch>
    );
  }
}

export default App;