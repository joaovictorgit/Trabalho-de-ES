import React from "react";
import './Header.css'

const Header = ({title, icon}) => {
    return (
        <div className="Header">
            <h1>{icon}</h1>
            <h1>{title}</h1>
        </div>
    )
}

export default Header;