import {useState, useEffect} from 'react';

import {db} from "../config/firebase-config";


const PacientController = () => {
    const [pacient, setPacient] = useState([]);

    const getPacient = async () => {
        db.collection("Pacientes").onSnapshot((querySnapshot) => {
            const docs = [];
            querySnapshot.forEach((doc) => {
              docs.push({ ...doc.data(), id: doc.id });
            });
            setPacient(docs);
        });
    };
    

    useEffect(() => {
        getPacient();
    }, []);

    return (
        <div>
            {pacient.map((p) =>(
               <div>
                   <h4>{p.id}</h4>
                </div>
            ))}
        </div>
    );
};

export default PacientController;