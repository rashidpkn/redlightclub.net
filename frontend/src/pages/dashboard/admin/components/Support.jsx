import React, { useEffect } from 'react'


import lensIcon from '../../../../asset/icons/dashboard/profile/lens.svg'
import { useState } from 'react'
import axios from 'axios'
import BackendIP from '../../../../BackendIP'
import { Close } from '@mui/icons-material'

function Support() {

    const [ticket, setTicket] = useState([])

    const fetchData = () => {
        axios.get(`${BackendIP}/support`).then(res => {
            setTicket(res.data)
        })
    }


    useEffect(() => {
        fetchData()
        // eslint-disable-next-line
    }, [])

    return (
        <div className='space-y-5'>
            <Menu />
            <table className='bg-white rounded-md w-full '>
                <thead className='w-full font-bold text-sm'>

                    <tr className='w-full h-16 border-b'>
                        <th className='h-full w-[5%]  text-start'></th>
                        <th className='h-full w-[15%] text-start'>Ticket Number</th>
                        <th className='h-full w-[15%] text-start'>Raised by</th>
                        <th className='h-full w-[20%] text-start'>Subject</th>
                        <th className='h-full w-[20%] text-start'>Date</th>
                        <th className='h-full w-[10%] text-start'>Status</th>
                        <th className='h-full w-[15%] text-start'>Action</th>
                    </tr>
                </thead>
                <tbody className='w-full'>
                    {ticket.map(e => <TableRow {...e} />)}
                    
                </tbody>
            </table>
        </div>
    )
}

export default Support



const TableRow = ({ id, username, subject, status, email, type, detail,images }) => {
    const [showTicket, setShowTicket] = useState()
    return (
        <>
            <tr className='w-full h-16 border-b hover:shadow-lg'>
                <td className='h-full w-[5%]  font-bold text-xs text-center'>
                    <input type="checkbox" name="" id="" />
                </td>
                <td className='h-full w-[15%] font-bold text-xs'>{id}</td>
                <td className='h-full w-[15%] font-bold text-xs'>{username}</td>
                <td className='h-full w-[20%] font-bold text-xs'>{subject}</td>
                <td className='h-full w-[20%] font-bold text-xs'>June 1 2022 , 09:22 AM</td>
                <td className='h-full w-[10%] font-bold text-xs'>{status ? 'Resolve' : 'Open'}</td>
                <td className='h-full w-[15%] font-bold text-[8px]'>
                    <div className="w-full h-full flex justify-center items-center gap-5 text-white">
                        <button className='w-20 h-9 rounded-lg bg-[#0062F4]' onClick={()=>{setShowTicket(true)}}>View Details</button>

                        <button className='w-20 h-9 rounded-lg bg-[#34C38F]'>Mark Resolved</button>
                    </div>
                </td>
            </tr>
            {showTicket && <Ticket username={username} email={email} type={type} subject={subject} detail={detail} setShowTicket={setShowTicket} id={id} images={images}/>}
        </>

    )
}



const Menu = () => {

    return (
        <div className="flex justify-between items-center flex-wrap gap-3">
            <div className="">
                <h2 className='font-bold text-2xl'>Support</h2>
                <p className='text-sm text-[#A5A5A5]'>Lorem ipsum olor sit amet </p>
            </div>
            <div className="flex gap-3 flex-wrap justify-center">
                <div className="w-64 h-14 relative">
                    <input className='w-full h-full rounded-xl bg-white outline-none pl-10' placeholder='Search here' type="text" />

                    <img src={lensIcon} className='absolute w-5 h-5 top-[1.10rem] left-3' alt="" />

                </div>





                <button className='hover:shadow-2xl duration-500 w-36 h-14 rounded-xl text-white bg-[#6418C3] text-sm font-bold' >Search</button>



            </div>
        </div>
    )
}


const Ticket = ({ username, email, type, subject, detail,setShowTicket,id,images }) => {
const [response, setResponse] = useState('')


    return (
        <div className="fixed -top-5 left-0 h-screen w-full bg-black/30 z-50 flex justify-center items-center px-3">
            <div className="max-w-[736px] w-full  bg-white rounded-lg p-5 space-y-5 overflow-y-scroll" >
                <div className="flex justify-between items-center">
                    <p className='font-bold'>Ticket Details</p>
                    <Close onClick={()=>setShowTicket(false)}/>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center gap-10 ">
                    <div className="w-full md:w-1/2">
                        <p className='text-[#C7C7C7] font-bold text-sm'>Name</p>
                        <input type="text" className='w-full h-12 bg-[#F5f5f5] rounded-md pl-3 capitalize' readOnly value={username} />
                    </div>
                    <div className="w-full md:w-1/2">
                        <p className='text-[#C7C7C7] font-bold text-sm'>Email</p>
                        <input type="text" className='w-full h-12 bg-[#F5f5f5] rounded-md pl-3 ' readOnly value={email} />
                    </div>
                </div>
                <p className='text-2xl font-bold'>General Info</p>
                <div className="w-full md:w-1/2">
                    <p className='text-[#C7C7C7] font-bold text-sm'>Ticket Type</p>
                    <input type="text" className='w-full h-12 bg-[#F5f5f5] rounded-md pl-3 ' value={type} readOnly />
                </div>
                <div className="w-full">
                    <p className='text-[#C7C7C7] font-bold text-sm'>Subject</p>
                    <input type="text" className='w-full h-12 bg-[#F5f5f5] rounded-md pl-3 ' value={subject} readOnly />
                </div>

                <div className="w-full">
                    <p className='text-[#C7C7C7] font-bold text-sm'>Details</p>
                    <textarea type="text" className='w-full h-32 bg-[#F5f5f5] rounded-md p-3 ' value={detail} readOnly />
                </div>

                <div className="w-full">
                    <p className='text-[#C7C7C7] font-bold text-sm'>Response</p>
                    <textarea type="text" className='w-full h-32 bg-[#F5f5f5] rounded-md p-3 ' value={response} onChange={e=>setResponse(e.target.value)} />
                </div>
                
                <div className="flex  items-center flex-wrap">
                    {images?.map(e=><img className='w-32 border' src={BackendIP + e } alt='' />)}
                </div>
                

                <div className="space-x-3">
                    
                    
                        <button className='w-40 h-12 rounded-xl bg-[#5ECFFF] text-white text-sm font-bold' onClick={()=>{
                            axios.post(`${BackendIP}/support/response`,{response,id}).then(res=>{
                                window.alert("You are response to the client")
                            })
                        }}>Message User</button>
                    
                    
                    <button className='w-40 h-12 rounded-xl bg-[#34C38F] text-white text-sm font-bold' >Mark Resolved</button>

                </div>

            </div>
        </div>
    )
}