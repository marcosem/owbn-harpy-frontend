import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import SignIn from '~/pages/SignIn';
import Dashboard from '~/pages/Dashboard';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
    </Switch>
  );
}

/*
      <Route path="/register" component={SingUp} />

      <Route path="/profile" component={Profile} isPrivate />

      <Route path="/details" component={Details} isPrivate />
      <Route path="/meetup" component={MeetUp} isPrivate />
*/
