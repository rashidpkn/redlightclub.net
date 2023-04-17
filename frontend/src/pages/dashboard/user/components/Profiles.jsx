import { Add } from '@mui/icons-material'
import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import BackendIP from '../../../../BackendIP'
import { useDispatch, useSelector } from 'react-redux'
import { setId } from '../../../../redux/slice/utilSlice'

function Profiles() {
    const {username} = useSelector(state=>state.user)
    const [ads, setAds] = useState([])
    useEffect(() => {
        axios.get(`${BackendIP}/ads/get-user-ads`,{params:{username}}).then(res=>{
            setAds(res.data)
        })
    
    }, [username])
    
  return (
    <div className='space-y-5'>
        <div className="flex justify-between items-center">
            <p className='text-2xl font-bold'>Profile</p>
            <div className="flex gap-5 text-white text-sm font-bold">
                <button className='px-4 py-3 rounded-xl bg-[#6418C3] hover:shadow-xl'>Setup Ads</button>
                <Link to={'/new-ads'}>
                    <button className='px-4 py-3 rounded-xl bg-[#34C38F] hover:shadow-xl'><Add/> Add New Profile</button>
                </Link> 
            </div>
        </div>
        <div className="flex flex-wrap justify-start items-center gap-4">
            {ads.map(e=><Card {...e} />)}
            
        </div>
    </div>
  )
}

export default Profiles

const Card = ({adsTitle,profilePhoto,id})=>{
    const dispatch = useDispatch()
    const navigate = useNavigate()
    return(
        <div className="w-[170px]  rounded-xl p-2 bg-white flex flex-col items-center gap-1 hover:shadow-xl">
            <div className="h-[145px] w-full rounded-md bg-[#F6EEFF]">
                <img src={profilePhoto} className='w-full h-full object-cover object-top rounded-md' alt="" />
            </div>
            <p className='text-xs font-bold'>{adsTitle}</p>
            <p className='text-[8px] font-bold text-[#38E25D]'>Active</p>
            <button className='w-full h-9 rounded-lg bg-[#6418C3] text-white' onClick={()=>{
                dispatch(setId(id))
                navigate('/dashboard/view')
            }}>View Profile</button>

<button className='w-full h-9 rounded-lg bg-[#6418C3] text-white' onClick={()=>{
                dispatch(setId(id))
                navigate('/dashboard/verify')
            }}>Verify Ads</button>

        </div>
    )
}