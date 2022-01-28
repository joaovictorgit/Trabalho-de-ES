import { collection, getDoc ,getDocs, setDoc,addDoc, doc, deleteDoc, where, query, FieldPath} from "firebase/firestore";
import { db } from "../config/firebase-config";

    const getDoctors = async(setData) => {
        const qs = await getDocs(/*query(*/collection(db, 'Medicos')/*, where('crm', '==', '44444'))*/);
        let datas = [];
        qs.forEach((doc) => {
            datas.push({
                id: doc.id,
                crm: doc.data().crm,
                nome: doc.data().nome,
                email: doc.data().email,
                especializacao: doc.data().especializacao
            });
        });
        setData(datas);
    }

    const deleteDoctor = async(id) => {
        await deleteDoc(doc(db, "Medicos", id));
    }

    const addDoctor = async(object) => {
        await addDoc(collection(db, "Medicos"), object);
    }

    const elementById = async({id, setData}) => {
        /*const q = await getDoc(doc(db, "Medicos", id));
        setData(q.data());
        console.log(q.data());*/
        console.log((await getDoc(doc(db, "Medicos", id))).data());
    }

    const editDoctor = async(object) => {
       /* 
        let data = []
        qs.forEach((doc) => {
            data.push({
                crm : doc.data().crm,
                nome: doc.data().nome
            });
        })*/
        /*await setDoc(doc(db, "Medicos", object.id), {
            crm: object.crm,
            nome: object.nome,
            email: object.email,
            especializacao: object.especializacao}, {merge: true});*/
    }

    const searchDoctor = async({setData, value}) => {
        const qs = await getDocs(query(collection(db, 'Medicos'), where('crm', '==', value)));
        let datas = [];
        qs.forEach((doc) => {
            datas.push({
                crm: doc.data().crm,
                nome: doc.data().nome,
                email: doc.data().email,
                especializacao: doc.data().especializacao
            });
        });
        setData(datas);
    }

    /*const search = async(value) => {
        let data = [];
        const q = query(collection(db, "Medicos"), where("crm", "==", value));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
            //console.log(doc.crm, " => ", doc.data());
            data.push({
                crm: doc.data().crm,
                nome: doc.data().nome,
                email: doc.data().email,
                especializacao: doc.data().especializacao
            });
        });
        console.log(data);
    }*/

export {getDoctors, deleteDoctor, addDoctor, searchDoctor, editDoctor, elementById};
    