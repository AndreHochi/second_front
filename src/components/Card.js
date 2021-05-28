import React from 'react'
import { useSelector, useDispatch } from 'react-redux'


export const Card = (props) => {

    const states = useSelector(reducer => reducer.clockState)
    const dispatch = useDispatch()

    let dayToMili = 86400000
    let hourToMili = 3600000
    let minuteToMili = 60000
    let secondToMili = 1000

    let remainingtime_s = new Date(props.objective.years, props.objective.months - 1, props.objective.days, props.objective.hours, props.objective.minutes, props.objective.seconds + props.objective.duration) - states.time
    // let days = Math.floor(remainingtime_s / dayToMili)
    let remainingtime = remainingtime_s % dayToMili
    let hours = Math.floor(remainingtime / hourToMili)
    remainingtime = remainingtime % hourToMili
    let minutes = Math.floor(remainingtime / minuteToMili)
    remainingtime = remainingtime % minuteToMili
    let seconds = Math.floor(remainingtime / secondToMili)



    return (
        <div className='card'>
            {/* {86400000 > remainingtime_s > 0 ? <p>{`${hours}`.padStart(2, '0')} : {`${minutes}`.padStart(2, '0')} : {`${seconds}`.padStart(2, '0')}</p> : <h1></h1>} */}
            {<p>{`${hours}`.padStart(2, '0')} : {`${minutes}`.padStart(2, '0')} : {`${seconds}`.padStart(2, '0')}</p>}
            {<p>{props.objective.name}</p>}
            {<p>{props.objective.description}</p>}
            {/* <p>{`${days}`} : {`${hours}`.padStart(2, '0')} : {`${minutes}`.padStart(2, '0')} : {`${seconds}`.padStart(2, '0')}</p>
            <p>{props.objective.name}</p>
            <p>{props.objective.description}</p> */}
        </div>
    )
}