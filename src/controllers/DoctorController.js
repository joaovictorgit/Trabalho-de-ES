import { collection, getDocs, doc, deleteDoc} from "firebase/firestore";
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

    /*const deleteDoctors = async(id) => {
        await deleteDoc(doc(db, "Medicos", id));
        /*if (window.confirm("are you sure you want to delete this link?")) {
            await db.collection("Paciente").doc(id).delete();
        }
    }*/

    export default getDoctors;
    