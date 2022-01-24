import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import Home from '../pages/Home/Home'
import Scheduling from "../pages/Scheduling/Scheduling";
import Doctor from '../pages/Doctor/Doctor';
import Patient from "../pages/Patient/Patient";
import Insurance from '../pages/Insurance/Insurance'


const Routers = () => {
    return(
        <BrowserRouter>
            <Sidebar/>
            <Routes>
                <Route exact path = '/' element = {<Home/>}/>
                <Route path = '/scheduling' element = {<Scheduling/>}/>
                <Route path = '/doctor' element = {<Doctor/>}/>
                <Route path = '/patient' element = {<Patient/>}/>
                <Route path = '/insurance' element = {<Insurance/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Routers;