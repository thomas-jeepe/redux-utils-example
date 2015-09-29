import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';
import { apiMiddleware, combineReducers } from 'redux-utils';
import * as reducers from '../reducers';
import Immutable from 'immutable'

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  loggerMiddleware,
  apiMiddleware
)(createStore);

let reducer = combineReducers(reducers)
let state = Immutable.Map({})
state = reducer(state, {type: `CONSTRUCT`})
const Store = createStoreWithMiddleware(reducer, state)

export default Store