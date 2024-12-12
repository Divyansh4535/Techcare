import React, { useState } from 'react'
import UserContext from './context'

const ContextProvider = ({ children }) => {
    const [patientData, setPatientData] = useState([])
    const [patientDetails, setPatientDetails] = useState(patientData[0])
    return (
        <UserContext.Provider value={{ patientData, setPatientData,patientDetails, setPatientDetails }}>{children}</UserContext.Provider>
    )
}

export default ContextProvider