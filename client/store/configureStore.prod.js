import {createHistory} from 'history'
import {applyMiddleware, createStore, compose} from 'redux'
import {reduxReactRouter} from 'redux-router'
// import Thunk from 'redux-thunk'

// import api from '../middleware/api'
import RootReducer from '../reducers'

const finalCreateStore = compose(
  // applyMiddleware(Thunk, api),
  reduxReactRouter({ createHistory })
)(createStore)

export default function configureStore(initialState) {
  return finalCreateStore(RootReducer, initialState)
}
