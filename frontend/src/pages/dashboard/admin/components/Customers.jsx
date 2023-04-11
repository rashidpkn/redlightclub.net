import axios from 'axios'
import React, { useEffect, useState } from 'react'
import BackendIP from '../../../../BackendIP'


function Customers() {
    const [data, setData] = useState([])
    const fetchData = () => {
        axios.get(`${BackendIP}/user`).then(res => {
            console.log(res.data)
            setData(res.data)
        })
    }
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className='h-full w-full space-y-5'>
            <h1 className='text-2xl font-bold'>Customers</h1>
            <table className='w-full'>
                <thead className='w-full'>
                    <tr className='border w-full'>
                        <th className='w-[10%] border'>SL NO</th>
                        <th className='w-[20%] border'>Username</th>
                        <th className='w-[20%] border'>Email</th>
                        <th className='w-[20%] border'>role</th>
                        <th className='w-[15%] border'>verified</th>
                        <th className='w-[15%] border'>Credit</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(e => <tr className='hover:bg-gray-300 text-center border'>
                            <td className='border py-5'>{e.id}</td>
                            <td className='border py-5'>{e.username}</td>
                            <td className='border py-5'>{e.email}</td>
                            <td className='border py-5'>{e.role}</td>
                            <td className='border py-5'>{e.verified ? "verified" : "Not Verified"}</td>
                            <td className='border py-5'>{e.credit}</td>
                        </tr>)
                    }


                </tbody>
            </table>
        </div>
    )
}

export default Customers