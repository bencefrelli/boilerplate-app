import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createrHistory from 'history/createBrowserHistory';
import Dashboard from '../components/Dashboard';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createrHistory();

const AppRouter = () => (
  <Router history={ history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true}/>
        <PrivateRoute path="/dashboard" component={Dashboard}/>
        <Route component={NotFoundPage}/>
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
