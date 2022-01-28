import React, { useEffect, useState } from "react"
import { getInsurance } from '../../../controllers/InsuranceController'
import { addPatient } from "../../../controllers/PatientController"
import InputMask from "react-input-mask";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './AddEditPatient.css'

const AddEditPatient = ({closeModal}) => {
    const [insuranceList, setInsurances] = useState([])
    const [formPatient, setFormPatient] = useState({cpf: '', nome: '', telefone: '', convenio: 'Nenhum', informacoes: ''})

    useEffect(() => {
        getInsurance(setInsurances);
        return () => {
            setInsurances([]);
        }
    }, []);

    const notify = () => toast.error("Preencha todos os campos!");

    const handleChangeNome = (e) =>{
        let aux = formPatient;
        aux.nome = e.target.value;
        setFormPatient(aux);
    }

    const handleChangeCPF = (e) =>{
        let aux = formPatient;
        aux.cpf = e.target.value;
        setFormPatient(aux);
    }

    const handleChangeTelefone = (e) =>{
        let aux = formPatient;
        aux.telefone = e.target.value;
        setFormPatient(aux);
    }

    const handleChangeInfo = (e) =>{
        let aux = formPatient;
        aux.informacoes = e.target.value;
        setFormPatient(aux);
    }

    const handleChangeConvenios = (e) => {
        let aux = formPatient;
        aux.convenio = e.target.value;
        setFormPatient(aux);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(formPatient.nome !== '' && formPatient.cpf.match(/[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}/)){
            addPatient(formPatient);
            closeModal();
        }else{
            notify();
        }
    }

    return(
        <form className="addEditPatient" onSubmit={handleSubmit}>
            <label>Nome:<br/>
                <input type="text" onChange={handleChangeNome}/>
            </label>
            <label>CPF:<br/>
                <InputMask type="text" mask = "999.999.999-99" onChange={handleChangeCPF}/>
            </label>
            <label>Telefone:<br/>
                <InputMask type="text" mask = "(99)9 9999-9999" onChange={handleChangeTelefone}/>
            </label>
            <label>Informações:<br/>
                <textarea /*rows="5" cols="33"*/ onChange={handleChangeInfo}>
                </textarea>
            </label>
            <select onChange={handleChangeConvenios}>
                <option defaultValue={true}>Nenhum</option>
                {insuranceList.map((value, key) => {
                    return <option key={key}>{value.nome}</option>
                })}    
            </select>
            <button className="submit">Cadastrar</button>
            <ToastContainer position="bottom-center" autoClose={2500} pauseOnHover={false}/>
        </form>
    )
}

export default AddEditPatient;