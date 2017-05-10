import { AppContainer } from 'react-hot-loader';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './app';

import '../node_modules/bootstrap/dist/css/bootstrap.css';

const rootEl = document.getElementById('root');
const render = (Component: any) =>
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    rootEl
  );

render(App);
if (module.hot) module.hot.accept('./app', () => render(require("./app").default));