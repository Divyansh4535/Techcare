import React, { useContext, useEffect, useState } from 'react'
import Navbar from './Components/Navbar'
import Patient from './Components/Patient'
import DiagnosisHistory from './Components/DiagnosisHistory'
import DiagnosticList from './Components/DiagnosticList'
import Profile from './Components/Profile'
import LabResults from './Components/LabResults'
import UserContext from './context/context'

const App = () => {
    const {patientData, setPatientData} = useContext(UserContext)

  const getData = async () => {
    try {
      const username = "coalition";
      const password = "skills-test";
      // Encode the credentials in Base64
      const encodedCredentials = btoa(`${username}:${password}`);

      const response = await fetch("https://fedskillstest.coalitiontechnologies.workers.dev", {
        method: "GET",
        headers: {
          'Authorization': `Basic ${encodedCredentials}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();

      setPatientData(data);
    } catch (error) {
      console.error("Error fetching patient data:", error);
    }
  }
  // console.log('patientData :', patientData);

  useEffect(() => {
    getData()
  }, [])


  return (
    <div className='gap-5 flex items-center justify-center flex-col bg-[#F6F7F8] w-screen p-2'>
      <Navbar />
      <div className='px-2 flex items-center justify-between w-[97%] gap-5 h-[90%] '>
        <aside className='bg-[#FFFFFF] w-[300px]  rounded-[15px] flex flex-col items-center justify-between h-[1050px] p-2 '>
          <Patient />
        </aside>

        <main className='w-[calc(100%-660px)] rounded-[15px]  h-full flex items-center gap-5 flex-col  justify-between'>
          <div className='bg-[#FFFFFF] w-full h-[650px] rounded-[15px] p-2 '>
            <DiagnosisHistory />
          </div>
          <div className='bg-[#FFFFFF] w-full h-[350px] rounded-[15px] p-2 '>
            <DiagnosticList />
          </div>
        </main>
        <aside className=' w-[350px] h-full  flex flex-col items-center justify-between p-2 gap-5 '>
          <Profile />
          <LabResults />

        </aside>
      </div>
    </div>
  )
}

export default App