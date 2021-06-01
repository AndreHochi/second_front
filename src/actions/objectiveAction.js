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
        .then((data) => { dispatch({ type: "GET_LINKS", links: data.links }) })

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

        console.log(state.objectiveState)

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

        console.log(newObj)

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
            .then((data) => { dispatch({ type: "NEWOBJS", objective: data.objective })
                            dispatch({ type: "NEWLINKS", link: data.link })
        })

    };
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
                                timers.push({ name: objective.name, description: objective.description, duration: objective.duration, objective_id: objective.id, start: new Date(parseInt(year), parseInt(month) - 1, parseInt(day), parseInt(hour), parseInt(minute), parseInt(second)), end: new Date(parseInt(year), parseInt(month) - 1, parseInt(day), parseInt(hour), parseInt(minute), parseInt(second + objective.duration)) })
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