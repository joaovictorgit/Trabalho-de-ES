import React from "react";
import {AiFillDelete} from '@react-icons/all-files/ai/AiFillDelete'
import './DeleteButton.css'

const DeleteButton = () => {
    return (
        <button className="DeleteButton">
            <span><AiFillDelete/></span>
            <span>Deletar</span>
        </button>
    )
}

export default DeleteButton;