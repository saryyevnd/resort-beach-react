import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Error from './pages/Error';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/' render={() => <Home />} />
        <Route exact path='/rooms/' render={() => <Rooms />} />
        <Route exact path='/rooms/:slug' render={() => <SingleRoom />} />
        <Route path='*' render={() => <Error />} />
      </Switch>
    </>
  );
}

export default App;
