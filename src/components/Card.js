import React from 'react'
import { useSelector } from 'react-redux'

export const Card = (props) => {

    const states = useSelector(reducer => reducer.clockState)


    // console.log(props.timer)

    let remainingtime_s = new Date(props.timer.end - states.time)
    let days = Math.abs(Math.floor(remainingtime_s / 86400000))
    let remainingtime = remainingtime_s % 86400000
    let hours = Math.floor(remainingtime / 3600000)
    remainingtime = remainingtime % 3600000
    let minutes = Math.floor(remainingtime / 60000)
    remainingtime = remainingtime % 60000
    let seconds = Math.floor(remainingtime / 1000)



    return (
        <div className='card'>
            {/* {86400000 > remainingtime_s > 0 ? <p>{`${hours}`.padStart(2, '0')} : {`${minutes}`.padStart(2, '0')} : {`${seconds}`.padStart(2, '0')}</p> : <h1></h1>} */}

            {/* {remainingtime_s.valueOf() < 0 && remainingtime_s.valueOf() > -1000 ? dispatch({type: "START_SOUND"}) : null}
            {remainingtime_s.valueOf() < -1000 ? dispatch({type: "STOP_SOUND"}) : null} */}
            
            {<p>{`${days}`} : {`${hours}`.padStart(2, '0')} : {`${minutes}`.padStart(2, '0')} : {`${seconds}`.padStart(2, '0')}</p>}
            {/* {<p>{states.time.toString()}</p>}
            {<p>{props.timer.start.toString()}</p>}
            {<p>{props.timer.end.toString()}</p>} */}

            {<p>{props.timer.name}</p>}
            {<p>{props.timer.description}</p>}
            {/* <p>{`${days}`} : {`${hours}`.padStart(2, '0')} : {`${minutes}`.padStart(2, '0')} : {`${seconds}`.padStart(2, '0')}</p>
            <p>{props.objective.name}</p>
            <p>{props.objective.description}</p> */}
        </div>
    )
}