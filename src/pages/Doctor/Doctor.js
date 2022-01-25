import React, { useEffect, useState } from "react"
import Table from "../../components/Table/Table";
import './Doctor.css'
import Actions from "../../components/Actions/Actions";
import Header from "../../components/Header/Header";
import { FaUserMd } from '@react-icons/all-files/fa/FaUserMd'
import { getDoctors, deleteDoctor } from "../../controllers/DoctorController";

const Doctor = () => {
    const [doctorData, setDoctorData] = useState([]);
    
    useEffect(() => {
        getDoctors(setDoctorData);
        return () => {
            setDoctorData([]);
        }
    }, []);

    return (
        <div className="Doctor">
            <Header title={"Médicos"} icon={<FaUserMd/>}/>
            <Actions callback={getDoctors(setDoctorData)}/>
            <Table tableTitles={['CRM', 'Nome', 'Email', 'Especialização']} tableData={doctorData} deleteFunction={deleteDoctor}/>
        </div>
    )
}

export default Doctor;