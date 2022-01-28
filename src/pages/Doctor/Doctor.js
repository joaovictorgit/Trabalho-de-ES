import React, { useEffect, useState } from "react"
import Table from "../../components/Table/Table";
import './Doctor.css'
import Actions from "../../components/Actions/Actions";
import Header from "../../components/Header/Header";
import { FaUserMd } from '@react-icons/all-files/fa/FaUserMd'
import { getDoctors, deleteDoctor, addDoctor, searchDoctor, elementById } from "../../controllers/DoctorController";
import Modal from "../../components/Modal/Modal";
import AddEditDoctor from "../../components/Forms/AddEditDoctor/AddEditDoctor";

const Doctor = () => {
    const [doctorData, setDoctorData] = useState([]);
    const [modalView, setModalView] = useState(false);
    const [updateDoctor, setUpdateDoctor] = useState(false);
    const [editableData, setEditableData] = useState('');
    const [rebuild, setRebuild] = useState(false);
    
    useEffect(() => {
        getDoctors(setDoctorData);
        /*elementById();*/
        return () => {
            setDoctorData([]);
        }
    }, [modalView, rebuild]);

    /*const activeEditableModal = ({id}) => {
        setModalView(true);
        setEditableData(id);
        console.log('id' + id)
    }*/
    const deleteFunction = (element) => {
        deleteDoctor(element);
        setRebuild(!rebuild);
    }
    /*getDoctors(setDoctorData);*/

    return (
        <div className="Doctor">
            <Header title={"Médicos"} icon={<FaUserMd/>}/>
            <Actions activeModal={setModalView} searchFunction={searchDoctor} setData={setDoctorData}/>
            <Table tableTitles={['CRM', 'Nome', 'Email', 'Especialização']} tableData={doctorData} deleteFunction={deleteFunction}/>
            {modalView ? <Modal onClose={() => setModalView(false)}><AddEditDoctor addDoctor={addDoctor} id={editableData} closeModal={() => setModalView(false)}/></Modal> : null}
        </div>
    )
}

export default Doctor;