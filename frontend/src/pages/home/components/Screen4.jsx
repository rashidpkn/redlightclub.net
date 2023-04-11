import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BackendIP from '../../../BackendIP'

function Screen4() {
  const [ads, setAds] = useState([])
  const fetchData = () => {
    axios.get(`${BackendIP}/ads/get-all-ads`).then(res => {
      setAds(res.data.sort((a, b) => a.id - b.id))
    })
  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div className='lg:hidden w-full sticky top-0 p-[5%] bg-[#1e1e1e] space-y-10' >
        <Profile {...ads.find(e => e.id === 2)} />
        <Profile {...ads.find(e => e.id === 3)} />
        <Profile {...ads.find(e => e.id === 4)} />
        <Profile {...ads.find(e => e.id === 5)} />
        <Profile {...ads.find(e => e.id === 6)} />
        <Profile {...ads.find(e => e.id === 7)} />
        <Profile {...ads.find(e => e.id === 8)} />
        <Profile {...ads.find(e => e.id === 11)} />
        <Profile {...ads.find(e => e.id === 12)} />
    </div>
  )
}

export default Screen4


const Profile = ({ profilePhoto, adsTitle, location,id }) => {
  const navigate = useNavigate()
  return (
    <div className=" h-[50vh]" onClick={()=>navigate(`profile/${id}`)}>
      <img src={`${profilePhoto}`} className='h-5/6 w-full object-cover object-top' alt="" />
      <div className="flex flex-col justify-between w-full h-1/6 p-3">
        <p className='text-red-600 text-2xl'>{adsTitle}</p>
        <p className='text-white'>{location}</p>
      </div>
    </div>
  )
}