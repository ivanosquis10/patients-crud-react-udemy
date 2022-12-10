import Patient from './Patient';

const PatientsList = ({ patients, setPatient, deletePatient }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen">
      {patients && patients.length ? (
        <>
          <h2 className="font-black text-3xl text-bold text-center">
            List of patients
          </h2>

          <p className="text-center text-lg mt-3 font-bold mb-4">
            Manage your {''}
            <span className="text-indigo-600">Patients and Appointments</span>
          </p>

          {patients.map((patient) => (
            <Patient
              key={patient.id}
              patient={patient}
              setPatient={setPatient}
              deletePatient={deletePatient}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-bold text-center">
            No patients
          </h2>

          <p className="text-center text-lg mt-3 font-bold mb-4">
            Start adding patients {''}
            <span className="text-indigo-600">and will appear here</span>
          </p>
        </>
      )}
    </div>
  );
};

export default PatientsList;
