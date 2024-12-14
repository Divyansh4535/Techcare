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
        <div className='p-2 w-full h-full flex rounded-[12px] items-center justify-between flex-col gap-4'>
            <h1 className='text-[24px] text-[#072635] capitalize w-full text-left font-bold'>
                Diagnostic List
            </h1>
            <div className="w-full h-[90%] overflow-hidden flex items-center flex-col">
                <div className="w-full h-full overflow-y-auto text-[#072635]">
                    {/* Table structure */}
                    <table className="w-full table-auto border-collapse bg-[#F6F7F8]  ">
                        <thead className="bg-[#F6F7F8] h-[60px] text-sm font-semibold  text-left">
                            <tr className='rounded-full'>
                                <th className="px-4 rounded-l-full py-3">Problem/Diagnosis</th>
                                <th className="px-4 py-3">Description</th>
                                <th className="px-4 py-3 rounded-r-full">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 text-[14px] font-normal bg-white">
                            {diagnosticList?.map((data, idx) => (
                                <tr
                                    key={idx}
                                    className="transition duration-200 hover:bg-[#E8F0FE] hover:shadow"
                                >
                                    <td className="px-4 py-3">{data.name}</td>
                                    <td className="px-4 py-3">{data.description}</td>
                                    <td className="px-4 py-3">{data.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default DiagnosticList