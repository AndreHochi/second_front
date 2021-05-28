export const fetchLogin = (toggle, e, dispatch, history) => {

    if (toggle === false) {

        let user = {
            name: e.target[0].value,
            password: e.target[1].value,
        };

        let reqPackage = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                // "Authorization": `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(user),
        };

        fetch("http://localhost:3000/api/v1/login", reqPackage)
            .then((res) => res.json())
            .then((data) => {
                localStorage.setItem("token", data.token)
                data.token === "Incorrect name or password" ? dispatch({ type: 'FOOL' }) : dispatch({ type: 'GET_LOGIN', username: data.name })
            })
            // .then(() => localStorage.token === "Incorrect name or password" ? null : fetchObjectives(dispatch))
            // .then(() => localStorage.token === "Incorrect name or password" ? null : fetchLinks(dispatch))
            // .then(() => localStorage.token === "Incorrect name or password" ? null : generateTimers(dispatch, getState))
            .then(() => localStorage.token === "Incorrect name or password" ? history.push("/") : history.push("/main"))

    }

    if (toggle === true) {

        let user = {
            name: e.target[0].value,
            password: e.target[1].value,
        };

        let reqPackage = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(user),
        };

        fetch("http://localhost:3000/api/v1/signup", reqPackage)
            .then((res) => res.json())
            .then((data) => {
                data.token === "Incorrect name or password" ? dispatch({ type: 'FOOL' }) : dispatch({ type: 'SIGNUP' })
            })

    }
}