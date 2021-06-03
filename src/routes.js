import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Front from "./pages/Front"
import Main from "./pages/Main"
import EditObj from "./pages/EditObj"
import Create from "./pages/Create"
import EditUser from './pages/EditUser'
import DeleteObj from './pages/DeleteObj'

const Routes = (props) => {
    return (
        <>
            <Router>
                <Switch>
                    <Route path='/' exact component={(props) => <Front {...props} />} />
                    <Route path='/main' exact component={(props) => <Main {...props} />} />
                    <Route path='/editObjective' exact component={(props) => <EditObj {...props} />} />
                    <Route path='/createObjective' exact component={(props) => <Create {...props} />} />
                    <Route path='/editUser' exact component={(props) => <EditUser {...props} />} />
                    <Route path='/deleteObjective' exact component={(props) => <DeleteObj {...props} />} />
                </Switch>
            </Router>
        </>
    )
}

export default Routes