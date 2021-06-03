export const fetchObjectives = (dispatch, store) => {

    let reqPackage = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        },
    };

    fetch("http://localhost:3000/api/v1/getobjectives", reqPackage)
        .then((res) => res.json())
        .then((data) => { dispatch({ type: "GET_OBJECTIVES", objectives: data.objectives }) })
        .then(() => generateTimers(dispatch, store.getState))
}

export const deleteObjAction = (e, dispatch, history, store) => {

    e.preventDefault()
    const state = store.getState()

    let send = {
        id: state.objectiveState.currentObj
    }

    let newLinks = state.objectiveState.links.filter(link => link.before_id === state.objectiveState.currentObj || link.after_id === state.objectiveState.currentObj)

    let reqPackage = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(send)
    }

    fetch("http://localhost:3000/api/v1/deleteObj", reqPackage)
        .then(() => dispatch({ type: "DELETEOBJ", objective: state.objectiveState.objectives.find(objective => objective.id == state.objectiveState.currentObj) }))
        .then(() => {
            const objectives = state.objectiveState.objectives
            const timers = []
            objectives.forEach(objective => {
                const years = objective.years
                const months = objective.months
                const days = objective.days
                const hours = objective.hours
                const minutes = objective.minutes
                const seconds = objective.seconds
                years.replace(" ", "").split(",").forEach(year => {
                    months.replace(" ", "").split(",").forEach(month => {
                        days.replace(" ", "").split(",").forEach(day => {
                            hours.replace(" ", "").split(",").forEach(hour => {
                                minutes.replace(" ", "").split(",").forEach(minute => {
                                    seconds.replace(" ", "").split(",").forEach(second => {
                                        timers.push({ name: objective.name, description: objective.description, duration: objective.duration, objective_id: objective.id, start: new Date(parseInt(year), parseInt(month) - 1, parseInt(day), parseInt(hour), parseInt(minute), parseInt(second)), end: new Date(parseInt(year), parseInt(month) - 1, parseInt(day), parseInt(hour), parseInt(minute), parseInt(second) + parseInt(objective.duration)) })
                                    })
                                })
                            })
                        })
                    })
                })
            })

            dispatch({ type: "GET_TIMERS", timers: timers })

        })
        
        .then(() => {history.push("/main")
        dispatch({ type: "NEWCURRENTLINKS", link:newLinks})
        dispatch({ type: "RESETCURROBJ" })})

}

export const fetchLinks = (dispatch) => {

    let reqPackage = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        },
    };

    fetch("http://localhost:3000/api/v1/getlinks", reqPackage)
        .then((res) => res.json())
        .then((data) => {
            dispatch({ type: "GET_LINKS", links: data.links })
            const befores = data.links.map(link => link.before_id)
            const afters = data.links.map(link => link.after_id)
            const send = afters.find(after => befores.includes(after))

        })
}

export const createObjAction = (e, dispatch, history, store) => {
    e.preventDefault()
    const state = store.getState()

    //for None first
    if (e.target[0].value === "") {

        let newObj = {
            name: e.target[1].value,
            description: e.target[2].value,
            duration: e.target[3].value,
            years: e.target[4].value,
            months: e.target[5].value,
            days: e.target[6].value,
            hours: e.target[7].value,
            minutes: e.target[8].value,
            seconds: e.target[9].value
        }

        let reqPackage = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(newObj)
        }

        fetch("http://localhost:3000/api/v1/newObjNoLink", reqPackage)
            .then((res) => res.json())
            .then((data) => { dispatch({ type: "NEWOBJS", objective: data.objective }) })
            .then(() => history.push("/main"))

    } else {

        let linkedObjective = state.objectiveState.objectives.find(objective => objective.id == e.target[0].value)

        let newSeconds = linkedObjective.seconds.replace(" ", "").split(",").map(second => String(parseInt(second) + parseInt(linkedObjective.duration) + parseInt(e.target[4].value))).reduce((accumulator, currentValue) => accumulator + "," + currentValue)

        let newObj = {
            linkedObjectiveid: e.target[0].value,
            name: e.target[1].value,
            description: e.target[2].value,
            duration: e.target[3].value,
            delay: e.target[4].value,
            years: linkedObjective.years,
            months: linkedObjective.months,
            days: linkedObjective.days,
            hours: linkedObjective.hours,
            minutes: linkedObjective.minutes,
            seconds: newSeconds
        }

        let reqPackage = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(newObj)
        }

        fetch("http://localhost:3000/api/v1/newObjLink", reqPackage)
            .then((res) => res.json())
            .then((data) => { dispatch({ type: "NEWOBJS", objective: data.objective }); dispatch({ type: "NEWLINKS", link: data.link }) })
            //stolen from the black magic below
            .then(() => {
                const objectives = state.objectiveState.objectives
                const timers = []

                objectives.forEach(objective => {
                    const years = objective.years
                    const months = objective.months
                    const days = objective.days
                    const hours = objective.hours
                    const minutes = objective.minutes
                    const seconds = objective.seconds
                    years.replace(" ", "").split(",").forEach(year => {
                        months.replace(" ", "").split(",").forEach(month => {
                            days.replace(" ", "").split(",").forEach(day => {
                                hours.replace(" ", "").split(",").forEach(hour => {
                                    minutes.replace(" ", "").split(",").forEach(minute => {
                                        seconds.replace(" ", "").split(",").forEach(second => {
                                            {debugger}
                                            timers.push({ name: objective.name, description: objective.description, duration: objective.duration, objective_id: objective.id, start: new Date(parseInt(year), parseInt(month) - 1, parseInt(day), parseInt(hour), parseInt(minute), parseInt(second)), end: new Date(parseInt(year), parseInt(month) - 1, parseInt(day), parseInt(hour), parseInt(minute), parseInt(second) + parseInt(objective.duration)) })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })

                dispatch({ type: "GET_TIMERS", timers: timers })
            })
            .then(() => history.push("/main"))
    };
}

export const editObjAction = (e, dispatch, history, store) => {
    e.preventDefault()
    const state = store.getState()
    const objectives = state.objectiveState.objectives
    const links = state.objectiveState.links
    const befores = links.map(link => String(link.before_id))
    const afters = links.map(link => String(link.after_id))
    const user_id = objectives[0].user_id

    const newStartingObj = {
        id: parseInt(e.target[0].value),
        user_id: user_id,
        name: e.target[1].value,
        description: e.target[2].value,
        duration: e.target[3].value,
        years: e.target[4].value,
        months: e.target[5].value,
        days: e.target[6].value,
        hours: e.target[7].value,
        minutes: e.target[8].value,
        seconds: e.target[9].value,
    }

    let sendObjs = [newStartingObj]
    let initObj = newStartingObj



    while (befores.includes(String(initObj.id))) {
        let link = links.filter(link => String(link.before_id) === String(initObj.id))[0]
        let afterObj = objectives.filter(objective => String(objective.id) === String(link.after_id))[0]
        let newSeconds = initObj.seconds.replace(" ", "").split(",").map(second => String(parseInt(second) + parseInt(initObj.duration) + parseInt(link.delay))).reduce((accumulator, currentValue) => accumulator + "," + currentValue)

        initObj = {
            id: afterObj.id,
            name: afterObj.name,
            user_id: user_id,

            description: afterObj.description,
            duration: afterObj.duration,
            years: e.target[4].value,
            months: e.target[5].value,
            days: e.target[6].value,
            hours: e.target[7].value,
            minutes: e.target[8].value,
            seconds: newSeconds
        }

        sendObjs = sendObjs.concat(initObj)
    }

    console.log(sendObjs)

    let reqPackage = {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({data: sendObjs})
    }

    const changingIds = sendObjs.map(objective => objective.id)

    const filtered_objectives = objectives.filter(objective => !changingIds.includes(objective.id) )

    const newState = filtered_objectives.concat(sendObjs)

    dispatch({type: "EDITOBJS", objectives: newState})

    fetch("http://localhost:3000/api/v1/editObj", reqPackage)

    const timers = []

    objectives.forEach(objective => {
        const years = objective.years
        const months = objective.months
        const days = objective.days
        const hours = objective.hours
        const minutes = objective.minutes
        const seconds = objective.seconds
        years.replace(" ", "").split(",").forEach(year => {
            months.replace(" ", "").split(",").forEach(month => {
                days.replace(" ", "").split(",").forEach(day => {
                    hours.replace(" ", "").split(",").forEach(hour => {
                        minutes.replace(" ", "").split(",").forEach(minute => {
                            seconds.replace(" ", "").split(",").forEach(second => {
                                timers.push({ name: objective.name, description: objective.description, duration: objective.duration, objective_id: objective.id, start: new Date(parseInt(year), parseInt(month) - 1, parseInt(day), parseInt(hour), parseInt(minute), parseInt(second)), end: new Date(parseInt(year), parseInt(month) - 1, parseInt(day), parseInt(hour), parseInt(minute), parseInt(second) + parseInt(objective.duration)) })
                            })
                        })
                    })
                })
            })
        })
    })

    dispatch({ type: "GET_TIMERS", timers: timers })
    history.push("/main")

}

// black magic below
export const generateTimers = (dispatch, getState) => {
    const state = getState()
    const objectives = state.objectiveState.objectives
    const timers = []

    objectives.forEach(objective => {
        const years = objective.years
        const months = objective.months
        const days = objective.days
        const hours = objective.hours
        const minutes = objective.minutes
        const seconds = objective.seconds
        years.replace(" ", "").split(",").forEach(year => {
            months.replace(" ", "").split(",").forEach(month => {
                days.replace(" ", "").split(",").forEach(day => {
                    hours.replace(" ", "").split(",").forEach(hour => {
                        minutes.replace(" ", "").split(",").forEach(minute => {
                            seconds.replace(" ", "").split(",").forEach(second => {
                                console.log(second + objective.duration)
                                timers.push({ name: objective.name, description: objective.description, duration: objective.duration, objective_id: objective.id, start: new Date(parseInt(year), parseInt(month) - 1, parseInt(day), parseInt(hour), parseInt(minute), parseInt(second)), end: new Date(parseInt(year), parseInt(month) - 1, parseInt(day), parseInt(hour), parseInt(minute), parseInt(second) + parseInt(objective.duration)) })
                            })
                        })
                    })
                })
            })
        })
    })

    console.log(timers)

    dispatch({ type: "GET_TIMERS", timers: timers })
}
// black magic above


