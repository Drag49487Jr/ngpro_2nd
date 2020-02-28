import React from 'react';
import {Route, Switch} from 'react-router-dom';
import LoginPage from '../LoginPage/LoginPage';
import SecondLoginPage from '../SecondLoginPage/SecondLoginPage';
import HomePage from '../HomePage/HomePage';
import EventsPage from '../EventsPage/EventsPage';
import DownloadableFiles from '../DownloadableFiles/DownloadableFiles';
import './App.css';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' render={({history}) => 
          // <LoginPage 
          <SecondLoginPage
            history={history}
            // />
        />
        }/>
        <Route path='/home' render={() =>
          <HomePage 
          />
        }/>
        <Route path='/events' render={() =>
          <EventsPage />
        }/>
        <Route path='/downloadablefiles' render={() =>
          <DownloadableFiles />
        }/> 
      </Switch>
    </div>
  );
}

export default App;
