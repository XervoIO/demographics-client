import {createHistory} from 'history'
import {applyMiddleware, createStore, compose} from 'redux'
import {apiMiddleware} from 'redux-api-middleware'
import {reduxReactRouter} from 'redux-router'
// import Thunk from 'redux-thunk'

import RootReducer from '../reducers'

const finalCreateStore = compose(
  applyMiddleware(apiMiddleware),
  reduxReactRouter({ createHistory })
)(createStore)

export default function configureStore(initialState) {
  return finalCreateStore(RootReducer, initialState)
}
