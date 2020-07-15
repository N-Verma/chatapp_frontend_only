import React from 'react';
import "./main.css";
import Empty from '../Empty/empty';
import Chat from '../ChatWindow/chat';

const Main=({user, activeUser})=>{
    const content = ()=>{
        if(!activeUser){
            return(
                <Empty user={user} activeUser = {activeUser} />
            )
        }else{
            return(
                <Chat activeUser = {activeUser} />
            )
        }
    }
    
    return(
    <div className="main">
        {content()}
    </div>
    )
}

export default Main;