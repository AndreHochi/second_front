const initalState = {
    loggedIn: false,
    toggle: false,
    fool: false,
    username: "",
    newuser: false
}

const loginReducer = (state = initalState, action) => {
    switch (action.type) {
        case 'GET_LOGIN':
            return {
                ...state,
                loggedIn: true,
                username: action.username
            }
        case 'FOOL':
            return {
                ...state,
                fool: true
            }
        case 'TOGGLE':
            return {
                ...state,
                toggle: !state.toggle
            }
        case 'SIGNUP':
            return {
                ...state,
                newuser: true
            }
        case 'LOGIN_DEFAULT':
            return initalState
        default:
            return state
    }
}

export default loginReducer