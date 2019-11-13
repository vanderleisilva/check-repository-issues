import React from 'react';
import { Typography, Container, AppBar } from '@material-ui/core';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import List from './components/ListIssues';
import Show from './components/ShowIssue';

const App: React.FC = () => (
  <Container maxWidth='md'>
    <AppBar position='relative'>
      <Typography children={'Facebook/react issues'} variant='h6' />
    </AppBar>
    <Router basename='/'>
      <Switch>
        <Route exact path='/show/:number/:page?' component={Show} />
        <Route exact component={List} />
      </Switch>
    </Router>
  </Container>
);

export default App;
