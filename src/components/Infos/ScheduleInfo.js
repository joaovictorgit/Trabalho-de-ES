import React , {useState} from 'react';
import { deleteSchedule } from '../../controllers/ScheduleController';
import DeleteButton from '../Buttons/DeleteButton/DeleteButton';
import './ScheduleInfo.css'

const ScheduleInfo = ({object, onClose}) => {
    const deleteInfos = () => {
        deleteSchedule(object.id);
        onClose();
    }

    return (
        <div className="ScheduleInfo">
            <span>Consulta: {object.title}</span>
            <span>Horario de início: {(object.start).toString()}</span>
            <span>Horario de encerramento: {(object.end).toString()}</span>
            <DeleteButton onClick={deleteInfos}/>
        </div>
    )
}

export default ScheduleInfo;