import * as ActionTypes from '../constants/ActionTypes'

export function resetErrorMessage() {
  return {
    type: ActionTypes.ERROR_RESET_MESSAGE
  }
}
