import React from 'react'

const DiagnosticList = () => {

    return (
        <div className='p-2 w-full h-full flex rounded-[12px] items-center justify-between flex-col gap-5 '>
            <h1 className='text-[24px] text-[#072635] capitalize  w-full text-left font-bold '>Diagnostic List </h1>
            <table className="w-full  h-[300px] overflow-hidden">
                <thead className="bg-[#F6F7F8] text-[#072635] text-sm font-semibold">
                    <tr>
                        <th className="rounded-l-full px-4 py-3 text-left w-[30%]">Problem/Diagnosis</th>
                        <th className="px-4 py-3 text-left">Description</th>
                        <th className="rounded-r-full px-4 py-3 text-left w-[20%]">Status</th>
                    </tr>
                </thead>
                <tbody className="text-[14px] h-full w-full text-[#072635] font-normal bg-white divide-y divide-gray-200 overflow-y-auto">
                    <tr className=" transition duration-200 w-[30%]">
                        <td className="px-4 py-3">Hypertension</td>
                        <td className="px-4 py-3">Chronic high blood pressure</td>
                        <td className="px-4 py-3">Under Observation</td>
                    </tr>
                    <tr className=" transition duration-200">
                        <td className="px-4 py-3">Diabetes</td>
                        <td className="px-4 py-3">High blood sugar levels</td>
                        <td className="px-4 py-3">Controlled</td>
                    </tr>
                    <tr className=" transition duration-200 w-[20%]">
                        <td className="px-4 py-3">Asthma</td>
                        <td className="px-4 py-3">Chronic respiratory condition</td>
                        <td className="px-4 py-3">Under Treatment</td>
                    </tr>
                </tbody>
            </table>




        </div>
    )
}

export default DiagnosticList