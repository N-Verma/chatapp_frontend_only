import React from 'react';
import store from '../../Store/index';
import {setTypingValue, sendMessage} from '../../Action/index'
import './message.css'

const Message =({value})=>{
    const state = store.getState();
    const handleChange = e =>{
        store.dispatch(setTypingValue(e.target.value));
    }
    const handleSubmit =e=>{
        e.preventDefault();
        const {typing,activeUser} = state;
        store.dispatch(sendMessage(typing, activeUser));
    }
    return(
        <form className="message" onSubmit={handleSubmit}>
            <input className="msg_in" onChange={handleChange} value={value} placeholder="Enter Message" />
        </form>
    )
};
export default Message;