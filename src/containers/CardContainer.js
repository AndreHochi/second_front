import React from 'react';
import { Card } from '../components/Card'
import { useSelector } from 'react-redux'


export const CardContainer = () => {
    const states = useSelector(reducer => reducer.objectiveState)
    const clock = useSelector(reducer => reducer.clockState)
    console.log(states.timers)
    return (
        <div className="container">
            {Object.keys(states.timers).length === 0 ? null : states.timers.filter(timer => 86400000 > new Date(timer.years, timer.months - 1, timer.days, timer.hours, timer.minutes, timer.seconds + timer.duration) - clock.time && new Date(timer.years, timer.months - 1, timer.days, timer.hours, timer.minutes, timer.seconds + timer.duration) - clock.time > 0).map(timer => <Card timer={timer} />)}
        </div>
    )
}