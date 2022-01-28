import React, {useState} from "react";
import { addInsurance } from "../../../controllers/InsuranceController";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './AddEditInsurance.css'

const AddEditInsurance = ({closeModal}) => {
    const [formInsurance, setFormInsurance] = useState({nome: '', periodo: '1', porcentagem: '1'});
    
    const notify = () => toast.error("Preencha todos os campos!");

    const handleChangeNome = (e) =>{
        let aux = formInsurance;
        aux.nome = e.target.value;
        setFormInsurance(aux);
    }

    const handleChangePeriodo = (e) =>{
        let aux = formInsurance;
        if(parseInt(e.target.value) > 10) {
            aux.periodo = 10;
        }else if(parseInt(e.target.value) < 1){
            aux.periodo = 1;
        }else{
            aux.periodo = parseInt(e.target.value);
        }
        setFormInsurance(aux);
    }

    const handleChangePorcentagem = (e) =>{
        let aux = formInsurance;
        if(parseInt(e.target.value) > 100) {
            aux.porcentagem = 100;
        }else if(parseInt(e.target.value) < 1){
            aux.porcentagem = 1;
        }else{
            aux.porcentagem = parseInt(e.target.value);
        }
        setFormInsurance(aux);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(formInsurance.nome !== ''){
            addInsurance(formInsurance);
            closeModal();
        }else{
            notify();
        }
    }

    return(
        <form onSubmit={handleSubmit} className="AddEditInsurance">
            <label>Empresa:<br/>
                <input type="text" placeholder='Empresa' onChange={handleChangeNome}/>
            </label>
            <label>Pocentagem da cobertura:<br/>
                <input type="number" min='1' max='100' defaultValue='1' onChange={handleChangePorcentagem}/>
            </label>
            <label>Duração da parceria(em anos):<br/>
                <input type="number" min='1' max='10' defaultValue='1' onChange={handleChangePeriodo}/>
            </label>
            <button className="submit">Adicionar</button>
            <ToastContainer position="bottom-center" autoClose={2500} pauseOnHover={false}/>
        </form>
    )
}

export default AddEditInsurance;