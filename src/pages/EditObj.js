import { useSelector, useDispatch } from 'react-redux'

const EditObj = (props) => {

    // BELOW LINE WONT WORK RN BECAUSE CURRENT TIME IS FUCKING ME OVER BECAUSE THE TIMER DOESNT HAVE A RELATIONSHIP WITH IT'S ORIGINAL OBJECTIVE
    // const currentUsername = useSelector(reducer => reducer.objectiveState.currentTimer)
    const dispatch = useDispatch()


    return (
        <div className='App-front'>
            <form>
                <label>Name</label>
                <input required type="text" />
                <br />
                <label>User</label>
                <input required type="text" />
                <br />
                <label>Description</label>
                <input required type="text" />
                <br />
                <label>Duration</label>
                <input required type="text" />
                <br />
                <label>Years</label>
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
                <br />
                <label>LINK</label>
                <input required type="text" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default EditObj