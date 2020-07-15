import React from "react";
import Header from './Header/header';
import store from '../Store/index';
import ChatMessage from './ChatMessage/chatmessage';
import Message from './Message/message';
import _ from 'lodash';

const Chat = ({ activeUser }) => {
  const state = store.getState();
  const connectedUser = state.contacts.contacts[activeUser];
  const messages = state.messages[activeUser]
  const {typing} = state;
  return (
    <div className="Chat">
      <Header user={connectedUser}/>
      <ChatMessage messages={_.values(messages)}/>
      <Message value={typing}/>
    </div>
  );
};

export default Chat;