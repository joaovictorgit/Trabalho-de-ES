import { set } from "date-fns";
import React, { useEffect, useState } from "react";
import { getDoctors } from "../../../controllers/DoctorController";
import {getPatients} from "../../../controllers/PatientController";
import {addSchedule} from "../../../controllers/ScheduleController";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './AddSchedule.css'


const AddSchedule = ({start, end, onClose}) => {
    /*(document).ready(function () {
        ('select').selectize({
            sortField: 'text'
        });
    });*/

    const [paciente, setPaciente] = useState({cpf: '', nome: ''});
    const [medico, setMedico] = useState({crm: '', nome: ''});
    const [doctorList, setDoctorList] = useState([]);
    const [patientList, setPatientList] = useState([]);
    
    useEffect(() => {
        getDoctors(setDoctorList);
        getPatients(setPatientList);
        return () => {
            setDoctorList([]);
            setPatientList([]);
        }
    }, []);

    const notify = () => toast.error("Preencha todos os campos!");
    
    const handleChangePaciente = (e) => {
        const cpfNome = e.target.value.replace(/ /g, '').split(':');
        setPaciente(
            {
                cpf: cpfNome[0],
                nome: cpfNome[1]
            }
        )
        /*console.log(e.target.value)*/
    }

    const handleChangeMedico = (e) => {
        const crmNome = e.target.value.replace(/ /g, '').split(':');
        setMedico(
            {
                crm: crmNome[0],
                nome: crmNome[1]
            }
        )
      
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(medico.crm !== '' && paciente.cpf !== ''){
            const schedule = {
                crm: medico.crm,
                nomeMedico: medico.nome,
                cpf: paciente.cpf,
                nomePaciente: paciente.nome,
                start,
                end
            }

            addSchedule(schedule);
            onClose();
        }else{
            notify();
        }
    }
    
    return (
            <form onSubmit={handleSubmit} className="AddSchedule">
                <select onChange={handleChangeMedico}>
                    <option defaultValue={true} disabled="disabled" selected='true'>Selecionar Médico</option>
                    {doctorList.map((value, key) => {
                        /*key == 0 ? */
                        return <option key={key}>{value.crm}: {value.nome}</option>
                    })}
                </select>

                <select onChange={handleChangePaciente}>
                    <option defaultValue={true} disabled="disabled" selected='true'>Selecionar Paciente</option>
                    {patientList.map((value, key) => {
                        return <option key={key} >{value.cpf}: {value.nome}</option>
                    })}
                </select>

                <button className="submit">Enviar</button>
                <ToastContainer position="bottom-center" autoClose={2500} pauseOnHover={false}/>
            </form>
    );
}

export default AddSchedule;