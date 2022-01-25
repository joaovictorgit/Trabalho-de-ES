import React from "react";
import {AiFillDelete} from '@react-icons/all-files/ai/AiFillDelete'
import './DeleteButton.css'

const DeleteButton = ({onClick = null}) => {
    return (
        <button className="DeleteButton" onClick={onClick}>
            <span><AiFillDelete/></span>
            <span>Deletar</span>
        </button>
    )
}

export default DeleteButton;