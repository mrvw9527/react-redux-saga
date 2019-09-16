import { combineReducers } from 'redux'

const homeState = {
  saveStatus: 0,
  input: {
    title: 'Home'
  }
}

function homeReducer (state = homeState, action) {
  switch (action.type) {
    case 'INPUT_FOR_HOME': {
      return {
        ...state,
        input: {
          ...state.input,
          ...action.input
        }
      }
    }

    case 'ALTER_TITLE_FROM_SAGA': {
      return {
        ...state,
        saveStatus: 1
      }
    }

    case 'ALTER_TITLE_FROM_SAGA_COMPLETION': {
      const { error } = action
      if (error) {
        return {
          ...state,
          saveStatus: 0
        }
      }

      return {
        ...state,
        saveStatus: 2,
        input: {
          ...state.input,
          title: action.title
        }
      }
    }
    default:
      return state
  }
}

export default combineReducers({
  home: homeReducer
})