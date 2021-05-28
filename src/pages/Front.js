import { useSelector, useDispatch } from 'react-redux'
import { fetchLogin } from '../actions/loginAction'

const Front = (props) => {

    const states = useSelector(reducer => reducer.loginState)
    const dispatch = useDispatch()

    return (
        <div className='App-front'>
            {states.fool ? <h1 className="fool">YOU FOOL. YOU ABSOLUTE BAFFOON. HOW COULD YOU DO THAT!</h1> : <h1>Hello. Welcome.</h1>}
            {states.toggle ? <h1>Sign Up</h1> : <h1>Sign In</h1>}
            <form onSubmit={(e) => { e.preventDefault(); fetchLogin(states.toggle, e, dispatch, props.history)}} >
                <label>Username: </label>
                <input required type="text" />
                <br />
                <label>Password: </label>
                <input required type="text" />
                <br />
                <input type="submit" value="Submit"/>
            </form>
            <br></br>
            <button onClick={() => dispatch({ type: 'TOGGLE' })}>{states.toggle ? "Change to Sign in" : "Change to Sign up"}</button>
        </div>
    )
}

export default Front