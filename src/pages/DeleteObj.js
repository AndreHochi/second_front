import { useSelector, useDispatch } from 'react-redux'
import { deleteObjAction } from '../actions/objectiveAction'
import store from '../store'

const Delete = (props) => {

    const states = useSelector(reducer => reducer.objectiveState)
    const dispatch = useDispatch()

    return (
        <div className='App-front'>
            <h1>DELETE OBJECTIVE</h1>
            <form onSubmit={(e) => deleteObjAction(e, dispatch, props.history, store)}>
                <select required defaultValue="Please select an option" value={states.currentObj} onChange={(e) => { dispatch({ type: "CURRENTOBJ", currentObj: e.target.value }) }}>
                    <option value={"Please select an option"}>{"Please select an option"}</option>
                    {states.objectives.map(objective => <option value={objective.id}>{objective.name}</option>)}
                </select>
                <input type="submit" value="Delete" />
            </form>
            <button onClick={(e) => props.history.push("/main")}>Return to Main</button>
        </div>

    )
}

export default Delete