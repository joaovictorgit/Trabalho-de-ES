import React, { useState } from "react";
import {IoMdClose} from '@react-icons/all-files/io/IoMdClose'
import './Modal.css'

const Modal = ({children, onClose}) => {
    const [modalClassName, setModalClassName] = useState('Modal')
    const [containerClassName, setContainerClassName] = useState('Container');

    const handleOutsideClick = (e) => {
        if(e.target.className === 'Modal'){ 
            activeAnimationToClose();
        };
    };

    const activeAnimationToClose = () => {
        setContainerClassName('ContainerClose');
        setModalClassName('ModalClose')
        setTimeout(onClose, 490)
    }

    return (
        <div className={modalClassName} onClick={handleOutsideClick}>
            <div className={containerClassName}>
                <button className="Close" onClick={activeAnimationToClose}>
                    <span><IoMdClose/></span>
                </button>
                <div className="Content">{children}</div>
            </div>
        </div>
    )
}

export default Modal;