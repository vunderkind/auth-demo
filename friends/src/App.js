import React from 'react';
import Login from './Components/Login';
import FriendsList from './Components/FriendsList'
import PrivateRoute from './Components/PrivateRoute';
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom';

const App = ()=> {
    return (
    <Router>
        <Switch>
        <Route exact path="/">
            <h1>Welcome eh?</h1>
            <Link to="/login">Go to login</Link>
        </Route>
        <Route path="/login" component={Login}/>
        <PrivateRoute path='/FriendsList' component={FriendsList}/>
        </Switch>

    </Router>
    )
}

export default App