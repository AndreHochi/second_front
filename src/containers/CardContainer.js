import React from 'react';
import { Card } from '../components/Card'
import { useSelector, useDispatch } from 'react-redux'


export const CardContainer = () => {
    const states = useSelector(reducer => reducer.objectiveState)
    const clock = useSelector(reducer => reducer.clockState)
    const dispatch = useDispatch()
    return (
        <div className="container">
            {Object.keys(states.timers).length === 0 ? <h1>No Timers are active.</h1> : states.timers.filter(timer => timer.start - clock.time > 0).map(timer => <Card timer={timer} />)}
            {/* PROBLEM CHILD BELOW DOESNT LIKE IT MAKES STUFF RERENDER ALOT AND GIVES AN INCORRECT ERROR MESSAGE */}
            {/* {Object.keys(states.timers).length === 0 ? null : dispatch({type: "SOUND", sound: states.timers.some(timer => timer.end - clock.time < 0 && timer.end - clock.time > -1000)})} */}
        </div>
    )
}