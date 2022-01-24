import React from "react"
import Actions from "../../components/Actions/Actions";
import Header from "../../components/Header/Header";
import Table from "../../components/Table/Table";
import {FaUserInjured} from '@react-icons/all-files/fa/FaUserInjured'
import './Patient.css'

const Patient = () => {
    return (
        <div className="Patient">
            <Header icon={<FaUserInjured/>} title={'Paciente'}/>
            <Actions/>
            <Table tableTitles={['CPF', 'Nome', 'Idade', 'Informações']}/>
        </div>
    )
}

export default Patient;