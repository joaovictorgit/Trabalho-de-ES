import React from "react";
import {AiFillDelete} from '@react-icons/all-files/ai/AiFillDelete'
import './DeleteButton.css'

const DeleteButton = ({deleteFunction, id}) => {
    return (
        <button className="DeleteButton" onClick={() => deleteFunction(id)}>
            <span><AiFillDelete/></span>
            <span>Deletar</span>
        </button>
    )
}

export default DeleteButton;