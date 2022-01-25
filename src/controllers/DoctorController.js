import { collection, getDocs, setDoc, doc, deleteDoc} from "firebase/firestore";
import { db } from "../config/firebase-config";

    const getDoctors = async(setData) => {
        const qs = await getDocs(collection(db, 'Medicos'));
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

    const deleteDoctor = async(id) => {
        await deleteDoc(doc(db, "Medicos", id));
    }

    const addDoctor = async(object) => {
        await setDoc(doc(db, "Medicos", object.crm), object);
    }

export {getDoctors, deleteDoctor, addDoctor};
    