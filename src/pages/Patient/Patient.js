import React, { useState, useEffect } from "react"
import Actions from "../../components/Actions/Actions";
import Header from "../../components/Header/Header";
import Table from "../../components/Table/Table";
import Modal from "../../components/Modal/Modal";
import {FaUserInjured} from '@react-icons/all-files/fa/FaUserInjured'
import './Patient.css'
import AddEditPatient from "../../components/Forms/AddEditPatient/AddEditPatient";
import { getPatients, deletePatient } from "../../controllers/PatientController";

const Patient = () => {
    const [patientData, setPatientData] = useState([]);
    const [modalView, setModalView] = useState(false);
    const [rebuild, setRebuild] = useState(false);

    useEffect(() => {
        getPatients(setPatientData);
        return () => {
            setPatientData([]);
        }
    }, [modalView, rebuild]);

    const deleteFunction = (element) => {
        deletePatient(element);
        setRebuild(!rebuild);
    }

    return (
        <div className="Patient">
            
            <Header icon={<FaUserInjured/>} title={'Paciente'}/>
            <Actions activeModal={setModalView} />
            <Table tableTitles={['CPF', 'Nome', 'Telefone', 'Convenio', 'Informações']} tableData={patientData} deleteFunction={deleteFunction}/>
            {modalView ? <Modal onClose={() => setModalView(false)}><AddEditPatient closeModal={() => setModalView(false)}/></Modal> : null}
        </div>
    )
}

export default Patient;