import { combineReducers } from 'redux'

const mineState = {
  saveStatus: 0,
  input: {
    content: 'Default_Content'
  }
}

function mineReducer (state = mineState, action) {
  switch (action.type) {
    case 'INPUT_FOR_MINE': {
      return {
        ...state,
        input: {
          ...state.input,
          ...action.input
        }
      }
    }
    default:
      return state
  }
}

export default combineReducers({
  mine: mineReducer
})