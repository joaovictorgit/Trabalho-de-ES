import React from "react";
import AddButton from '../Buttons/AddButton/AddButton';
import SearchBox from "../SearchBox/SearchBox";
import './Actions.css'

const Actions = ({callback}) => {
    return (
        <div className="Actions">
            <AddButton callback = {callback}/>
            <SearchBox/>
        </div>
    )
}

export default Actions;