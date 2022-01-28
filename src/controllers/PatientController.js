import {useState, useEffect} from 'react';
import { collection, getDoc,getDocs, addDoc, doc, deleteDoc, where, query} from "firebase/firestore";
import {db} from "../config/firebase-config";


const getPatients = async(setData) => {
    const qs = await getDocs(/*query(*/collection(db, 'Pacientes')/*, where('crm', '==', '44444'))*/);
    let datas = [];
    qs.forEach((doc) => {
        datas.push({
            id: doc.id,
            cpf: doc.data().cpf,
            nome: doc.data().nome,
            telefone: doc.data().telefone,
            convenio: doc.data().convenio,
            informacoes: doc.data().informacoes
        });
    });
    setData(datas);
}



const deletePatient = async(id) => {
    await deleteDoc(doc(db, "Pacientes", id));
}

const addPatient = async(object) => {
    await addDoc(collection(db, "Pacientes"), object);
}

const elementById = async({id, setData}) => {
    /*const q = await getDoc(doc(db, "Medicos", id));
    setData(q.data());
    console.log(q.data());*/
    console.log((await getDoc(doc(db, "Pacientes", id))).data());
}

export {getPatients, elementById, addPatient, deletePatient};