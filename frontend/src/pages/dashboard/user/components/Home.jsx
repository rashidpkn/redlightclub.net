import React from 'react'

import cardImage from '../../../../asset/images/dashboard/user/card.png'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import BackendIP from '../../../../BackendIP'
import { Close } from '@mui/icons-material'



function Home() {
    const { username } = useSelector(state => state.user)

    const [user, setUser] = useState({})
    const [ads, setAds] = useState([])

    useEffect(() => {
        axios.get(`${BackendIP}/ads/get-user-ads`, { params: { username } }).then(res => {
            setAds(res.data)
        })
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        axios.get(`${BackendIP}/user/get-a-user`, { params: { username } }).then(res => {
            setUser(res.data)
        })
        // eslint-disable-next-line
    }, [])


    const [verifyEmailAlert, setVerifyEmailAlert] = useState(false)

    return (
        <div className='space-y-5'>
            <div className="flex justify-between items-center">
                <p className='text-red-500'>Please Verify Your Email</p>
                <button className='px-4 py-3 rounded-xl bg-[#34C38F] text-white' onClick={() => setVerifyEmailAlert(true)}>Verify</button>
            </div>
            <div className=" bg-white rounded-xl flex justify-between p-5">
                <div className="space-y-5">
                    <div className="flex gap-5">
                        <img src={ads[0]?.profilePhoto} className='w-36 h-36 border' alt="" />
                        <div className="flex flex-col justify-between">
                            <div className="">
                                <p className='text-2xl font-bold'>{ads[0]?.adsTitle}</p>
                                <p className='text-xs'>Indian</p>
                            </div>
                            <p className='text-xs font-bold'>Active</p>
                            <button className='rounded-xl h-10 w-36 border'>Edit Profile</button>
                        </div>
                    </div>
                    <div className="flex gap-5 items-center justify-center">
                        <div className="w-36  rounded-lg bg-[#F5F5F5] p-4">
                            <p className='text-[10px]'>Live Ads</p>
                            <div className="flex gap-3 items-center">
                                <div className="w-6 h-6 bg-black"></div>
                                <p className='text-lg font-bold'>{ads.length}</p>
                            </div>
                        </div>
                        <div className="w-36  rounded-lg bg-[#F5F5F5] p-4">
                            <p className='text-[10px]'>Profile Views</p>
                            <div className="flex gap-3 items-center">
                                <div className="w-6 h-6 bg-black"></div>
                                <p className='text-lg font-bold'>0</p>
                            </div>
                        </div>
                        <div className="w-36  rounded-lg bg-[#F5F5F5] p-4">
                            <p className='text-[10px]'>Rating</p>
                            <div className="flex gap-3 items-center">
                                <div className="w-6 h-6 bg-black"></div>
                                <p className='text-lg font-bold'>0</p>
                            </div>
                        </div>
                    </div>
                </div>

                <Card {...user} />
            </div>
            <Analatics />

            {verifyEmailAlert && <VerifyBox setVerifyEmailAlert={setVerifyEmailAlert} />}
        </div>
    )
}

export default Home

const Analatics = ()=>{
    return(
        <>
        <div className=" flex gap-3 flex-wrap">
                
                <div className="h-[380px] w-[570px] rounded-xl bg-white p-4">
                    <div className="flex justify-between items-center">
                        <div className="">
                            <p className='text-xl font-bold'>Ad Analytics</p>
                            <p className='text-[10px] text-[#A5A5A5]'>Jan 1 - Dec 31,2023</p>
                        </div>
                        <div className="flex gap-3">
                            <p className='text-xs font-bold'>Sub Profiles1</p>
                            <p className='text-xs font-bold'>Monthly</p>
                        </div>
                    </div>
                </div>
                
                <div className="h-[380px] w-[300px] rounded-xl bg-white p-4 space-y-5">
                    <div className="flex justify-between items-center">
                        <p className='text-xl font-bold'>Overall Statistics</p>
                        <p className='text-xs font-bold'>Sub Profile</p>
                    </div>
                    <div className="flex ">
                        <div className="w-full flex flex-col justify-center">
                            <p className='text-xl font-bold'>4.5</p>
                            <p className='text-sm'>Overall Rating</p>
                        </div>
                        <div className="w-full flex flex-col justify-center">
                            <p className='text-xl font-bold'>68</p>
                            <p className='text-sm'>Reviews</p>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className=""></div>
                        <div className="space-y-5">
                            <div className="flex justify-center items-center gap-1"> <p>1/5</p> <div className="w-5 h-5 bg-black"></div> </div>
                            <div className="flex justify-center items-center gap-1"> <p>2/5</p> <div className="w-5 h-5 bg-black"></div> </div>
                            <div className="flex justify-center items-center gap-1"> <p>3/5</p> <div className="w-5 h-5 bg-black"></div> </div>
                            <div className="flex justify-center items-center gap-1"> <p>4/5</p> <div className="w-5 h-5 bg-black"></div> </div>
                            <div className="flex justify-center items-center gap-1"> <p>5/5</p> <div className="w-5 h-5 bg-black"></div> </div>
                        </div>
                    </div>
                </div>
                
                <div className="w-[210px] space-y-5">

                    <div className="w-full rounded-xl bg-white p-4 space-y-3">
                        <p className='text-xl font-bold'>Click Rate</p>
                        <div className="flex items-center gap-3">
                            <div className="w-7 h-7 rounded-lg flex justify-between items-center bg-[#0062F4]"></div>
                            <p className='text-xl font-bold'>1.5%</p>
                        </div>
                        <p className='text-[9px]'>How often has the customers clicked on your profile while browsing.</p>
                    </div>
                    <div className="w-full rounded-xl bg-white p-4 space-y-3">
                        <p className='text-xl font-bold'>Response Rate</p>
                        <div className="flex items-center gap-3">
                            <div className="w-7 h-7 rounded-lg flex justify-between items-center bg-[#6418C3]"></div>
                            <p className='text-xl font-bold'>20%</p>
                        </div>
                        <p className='text-[9px]'>How often has the customers clicked on your profile while browsing.</p>
                    </div>

                </div>
            </div>

            <div className="w-[906px] h-[280px] rounded-xl bg-white p-4">
                <div className="flex justify-between items-center">
                    <div className="">
                        <p className='text-xl font-bold'>Website Traffic</p>
                        <p className='text-[10px] text-[#A5A5A5]'>Website Traffic for Redlightclub.net</p>
                    </div>
                    <p className='text-xs font-bold'>Monthly</p>
                </div>
            </div>
        </>
    )
}




const Card = ({ credit, username }) => {
    // const { username } = useSelector(state => state.user)
    const [effect, setEffect] = useState(false);
    return (
        <div className="flex flex-col justify-center items-center">
            <div className={`relative w-[375px] h-[228px]  ${effect ? 'rotate-card' : 'cursor-pointer'} `}
                onClick={() => {
                    setEffect(true)
                }}
                onAnimationEnd={() => {
                    setEffect(false)
                }}
            >
                <img className='w-full h-full' src={cardImage} alt="" />
                <div className="h-10 w-full absolute bottom-5 flex justify-between items-center p-5 text-white font-bold">
                    <p className='capitalize'>{username}</p>
                    <div className="flex flex-col justify-center items-center ">
                        <p className='text-[8px]'>Available Credit</p>
                        <p>AED {credit}</p>
                    </div>
                </div>
            </div>
            <p className='text-[13px]'>Need more credits? <span className='text-[#0062F4] cursor-pointer'>Lean How</span> </p>
        </div>
    )
}


const VerifyBox = ({ setVerifyEmailAlert }) => {
    return (
        <div className="fixed top-0 left-0 z-50 h-screen w-full flex justify-center items-center bg-black/30 p-3">
            <div className="max-w-[600px] w-full bg-white rounded-lg p-5 flex flex-col justify-center items-center gap-5">
                <div className="w-full flex justify-between items-center">
                    <div className=""></div>
                    <p>Verify Your Email</p>
                    <Close onClick={() => setVerifyEmailAlert(false)} />
                </div>

                <p className='text-center'>Please Enter 4 digit OTP send to your email address to verify your email</p>

                <div className="flex justify-center items-center gap-3 text-center">
                    <input className='h-12 w-12 border rounded-md text-center' type="number" min={0} max={9} />
                    <input className='h-12 w-12 border rounded-md text-center' type="number" min={0} max={9} />
                    <input className='h-12 w-12 border rounded-md text-center' type="number" min={0} max={9} />
                    <input className='h-12 w-12 border rounded-md text-center' type="number" min={0} max={9} />
                </div>

                <button className='px-4 py-3 rounded-lg bg-[#34C38F] text-white'>Submit</button>


            </div>
        </div>
    )
}