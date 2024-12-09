import React from 'react'
import Navbar from './Components/Navbar'

const App = () => {
  return (
    <div className='gap-5 flex items-center justify-center flex-col bg-[#F6F7F8] w-screen p-2'>
      <Navbar />
      <div className='px-2 flex items-center justify-between w-full gap-5 h-[90%] '>
        <aside className='bg-[#FFFFFF] w-[300px] h-full rounded-[15px] flex flex-col items-center justify-between p-2 '>
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
          <div className='w-full h-full overflow-y-auto flex flex-col items-center justify-start gap-3 pt-5 '>

            <div className='h-[48px] w-[100%] flex items-center  gap-2 px-3 justify-between '>
              <div className='flex items-center gap-1'>
                <img src="/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc.png" alt="profile" />
                <div className='flex items-start  justify-start leading-1 flex-col px-3'>
                  <p className='text-[14px] font-bold '>Emily Williams</p>
                  <p className='text-[#707070] text-[14px] font-normal'> Female, 18 </p>
                </div>
              </div>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="3.714" viewBox="0 0 18 3.714">
                  <path id="more_horiz_FILL0_wght300_GRAD0_opsz24" d="M191.09-536.285a1.788,1.788,0,0,1-1.312-.546,1.788,1.788,0,0,1-.546-1.312,1.788,1.788,0,0,1,.546-1.312A1.788,1.788,0,0,1,191.09-540a1.788,1.788,0,0,1,1.312.546,1.788,1.788,0,0,1,.546,1.312,1.788,1.788,0,0,1-.546,1.312A1.788,1.788,0,0,1,191.09-536.285Zm7.143,0a1.788,1.788,0,0,1-1.312-.546,1.788,1.788,0,0,1-.546-1.312,1.788,1.788,0,0,1,.546-1.312,1.788,1.788,0,0,1,1.312-.546,1.788,1.788,0,0,1,1.312.546,1.788,1.788,0,0,1,.546,1.312,1.788,1.788,0,0,1-.546,1.312A1.788,1.788,0,0,1,198.233-536.285Zm7.143,0a1.788,1.788,0,0,1-1.312-.546,1.788,1.788,0,0,1-.546-1.312,1.788,1.788,0,0,1,.546-1.312,1.788,1.788,0,0,1,1.312-.546,1.788,1.788,0,0,1,1.312.546,1.788,1.788,0,0,1,.546,1.312,1.788,1.788,0,0,1-.546,1.312,1.788,1.788,0,0,1-1.312.546Z" transform="translate(-189.233 539.999)" fill="#072635" />
                </svg>

              </span>

            </div>

            <div className='h-[48px] w-[100%] flex items-center  gap-2 px-3 justify-between '>
              <div className='flex items-center gap-1'>
                <img src="/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc.png" alt="profile" />
                <div className='flex items-start  justify-start leading-1 flex-col px-3'>
                  <p className='text-[14px] font-bold '>Emily Williams</p>
                  <p className='text-[#707070] text-[14px] font-normal'> Female, 18 </p>
                </div>
              </div>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="3.714" viewBox="0 0 18 3.714">
                  <path id="more_horiz_FILL0_wght300_GRAD0_opsz24" d="M191.09-536.285a1.788,1.788,0,0,1-1.312-.546,1.788,1.788,0,0,1-.546-1.312,1.788,1.788,0,0,1,.546-1.312A1.788,1.788,0,0,1,191.09-540a1.788,1.788,0,0,1,1.312.546,1.788,1.788,0,0,1,.546,1.312,1.788,1.788,0,0,1-.546,1.312A1.788,1.788,0,0,1,191.09-536.285Zm7.143,0a1.788,1.788,0,0,1-1.312-.546,1.788,1.788,0,0,1-.546-1.312,1.788,1.788,0,0,1,.546-1.312,1.788,1.788,0,0,1,1.312-.546,1.788,1.788,0,0,1,1.312.546,1.788,1.788,0,0,1,.546,1.312,1.788,1.788,0,0,1-.546,1.312A1.788,1.788,0,0,1,198.233-536.285Zm7.143,0a1.788,1.788,0,0,1-1.312-.546,1.788,1.788,0,0,1-.546-1.312,1.788,1.788,0,0,1,.546-1.312,1.788,1.788,0,0,1,1.312-.546,1.788,1.788,0,0,1,1.312.546,1.788,1.788,0,0,1,.546,1.312,1.788,1.788,0,0,1-.546,1.312,1.788,1.788,0,0,1-1.312.546Z" transform="translate(-189.233 539.999)" fill="#072635" />
                </svg>

              </span>

            </div>
            <div className='h-[48px] w-[100%] flex items-center  gap-2 px-3 justify-between '>
              <div className='flex items-center gap-1'>
                <img src="/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc.png" alt="profile" />
                <div className='flex items-start  justify-start leading-1 flex-col px-3'>
                  <p className='text-[14px] font-bold '>Emily Williams</p>
                  <p className='text-[#707070] text-[14px] font-normal'> Female, 18 </p>
                </div>
              </div>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="3.714" viewBox="0 0 18 3.714">
                  <path id="more_horiz_FILL0_wght300_GRAD0_opsz24" d="M191.09-536.285a1.788,1.788,0,0,1-1.312-.546,1.788,1.788,0,0,1-.546-1.312,1.788,1.788,0,0,1,.546-1.312A1.788,1.788,0,0,1,191.09-540a1.788,1.788,0,0,1,1.312.546,1.788,1.788,0,0,1,.546,1.312,1.788,1.788,0,0,1-.546,1.312A1.788,1.788,0,0,1,191.09-536.285Zm7.143,0a1.788,1.788,0,0,1-1.312-.546,1.788,1.788,0,0,1-.546-1.312,1.788,1.788,0,0,1,.546-1.312,1.788,1.788,0,0,1,1.312-.546,1.788,1.788,0,0,1,1.312.546,1.788,1.788,0,0,1,.546,1.312,1.788,1.788,0,0,1-.546,1.312A1.788,1.788,0,0,1,198.233-536.285Zm7.143,0a1.788,1.788,0,0,1-1.312-.546,1.788,1.788,0,0,1-.546-1.312,1.788,1.788,0,0,1,.546-1.312,1.788,1.788,0,0,1,1.312-.546,1.788,1.788,0,0,1,1.312.546,1.788,1.788,0,0,1,.546,1.312,1.788,1.788,0,0,1-.546,1.312,1.788,1.788,0,0,1-1.312.546Z" transform="translate(-189.233 539.999)" fill="#072635" />
                </svg>

              </span>

            </div>
            <div className='h-[48px] w-[100%] flex items-center  gap-2 px-3 justify-between '>
              <div className='flex items-center gap-1'>
                <img src="/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc.png" alt="profile" />
                <div className='flex items-start  justify-start leading-1 flex-col px-3'>
                  <p className='text-[14px] font-bold '>Emily Williams</p>
                  <p className='text-[#707070] text-[14px] font-normal'> Female, 18 </p>
                </div>
              </div>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="3.714" viewBox="0 0 18 3.714">
                  <path id="more_horiz_FILL0_wght300_GRAD0_opsz24" d="M191.09-536.285a1.788,1.788,0,0,1-1.312-.546,1.788,1.788,0,0,1-.546-1.312,1.788,1.788,0,0,1,.546-1.312A1.788,1.788,0,0,1,191.09-540a1.788,1.788,0,0,1,1.312.546,1.788,1.788,0,0,1,.546,1.312,1.788,1.788,0,0,1-.546,1.312A1.788,1.788,0,0,1,191.09-536.285Zm7.143,0a1.788,1.788,0,0,1-1.312-.546,1.788,1.788,0,0,1-.546-1.312,1.788,1.788,0,0,1,.546-1.312,1.788,1.788,0,0,1,1.312-.546,1.788,1.788,0,0,1,1.312.546,1.788,1.788,0,0,1,.546,1.312,1.788,1.788,0,0,1-.546,1.312A1.788,1.788,0,0,1,198.233-536.285Zm7.143,0a1.788,1.788,0,0,1-1.312-.546,1.788,1.788,0,0,1-.546-1.312,1.788,1.788,0,0,1,.546-1.312,1.788,1.788,0,0,1,1.312-.546,1.788,1.788,0,0,1,1.312.546,1.788,1.788,0,0,1,.546,1.312,1.788,1.788,0,0,1-.546,1.312,1.788,1.788,0,0,1-1.312.546Z" transform="translate(-189.233 539.999)" fill="#072635" />
                </svg>

              </span>

            </div>
            <div className='h-[48px] w-[100%] flex items-center  gap-2 px-3 justify-between '>
              <div className='flex items-center gap-1'>
                <img src="/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc.png" alt="profile" />
                <div className='flex items-start  justify-start leading-1 flex-col px-3'>
                  <p className='text-[14px] font-bold '>Emily Williams</p>
                  <p className='text-[#707070] text-[14px] font-normal'> Female, 18 </p>
                </div>
              </div>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="3.714" viewBox="0 0 18 3.714">
                  <path id="more_horiz_FILL0_wght300_GRAD0_opsz24" d="M191.09-536.285a1.788,1.788,0,0,1-1.312-.546,1.788,1.788,0,0,1-.546-1.312,1.788,1.788,0,0,1,.546-1.312A1.788,1.788,0,0,1,191.09-540a1.788,1.788,0,0,1,1.312.546,1.788,1.788,0,0,1,.546,1.312,1.788,1.788,0,0,1-.546,1.312A1.788,1.788,0,0,1,191.09-536.285Zm7.143,0a1.788,1.788,0,0,1-1.312-.546,1.788,1.788,0,0,1-.546-1.312,1.788,1.788,0,0,1,.546-1.312,1.788,1.788,0,0,1,1.312-.546,1.788,1.788,0,0,1,1.312.546,1.788,1.788,0,0,1,.546,1.312,1.788,1.788,0,0,1-.546,1.312A1.788,1.788,0,0,1,198.233-536.285Zm7.143,0a1.788,1.788,0,0,1-1.312-.546,1.788,1.788,0,0,1-.546-1.312,1.788,1.788,0,0,1,.546-1.312,1.788,1.788,0,0,1,1.312-.546,1.788,1.788,0,0,1,1.312.546,1.788,1.788,0,0,1,.546,1.312,1.788,1.788,0,0,1-.546,1.312,1.788,1.788,0,0,1-1.312.546Z" transform="translate(-189.233 539.999)" fill="#072635" />
                </svg>

              </span>

            </div>
            <div className='h-[48px] w-[100%] flex items-center  gap-2 px-3 justify-between '>
              <div className='flex items-center gap-1'>
                <img src="/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc.png" alt="profile" />
                <div className='flex items-start  justify-start leading-1 flex-col px-3'>
                  <p className='text-[14px] font-bold '>Emily Williams</p>
                  <p className='text-[#707070] text-[14px] font-normal'> Female, 18 </p>
                </div>
              </div>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="3.714" viewBox="0 0 18 3.714">
                  <path id="more_horiz_FILL0_wght300_GRAD0_opsz24" d="M191.09-536.285a1.788,1.788,0,0,1-1.312-.546,1.788,1.788,0,0,1-.546-1.312,1.788,1.788,0,0,1,.546-1.312A1.788,1.788,0,0,1,191.09-540a1.788,1.788,0,0,1,1.312.546,1.788,1.788,0,0,1,.546,1.312,1.788,1.788,0,0,1-.546,1.312A1.788,1.788,0,0,1,191.09-536.285Zm7.143,0a1.788,1.788,0,0,1-1.312-.546,1.788,1.788,0,0,1-.546-1.312,1.788,1.788,0,0,1,.546-1.312,1.788,1.788,0,0,1,1.312-.546,1.788,1.788,0,0,1,1.312.546,1.788,1.788,0,0,1,.546,1.312,1.788,1.788,0,0,1-.546,1.312A1.788,1.788,0,0,1,198.233-536.285Zm7.143,0a1.788,1.788,0,0,1-1.312-.546,1.788,1.788,0,0,1-.546-1.312,1.788,1.788,0,0,1,.546-1.312,1.788,1.788,0,0,1,1.312-.546,1.788,1.788,0,0,1,1.312.546,1.788,1.788,0,0,1,.546,1.312,1.788,1.788,0,0,1-.546,1.312,1.788,1.788,0,0,1-1.312.546Z" transform="translate(-189.233 539.999)" fill="#072635" />
                </svg>

              </span>

            </div>
            <div className='h-[48px] w-[100%] flex items-center  gap-2 px-3 justify-between '>
              <div className='flex items-center gap-1'>
                <img src="/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc.png" alt="profile" />
                <div className='flex items-start  justify-start leading-1 flex-col px-3'>
                  <p className='text-[14px] font-bold '>Emily Williams</p>
                  <p className='text-[#707070] text-[14px] font-normal'> Female, 18 </p>
                </div>
              </div>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="3.714" viewBox="0 0 18 3.714">
                  <path id="more_horiz_FILL0_wght300_GRAD0_opsz24" d="M191.09-536.285a1.788,1.788,0,0,1-1.312-.546,1.788,1.788,0,0,1-.546-1.312,1.788,1.788,0,0,1,.546-1.312A1.788,1.788,0,0,1,191.09-540a1.788,1.788,0,0,1,1.312.546,1.788,1.788,0,0,1,.546,1.312,1.788,1.788,0,0,1-.546,1.312A1.788,1.788,0,0,1,191.09-536.285Zm7.143,0a1.788,1.788,0,0,1-1.312-.546,1.788,1.788,0,0,1-.546-1.312,1.788,1.788,0,0,1,.546-1.312,1.788,1.788,0,0,1,1.312-.546,1.788,1.788,0,0,1,1.312.546,1.788,1.788,0,0,1,.546,1.312,1.788,1.788,0,0,1-.546,1.312A1.788,1.788,0,0,1,198.233-536.285Zm7.143,0a1.788,1.788,0,0,1-1.312-.546,1.788,1.788,0,0,1-.546-1.312,1.788,1.788,0,0,1,.546-1.312,1.788,1.788,0,0,1,1.312-.546,1.788,1.788,0,0,1,1.312.546,1.788,1.788,0,0,1,.546,1.312,1.788,1.788,0,0,1-.546,1.312,1.788,1.788,0,0,1-1.312.546Z" transform="translate(-189.233 539.999)" fill="#072635" />
                </svg>

              </span>

            </div>
            <div className='h-[48px] w-[100%] flex items-center  gap-2 px-3 justify-between '>
              <div className='flex items-center gap-1'>
                <img src="/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc.png" alt="profile" />
                <div className='flex items-start  justify-start leading-1 flex-col px-3'>
                  <p className='text-[14px] font-bold '>Emily Williams</p>
                  <p className='text-[#707070] text-[14px] font-normal'> Female, 18 </p>
                </div>
              </div>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="3.714" viewBox="0 0 18 3.714">
                  <path id="more_horiz_FILL0_wght300_GRAD0_opsz24" d="M191.09-536.285a1.788,1.788,0,0,1-1.312-.546,1.788,1.788,0,0,1-.546-1.312,1.788,1.788,0,0,1,.546-1.312A1.788,1.788,0,0,1,191.09-540a1.788,1.788,0,0,1,1.312.546,1.788,1.788,0,0,1,.546,1.312,1.788,1.788,0,0,1-.546,1.312A1.788,1.788,0,0,1,191.09-536.285Zm7.143,0a1.788,1.788,0,0,1-1.312-.546,1.788,1.788,0,0,1-.546-1.312,1.788,1.788,0,0,1,.546-1.312,1.788,1.788,0,0,1,1.312-.546,1.788,1.788,0,0,1,1.312.546,1.788,1.788,0,0,1,.546,1.312,1.788,1.788,0,0,1-.546,1.312A1.788,1.788,0,0,1,198.233-536.285Zm7.143,0a1.788,1.788,0,0,1-1.312-.546,1.788,1.788,0,0,1-.546-1.312,1.788,1.788,0,0,1,.546-1.312,1.788,1.788,0,0,1,1.312-.546,1.788,1.788,0,0,1,1.312.546,1.788,1.788,0,0,1,.546,1.312,1.788,1.788,0,0,1-.546,1.312,1.788,1.788,0,0,1-1.312.546Z" transform="translate(-189.233 539.999)" fill="#072635" />
                </svg>

              </span>

            </div>
            <div className='h-[48px] w-[100%] flex items-center  gap-2 px-3 justify-between '>
              <div className='flex items-center gap-1'>
                <img src="/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc.png" alt="profile" />
                <div className='flex items-start  justify-start leading-1 flex-col px-3'>
                  <p className='text-[14px] font-bold '>Emily Williams</p>
                  <p className='text-[#707070] text-[14px] font-normal'> Female, 18 </p>
                </div>
              </div>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="3.714" viewBox="0 0 18 3.714">
                  <path id="more_horiz_FILL0_wght300_GRAD0_opsz24" d="M191.09-536.285a1.788,1.788,0,0,1-1.312-.546,1.788,1.788,0,0,1-.546-1.312,1.788,1.788,0,0,1,.546-1.312A1.788,1.788,0,0,1,191.09-540a1.788,1.788,0,0,1,1.312.546,1.788,1.788,0,0,1,.546,1.312,1.788,1.788,0,0,1-.546,1.312A1.788,1.788,0,0,1,191.09-536.285Zm7.143,0a1.788,1.788,0,0,1-1.312-.546,1.788,1.788,0,0,1-.546-1.312,1.788,1.788,0,0,1,.546-1.312,1.788,1.788,0,0,1,1.312-.546,1.788,1.788,0,0,1,1.312.546,1.788,1.788,0,0,1,.546,1.312,1.788,1.788,0,0,1-.546,1.312A1.788,1.788,0,0,1,198.233-536.285Zm7.143,0a1.788,1.788,0,0,1-1.312-.546,1.788,1.788,0,0,1-.546-1.312,1.788,1.788,0,0,1,.546-1.312,1.788,1.788,0,0,1,1.312-.546,1.788,1.788,0,0,1,1.312.546,1.788,1.788,0,0,1,.546,1.312,1.788,1.788,0,0,1-.546,1.312,1.788,1.788,0,0,1-1.312.546Z" transform="translate(-189.233 539.999)" fill="#072635" />
                </svg>

              </span>

            </div>
          </div>

        </aside>
        <main className='w-[calc(100%-650px)] h-full flex items-center gap-5 flex-col  '>
          <div className=' bg-[#FFFFFF] w-full h-[500px] rounded-[15px] flex flex-col items-center justify-between p-2 '>
            <h1 className='text-[24px] text-[#072635] capitalize font-bold '>Diagnosis History </h1>

          </div>
          <div className=' bg-[#FFFFFF] w-full h-[500px] rounded-[15px] flex flex-col items-center justify-between p-2 '>
            <h1 className='text-[24px] text-[#072635] capitalize font-bold '>Diagnostic List</h1>


          </div>
        </main>
        <aside className='bg-red-300 w-[350px] h-full '>
          <div>

            <h1 className='text-[24px] text-[#072635] capitalize font-bold '>Jessica Taylor </h1>

          </div>
          <div>
            <h1 className='text-[24px] text-[#072635] capitalize font-bold '>Lab Results</h1>

          </div>
        </aside>
      </div>
    </div>
  )
}

export default App