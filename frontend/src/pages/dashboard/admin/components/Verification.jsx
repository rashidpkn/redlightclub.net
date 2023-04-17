import { Close } from '@mui/icons-material'
import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import BackendIP from '../../../../BackendIP'


function Verification() {
    const fetchdata = () => {
        axios.get(`${BackendIP}/verify`).then(res => {
            setVerifyAds(res.data)
        })
    }

    useEffect(() => {
        fetchdata()
    }, [])

    const [verifyAds, setVerifyAds] = useState([])
    return (
        <div className='h-full w-full space-y-5'>
            <h1 className='text-2xl font-bold'>Verification</h1>
            <table className='bg-white rounded-md w-full '>
                <thead className='w-full font-bold text-sm'>
                    <tr className='w-full h-16 border-b'>
                        <th className='w-[5%] h-full text-start'></th>
                        <th className='w-[20%] h-full text-start'>Profile</th>
                        <th className='w-[20%] h-full text-start'>Date</th>
                        <th className='w-[20%] h-full text-start'>Status</th>
                        <th className='w-[35%] h-full text-start'>Action</th>
                    </tr>
                </thead>
                <tbody className='w-full'>
                    {
                        verifyAds.map(e => { return (<TableBody{...e} fetchdata={fetchdata} />) })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Verification


const TableBody = ({ id, adsTitle, verificationImage, fetchdata, updatedAt, verificationRequest }) => {
    const [viewImage, setviewImage] = useState(false)
    return (
        <>
            <tr className='w-full h-16 border-b hover:shadow-lg text-sm'>
                <td className='w-[5%] h-full text-center'>
                    <input type="checkbox" name="" id="" />
                </td>
                <td className='w-[20%] h-full text-xs font-bold'>{adsTitle}</td>
                <td className='w-[20%] h-full text-xs'>{updatedAt}</td>
                <td className='w-[20%] h-full text-xs'>{verificationRequest ? 'Pending' : 'Done'}</td>
                <td className='w-[35%] h-full text-xs'>
                    <div className="flex justify-center items-center gap-3">

                        <button className='border bg-[#0062F4] px-3 py-2 rounded-lg text-white' onClick={() => { setviewImage(true) }}>View Details</button>



                        <button className='border bg-[#D80027] px-3 py-2 rounded-lg text-white' onClick={() => {
                            axios.post(`${BackendIP}/verify/unverify`, { id }).then(res => {
                                window.alert('unverified')
                                fetchdata()
                            })
                        }}>Reject</button>

                        <button className='border bg-[#34C38f] px-3 py-2 rounded-lg text-white' onClick={() => {
                            axios.post(`${BackendIP}/verify/verify`, { id }).then(res => {
                                window.alert('verified')
                                fetchdata()
                            })
                        }}>Mark Verfied</button>

                    </div>
                </td>

            </tr>
            {
                viewImage && <div className="fixed top-0 left-0 h-full w-full border flex justify-center items-center">
                    <div className="h-96 w-96 border bg-white">
                        <div className="h-24 flex justify-between items-center px-5">
                            <div className=""></div>
                            <div className="">Verify Image</div>
                            <div className="" onClick={() => { setviewImage(false) }}><Close /></div>
                        </div>
                        <div className="h-[calc(100%-6rem)] w-full">
                            <img src={`${BackendIP}${verificationImage}`} className='w-full h-full object-cover object-top' alt="verificationImage" />
                        </div>
                    </div>
                </div>
            }
        </>
    )
}