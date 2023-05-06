import { createContext, useState, useEffect } from 'react'

export const PatientsContext = createContext()

export const PatientsProvider = ({ children }) => {
  const [patients, setPatients] = useState([])
  const [patient, setPatient] = useState({})

  // UseEFfect que se va a encargar de cargar la informacion que haya en el LC
  useEffect(() => {
    const getLS = () => {
      // Si no hay nada en el LS entonces le agregamos un arreglo vacio para evitar que salga el NULL
      const patientsLS = JSON.parse(localStorage.getItem('pacientes')) ?? []
      // console.log(patientsLS);
      setPatients(patientsLS)
    }

    getLS()
  }, [])

  // Funcion del local storage
  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(patients))
  }, [patients])

  const deletePatient = id => {
    const patientsUpdate = patients.filter(patientt => patientt.id !== id)

    setPatients(patientsUpdate)
  }
  return (
    <PatientsContext.Provider
      value={{
        patients,
        setPatients,
        patient,
        setPatient,
        deletePatient,
      }}
    >
      {children}
    </PatientsContext.Provider>
  )
}
