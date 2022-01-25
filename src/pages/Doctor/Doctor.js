import React, { useEffect, useState } from "react"
import Table from "../../components/Table/Table";
import './Doctor.css'
import Actions from "../../components/Actions/Actions";
import Header from "../../components/Header/Header";
import { FaUserMd } from '@react-icons/all-files/fa/FaUserMd'
import { getDoctors, deleteDoctor, addDoctor } from "../../controllers/DoctorController";
import Modal from "../../components/Modal/Modal";
import AddEditDoctor from "../../components/Forms/AddEditDoctor/AddEditDoctor";

const Doctor = () => {
    const [doctorData, setDoctorData] = useState([]);
    const [modalView, setModalView] = useState(false);
    
    useEffect(() => {
        getDoctors(setDoctorData);
        return () => {
            setDoctorData([]);
        }
    }, []);

    return (
        <div className="Doctor">
            <Header title={"Médicos"} icon={<FaUserMd/>}/>
            <Actions activeModal={setModalView}/>
            <Table tableTitles={['CRM', 'Nome', 'Email', 'Especialização']} tableData={doctorData} deleteFunction={deleteDoctor}/>
            {modalView ? <Modal onClose={() => setModalView(false)}><AddEditDoctor addDoctor={addDoctor}/></Modal> : null}
        </div>
    )
}

export default Doctor;