import {combineReducers} from 'redux'
import {routerStateReducer as router} from 'redux-router'

import errorMessage from './error'
import projects from './projects'

function entities(state = {}, action) {
  if (action.payload && action.payload.entities) {
    return Object.assign({}, state, action.payload.entities)
  }

  return state
}

const rootReducer = combineReducers({
  entities,
  errorMessage,
  projects,
  router
})

export default rootReducer
