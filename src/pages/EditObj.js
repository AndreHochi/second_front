import { useSelector, useDispatch } from 'react-redux'
import { editObjAction } from '../actions/objectiveAction'
import store from '../store'

const EditObj = (props) => {

    // BELOW LINE WONT WORK RN BECAUSE CURRENT TIME IS FUCKING ME OVER BECAUSE THE TIMER DOESNT HAVE A RELATIONSHIP WITH IT'S ORIGINAL OBJECTIVE
    // const currentUsername = useSelector(reducer => reducer.objectiveState.currentTimer)
    const dispatch = useDispatch()
    const states = useSelector(reducer => reducer.objectiveState)


    return (
        <div className='App-front'>
            <form onSubmit={(e) => editObjAction(e, dispatch, props.history, store)}>
                <label>Objective to edit </label>
                <select required defaultValue="Please select an option" value={states.currentObj} onChange={(e) => { dispatch({ type: "CURRENTOBJ", currentObj: e.target.value }) }}>
                    <option value={"Please select an option"}>{"Please select an option"}</option>
                    {states.objectives.map(objective => <option value={objective.id}>{objective.name}</option>)}
                </select>
                <br />
                <label>Name</label>
                {states.currentObj === "Please select an option" || states.currentObj === "" ? <input defaultValue="" required type="text" /> : <input defaultValue={states.objectives.filter(objective => String(objective.id) === states.currentObj)[0].name} required type="text" />}
                <br />
                <label>Description</label>
                {states.currentObj === "Please select an option" || states.currentObj === "" ? <input defaultValue="" required type="text" /> : <input defaultValue={states.objectives.filter(objective => String(objective.id) === states.currentObj)[0].description} required type="text" />}
                <br />
                <label>Duration</label>
                {states.currentObj === "Please select an option" || states.currentObj === "" ? <input pattern = "[0-9]+" defaultValue="" required type="text" /> : <input pattern = "[0-9]+" defaultValue={states.objectives.filter(objective => String(objective.id) === states.currentObj)[0].duration} required type="text" />}
                <br />
                <label>Years</label>
                {states.currentObj === "Please select an option" || states.currentObj === "" ? <input pattern = "[0-9 \,]+" defaultValue="" required type="text" /> : <input pattern = "[0-9 \,]+"  defaultValue={states.objectives.filter(objective => String(objective.id) === states.currentObj)[0].years} required type="text" />}
                <br />
                <label>Months</label>
                {states.currentObj === "Please select an option" || states.currentObj === "" ? <input pattern = "[0-9 \,]+" defaultValue="" required type="text" /> : <input pattern = "[0-9 \,]+" defaultValue={states.objectives.filter(objective => String(objective.id) === states.currentObj)[0].months} required type="text" />}
                <br />
                <label>Days</label>
                {states.currentObj === "Please select an option" || states.currentObj === "" ? <input pattern = "[0-9 \,]+" defaultValue="" required type="text" /> : <input pattern = "[0-9 \,]+" defaultValue={states.objectives.filter(objective => String(objective.id) === states.currentObj)[0].days} required type="text" />}
                <br />
                <label>Hours</label>
                {states.currentObj === "Please select an option" || states.currentObj === "" ? <input pattern = "[0-9 \,]+" defaultValue="" required type="text" /> : <input pattern = "[0-9 \,]+" defaultValue={states.objectives.filter(objective => String(objective.id) === states.currentObj)[0].hours} required type="text" />}
                <br />
                <label>Minutes</label>
                {states.currentObj === "Please select an option" || states.currentObj === "" ? <input pattern = "[0-9 \,]+" defaultValue="" required type="text" /> : <input pattern = "[0-9 \,]+" defaultValue={states.objectives.filter(objective => String(objective.id) === states.currentObj)[0].minutes} required type="text" />}
                <br />
                <label>Seconds</label>
                {states.currentObj === "Please select an option" || states.currentObj === "" ? <input pattern = "[0-9 \,]+" defaultValue="" required type="text" /> : <input pattern = "[0-9 \,]+" defaultValue={states.objectives.filter(objective => String(objective.id) === states.currentObj)[0].seconds} required type="text" />}
                <br />
                <input type="submit" value="Submit" />
            </form>
            <button onClick={(e) => props.history.push("/main")}>Return to Main</button>

        </div>
    )
}

export default EditObj