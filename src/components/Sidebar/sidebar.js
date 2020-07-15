import React from 'react';
import "./sidebar.css";
import  _ from 'lodash';
import User from '../User/user';
const Sidebar=({contacts})=>{
    contacts=_.values(contacts[0]);
    return(
    <aside className="side">
        <h3>Contacts</h3>
        <hr/>
        {contacts.map(contact=><User user={contact} key={contact.user_id} />)}
    </aside>
    )
}

export default Sidebar;