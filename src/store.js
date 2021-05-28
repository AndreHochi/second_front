import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import loginReducer from './reducers/loginReducer'
import clockReducer from './reducers/clockReducer'
import objectiveReducer from './reducers/objectiveReducer'

const rootReducer = combineReducers({
    loginState: loginReducer,
    clockState: clockReducer,
    //planState: planReducer,
    objectiveState: objectiveReducer,
    //linkState: linkReducer
})

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(applyMiddleware(thunk)))

export default store