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
        .then((data) => { dispatch({ type: "GET_LINKS", objectives: data.links }) })

}

// black magic below
export const generateTimers = (dispatch, getState) => {
    const state = getState()
    const objectives = state.objectiveState.objectives
    console.log(objectives)
    const timers = []

    objectives.forEach(objective => {
        const years = objective.years
        const months = objective.months
        const days = objective.days
        const hours = objective.hours
        const minutes = objective.minutes
        const seconds = objective.seconds
        years.replace(" ","").split(",").forEach(year => {
            months.replace(" ","").split(",").forEach(month => {
                days.replace(" ","").split(",").forEach(day => {
                    hours.replace(" ","").split(",").forEach(hour => {
                        minutes.replace(" ","").split(",").forEach(minute => {
                            seconds.replace(" ","").split(",").forEach(second => {
                                timers.push({name: objective.name, description: objective.description, length: objective.length, start: new Date(year, month - 1, day, hour, minute, second)})
                            })
                        })
                    })
                })
            })
        })
    })


    dispatch({ type: "GET_TIMERS", timers: timers })
}
// black magic above