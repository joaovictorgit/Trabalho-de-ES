import { collection, getDocs, setDoc ,addDoc, doc, deleteDoc, where, merge} from "firebase/firestore";
//import { merge } from "react-big-calendar/lib/utils/dates";
import { db } from "../config/firebase-config";

const getSchedule = async(setData) => {
    const qs = await getDocs(collection(db, "Agendamentos"));
    let datas = [];
    qs.forEach((doc) => {
        //console.log(doc.data().start.toDate());
        datas.push({
            id: doc.id,
            /*crm: doc.data().crm,
            nomeMedico: doc.data().nomeMedico,
            nomePaciente: doc.data().nomePaciente,
            cpf: doc.data().cpf,*/
            title: `${doc.data().crm}: ${doc.data().nomeMedico} \n ${doc.data().cpf}: ${doc.data().nomePaciente}`,
            start: doc.data().start.toDate(),
            end: doc.data().end.toDate()
        });
    });
    setData(datas);
}

const addSchedule = async(object) => {
    await addDoc(collection(db, "Agendamentos"), object);
}

const editSchedule = async(object) => {
    await setDoc(doc(db, "Agendamentos", object.id), {start: object.start, end: object.end}, {merge: true});
}

const deleteSchedule = async(id) => {
    await deleteDoc(doc(db, "Agendamentos", id));
}

export {addSchedule, getSchedule, editSchedule, deleteSchedule};