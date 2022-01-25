import React, { useEffect, useState } from "react"
import Table from "../../components/Table/Table";
import DoctorData from './DoctorData'
import './Doctor.css'
import Actions from "../../components/Actions/Actions";
import Header from "../../components/Header/Header";
import {FaUserMd} from '@react-icons/all-files/fa/FaUserMd'
import  getDoctors from "../../controllers/DoctorController";
import { doc, deleteDoc} from "firebase/firestore";
import { db } from "../../config/firebase-config";

const Doctor = () => {
    const [doctorData, setDoctorData] = useState([]);

    const deleteDoctors = async(id) => {
        await deleteDoc(doc(db, "Medicos", id));
        console.log(id);
    }
    
    useEffect(() => {
        getDoctors(setDoctorData);
        console.log(doctorData);
    }, []);

    return (
        <div className="Doctor">
            <Header title={"Médicos"} icon={<FaUserMd/>}/>
            <Actions callback={getDoctors(setDoctorData)}/>
            <Table tableTitles={['CRM', 'Nome', 'Email', 'Especialização']} tableData={doctorData} deleteFunction={deleteDoctors}/>
        </div>
    )
}

export default Doctor;