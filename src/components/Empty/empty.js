import React from 'react'
import './empty.css';

const Empty =({user, activeUser})=>{
    const {name, profile_pic, status} = user;
    const first = name.split(" ")[0];
    return(
        <div className="empty">
            <h1 className="name">{first}</h1>
            <img src={profile_pic} alt={name}/>
            <p className="stat">
                {status}
            </p>
            <button className="btn">Start Conversation</button>
            <p className="info">
                Search for someone to start chatting with or go to Contacts to see who
                is available
            </p>
        </div>
    )
}

export default Empty;