import React from 'react';
import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';

function Dashboard(){
    axios.get('http://localhost:5000/api/friends')
    .then(res=>console.log(res))
    return (
        <div>
            <h1>Welcome to the dashboard</h1>
            <p>You should only be able to see this if you're signed in!</p>
        </div>
    )
}

export default Dashboard