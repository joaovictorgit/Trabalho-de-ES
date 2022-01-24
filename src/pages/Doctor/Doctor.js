import React, { useEffect, useState } from "react"
import Table from "../../components/Table/Table";
import DoctorData from './DoctorData'
import './Doctor.css'
import Actions from "../../components/Actions/Actions";
import Header from "../../components/Header/Header";
import {FaUserMd} from '@react-icons/all-files/fa/FaUserMd'
import getDoctors from "../../controllers/DoctorController";

const Doctor = () => {
    const [doctorData, setDoctorData] = useState([]);

    useEffect(() => {
        setDoctorData(getDoctors());
    })

    return (
        <div className="Doctor">
            <Header title={"Médicos"} icon={<FaUserMd/>}/>
            <Actions/>
            <Table tableTitles={['CRM', 'Nome', 'Especialização']} tableData={doctorData}/>
        </div>
    )
}

export default Doctor;