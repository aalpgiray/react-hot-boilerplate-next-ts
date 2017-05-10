import * as React from 'react';
import { Route } from 'react-router-dom';
import { AsyncRoute } from './helpers/async.routes';

export const routes = (
  <div>
    <Route path="/" exact render={() => <h1>Home</h1>} />
    <Route path="/app" exact render={() => <h1>App</h1>} />
    <AsyncRoute path="/counter" component={require("bundle-loader?lazy!./components/counter")} />
  </div>
);