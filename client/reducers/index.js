import {combineReducers} from 'redux'
import {routerStateReducer as router} from 'redux-router'

import Error from './error'

const rootReducer = combineReducers({
  Error,
  router
})

export default rootReducer
