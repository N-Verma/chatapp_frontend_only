import React from 'react';
import './header.css';

const Header =({user})=>{
    const {name, status} = user
    return(
        <header>
            <h2 className="name">{name}</h2>
        <p className="activeStatus">{status}</p>
        </header>
    )
}

export default Header;