import React, { useEffect, useState } from "react";
import { elementById } from "../../../controllers/DoctorController";
import InputMask from "react-input-mask";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './AddEditDoctor.css'


const AddEditDoctor = ({addDoctor, id, closeModal}) => {
    const [formDoctor, setFormDoctor] = useState({crm: '', nome: '', especializacao: '', email: ''});
    const [element, setElement] = useState({});

    const notify = () => toast.error("Preencha todos os campos!");

    useEffect(()=>{
        if(id !== ''){
            elementById(id, setElement);
            setFormDoctor(element);
        }
    }, [])

    const handleChangeCRM = (e) => {
        let aux = formDoctor;
        aux.crm = e.target.value;
        setFormDoctor(aux);
    }

    const handleChangeNome = (e) => {
        let aux = formDoctor;
        aux.nome = e.target.value;
        setFormDoctor(aux);
    }

    const handleChangeEsp = (e) => {
        let aux = formDoctor;
        aux.especializacao = e.target.value;
        setFormDoctor(aux);
    }

    const handleChangeEmail = (e) => {
        let aux = formDoctor;
        aux.email = e.target.value;
        setFormDoctor(aux);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(formDoctor.nome !== '' && formDoctor.especializacao !== '' && formDoctor.email !== '' && formDoctor.crm.match(/[0-9]{5}[/][a-zA-Z]{2}/)){
            addDoctor(formDoctor);
            closeModal();
        }else{
            notify();
        }
    }

    return(
            <form onSubmit = {handleSubmit} className="AddEditDoctor">
                <label>CRM:<br/>
                <InputMask type="text" mask="99999/aa" placeholder='CRM' onChange={handleChangeCRM}/>
                </label>
                <label>Nome:<br/>
                <input type="text" placeholder="Nome" onChange={handleChangeNome}/>
                </label>
                <label>Especialização:<br/>
                <input type="text" placeholder="Especialização" onChange={handleChangeEsp}/>
                </label>
                <label>Email:<br/>
                <input type="email" placeholder="Email" onChange={handleChangeEmail}/>
                </label>
                <button className="submit">Enviar</button>
                <ToastContainer position="bottom-center" autoClose={2500} pauseOnHover={false}/>
            </form>
    )
}

export default AddEditDoctor;