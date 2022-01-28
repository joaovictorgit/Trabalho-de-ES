import React, { useState } from "react";
import {BiSearchAlt} from '@react-icons/all-files/bi/BiSearchAlt';
import './SearchBox.css'

const SearchBox = ({searchFunction, setData}) => {
    const [searchValue, setSearchValue] = useState("");

    const handleChange = e => {
        setSearchValue(e.target.value);
    }
    
    return (
        <div className="SearchBox">
            <input type='text' placeholder="Buscar" onChange={handleChange}/>
            <button><BiSearchAlt/></button>
            
        </div>
    )
}

export default SearchBox;