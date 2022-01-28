import React from "react";
import Header from "../../components/Header/Header";
import {BsFillCalendarFill} from '@react-icons/all-files/bs/BsFillCalendarFill';
import Schedule from "../../components/Schedule/Schedule";
import './Scheduling.css';

const Scheduling = () => {
    return(
        <div className="Scheduling">
            <Header title={'Agendamento'} icon={<BsFillCalendarFill/>}/>
            <Schedule/>
        </div>
    )
}

export default Scheduling;