import React from 'react';
import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navigation/Navbar';
import Dashboard from './pages/Dashboard/Dashboard';
import Favorites from './pages/Favorites/Favorites';
import User from './pages/User/User';
import Settings from './pages/Settings/Settings';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/favorites" component={Favorites} />
          <Route path="/user" component={User} />
          <Route path="/settings" component={Settings} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
