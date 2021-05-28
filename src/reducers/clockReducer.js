const initialState = {
  time: null,
  interval: null
}

const clockReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'TICK':
      return {
        ...state,
        time: action.time
      }
    case 'CLOCK_DEFAULT':
      return initialState
    default:
      return state
  }
}

export default clockReducer;