import {createHistory} from 'history'
import {applyMiddleware, createStore, compose} from 'redux'
import {apiMiddleware} from 'redux-api-middleware'
import createLogger from 'redux-logger'
import {reduxReactRouter} from 'redux-router'
import Thunk from 'redux-thunk'

import DevTools from '../containers/DevTools'
import RootReducer from '../reducers'

const finalCreateStore = compose(
  applyMiddleware(Thunk, apiMiddleware),
  reduxReactRouter({ createHistory }),
  applyMiddleware(createLogger()),
  DevTools.instrument()
)(createStore)

export default function configureStore(initialState) {
  const store = finalCreateStore(RootReducer, initialState)

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
