import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import NavBar from './components/nav/NavBar';
import { Container } from 'semantic-ui-react';
import Remote from './pages/Remote';
import Dashboard from './pages/Dashboard';
import Footer from './components/nav/Footer';

class App extends Component {
  render() {
    const App = () => (
      <span className='Site'>
        <NavBar />
        <Container className='main Site-content'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/remote' component={Remote} />
            <Route exact path='/dashboard' component={Dashboard} />
          </Switch>
        </Container>
        <Footer />
      </span>
    )
    return (
      <Switch>
        <App />
      </Switch>
    );
  }
}

export default App;