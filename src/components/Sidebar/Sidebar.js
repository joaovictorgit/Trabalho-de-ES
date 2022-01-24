import React,{useState} from "react";
import SidebarData from './SidebarData';
import { NavLink } from "react-router-dom";
import {AiOutlineRight} from '@react-icons/all-files/ai/AiOutlineRight'
import {AiOutlineLeft} from '@react-icons/all-files/ai/AiOutlineLeft'
import './Sidebar.css'

const Sidebar = () => {
    const [active, setActive] = useState(false);

    return(
        <div className={active ? 'Sidebar' : 'SidebarMin'}>
            <ul className="SidebarList">
                {SidebarData.map((value, key) => {
                    return(
                        <li key={key} className="MenuItem">
                            <NavLink to={value.link} style={({isActive}) => isActive ? {backgroundColor:'whitesmoke', color: '#1e88e5', borderRadius: '10px'} : null}>
                                <span>{value.icon}</span>
                                {active ? <span>{value.name}</span> : null}
                            </NavLink>
                        </li>
                    )   
                })}
                <li className="Toggle" onClick={() => setActive(!active)}>
                    <span>{active ? <AiOutlineLeft/> : <AiOutlineRight/>}</span>
                    {active ? <span>Ocultar</span> : null}
                </li>
            </ul>            
        </div>
    )
}

export default Sidebar;