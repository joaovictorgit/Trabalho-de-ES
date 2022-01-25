import React from "react";
import {IoIosAdd} from '@react-icons/all-files/io/IoIosAdd'
import './AddButton.css'

const AddButton = ({callback}) => {
    return (
        <button className="AddButton" onClick={() => callback}>
            <span><IoIosAdd/></span>
            <span>Adicionar</span>
        </button>
    )
}

export default AddButton;