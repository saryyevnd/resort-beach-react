import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Error from './pages/Error';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/room/:slug" component={SingleRoom} />
      </Switch>
    </>
  );
}

export default App;
