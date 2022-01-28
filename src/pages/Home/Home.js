import React from "react";
import Header from "../../components/Header/Header";
import {BsHouseFill} from '@react-icons/all-files/bs/BsHouseFill'
import './Home.css'
import Frame from "../../components/Frame/Frame";


const Home = () => {
    return(
        <div className="Home">
            <Header icon={<BsHouseFill/>} title={'Início'}/>
            <Frame/>
        </div>
    )
}

export default Home;