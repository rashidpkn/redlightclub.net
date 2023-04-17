import React from 'react'

import cardImage from '../../../../asset/images/dashboard/user/card.png'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import BackendIP from '../../../../BackendIP'
import { Close } from '@mui/icons-material'



function AvailableCredit() {
    const { username } = useSelector(state => state.user)

    const [user, setUser] = useState({})
    useEffect(() => {
        axios.get(`${BackendIP}/user/get-a-user`, { params: { username } }).then(res => {
            setUser(res.data)
        })
        // eslint-disable-next-line
    }, [])


    

    return (
        <div className='space-y-5'>
            
            <div className=" bg-white rounded-xl flex justify-between p-5">
                <div className="text-xl">
                    <p>Credit Balance</p>
                    <p className='font-bold'>AED {user.credit}</p>
                </div>

                <Card {...user} />
            </div>
            <table className='bg-white rounded-md w-full '>
                <thead className='w-full font-bold text-sm'>

                    <tr className='w-full h-16 border-b'>
                        <th className='h-full w-[5%]  text-start'></th>
                        <th className='h-full w-[25%] text-start'>Description</th>
                        <th className='h-full w-[25%] text-start'>Date</th>
                        <th className='h-full w-[25%] text-start'>Credit</th>
                        <th className='h-full w-[20%] text-start'>Credit Balance</th>
                    </tr>
                </thead>
                <tbody className='w-full'>
                    <TableRow/>
                    <TableRow/>
                    <TableRow/>
                    <TableRow/>
                    <TableRow/>
                    <TableRow/>
                </tbody>
            </table>
            
        </div>
    )
}

export default AvailableCredit


const TableRow = () => {
    return (
        <tr className='w-full h-16 border-b hover:shadow-lg'>
            <td className='h-full w-[5%]  text-xs text-center'>
                <input type="checkbox" name="" id="" />
            </td>
            <td className='h-full w-[25%] text-xs'>Bid : Gold Pos 1</td>
            <td className='h-full w-[25%] text-xs'>June 12, 2020, 08:22 AM</td>
            <td className='h-full w-[25%] text-xs font-bold text-[#D80027]'>- 400 AED</td>
            <td className='h-full w-[20%] text-xs'>1000 AED</td>
        </tr>
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