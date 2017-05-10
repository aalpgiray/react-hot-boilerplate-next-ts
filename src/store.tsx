import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import { createBrowserHistory } from 'history';

import invariant from 'redux-immutable-state-invariant';

export const history = createBrowserHistory();

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

import { ConnectedRouter, routerReducer, routerMiddleware, push, RouterState } from 'react-router-redux'
import { counterReducer, ICounterStore } from './reducers/counter.reducer';

const middleware = routerMiddleware(history)

export interface IStore {
    router: RouterState,
    counter: ICounterStore
}

export const store = createStore<IStore>(
    combineReducers<IStore>({
        router: routerReducer,
        counter: counterReducer
    }),
    composeEnhancers(applyMiddleware(middleware)),
);