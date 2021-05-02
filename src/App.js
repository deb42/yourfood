import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useHistory } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import PartnerOverview from './pages/PartnerOverview';
import { Button } from '@material-ui/core';
import React from 'react';

const App = () => {
  const Login = () => {
    const history = useHistory();

    return (<React.Fragment>
      <h1>Under Constrution</h1>
      <Button onClick={() => history.push('/partner')}>Zur Karte</Button>
    </React.Fragment>)
  }

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/partner">
            <PartnerOverview></PartnerOverview>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/">
            <LandingPage></LandingPage>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
