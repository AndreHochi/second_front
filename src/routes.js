import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Front from "./pages/Front"
import Main from "./pages/Main"


const Routes = (props) => {
    return (
        <>
            <Router>
                <Switch>
                    <Route path='/' exact component={(props) => <Front {...props}/>} />
                    <Route path='/main' exact component={(props) => <Main {...props}/>} />
                </Switch>
            </Router>
        </>
    )
}

export default Routes