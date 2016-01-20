import * as ActionTypes from '../constants/ActionTypes'

export default function (state = {}, action) {
  switch(action.type) {
    case ActionTypes.PROJECTS_REQUEST:
      return Object.assign({}, state)
    case ActionTypes.PROJECTS_SUCCESS:
      return Object.assign({}, state)
    case ActionTypes.PROJECTS_FAILURE:
      return state
    default:
      return state
  }
}
