import React from "react";
import AddButton from '../Buttons/AddButton/AddButton';
import SearchBox from "../SearchBox/SearchBox";
import './Actions.css'

const Actions = () => {
    return (
        <div className="Actions">
            <AddButton/>
            <SearchBox/>
        </div>
    )
}

export default Actions;