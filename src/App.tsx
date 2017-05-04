import * as React from 'react';
import Layout from './Layout';
import Counter from './components/counter';
import { Component } from "react";
import { store } from './store';
import { Router, Route, Link } from 'react-router-dom';
import { Provider } from 'mobx-react';
import { syncHistoryWithStore, RouterStore } from "mobx-react-router";
import { createBrowserHistory } from "history";

// If you use React Router, make this component
// render <Router> with your routes. Currently,
// only synchronous routes are hot reloaded, and
// you will see a warning from <Router> on every reload.
// You can ignore this warning. For details, see:
// https://github.com/reactjs/react-router/issues/2182

const routerStore = new RouterStore();
const history = syncHistoryWithStore(createBrowserHistory(), routerStore)

export default class App extends Component<{}, {}> {
  render() {
    return (
      <Layout>
        <Provider {...store}>
          <Router history={history}>
            <div>
              <Route path="/" exact component={Counter} />
            </div>
          </Router>
        </Provider>
      </Layout>
    );
  }
}
