import * as ActionTypes from '../constants/ActionTypes'

function errorMessage(state = null, action) {
  const {error, type} = action

  if (type === ActionTypes.ERROR_RESET_MESSAGE) {
    return null
  } else if (error) {
    return error
  }

  return state
}

export default errorMessage
