import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom'
import {axiosWithAuth} from '../utils/axiosWithAuth'
function FriendsList(){
    const [friends, setFriends] = useState([])
    useEffect(() => {
        axiosWithAuth().get('http://localhost:5000/api/friends')
    .then(res=>{
        setFriends(res.data)
    })
        
    }, [])
    return (
        <div style={{margin: '0 2em'}}>
            <Link to='/'>Back to home</Link>
            <h1>Welcome to the dashboard</h1>
            <p>You should only be able to see this if you're signed in!</p>
            <p><i>This is a list of your F.R.I.E.N.D.S:</i></p>
    {friends? 
    friends.map((friend)=>
    <div className="friends" key={friend.id}>
        <h3>{friend.name}</h3>
        <p>{friend.age} years old</p>
        <p><i>{friend.email}</i></p>
    </div>)
        :
        <p>Loading...</p>
        }
            <Link to='/'>Back to home</Link>
        </div>
    )
}

export default FriendsList