import React from 'react'

import cardImage from '../../../../asset/images/dashboard/user/card.png'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import BackendIP from '../../../../BackendIP'
import { Close } from '@mui/icons-material'



function HomeMenu() {
    const { username } = useSelector(state => state.user)

    const [user, setUser] = useState({})
    useEffect(() => {
        axios.get(`${BackendIP}/user/get-a-user`, { params:{username} }).then(res => {
            setUser(res.data)
        })
        // eslint-disable-next-line
    }, [])


    const [verifyEmailAlert, setVerifyEmailAlert] = useState(false)

    return (
        <div className='space-y-5'>
            <div className="flex justify-between items-center">
                <p className='text-red-500'>Please Verify Your Email</p>
                <button className='px-4 py-3 rounded-xl bg-[#34C38F] text-white' onClick={()=>setVerifyEmailAlert(true)}>Verify</button>
            </div>
            <div className=" bg-white rounded-xl flex justify-between p-5">
                <div className="space-y-5">
                    <div className="flex gap-5">
                        <div className="w-36 h-36 rounded-lg bg-black"></div>
                        <div className="flex flex-col justify-between">
                            <div className="">
                                <p className='text-3xl font-bold capitalize'>{username}</p>
                                <p className='text-[12px] font-bold text-[#A5A5A5]'>Dubai</p>
                                <p className='text-[10px] font-bold text-[#38E25D]'>Active</p>
                            </div>
                            <button className='w-[138.75px] h-[40px] border rounded-xl'>Edit Profile</button>
                        </div>
                    </div>
                    <div className="flex items-center gap-5">
                        <div className="w-36 h-16 rounded-xl bg-[#F5F5F5]"></div>
                        <div className="w-36 h-16 rounded-xl bg-[#F5F5F5]"></div>
                        <div className="w-36 h-16 rounded-xl bg-[#F5F5F5]"></div>
                    </div>
                </div>

                <Card {...user} />
            </div>
            {verifyEmailAlert && <VerifyBox setVerifyEmailAlert={setVerifyEmailAlert} />}
        </div>
    )
}

export default HomeMenu


const Card = ({credit,username}) => {
    // const { username } = useSelector(state => state.user)
    const [effect, setEffect] = useState(false);
    return (
        <div className="flex flex-col justify-center items-center">
            <div className={`relative w-[375px] h-[228px]  ${effect ? 'rotate-card' : 'cursor-pointer'} `}
                onClick={()=>{
                    setEffect(true)
                }}
                onAnimationEnd={()=>{
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


const VerifyBox = ({setVerifyEmailAlert}) =>{
    return(
        <div className="fixed top-0 left-0 z-50 h-screen w-full flex justify-center items-center bg-black/30 p-3">
            <div className="max-w-[600px] w-full bg-white rounded-lg p-5 flex flex-col justify-center items-center gap-5">
                <div className="w-full flex justify-between items-center">
                    <div className=""></div>
                    <p>Verify Your Email</p>
                    <Close onClick={()=>setVerifyEmailAlert(false)}/>
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