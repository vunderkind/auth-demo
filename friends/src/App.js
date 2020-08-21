import React from 'react';
import Login from './Login';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';

const App = ()=> {
    return (
    <Router>
        <Route exact path="/">
            <h1>Welcome eh?</h1>
            <Link to="/login">Go to login</Link>
        </Route>
        <Route path="/login"><Login/></Route>

    </Router>
    )
}

export default App