const initalState = {
    objectives: {},
    links: {},
    timers: {},
    sound: false,
    currentTimer: {},
    currentDrop: "",
    currentObj:"Please select an option"
}

const objectiveReducer = (state = initalState, action) => {
    switch (action.type) {
        case 'RESETCURROBJ':
            return {
                ...state,
                currentObj: "Please select an option"
            }
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
        case 'CURRENTOBJ':
            return {
                ...state,
                currentObj: action.currentObj
            }
        case 'CURRENTTIMER':
            return {
                ...state,
                currentTimer: action.currentTimer
            }
        case 'DELETEOBJ':
            return {
                ...state,
                objectives: state.objectives.filter(objective => objective === action.objective)
            }
        case 'NEWOBJS':
            return {
                ...state,
                objectives: state.objectives.concat(action.objective)
            }
        case 'NEWLINKS':
            return {
                ...state,
                links: state.links.concat(action.link)
            }
        case 'NEWCURRENTLINKS':
            return {
                ...state,
                links: action.link
            }
        case 'EDITOBJS':
            return {
                ...state,
                objectives: state.objectives
            }
        case 'OBJECTIVE_DEFAULT':
            return initalState
        default:
            return state
    }
}

export default objectiveReducer