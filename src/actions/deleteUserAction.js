export const deleteUserAction = (dispatch, history) => {

    let reqPackage = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        },
    };

    fetch("http://localhost:3000/api/v1/deleteUser", reqPackage)

    dispatch({ type: "LOGIN_DEFAULT" })
    dispatch({ type: "CLOCK_DEFAULT" })
    dispatch({ type: "OBJECTIVE_DEFAULT" })
    history.push("/")
    localStorage.clear()
}