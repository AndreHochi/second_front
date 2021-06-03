import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { signoutAction } from '../actions/signoutAction'
import { deleteUserAction } from '../actions/deleteUserAction'
import { CardContainer } from '../containers/CardContainer'
import { fetchObjectives, fetchLinks } from '../actions/objectiveAction'
import store from '../store'

const Main = (props) => {

    const cStates = useSelector(reducer => reducer.clockState)
    const dispatch = useDispatch()

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
            <button onClick={() => deleteUserAction(dispatch, props.history)}>Delete User</button>

            <button onClick={() => props.history.push("/editUser")}>Edit User</button>

            {/* REDO CARD CONTAINER AFTER DOING TIMER OBJECTS */}
            <CardContainer />
            {/* FINISH SOUND GETTING SOUND TO PLAY BELOW */}
            {/* {playSound ? this.} */}
            <p>{cStates.time.toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' })}</p>
            <button onClick={(e) => props.history.push("/createObjective")}>Create Objectives</button>
            <button onClick={(e) => props.history.push("/deleteObjective")}>Delete Objectives</button>
            <button onClick={(e) => props.history.push("/editObjective")}>Edit Objectives</button>

        </div>
    )
}

export default Main