import { useSelector, useDispatch } from 'react-redux'
import { createObjAction } from '../actions/objectiveAction'
import store from '../store'



const Create = (props) => {

    // BELOW LINE WONT WORK RN BECAUSE CURRENT TIME IS FUCKING ME OVER BECAUSE THE TIMER DOESNT HAVE A RELATIONSHIP WITH IT'S ORIGINAL OBJECTIVE
    const states = useSelector(reducer => reducer.objectiveState)
    console.log(states.objectives)
    const dispatch = useDispatch()

    return (
        <div className='App-front'>
            <form onSubmit={(e) => createObjAction(e, dispatch, props.history, store)}>
                <select defaultValue="" value={states.currentDrop} onChange={(e) => dispatch({ type: "CURRENTDROP", currentDrop: e.target.value })}>
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
                <input required type="text" />
                <br />
                {states.currentDrop !== "" ? <>
                    <label>Delay</label>
                    <input required type="text" />
                    <br />
                </> : <><label>Years</label>
                        <input required type="text" />
                        <br />
                        <label>Months</label>
                        <input required type="text" />
                        <br />
                        <label>Days</label>
                        <input required type="text" />
                        <br />
                        <label>Hours</label>
                        <input required type="text" />
                        <br />
                        <label>Minutes</label>
                        <input required type="text" />
                        <br />
                        <label>Seconds</label>
                        <input required type="text" />
                        <br /></>}
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Create