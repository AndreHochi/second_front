import { useSelector, useDispatch } from 'react-redux'
import { createObjAction } from '../actions/objectiveAction'
import store from '../store'



const Create = (props) => {

    const states = useSelector(reducer => reducer.objectiveState)
    const dispatch = useDispatch()

    return (
        <div className='App-front'>
            <h1>Create Objective</h1>
            <form onSubmit={(e) => createObjAction(e, dispatch, props.history, store)}>
                <select defaultValue="" value={states.currentDrop} onChange={(e) =>{ dispatch({ type: "CURRENTDROP", currentDrop: e.target.value })}}>
                    <option value="">None</option>
                    {states.objectives.map(objective => <option value={objective.id}>{objective.name}</option>)}
                </select>
                <br />
                <label>Name</label>
                <input required type="text" />
                <br />
                <label>Description</label>
                <input required type="text" />
                <br />
                <label>Duration</label>
                <input required pattern = "[0-9]+" type="text" />
                <br />
                {states.currentDrop !== "" ? <>
                    <label>Delay</label>
                    <input required pattern = "[0-9]+"  type="text" />
                    <br />
                </> : <><label>Years</label>
                        <input required pattern = "[0-9 \,]+"  type="text" />
                        <br />
                        <label>Months</label>
                        <input required pattern = "[0-9 \,]+" type="text" />
                        <br />
                        <label>Days</label>
                        <input required pattern = "[0-9 \,]+" type="text" />
                        <br />
                        <label>Hours</label>
                        <input required pattern = "[0-9 \,]+" type="text" />
                        <br />
                        <label>Minutes</label>
                        <input required pattern = "[0-9 \,]+" type="text" />
                        <br />
                        <label>Seconds</label>
                        <input required pattern = "[0-9 \,]+" type="text" />
                        <br /></>}
                <input type="submit" value="Submit" />
            </form>
            <button onClick={(e) => props.history.push("/main")}>Return to Main</button>
        </div>
    )
}

export default Create