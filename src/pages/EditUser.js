import { useSelector, useDispatch } from 'react-redux'
import { editUserAction } from '../actions/loginAction'


const EditUser = (props) => {

    const currentUsername = useSelector(reducer => reducer.loginState.username)
    const dispatch = useDispatch()
    return (
        <div className='App-front'>
            <h1>Edit User</h1>
            <form onSubmit={(e) => editUserAction(e, dispatch, props.history)}>
                <label>Username: </label>
                <input required defaultValue={`${currentUsername}`} type="text" />
                <br />
                <label>Password: </label>
                <input required type="text" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default EditUser