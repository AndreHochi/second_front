export const signoutAction = (dispatch, history) => {
    dispatch({type: "LOGIN_DEFAULT"})
    dispatch({type: "CLOCK_DEFAULT"})
    dispatch({type: "OBJECTIVE_DEFAULT"})
    history.push("/")
    localStorage.clear()
}
