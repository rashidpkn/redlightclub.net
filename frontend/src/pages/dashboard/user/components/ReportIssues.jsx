import { Close } from '@mui/icons-material'
import React, { useState } from 'react'


import lensIcon from '../../../../asset/icons/dashboard/profile/lens.svg'

function ReportIssues() {
    return (
        <div className='space-y-5'>
            <Menu />
            <table className='bg-white rounded-md w-full '>
                <thead className='w-full font-bold text-sm'>

                    <tr className='w-full h-16 border-b'>
                        <th className='h-full w-[5%]  text-start'></th>
                        <th className='h-full w-[15%] text-start'>Reported by</th>
                        <th className='h-full w-[20%] text-start'>Subject</th>
                        <th className='h-full w-[20%] text-start'>Date</th>
                        <th className='h-full w-[10%] text-start'>Status</th>
                        <th className='h-full w-[15%] text-start'>Action</th>
                    </tr>
                </thead>
                <tbody className='w-full'>
                    <TableRow />
                    <TableRow />
                    <TableRow />
                    <TableRow />
                    <TableRow />
                    <TableRow />
                    <TableRow />
                    <TableRow />
                </tbody>
            </table>
        </div>
    )
}

export default ReportIssues



const TableRow = () => {
    const [alertDetails, setAlertDetails] = useState(false)
    return (
        <>
            <tr className='w-full h-16 border-b hover:shadow-lg'>
                <td className='h-full w-[5%]  font-bold text-xs text-center'>
                    <input type="checkbox" name="" id="" />
                </td>
                <td className='h-full w-[15%] font-bold text-xs'>Roshni</td>
                <td className='h-full w-[20%] font-bold text-xs'>Some issues in Filter page</td>
                <td className='h-full w-[20%] font-bold text-xs'>June 1 2022 , 09:22 AM</td>
                <td className='h-full w-[10%] font-bold text-xs'>Pending</td>
                <td className='h-full w-[15%] font-bold text-[8px]'>
                    <div className="w-full h-full flex justify-center items-center gap-5 text-white">
                        <button className='w-20 h-9 rounded-lg bg-[#0062F4]' onClick={() => { setAlertDetails(true) }}>View Details</button>

                        <button className='w-20 h-9 rounded-lg bg-[#34C38F]'>Mark Resolved</button>
                    </div>
                </td>
            </tr>
            {
                alertDetails && <div className="fixed w-full h-screen bg-black/10 top-0 left-0 flex justify-center items-center">
                    <div className="w-[750px]  bg-white rounded-xl p-5 space-y-5">
                        <div className="flex justify-between items-center">
                        <p className='font-bold text-sm'>Ticket Details</p>
                        <Close onClick={()=>setAlertDetails(false)} />
                        </div>
                        <div className="flex justify-between w-full">
                            <div className="">
                                <p className='text-sm font-bold text-[#C7C7C7]'>Name</p>
                                <input type="text" className='w-[300px] h-11 bg-[#F5F5F5] rounded-xl' />
                            </div>
                            <div className="">
                                <p className='text-sm font-bold text-[#C7C7C7]'>Email</p>
                                <input type="text" className='w-[300px] h-11 bg-[#F5F5F5] rounded-xl' />
                            </div>
                        </div>

                        <div className="">
                            <p className='text-sm font-bold text-[#C7C7C7]'>Ticket Type</p>
                            <input type="text" className='w-[300px] h-11 bg-[#F5F5F5] rounded-xl' />
                        </div>

                        <div className="">
                            <p className='text-sm font-bold text-[#C7C7C7]'>Subject</p>
                            <input type="text" className='w-full h-11 bg-[#F5F5F5] rounded-xl' />
                        </div>

                        <div className="">
                            <p className='text-sm font-bold text-[#C7C7C7]'>Details</p>
                            <input type="text" className='w-full h-48 bg-[#F5F5F5] rounded-xl' />
                        </div>

                        <div className="flex gap-5">
                            <div className="h-10 w-52 bg-black"></div>
                            <div className="h-10 w-52 bg-black"></div>
                        </div>

                        <div className="flex gap-5">
                            <button className='h-11 w-40 rounded-2xl text-white bg-[#5ECFFF]' onClick={()=>{setAlertDetails(false)}}>Message Client</button>
                            <button className='h-11 w-40 rounded-2xl text-white bg-[#34C38F]' onClick={()=>{setAlertDetails(false)}}>Mark Resolved</button>
                            
                        </div>

                    </div>
                </div>
            }

        </>
    )
}



const Menu = () => {

    return (
        <div className="flex justify-between items-center flex-wrap gap-3">
            <div className="">
                <h2 className='font-bold text-2xl'>Report Issues</h2>
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