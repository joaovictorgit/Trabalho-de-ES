import React from "react";
import AddButton from '../Buttons/AddButton/AddButton';
import SearchBox from "../SearchBox/SearchBox";
import './Actions.css'

const Actions = ({activeModal, searchFunction, setData}) => {
    return (
        <div className="Actions">
            <AddButton activeModal={activeModal}/>
            {<SearchBox searchFunction={searchFunction} setData={setData}/>}
            {() => searchFunction(setData, '44444')}
        </div>
    )
}

export default Actions;