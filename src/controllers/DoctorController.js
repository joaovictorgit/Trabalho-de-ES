import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase-config";


const getDoctors = async() => {
    const qs = await getDocs(collection(db, 'Medicos'));
    let datas = [];
    qs.forEach((doc) => {
        // console.log(`${doc.id} => ${doc.data().nome} => ${doc.data().especializacao}`);
        datas.push(doc.data());
    });
    return datas;
}

export default getDoctors;