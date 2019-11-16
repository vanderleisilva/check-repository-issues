import React from 'react';
import { Typography, Container, AppBar, makeStyles } from '@material-ui/core';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import List from 'components/ListIssues';
import Show from 'components/ShowIssue';
import Loading from 'components/Loading';

import styles from './styles';
const useStyles = makeStyles(styles);

const App: React.FC = () => {
  const classes = useStyles();

  return (
    <Container maxWidth='md'>
      <AppBar className={classes.appBar}>
        <Typography children={'Facebook/react issues'} variant='h6' />
        <Loading />
      </AppBar>
      <div className={classes.container}>
        <Router basename='/'>
          <Switch>
            <Route exact path='/show/:number' component={Show} />
            <Route exact component={List} />
          </Switch>
        </Router>
      </div>
    </Container>
  );
};

export default App;
