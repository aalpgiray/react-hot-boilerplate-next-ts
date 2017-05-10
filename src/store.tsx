import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';
import invariant from 'redux-immutable-state-invariant';
import rootReducer from './reducers/root.reducer';
import { ConnectedRouter, routerReducer, routerMiddleware, push, RouterState } from 'react-router-redux'
import { counterReducer, ICounterStore } from './reducers/counter.reducer';

export const history = createBrowserHistory();

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = routerMiddleware(history)

export interface IStore {
    router: RouterState,
    counter: ICounterStore
}

export const store = createStore<IStore>(
    rootReducer,
    composeEnhancers(applyMiddleware(middleware)),
);