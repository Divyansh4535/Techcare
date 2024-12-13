import React, { useContext, useState } from 'react'
import UserContext from '../context/context'

const Profile = () => {
    const { patientDetails, patientData } = useContext(UserContext)

    return (
        <div className='bg-[#FFFFFF] rounded-[15px] h-[700px] w-full p-5 gap-7  flex items-center justify-start flex-col pt-8 '>
            <div className='flex items-center gap-4 flex-col justify-center '>
                <img className='size-[160px] ' src={patientDetails?.profile_picture || patientData[3]?.profile_picture} alt="profile" />
                <h1 className='text-[24px] font-bold '>{patientDetails?.name || patientData[3]?.name}</h1>
            </div>
            <div className='flex items-start justify-start w-full  flex-col gap-4 '>
                <div className='flex w-full p-1 items-center justify-start gap-3'>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42">
                            <g id="BirthIcon" transform="translate(-1235 -471)">
                                <circle id="Ellipse_9" data-name="Ellipse 9" cx="21" cy="21" r="21" transform="translate(1235 471)" fill="#f6f7f8" />
                                <path id="calendar_today_FILL0_wght300_GRAD0_opsz24" d="M141.892-844.614a1.826,1.826,0,0,1-1.342-.549,1.826,1.826,0,0,1-.549-1.342v-14a1.826,1.826,0,0,1,.549-1.342,1.826,1.826,0,0,1,1.342-.549h1.449v-1.408a.78.78,0,0,1,.23-.574.78.78,0,0,1,.574-.23.779.779,0,0,1,.574.23.779.779,0,0,1,.23.574v1.408h7.928v-1.429a.76.76,0,0,1,.225-.559.759.759,0,0,1,.559-.225.759.759,0,0,1,.559.225.76.76,0,0,1,.225.559v1.429H155.9a1.826,1.826,0,0,1,1.342.549,1.826,1.826,0,0,1,.549,1.342v14a1.826,1.826,0,0,1-.549,1.342,1.826,1.826,0,0,1-1.342.549Zm0-1.569h14a.308.308,0,0,0,.221-.1.308.308,0,0,0,.1-.221v-9.819H141.57v9.819a.308.308,0,0,0,.1.221A.308.308,0,0,0,141.892-846.183Zm-.322-11.71h14.648v-2.616a.308.308,0,0,0-.1-.221.308.308,0,0,0-.221-.1h-14a.308.308,0,0,0-.221.1.308.308,0,0,0-.1.221Zm0,0v0Z" transform="translate(1106.999 1346.614)" fill="#072635" />
                            </g>
                        </svg>
                    </span>
                    <div className='flex items-start w-full flex-col  justify-start'>
                        <h2 className='text-[14px] font-medium text-[#072635]'> Date Of Birth</h2>
                        <h2 className='text-[14px] font-bold text-[#072635]'> {patientDetails?.date_of_birth || patientData[3]?.date_of_birth}</h2>
                    </div>
                </div>
                <div className='flex w-full p-1 items-center justify-start gap-3'>
                    <span><svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42">
                        <g id="FemaleIcon" transform="translate(-1235 -471)">
                            <circle id="Ellipse_9" data-name="Ellipse 9" cx="21" cy="21" r="21" transform="translate(1235 471)" fill="#f6f7f8" />
                            <path id="female_FILL0_wght300_GRAD0_opsz24" d="M275.456-772.423H273.94a.88.88,0,0,1-.648-.261.88.88,0,0,1-.261-.648.879.879,0,0,1,.261-.648.88.88,0,0,1,.648-.261h1.515v-3.1a6.172,6.172,0,0,1-3.907-2.136,6.214,6.214,0,0,1-1.548-4.19,6.072,6.072,0,0,1,1.861-4.484,6.164,6.164,0,0,1,4.5-1.843,6.164,6.164,0,0,1,4.5,1.843,6.072,6.072,0,0,1,1.861,4.484,6.215,6.215,0,0,1-1.548,4.19,6.172,6.172,0,0,1-3.907,2.136v3.1h1.515a.879.879,0,0,1,.648.261.88.88,0,0,1,.261.648.879.879,0,0,1-.261.648.88.88,0,0,1-.648.261h-1.515v1.515a.879.879,0,0,1-.261.648.88.88,0,0,1-.648.261.879.879,0,0,1-.648-.261.88.88,0,0,1-.261-.648Zm.911-6.667a4.375,4.375,0,0,0,3.214-1.332,4.385,4.385,0,0,0,1.33-3.216,4.375,4.375,0,0,0-1.332-3.214,4.385,4.385,0,0,0-3.216-1.33,4.375,4.375,0,0,0-3.214,1.332,4.385,4.385,0,0,0-1.33,3.216,4.375,4.375,0,0,0,1.332,3.214A4.385,4.385,0,0,0,276.366-779.09Z" transform="translate(979.999 1271.999)" fill="#072635" />
                        </g>
                    </svg></span>
                    <div className='flex items-start w-full flex-col  justify-start'>
                        <h2 className='text-[14px] font-medium text-[#072635]'> Gender</h2>
                        <h2 className='text-[14px] font-bold text-[#072635]'> {patientDetails?.gender || patientData[3]?.gender}</h2>
                    </div>
                </div><div className='flex w-full p-1 items-center justify-start gap-3'>
                    <span> <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42">
                        <g id="PhoneIcon" transform="translate(-1235 -471)">
                            <circle id="Ellipse_9" data-name="Ellipse 9" cx="21" cy="21" r="21" transform="translate(1235 471)" fill="#f6f7f8" />
                            <path id="call_FILL0_wght300_GRAD0_opsz24" d="M158.754-800a15.86,15.86,0,0,1-6.682-1.546,21.268,21.268,0,0,1-6.167-4.363,21.421,21.421,0,0,1-4.357-6.167A15.823,15.823,0,0,1,140-818.752a1.214,1.214,0,0,1,.353-.89,1.192,1.192,0,0,1,.882-.356h3.837a1.175,1.175,0,0,1,.786.291,1.279,1.279,0,0,1,.433.718l.674,3.462a1.978,1.978,0,0,1-.029.828,1.231,1.231,0,0,1-.357.581l-2.717,2.645a16.322,16.322,0,0,0,1.5,2.273,22.419,22.419,0,0,0,1.825,2.046,20.311,20.311,0,0,0,2.059,1.8,20.68,20.68,0,0,0,2.355,1.545l2.64-2.663a1.494,1.494,0,0,1,.669-.4,1.922,1.922,0,0,1,.816-.057l3.267.665a1.382,1.382,0,0,1,.727.455,1.16,1.16,0,0,1,.282.765v3.814a1.191,1.191,0,0,1-.356.882A1.214,1.214,0,0,1,158.754-800Zm-15.726-13.145,2.1-2.009a.21.21,0,0,0,.074-.124.275.275,0,0,0-.006-.147l-.511-2.629a.242.242,0,0,0-.079-.136.228.228,0,0,0-.147-.045h-2.516a.154.154,0,0,0-.113.045.153.153,0,0,0-.045.113,15.049,15.049,0,0,0,.395,2.45A14.978,14.978,0,0,0,143.028-813.144Zm10.235,10.167a12.1,12.1,0,0,0,2.44.834,13.842,13.842,0,0,0,2.374.343.153.153,0,0,0,.113-.045.153.153,0,0,0,.045-.113v-2.475a.228.228,0,0,0-.045-.147.242.242,0,0,0-.136-.079l-2.471-.5a.186.186,0,0,0-.119-.006.289.289,0,0,0-.107.074ZM143.028-813.144ZM153.263-802.976Z" transform="translate(1105.999 1301.999)" fill="#072635" />
                        </g>
                    </svg></span>
                    <div className='flex items-start w-full flex-col  justify-start'>
                        <h2 className='text-[14px] font-medium text-[#072635]'> Contact Info</h2>
                        <h2 className='text-[14px] font-bold text-[#072635]'> {patientDetails?.phone_number || patientData[3]?.phone_number}</h2>
                    </div>
                </div><div className='flex w-full p-1 items-center justify-start gap-3'>
                    <span><svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42">
                        <g id="PhoneIcon" transform="translate(-1235 -471)">
                            <circle id="Ellipse_9" data-name="Ellipse 9" cx="21" cy="21" r="21" transform="translate(1235 471)" fill="#f6f7f8" />
                            <path id="call_FILL0_wght300_GRAD0_opsz24" d="M158.754-800a15.86,15.86,0,0,1-6.682-1.546,21.268,21.268,0,0,1-6.167-4.363,21.421,21.421,0,0,1-4.357-6.167A15.823,15.823,0,0,1,140-818.752a1.214,1.214,0,0,1,.353-.89,1.192,1.192,0,0,1,.882-.356h3.837a1.175,1.175,0,0,1,.786.291,1.279,1.279,0,0,1,.433.718l.674,3.462a1.978,1.978,0,0,1-.029.828,1.231,1.231,0,0,1-.357.581l-2.717,2.645a16.322,16.322,0,0,0,1.5,2.273,22.419,22.419,0,0,0,1.825,2.046,20.311,20.311,0,0,0,2.059,1.8,20.68,20.68,0,0,0,2.355,1.545l2.64-2.663a1.494,1.494,0,0,1,.669-.4,1.922,1.922,0,0,1,.816-.057l3.267.665a1.382,1.382,0,0,1,.727.455,1.16,1.16,0,0,1,.282.765v3.814a1.191,1.191,0,0,1-.356.882A1.214,1.214,0,0,1,158.754-800Zm-15.726-13.145,2.1-2.009a.21.21,0,0,0,.074-.124.275.275,0,0,0-.006-.147l-.511-2.629a.242.242,0,0,0-.079-.136.228.228,0,0,0-.147-.045h-2.516a.154.154,0,0,0-.113.045.153.153,0,0,0-.045.113,15.049,15.049,0,0,0,.395,2.45A14.978,14.978,0,0,0,143.028-813.144Zm10.235,10.167a12.1,12.1,0,0,0,2.44.834,13.842,13.842,0,0,0,2.374.343.153.153,0,0,0,.113-.045.153.153,0,0,0,.045-.113v-2.475a.228.228,0,0,0-.045-.147.242.242,0,0,0-.136-.079l-2.471-.5a.186.186,0,0,0-.119-.006.289.289,0,0,0-.107.074ZM143.028-813.144ZM153.263-802.976Z" transform="translate(1105.999 1301.999)" fill="#072635" />
                        </g>
                    </svg></span>
                    <div className='flex items-start w-full flex-col  justify-start'>
                        <h2 className='text-[14px] font-medium text-[#072635]'>Emergency Contacts </h2>
                        <h2 className='text-[14px] font-bold text-[#072635]'> {patientDetails?.emergency_contact || patientData[3]?.emergency_contact}</h2>
                    </div>
                </div>
                <div className='flex w-full p-1 items-center justify-start gap-3'>
                    <span><svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42">
                        <g id="InsuranceIcon" transform="translate(-1235 -471)">
                            <circle id="Ellipse_9" data-name="Ellipse 9" cx="21" cy="21" r="21" transform="translate(1235 471)" fill="#f6f7f8" />
                            <path id="verified_user_FILL0_wght300_GRAD0_opsz24" d="M186.9-842.111l-1.7-1.7a.784.784,0,0,0-.558-.244.764.764,0,0,0-.569.244.786.786,0,0,0-.249.572.786.786,0,0,0,.249.572l2.153,2.17a.927.927,0,0,0,.677.29.927.927,0,0,0,.677-.29l4.432-4.432a.793.793,0,0,0,.244-.567.774.774,0,0,0-.244-.577.786.786,0,0,0-.572-.249.786.786,0,0,0-.572.249Zm1.123,8.882a1.986,1.986,0,0,1-.327-.027,1.811,1.811,0,0,1-.311-.08A10.471,10.471,0,0,1,182-837.6a11.865,11.865,0,0,1-2-6.611v-4.816a1.829,1.829,0,0,1,.352-1.1,2.01,2.01,0,0,1,.9-.708l6.087-2.273a1.993,1.993,0,0,1,.677-.123,1.993,1.993,0,0,1,.677.123l6.087,2.273a2.01,2.01,0,0,1,.9.708,1.829,1.829,0,0,1,.352,1.1v4.816a11.865,11.865,0,0,1-2,6.611,10.471,10.471,0,0,1-5.383,4.266,1.811,1.811,0,0,1-.311.08A1.986,1.986,0,0,1,188.022-833.229Zm0-1.573a8.7,8.7,0,0,0,4.6-3.529,10.157,10.157,0,0,0,1.818-5.882v-4.827a.319.319,0,0,0-.057-.185.341.341,0,0,0-.159-.123l-6.087-2.273a.3.3,0,0,0-.113-.021.3.3,0,0,0-.113.021l-6.087,2.273a.341.341,0,0,0-.159.123.319.319,0,0,0-.057.185v4.827a10.157,10.157,0,0,0,1.818,5.882A8.7,8.7,0,0,0,188.022-834.8ZM188.022-843.23Z" transform="translate(1067.999 1335.229)" fill="#072635" />
                        </g>
                    </svg></span>
                    <div className='flex items-start w-full flex-col  justify-start'>
                        <h2 className='text-[14px] font-medium text-[#072635]'>Insurance Provider </h2>
                        <h2 className='text-[14px] font-bold text-[#072635]'> {patientDetails?.insurance_type || patientData[3]?.insurance_type}</h2>
                    </div>
                </div>
            </div>


            <div className="px-8 flex items-center justify-center  h-[45px]  text-[14px] font-bold bg-[#01F0D0] rounded-full cursor-pointer">
                Show All Information
            </div>
        </div>
    )
}

export default Profile