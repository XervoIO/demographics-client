import * as ActionTypes from '../actions'

function errorMessage(state = null, action) {
  const {error, type} = action

  if (type === ActionTypes.RESET_ERROR_MESSAGE) {
    return null
  } else if (error) {
    return error
  }

  return state
}

export default errorMessage
