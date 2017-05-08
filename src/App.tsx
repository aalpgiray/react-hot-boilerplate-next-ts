import * as React from 'react';
import Layout from './Layout';
import { Component } from "react";
import { store, history } from './store';
import { Router, Route, Link } from 'react-router-dom';

import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { AppComponent } from './components/app';

// If you use React Router, make this component
// render <Router> with your routes. Currently,
// only synchronous routes are hot reloaded, and
// you will see a warning from <Router> on every reload.
// You can ignore this warning. For details, see:
// https://github.com/reactjs/react-router/issues/2182


export default class App extends Component<{}, {}> {
  render() {
    return (
      <Provider store={store} >
        <ConnectedRouter history={history}>
          <Layout>
            <div>
              <Link to="/" >Home</Link>
              <Link to="/app" >App</Link>
              <Route path="/" exact render={() => <h1>Home</h1>} />
              <Route path="/app" exact component={AppComponent} />
            </div>
          </Layout>
        </ConnectedRouter>
      </Provider>
    );
  }
}
