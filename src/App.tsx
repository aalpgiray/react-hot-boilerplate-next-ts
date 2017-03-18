import * as React from 'react';
import Layout from './Layout';
import Counter from './Counter';
import { Component } from "react";
import { store } from './store';
import { Router, browserHistory, Route } from "react-router";
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import { Provider } from 'mobx-react';

// If you use React Router, make this component
// render <Router> with your routes. Currently,
// only synchronous routes are hot reloaded, and
// you will see a warning from <Router> on every reload.
// You can ignore this warning. For details, see:
// https://github.com/reactjs/react-router/issues/2182

const routerStore = new RouterStore();
const history = syncHistoryWithStore(browserHistory, routerStore)

export default class App extends Component<{}, {}> {
  render() {
    return (
      <Layout>
        {/*<Counter store={store.CounterStore} />*/}
        <Provider {...store}>
          <Router history={history}>
            <Route path="/" component={Counter} />
          </Router>
        </Provider>
      </Layout>
    );
  }
}
