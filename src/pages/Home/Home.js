import React from "react";
import Header from "../../components/Header/Header";
import {BsHouseFill} from '@react-icons/all-files/bs/BsHouseFill'
import './Home.css'


const Home = () => {
    return(
        <div className="Home">
            <Header icon={<BsHouseFill/>} title={'Início'}/>
        </div>
    )
}

export default Home;