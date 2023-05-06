import Header from './components/Header'
import Form from './components/Form'
import PatientsList from './components/PatientsList'
import { usePatients } from './hook/usePatients'

function App() {
  const { patients, setPatient, deletePatient } = usePatients()

  return (
    <div className='container h-screen mx-auto mt-20'>
      <Header />
      <div className='mt-12 md:flex'>
        <Form />
        <PatientsList />
      </div>
    </div>
  )
}

export default App
