import React from "react";
import {BiSearchAlt} from '@react-icons/all-files/bi/BiSearchAlt';
import './SearchBox.css'

const SearchBox = () => {
    return (
        <div className="SearchBox">
            <input type='text' placeholder="Buscar"/>
            <button><BiSearchAlt/></button>
        </div>
    )
}

export default SearchBox;