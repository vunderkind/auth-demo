import React from 'react';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard'
import PrivateRoute from './Components/PrivateRoute';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

const App = ()=> {
    return (
    <Router>
        <Route exact path="/">
            <h1>Welcome eh?</h1>
            <Link to="/login">Go to login</Link>
            <Link to='/dashboard'>Go to dashboard</Link>
        </Route>
        <Route path="/login"><Login/></Route>
        <PrivateRoute path='/dashboard'>
            <Dashboard/>
        </PrivateRoute>

    </Router>
    )
}

export default App