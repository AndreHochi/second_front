import React from 'react';
import { Card } from '../components/Card'
import { useSelector } from 'react-redux'


export const CardContainer = () => {
    const states = useSelector(reducer => reducer.objectiveState)
    const clock = useSelector(reducer => reducer.clockState)
    return (
        <div className="container">
            {Object.keys(states.timers).length === 0 ? null: states.timers.filter(timer => clock.time - timer.start > 0 && timer.end - clock.time > 0).map(timer => <Card timer={timer} />)}
            
            {/* PROBLEM CHILD BELOW DOESNT LIKE IT MAKES STUFF RERENDER ALOT AND GIVES AN INCORRECT ERROR MESSAGE */}
            {/* {Object.keys(states.timers).length === 0 ? null : dispatch({type: "SOUND", sound: states.timers.some(timer => timer.end - clock.time < 0 && timer.end - clock.time > -1000)})} */}
        </div>
    )
}