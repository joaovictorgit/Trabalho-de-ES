import React, { useState } from "react";
import {IoIosAdd} from '@react-icons/all-files/io/IoIosAdd'
import './AddButton.css'

const AddButton = ({activeModal}) => {
    return (
        <button className="AddButton" onClick={() => activeModal(true)}>
            <span><IoIosAdd/></span>
            <span>Adicionar</span>
        </button>
    )
}

export default AddButton;