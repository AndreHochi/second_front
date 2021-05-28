const initalState = {
    objectives: {},
    links: {},
    timers: {}
}

const objectiveReducer = (state = initalState, action) => {
    switch (action.type) {
        case 'GET_OBJECTIVES':
            return {
                ...state,
                objectives: action.objectives
            }
        case 'GET_LINKS':
            return {
                ...state,
                links: action.links
            }
        case 'GET_TIMERS':
            return {
                ...state,
                timers: action.timers
            }
        case 'OBJECTIVE_DEFAULT':
            return initalState
        default:
            return state
    }
}

export default objectiveReducer