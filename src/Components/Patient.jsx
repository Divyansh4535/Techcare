import React, { useContext } from 'react'
import UserContext from '../context/context'

const Patient = () => {
    const { patientData, setPatientDetails ,patientDetails } = useContext(UserContext)
    // console.log('patientDetails:=========>', patientData[0])
    return (
        <div className=' w-full  rounded-[15px] flex flex-col items-center h-full justify-between p-2 '>
            <div className='w-full h-10 flex items-center justify-between p-2'>
                <h1 className='text-[24px] text-[#072635] capitalize font-bold '>
                    patient
                </h1>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="17.995" height="18" viewBox="0 0 17.995 18">
                        <path id="search_FILL0_wght300_GRAD0_opsz24" d="M142.675-811.574a6.293,6.293,0,0,1-4.626-1.895,6.293,6.293,0,0,1-1.895-4.626,6.293,6.293,0,0,1,1.895-4.626,6.293,6.293,0,0,1,4.626-1.895,6.293,6.293,0,0,1,4.626,1.895,6.293,6.293,0,0,1,1.895,4.626,6.254,6.254,0,0,1-.383,2.182,6.1,6.1,0,0,1-1.023,1.808l6.135,6.135a.773.773,0,0,1,.227.557.754.754,0,0,1-.227.567.765.765,0,0,1-.562.232.765.765,0,0,1-.562-.232l-6.135-6.135a6.1,6.1,0,0,1-1.839,1.033,6.318,6.318,0,0,1-2.151.373Zm0-1.6a4.749,4.749,0,0,0,3.491-1.43,4.749,4.749,0,0,0,1.43-3.491,4.749,4.749,0,0,0-1.43-3.491,4.749,4.749,0,0,0-3.491-1.43,4.749,4.749,0,0,0-3.491,1.43,4.749,4.749,0,0,0-1.43,3.491,4.749,4.749,0,0,0,1.43,3.491A4.749,4.749,0,0,0,142.675-813.173Z" transform="translate(-136.155 824.614)" fill="#072635" />
                    </svg>

                </span>
            </div>
            <div className='w-full h-full overflow-y-auto flex flex-col items-center justify-start gap-3 pt-4 '>

                {
                    patientData?.map((data, idx) => (
                        <div className='h-[55px] w-[100%] flex items-center  gap-2 px-3 justify-between hover:bg-[#D8FCF7] cursor-pointer py-4 ' key={idx}
                            onClick={() => setPatientDetails(data)}
                        >
                            <div className='flex items-center gap-1'>
                                <img src={data.profile_picture} alt={data.name} className='size-12' />
                                <div className='flex items-start  justify-start leading-1 flex-col px-3'>
                                    <p className='text-[14px] font-bold '>{data.name}</p>
                                    <p className='text-[#707070] text-[14px] font-normal'> {data.gender} ,{data.age}  </p>
                                </div>
                            </div>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="3.714" viewBox="0 0 18 3.714">
                                    <path id="more_horiz_FILL0_wght300_GRAD0_opsz24" d="M191.09-536.285a1.788,1.788,0,0,1-1.312-.546,1.788,1.788,0,0,1-.546-1.312,1.788,1.788,0,0,1,.546-1.312A1.788,1.788,0,0,1,191.09-540a1.788,1.788,0,0,1,1.312.546,1.788,1.788,0,0,1,.546,1.312,1.788,1.788,0,0,1-.546,1.312A1.788,1.788,0,0,1,191.09-536.285Zm7.143,0a1.788,1.788,0,0,1-1.312-.546,1.788,1.788,0,0,1-.546-1.312,1.788,1.788,0,0,1,.546-1.312,1.788,1.788,0,0,1,1.312-.546,1.788,1.788,0,0,1,1.312.546,1.788,1.788,0,0,1,.546,1.312,1.788,1.788,0,0,1-.546,1.312A1.788,1.788,0,0,1,198.233-536.285Zm7.143,0a1.788,1.788,0,0,1-1.312-.546,1.788,1.788,0,0,1-.546-1.312,1.788,1.788,0,0,1,.546-1.312,1.788,1.788,0,0,1,1.312-.546,1.788,1.788,0,0,1,1.312.546,1.788,1.788,0,0,1,.546,1.312,1.788,1.788,0,0,1-.546,1.312,1.788,1.788,0,0,1-1.312.546Z" transform="translate(-189.233 539.999)" fill="#072635" />
                                </svg>
                            </span>
                        </div>

                    ))
                }

            </div>
        </div>
    )
}

export default Patient