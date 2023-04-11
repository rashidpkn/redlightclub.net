import { Close } from '@mui/icons-material'
import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import BackendIP from '../../../../BackendIP'


function Verification() {
    const fetchdata = () =>{
        axios.get(`${BackendIP}/verify`).then(res=>{
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
            <table className='w-full'>
                <thead className='w-full'>
                    <tr className='border w-full'>
                        <th className='w-[10%] border'>SL NO</th>
                        <th className='w-[20%] border'>Ads Title</th>
                        <th className='w-[20%] border'>Verifcation Image</th>
                        <th className='w-[20%] border'>Verify</th>
                        <th className='w-[15%] border'>Unverify</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        verifyAds.map(e=>{ return(<TableBody{...e} fetchdata={fetchdata} />) })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Verification


const TableBody = ({id,adsTitle,verificationImage,fetchdata}) => {
    const [viewImage, setviewImage] = useState(false)
    return (
        <>
            <tr className='hover:bg-gray-300 text-center border'>
                <td className='border py-5'>{id}</td>
                <td className='border py-5'>{adsTitle}</td>
                <td className='border py-5'> <button className='border bg-red-500 px-3 py-2 rounded-lg text-white' onClick={() => { setviewImage(true) }}>View Image</button></td>
                <td className='border py-5'> <button className='border bg-red-500 px-3 py-2 rounded-lg text-white' onClick={()=>{axios.post(`${BackendIP}/verify/verify`,{id}).then(res=>{
                    window.alert('verified')
                    fetchdata()
                })}}>Verify</button></td>
                <td className='border py-5'> <button className='border bg-red-500 px-3 py-2 rounded-lg text-white' onClick={()=>{axios.post(`${BackendIP}/verify/unverify`,{id}).then(res=>{
                    window.alert('unverified')
                    fetchdata()
                })}}>Unverify</button></td>

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
                                <img src={`${BackendIP}${verificationImage}`} alt="verificationImage" />
                        </div>
                    </div>
                </div>
            }
        </>
    )
}