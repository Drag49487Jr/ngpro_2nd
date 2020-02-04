import React from 'react';
import {Route, Switch} from 'react-router-dom';
import LoginPage from '../LoginPage/LoginPage';
import HomePage from '../HomePage/HomePage';
import EventsPage from '../EventsPage/EventsPage';
import './App.css';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' render={({history}) => 
          <LoginPage 
            history={history}
        />
        }/>
        <Route path='/home' render={() =>
          <HomePage 
          />
        }/>
        <Route path='/events' render={() =>
          <EventsPage />
        }/>
      </Switch>
    </div>
  );
}

export default App;
