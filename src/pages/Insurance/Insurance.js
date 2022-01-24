import React from "react"
import Header from "../../components/Header/Header";
import {RiShieldCrossFill} from '@react-icons/all-files/ri/RiShieldCrossFill'
import Actions from "../../components/Actions/Actions";
import Table from "../../components/Table/Table";
import './Insurance.css'

const Insurance = () => {
    return (
        <div className="Insurance">
            <Header icon={<RiShieldCrossFill/>} title={'Convênio'}/>
            <Actions/>
            <Table tableTitles={['Empresa', 'Cobertura']}/>
        </div>
    )
}

export default Insurance;