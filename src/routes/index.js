import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import Route from './Route';
import SignIn from '~/pages/SignIn';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
    </Switch>
  );
}

/*
      <Route path="/register" component={SingUp} />

      <Route path="/profile" component={Profile} isPrivate />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/details" component={Details} isPrivate />
      <Route path="/meetup" component={MeetUp} isPrivate />
*/
