import React, { useContext, useEffect } from 'react'
import UserContext from '../context/context'
import { useState } from 'react'

const DiagnosticList = () => {
    const { patientDetails, patientData } = useContext(UserContext)

    const [diagnosticList, setDiagnosticList] = useState(
        (patientData.length > 0 && patientData[3].diagnostic_list) || []
    )

    useEffect(() => {
        if (patientData.length > 1) {
            setDiagnosticList(patientDetails?.diagnostic_list || patientData[3].diagnostic_list)
        } else {
            setDiagnosticList([]);
        }
    }, [patientDetails, patientData])

    return (
        <div className='p-2 w-full h-full flex rounded-[12px] items-center justify-between flex-col gap-4 '>
            <h1 className='text-[24px] text-[#072635] capitalize  w-full text-left font-bold '>Diagnostic List </h1>
            <div className="w-full  h-[90%]  overflow-hidden flex items-center flex-col   ">
                <div className="bg-[#F6F7F8]  h-[15%] flex  justify-between items-center  w-full text-[#072635] text-sm font-semibold  rounded-full  px-5 ">
                    <span className="  ">Problem/Diagnosis</span>
                    <span className=" text-left  pr-32 ">Description</span>
                    <span className=" text-left pr-20 ">Status</span>
                </div>

                <div className="text-[14px] max-h-[90%]   scrollbar overflow-y-auto w-full text-[#072635] font-normal  divide-gray-200 ">
                    {diagnosticList?.map((data, idx) => (
                        <tr className=" transition duration-200 w-[30%] h-[50px]" key={idx}>
                            <td className="px-4 py-3">{data.name}  </td>
                            <td className="px-4 py-3">{data.description}</td>
                            <td className="px-4 py-3">{data.status}</td>
                        </tr>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default DiagnosticList