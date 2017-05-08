import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import { createBrowserHistory } from 'history';

import invariant from 'redux-immutable-state-invariant';

export const history = createBrowserHistory();

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

const middleware = routerMiddleware(history)

export const store = createStore(
    combineReducers({
        router: routerReducer
    }),
    composeEnhancers(applyMiddleware(middleware)),
);