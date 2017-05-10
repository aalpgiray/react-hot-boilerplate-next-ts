import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { counterReducer } from './counter.reducer';
import { IStore } from '../store';

export default combineReducers<IStore>({
    router: routerReducer,
    counter: counterReducer
});