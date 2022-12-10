// import Button from './Button';

const Patient = ({ patient, setPatient, deletePatient }) => {
  const { petName, ownerName, ownerEmail, petRelease, petSymptons, id } =
    patient;

  const handleDelete = () => {
    const response = confirm('Do you really want delete this patient?');

    if (response) {
      deletePatient(id);
    }
  };

  return (
    <div className="bg-white mx-5 my-5 py-3 px-5 rounded-xl shadow-xl">
      <p className="mb-3 uppercase text-gray-700 font-bold">
        Name: <span className="normal-case font-normal">{petName}</span>
      </p>

      <p className="mb-3 uppercase text-gray-700 font-bold">
        Owner Name: <span className="normal-case font-normal">{ownerName}</span>
      </p>

      <p className="mb-3 uppercase text-gray-700 font-bold">
        Email: <span className="normal-case font-normal">{ownerEmail}</span>
      </p>

      <p className="mb-3 uppercase text-gray-700 font-bold">
        Date : <span className="normal-case font-normal">{petRelease}</span>
      </p>

      <p className="mb-3 uppercase text-gray-700 font-bold">
        Pet symptons:{' '}
        <span className="normal-case font-normal">{petSymptons}</span>
      </p>

      <div className="flex justify-between mt-5 ">
        <button
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-md uppercase"
          onClick={() => setPatient(patient)}
        >
          Editar
        </button>
        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold rounded-md uppercase"
          onClick={handleDelete}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Patient;
