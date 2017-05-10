import * as React from 'react';
import { history, store } from './store';
import { Router, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { NavigationPannel } from './components/nav';
import { routes } from './routes';
import { Layout } from './layout';

export default class App extends React.Component<{}, {}> {
  render() {
    return (
      <Provider store={store} >
        <ConnectedRouter history={history}>
          <Layout>
            <div>
              <NavigationPannel />
              {routes}
            </div>
          </Layout>
        </ConnectedRouter>
      </Provider>
    );
  }
}