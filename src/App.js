import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar/sidebar'
import Main from './components/Main/main' 
import store from './components/Store/index';
import  _ from 'lodash';
function App() {
  const {contacts, user, activeUser} = store.getState();

  return (
    <div className="App">
      <Sidebar contacts={_.values(contacts)} />
      <Main user={user} activeUser = {activeUser} />
    </div>
  );
}

export default App;
