import axios from 'axios'
import React, { useEffect, useState } from 'react'
import BackendIP from '../../BackendIP'
import { FavoriteOutlined } from '@mui/icons-material'
import FilterBar from './components/FilterBar'
import { Link } from 'react-router-dom'

function Filter() {
  const [ads, setAds] = useState([])
  useEffect(() => {
    axios.get(`${BackendIP}/ads/get-all-ads`).then(res => {
      setAds(res.data)
    })

  }, [])

  return (
    <div className="pt-44 pb-24 bg-black space-y-5">
      <FilterBar />

      <div className="flex justify-center items-center px-14">
        <div className="w-full h-60 rounded-xl bg-[#4D3A66]"></div>
      </div>

      <div className="profiles space-y-5">
        <div className="platinum flex flex-wrap justify-center items-center gap-4">
          {ads.map(e => e.tier === 'platinum' && <Platinum {...e} />)}
        </div>
        <div className="gold flex flex-wrap justify-center items-center gap-4">
          {ads.map(e => e.tier === 'gold' && <Gold {...e} />)}
        </div>
        <div className="silver flex flex-wrap justify-center items-center gap-4">
          {ads.map(e => e.tier === 'silver' && <Silver {...e} />)}
        </div>
        <div className="none flex flex-wrap justify-center items-center gap-3">
          {ads.map(e => e.tier === 'none' && <None {...e} />)}
        </div>
      </div>
    </div>




  )
}

export default Filter


const Platinum = ({ id, adsTitle, intro, profilePhoto }) => {
  return (
    <Link to={'/profile/' + id}>
      <div className="w-[220px] h-[450px] p-1 space-y-3" style={{ background: 'linear-gradient(0deg, #FF0000 -51.52%, #BE1722 100%)', }}>
        <div className="profilephoto w-full h-56">
          <img src={profilePhoto} className='w-full h-full object-cover object-top' alt="" />
        </div>
        <div className="title w-full flex justify-between items-center">
          <p className='capitalize text-lg font-bold'>{adsTitle}</p>
          <FavoriteOutlined />
        </div>
        <p className='overflow-hidden text-[10px] text-justify pb-3'>{intro}</p>
      </div>
    </Link>
  )
}

const Gold = ({ id, adsTitle, intro, profilePhoto }) => {
  return (
    <Link to={'/profile/' + id}>

      <div className="w-[220px] h-[450px] p-1 space-y-3" style={{ background: 'linear-gradient(162.09deg, #663500 0%, #B28A4C 48.44%, #FDEDC9 100.18%, #D0AD6A 100.18%)', }}>
        <div className="profilephoto w-full h-56">
          <img src={profilePhoto} className='w-full h-full object-cover object-top' alt="" />
        </div>
        <div className="title w-full flex justify-between items-center">
          <p className='capitalize text-lg font-bold'>{adsTitle}</p>
          <FavoriteOutlined />
        </div>
        <p className='overflow-hidden text-[10px] text-justify pb-3'>{intro}</p>
      </div>
    </Link>
  )
}

const Silver = ({ id, adsTitle, intro, profilePhoto }) => {
  return (
    <Link to={'/profile/' + id}>

      <div className="w-[220px] h-[370px] p-1 space-y-3" style={{ background: 'linear-gradient(0deg, #FFFFFF 0%, #BEBEBE 39.28%, #C8C8C8 59.71%, #C9C9C9 69.33%, #CFCFCF 79.97%, #AAAAAA 88.25%, #9F9F9F 95%, #C8C8C8 100%)', }}>
        <div className="profilephoto w-full h-52">
          <img src={profilePhoto} className='w-full h-full object-cover object-top' alt="" />
        </div>
        <div className="title w-full flex justify-between items-center">
          <p className='capitalize text-lg font-bold'>{adsTitle}</p>
          <FavoriteOutlined />
        </div>
        <p className='overflow-hidden text-[10px] text-justify pb-3'>{intro}</p>
      </div>
    </Link>
  )
}

const None = ({ id, adsTitle, intro, profilePhoto }) => {
  return (
    <Link to={'/profile/' + id}>

      <div className="w-[190px] h-[370px] p-1 space-y-3 " style={{ background: 'white', }}>
        <div className="profilephoto w-full h-44">
          <img src={profilePhoto} className='w-full h-full object-cover object-top' alt="" />
        </div>
        <div className="title w-full flex justify-between items-center">
          <p className='capitalize text-lg font-bold'>{adsTitle}</p>
          <FavoriteOutlined />
        </div>
        <p className='overflow-hidden text-[10px] text-justify pb-3'>{intro}</p>
      </div>
    </Link>
  )
}