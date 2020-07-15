import React from 'react';
import './user.css'
import store from '../Store/index'
import {setActiveUser} from '../Action/index';
const User =({user})=>{
    const {name, profile_pic, status} = user
    
    return(
        <div className="user" onClick={handleClick.bind(null,user)} >
            <img src={profile_pic} alt={name} className="pic"/>
            <div className="details">
                <p className="name">{name}</p>
                <p className="status">{status}</p>
            </div>
        </div>
    )
}

function handleClick({user_id}){
    console.log(user_id);
    store.dispatch(setActiveUser(user_id))
}
export default User;