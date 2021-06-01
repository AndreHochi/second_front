const initalState = {
    objectives: {},
    links: {},
    timers: {},
    sound: false,
    currentTimer: {},
    currentDrop: "",
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
        case 'SOUND':
            return {
                ...state,
                sound: action.sound
            }
        case 'CURRENTDROP':
            return {
                ...state,
                currentDrop: action.currentDrop
            }
        case 'CURRENTTIMER':
            return {
                ...state,
                currentTimer: action.currentTimer
            }
        case 'NEWOBJS':
            return {
                ...state,
                objectives: state.objectives.concat(action.objective)
            }
        case 'NEWOBJS':
            return {
                ...state,
                links: state.links.concat(action.link)
            }
        case 'OBJECTIVE_DEFAULT':
            return initalState
        default:
            return state
    }
}

export default objectiveReducer