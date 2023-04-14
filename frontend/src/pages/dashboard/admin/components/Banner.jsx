import { Close } from '@mui/icons-material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import BackendIP from '../../../../BackendIP'

function Banner() {
    const [banner, setBanner] = useState([])
    const fetchData = () => {
        axios.get(`${BackendIP}/banner`).then(res => {
            setBanner(res.data)
        })
    }

    useEffect(() => {
        fetchData()
    }, [])


    return (
        <div className='h-full w-full space-y-5'>
            <h1 className='text-2xl font-bold'>Banner</h1>
            <table className='bg-white rounded-md w-full '>
                <thead className='w-full font-bold text-sm'>

                    <tr className='w-full h-16 border-b'>
                        <th className='h-full w-[5%]  text-start'></th>
                        <th className='h-full w-[25%] text-start'>Username</th>
                        <th className='h-full w-[25%] text-start'>URL</th>
                        <th className='h-full w-[15%] text-start'>Status</th>
                        <th className='h-full w-[15%] text-start'>Action</th>
                    </tr>

                </thead>
                <tbody className='w-full '>
                    {banner.map(e => <TableRow key={e.id} {...e} fetchData={fetchData} e={e} />)}
                </tbody>

            </table>


        </div>
    )
}

export default Banner


const TableRow = ({ username, url, status, id, fetchData, e }) => {
    const [approveAlert, setApproveAlert] = useState(false)
    const [rejectedAlert, setRejectedAlert] = useState(false)
    const [credit, setCredit] = useState(15)

    const ApproveCredit = () => {
        if (status === null) {
            axios.post(`${BackendIP}/banner/approve`, { id, username, credit })
            window.alert('Banner credit is approved')
        } else {
            window.alert("Already done")
        }
        fetchData()
        setApproveAlert(false)
    }

    const RefuceCredit = () => {
        if (status === null) {
            axios.post(`${BackendIP}/banner/refuse`, { id })
            window.alert('Banner credit is refuced')
        } else {
            window.alert("Already done")
        }
        fetchData()
    }
    return (
        <>
            <tr className='w-full h-16 border-b hover:shadow-lg'>
                <td className='h-full w-[5%]  font-bold text-xs text-center'>
                    <input type="checkbox" name="" id="" />
                </td>
                <td className='h-full w-[25%] font-bold text-xs'>{username}</td>
                <td className='h-full w-[25%] font-bold text-xs'>{url}</td>
                {status ?
                    e.credit ? <td className='h-full w-[15%] font-bold text-xs text-[#34C38F]'>Approve</td> : <td className='h-full w-[15%] font-bold text-xs text-[#CE0000]'>Rejected</td>

                    : <td className='h-full w-[15%] font-bold text-xs text-[#F4B000]'>Pending</td>
                }
                <td className='h-full w-[20%] font-bold text-xs'>
                    <div className="h-full w-full flex gap-5">
                        <button className='w-14 h-8 rounded-lg bg-[#34C38F] text-white font-bold text-xs' onClick={() => setApproveAlert(true)}>Approve</button>
                        <button className='w-14 h-8 rounded-lg bg-[#CE0000] text-white font-bold text-xs' onClick={() => setRejectedAlert(true)}>Reject</button>
                    </div>
                </td>
            </tr>

            {approveAlert && <div className="fixed h-screen w-full bg-black/10 top-0 left-0 z-50 flex justify-center items-center">
                <div className="bg-white w-[500px] rounded-lg p-5 space-y-10">

                    <div className="flex justify-between w-full">
                        <div className="">
                            <p className='font-bold text-2xl'>Approve</p>
                            <p className='text-sm text-[#A5A5A5]'>Lorem ipsum olor sit amet</p>
                        </div>
                        <div className="flex items-center gap-5">
                            <p className='font-bold text-sm text-[#6418C3]'>Generate Invoice</p>
                            <Close className='font-bold text-[#A5A5A5]' fontSize='small' onClick={() => { setApproveAlert(false) }} />
                        </div>
                    </div>

                    <div className="space-y-3">
                        <p className='font-bold text-xs'>Enter Amount</p>
                        <div className="flex gap-5 items-center">
                            <input className='w-[240px] h-[45px] rounded-xl bg-white border pl-5' type="number" value={credit} onChange={e => setCredit(Number(e.target.value))} />
                            <button className='w-11 h-11 bg-[#0062F4] rounded-2xl text-white font-bold text-lg' onClick={() => { setCredit(credit + 5) }}>+</button>
                            <button className='w-11 h-11 bg-[#0062F4] rounded-2xl text-white font-bold text-lg' onClick={() => { setCredit(credit - 5) }}>-</button>
                        </div>
                    </div>

                    <button className='w-[140px] h-12 bg-[#34C38F] rounded-xl text-white font-bold text-xs' onClick={ApproveCredit}>Approve Payment</button>

                </div>
            </div>}

            {
                rejectedAlert && <div className="fixed h-screen w-full bg-black/10 top-0 left-0 z-50 flex justify-center items-center">
                    <div className="bg-white w-[500px] rounded-lg p-5 space-y-10">

                        <div className="flex justify-between w-full">
                            <div className="">
                                <p className='font-bold text-2xl'>Reject</p>
                                <p className='text-sm text-[#A5A5A5]'>Lorem ipsum olor sit amet</p>
                            </div>
                            <div className="flex items-center gap-5">

                                <Close className='font-bold text-[#A5A5A5]' fontSize='small' onClick={() => { setRejectedAlert(false) }} />
                            </div>
                        </div>

                        <p className='text-center font-bold'>Do you want to reject this banner ?</p>

                        <div className="flex justify-between">

                            <button className='w-[140px] h-12 bg-[#CE0000] rounded-xl text-white font-bold text-xs' onClick={() => { RefuceCredit(); setRejectedAlert(false) }}>Reject</button>
                            <button className='w-[140px] h-12 bg-[#34C38F] rounded-xl text-white font-bold text-xs' onClick={() => { setRejectedAlert(false) }}>Close</button>
                        </div>

                    </div>
                </div>

            }

        </>
    )
}