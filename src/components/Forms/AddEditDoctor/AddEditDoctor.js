import React, { useState } from "react";
import './AddEditDoctor.css'


const AddEditDoctor = ({addDoctor}) => {
    const [formDoctor, setFormDoctor] = useState({crm: '', nome: '', especializacao: '', email: ''});

    const handleChange = (e) => {
        let aux = formDoctor;
        aux.crm = e.target.value;
        setFormDoctor(aux);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addDoctor(formDoctor);
    }

    return(
        <div className="AddEditDoctor">
            <form onSubmit = {handleSubmit}>
                <label>CRM:</label>
                <input type="text" pattern="[0-9]{5}" onChange={handleChange}/>
                <label>Nome:</label>
                <input type="text" placeholder="Nome"/>
                <label>Especialização:</label>
                <input type="text" placeholder="Especialização"/>
                <label>Email:</label>
                <input type="email" placeholder="Email"/><br/>
                <button>Enviar</button>
            </form>
        </div>
    )
}

export default AddEditDoctor;