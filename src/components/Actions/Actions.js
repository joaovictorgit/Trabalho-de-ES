import React from "react";
import AddButton from '../Buttons/AddButton/AddButton';
import SearchBox from "../SearchBox/SearchBox";
import './Actions.css'

const Actions = ({activeModal}) => {
    return (
        <div className="Actions">
            <AddButton activeModal={activeModal}/>
            <SearchBox/>
        </div>
    )
}

export default Actions;