import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from "react-router-dom";

export const Card = (props) => {

    const states = useSelector(reducer => reducer.clockState)
    const dispatch = useDispatch()
    const history = useHistory();

    // console.log(props.timer)

    let remainingtime_s = new Date(props.timer.end - states.time)
    // // let days = Math.floor(remainingtime_s / dayToMili)
    // let remainingtime = remainingtime_s % dayToMili
    // let hours = Math.floor(remainingtime / hourToMili)
    // remainingtime = remainingtime % hourToMili
    // let minutes = Math.floor(remainingtime / minuteToMili)
    // remainingtime = remainingtime % minuteToMili
    // let seconds = Math.floor(remainingtime / secondToMili)



    return (
        <div className='card'>
            {/* {86400000 > remainingtime_s > 0 ? <p>{`${hours}`.padStart(2, '0')} : {`${minutes}`.padStart(2, '0')} : {`${seconds}`.padStart(2, '0')}</p> : <h1></h1>} */}

            {/* {remainingtime_s.valueOf() < 0 && remainingtime_s.valueOf() > -1000 ? dispatch({type: "START_SOUND"}) : null}
            {remainingtime_s.valueOf() < -1000 ? dispatch({type: "STOP_SOUND"}) : null} */}

            {<p>{`${remainingtime_s.getHours()}`.padStart(2, '0')} : {`${remainingtime_s.getMinutes()}`.padStart(2, '0')} : {`${remainingtime_s.getSeconds()}`.padStart(2, '0')}</p>}
            {<p>{props.timer.name}</p>}
            {<p>{props.timer.description}</p>}
            <button onClick={(e) => {
                dispatch({ type: "CURRENTTIMER", currentTimer: props.timer })
                history.push("/editObjective")
            }}>Edit Objective</button>

            {/* <p>{`${days}`} : {`${hours}`.padStart(2, '0')} : {`${minutes}`.padStart(2, '0')} : {`${seconds}`.padStart(2, '0')}</p>
            <p>{props.objective.name}</p>
            <p>{props.objective.description}</p> */}
        </div>
    )
}