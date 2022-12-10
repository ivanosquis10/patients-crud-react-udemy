import { useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import PatientsList from './components/PatientsList';

function App() {
  const [patients, setPatients] = useState([]);
  const [patient, setPatient] = useState({});

  // UseEFfect que se va a encargar de cargar la informacion que haya en el LC
  useEffect(() => {
    const getLS = () => {
      // Si no hay nada en el LS entonces le agregamos un arreglo vacio para evitar que salga el NULL
      const patientsLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
      // console.log(patientsLS);
      setPatients(patientsLS);
    };

    getLS();
  }, []);

  // Funcion del local storage
  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(patients));
  }, [patients]);

  const deletePatient = (id) => {
    const patientsUpdate = patients.filter((patientt) => patientt.id !== id);

    setPatients(patientsUpdate);
  };

  return (
    <div className="container h-screen mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Form
          patients={patients}
          setPatients={setPatients}
          patient={patient}
          setPatient={setPatient}
        />
        <PatientsList
          patients={patients}
          setPatient={setPatient}
          deletePatient={deletePatient}
        />
      </div>
    </div>
  );
}

export default App;
