import axios from 'axios'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import BackendIP from '../../../BackendIP'

function ReportAds({adsTitle}) {
    const [reason, setReason] = useState('Fake account')
    const {username} = useSelector(state=>state.user)

    return (
        <div className="z-20 absolute -bottom-72 -right-5 h-72 w-72 bg-white border rounded-md p-5 space-y-5 overflow-y-scroll sc">
            <button className={` h-10 w-full ${reason==='Fake account' ? 'border-2' : 'border' }  border-black`} onClick={()=>{setReason('Fake account')}}>Fake account</button>
            <button className={` h-10 w-full ${reason==='Abuse contact' ? 'border-2' : 'border' }  border-black`} onClick={()=>{setReason('Abuse contact')}}>Abuse contact</button>
            <button className={` h-10 w-full ${reason==='Spam' ? 'border-2' : 'border' }  border-black`} onClick={()=>{setReason('Spam')}}>Spam</button>
            <button className={` h-10 w-full ${reason==='Other' ? 'border-2' : 'border' }  border-black`} onClick={()=>{setReason('Other')}}>Other</button>
            <input className='h-10 w-full border border-black pl-5' type="text" placeholder='Other' onChange={e=>setReason(e.target.value)} /> 
            <button className='h-10 w-full border border-black' onClick={()=>{
                if(username){
                    axios.post(`${BackendIP}/report`,{username,reason,adsTitle}).then(res=>{
                        if(res.data===true){
                            window.alert("This Ads Profile is reported")
                        }
                    }).catch(err=>{window.alert(err.message)})
                }else{
                    window.alert("Please Login First , Then report the profile")
                }
                
            }}>Submit</button>
        </div>
    )
}

export default ReportAds