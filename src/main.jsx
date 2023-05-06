import React from 'react'
import ReactDOM from 'react-dom/client'
import { PatientsProvider } from './context/PatientsProvider'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <PatientsProvider>
    <App />
  </PatientsProvider>
)
