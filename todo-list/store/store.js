import { createStore } from 'redux';
import reducer from '../store/reducers/listReducer';
import initialState from './initialState';

const store = createStore(reducer, initialState);

export default store;