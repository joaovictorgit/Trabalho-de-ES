import React, {useState, useEffect} from "react";
import Header from "../../components/Header/Header";
import {RiShieldCrossFill} from '@react-icons/all-files/ri/RiShieldCrossFill'
import Actions from "../../components/Actions/Actions";
import Table from "../../components/Table/Table";
import Modal from "../../components/Modal/Modal";
import './Insurance.css'
import AddEditInsurance from "../../components/Forms/AddEditInsurance/AddEditInsurance";
import { getInsurance, deleteInsurance } from "../../controllers/InsuranceController";

const Insurance = () => {
    const [modalView, setModalView] = useState(false);
    const [insuranceData, setInsuranceData] = useState([]);
    const [rebuild, setRebuild] = useState(false);

    useEffect(() => {
        getInsurance(setInsuranceData);
        return () => {
            setInsuranceData([]);
        }
    }, [modalView, rebuild]);

    const deleteFunction = (element) => {
        deleteInsurance(element);
        setRebuild(!rebuild);
    }

    return (
        <div className="Insurance">
            <Header icon={<RiShieldCrossFill/>} title={'Convênio'}/>
            <Actions activeModal={setModalView}/>
            <Table tableTitles={['Empresa', 'Cobertura (%)', 'Periodo da parceria (anos)']} tableData={insuranceData} deleteFunction={deleteFunction}/>

            {modalView ? <Modal onClose={() => setModalView(false)}><AddEditInsurance closeModal={() => setModalView(false)}/></Modal> : null}
        </div>
    )
}

export default Insurance;