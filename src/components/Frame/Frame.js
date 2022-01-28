import React, { useEffect, useState } from "react"
import { getDoctors } from "../../controllers/DoctorController";
import { getInsurance } from "../../controllers/InsuranceController";
import { getPatients } from "../../controllers/PatientController";
import { getSchedule } from "../../controllers/ScheduleController";
import './Frame.css'

const Frame = () => {
    const [doctors, setDoctors] = useState([]);
    const [patients, setPatients] = useState([]);
    const [insurances, setInsurances] = useState([]);
    const [schedules, setSchedule] = useState([]);

    useEffect(() => {
        getDoctors(setDoctors);
        getPatients(setPatients);
        getInsurance(setInsurances);
        getSchedule(setSchedule)
    }, [])

    return (
        <div className="Frame">
            <div className="Box">
                <h1>{doctors.length}</h1>
                <span>médicos cadastrados</span>
            </div>
            <div className="Box">
                <h1>{patients.length}</h1>
                <span>pacientes cadastrados</span>
            </div>
            <div className="Box">
                <h1>{insurances.length}</h1>
                <span>convênios parceiros</span>
            </div>
            <div className="Box">
                <h1>{schedules.length}</h1>
                <span>consultas marcadas</span>
            </div>
        </div>
    )
}

export default Frame;