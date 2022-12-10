import { useState, useEffect } from 'react';
import ErrorAlert from './ErrorAlert';

const Form = ({ patients, setPatients, patient, setPatient }) => {
  const [petName, setPetName] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [ownerEmail, setOwnerEmail] = useState('');
  const [petRelease, setPetRelease] = useState('');
  const [petSymptons, setPetSymptons] = useState('');

  const [error, setError] = useState(false);

  useEffect(() => {
    // Comprobar si el objeto esta vacio
    if (Object.keys(patient).length > 0) {
      // Pasar la informacion del editar al formulario
      setPetName(patient.petName);
      setOwnerName(patient.ownerName);
      setOwnerEmail(patient.ownerEmail);
      setPetRelease(patient.petRelease);
      setPetSymptons(patient.petSymptons);
    }
  }, [patient]);

  const generateId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);
    return random + fecha;
  };

  // La funcion que maneja el formulario de los pacientes
  const handleSubmit = (e) => {
    e.preventDefault();

    // validacion del formulario
    if (
      [petName, ownerName, ownerEmail, petRelease, petSymptons].includes('')
    ) {
      setError(true);
      return;
    }

    setError(false);

    // Objeto paciente
    const objectPatients = {
      petName,
      ownerName,
      ownerEmail,
      petRelease,
      petSymptons,
    };

    if (patient.id) {
      // Editando el registro
      objectPatients.id = patient.id;

      // nuevo arreglo con los pacientes actualizados
      const updatePatients = patients.map((patientState) =>
        patientState.id === patient.id ? objectPatients : patientState
      );

      setPatients(updatePatients);
      setPatient({});
    } else {
      // nUevo registro
      // console.log('NUevo registro');
      objectPatients.id = generateId();
      setPatients([...patients, objectPatients]);
    }

    // Reiniciar form
    setPetName('');
    setOwnerName('');
    setOwnerEmail('');
    setPetRelease('');
    setPetSymptons('');
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-bold text-center">
        Follow-up of patients
      </h2>

      <p className="text-center text-lg mt-3 font-bold mb-4">
        Adds patients {''} and{' '}
        <span className="text-indigo-600"> Manages them</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white drop-shadow-lg rounded-lg py-10 px-5 mb-10"
      >
        {error && <ErrorAlert msg={'Todos los campos son obligatorios'} />}
        <div className="mb-8">
          <label
            className="block uppercase text-gray-700 font-bold"
            htmlFor="pets"
          >
            Pet's name
          </label>
          <input
            id="pets"
            type="text"
            className="w-full mt-2 border-2 border-indigo-400 outline-0 rounded-md p-2 placeholder-gray-400"
            placeholder="Pet's name"
            value={petName}
            onChange={(e) => setPetName(e.target.value)}
          />
        </div>

        <div className="mb-8">
          <label
            className="block uppercase text-gray-700 font-bold"
            htmlFor="owner"
          >
            Owner's name
          </label>
          <input
            id="owner"
            type="text"
            className="w-full mt-2 border-2 border-indigo-400 outline-0 rounded-md p-2 placeholder-gray-400"
            placeholder="Owner's name"
            value={ownerName}
            onChange={(e) => setOwnerName(e.target.value)}
          />
        </div>

        <div className="mb-8">
          <label
            className="block uppercase text-gray-700 font-bold"
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full mt-2 border-2 border-indigo-400 outline-0 rounded-md p-2 placeholder-gray-400"
            placeholder="Email"
            value={ownerEmail}
            onChange={(e) => setOwnerEmail(e.target.value)}
          />
        </div>

        <div className="mb-8">
          <label
            className="block uppercase text-gray-700 font-bold"
            htmlFor="release"
          >
            Date of release
          </label>
          <input
            id="release"
            type="date"
            className="w-full mt-2 border-2 border-indigo-400 outline-0 rounded-md p-2 placeholder-gray-400"
            placeholder="Date of release"
            value={petRelease}
            onChange={(e) => setPetRelease(e.target.value)}
          />
        </div>

        <div className="mb-8">
          <label
            className="block uppercase text-gray-700 font-bold"
            htmlFor="symptoms"
          >
            Pet's symptoms
          </label>

          <textarea
            id="symptoms"
            placeholder="Pet's Symptoms"
            className="w-full mt-2 border-2 border-indigo-400 outline-0 rounded-md p-2 placeholder-gray-400"
            value={petSymptons}
            onChange={(e) => setPetSymptons(e.target.value)}
          />
        </div>

        <input
          type="submit"
          className="w-full text-center font-bold bg-indigo-600 text-white uppercase p-3 rounded-md hover:bg-indigo-800 cursor-pointer transition-all"
          value={patient.id ? 'Edit patient' : 'Add patient'}
        />
      </form>
    </div>
  );
};

export default Form;
