import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { signoutAction } from '../actions/signoutAction'
import { CardContainer } from '../containers/CardContainer'
import { fetchObjectives , fetchLinks } from '../actions/objectiveAction'
import store from '../store'

const Front = (props) => {

    const cStates = useSelector(reducer => reducer.clockState)
    const oStates = useSelector(reducer => reducer.objectiveState)
    const dispatch = useDispatch()

    let dayToMili = 86400000
    let hourToMili = 3600000
    let minuteToMili = 60000
    let secondToMili = 1000

    let remainingtime_s = Math.abs(cStates.time - new Date(2021, 4, 26, 0, 0, 0))
    let days = Math.floor(remainingtime_s / dayToMili)
    let remainingtime = remainingtime_s % dayToMili
    let hours = Math.floor(remainingtime / hourToMili)
    remainingtime = remainingtime % hourToMili
    let minutes = Math.floor(remainingtime / minuteToMili)
    remainingtime = remainingtime % minuteToMili
    let seconds = Math.floor(remainingtime / secondToMili)

    useEffect(() => {
        if (localStorage.token) {
            fetchObjectives(dispatch, store)
            fetchLinks(dispatch)
        }
    }, [])

    return (
        <div className='App-front'>
            {/* move buttons to a header object  */}
            <button onClick={() => signoutAction(dispatch, props.history)}>Sign Out</button>
            <button >Edit Objectives</button>
            <button >Create Objectives</button>
            {/* REDO CARD CONTAINER AFTER DOING TIMER OBJECTS */}
            <CardContainer />
            <p>{cStates.time.toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' })}</p>
            {/* <button onClick={}>Edit Objectives</button>
            <button onClick={}>Create Objectives</button> */}


        </div>
    )
}

export default Front