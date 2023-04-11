import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import BackendIP from '../../../../BackendIP'
import Buttons from './Buttons'

function Earn() {
    const {username} = useSelector(state=>state.user)
    const [url, setUrl] = useState('')
    return (
        <div className='h-full w-full space-y-5'>
            <h1 className='text-2xl font-bold'>Earn Free Credit</h1>
            <Buttons />
            <div className="border w-full rounded-xl">
                <div className=" w-full   flex justify-left items-center text-lg font-semibold border-b p-5">Already Placed our banner? Inform us where we can find it</div>

                <div className="p-5 flex flex-wrap items-center gap-10">
                    <span className="font-semibold">Banner place on</span>
                    <input onChange={e=>{setUrl(e.target.value)}} type="text" className="border-2 h-10 w-full rounded-lg px-5  border-black" placeholder="https://" value={url} />
                    {/* <div className="bg-red-500 h-8 px-5 flex justify-center items-center rounded-xl font-semibold">Not Submitted</div> */}
                    <button className=" h-10  px-6 rounded-full md:text-xl   shadow-md shadow-red-500 hover:shadow-lg hover:shadow-red-500" onClick={()=>{
                        axios.post(`${BackendIP}/banner`,{username,url})
                        window.alert('Url is Submitted')
                    }}>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Earn