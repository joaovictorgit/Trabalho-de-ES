import {useState, useEffect} from 'react';
import { collection, getDoc,getDocs, addDoc, doc, deleteDoc, where, query} from "firebase/firestore";
import {db} from "../config/firebase-config";


const getInsurance = async(setData) => {
    const qs = await getDocs(/*query(*/collection(db, 'Convenios')/*, where('crm', '==', '44444'))*/);
    let datas = [];
    qs.forEach((doc) => {
        datas.push({
            id: doc.id,
            nome: doc.data().nome,
            porcentagem: doc.data().porcentagem,
            periodo: doc.data().periodo
        });
    });
    setData(datas);
}



const deleteInsurance = async(id) => {
    await deleteDoc(doc(db, "Convenios", id));
}

const addInsurance = async(object) => {
    await addDoc(collection(db, "Convenios"), object);
}

const elementById = async({id, setData}) => {
    /*const q = await getDoc(doc(db, "Medicos", id));
    setData(q.data());
    console.log(q.data());*/
    console.log((await getDoc(doc(db, "Convenios", id))).data());
}

export {getInsurance, elementById, addInsurance, deleteInsurance};