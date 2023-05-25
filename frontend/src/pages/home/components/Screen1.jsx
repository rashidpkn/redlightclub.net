import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setRegion } from '../../../redux/slice/utilSlice'
import states from './states'
import BackendIP from '../../../BackendIP'
import { Link } from 'react-router-dom'

function Screen1() {

    const [state, setState] = useState([])
    const [country, setCountry] = useState('')
    const dispatch = useDispatch()
    const { region } = useSelector(state => state.util)
    const [countryCode, setCountryCode] = useState('')
    const [ads, setAds] = useState([])

    useEffect(() => {
      axios.get(`${BackendIP}/ads/get-all-ads`).then(res=>{
            setAds(res.data)
      })
    }, [])
    

    useEffect(() => {
        axios.get('https://api.country.is').then(res => {
            setCountryCode(res.data.country)
            setCountry(states.find(e => e.iso2 === res.data.country).name)
            setState(states.find(e => e.iso2 === res.data.country).states);
        }).catch(err => {
            console.log(err.message);
        })
    }, [])

    return (
        <div className='h-screen bg-cover bg-center bg-no-repeat relative' style={{ backgroundImage: "url('/images/home/Home banner-2.png')" }}>


            <div className="absolute bottom-0 w-full h-[286px]" style={{background:'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%)'}}  ></div>

            <div className="absolute bottom-32 left-0  bg-black/20 p-4 text-white space-y-2">
                <p className='text-2xl font-semibold'>Show listings from</p>
                <p className='text-lg '>Get top from your locations with <br /> just a simple search.</p>
                <div className="w-[380px] h-[45px] border border-white">
                    <select type="text"  className='w-[calc(100%-110px)] h-full bg-transparent  pl-5 outline-none' placeholder='Search Location'>
                        <option className='text-black' value="">Search Location</option>
                        <option className='text-black' value="Dubai">Dubai ({ads.filter(e=>e.region === 'Dubai').length}) </option>
                        <option className='text-black' value="Thailand">Thailand ({ads.filter(e=>e.region === 'Thailand').length}) </option>
                        <option className='text-black' value="UK">UK ({ads.filter(e=>e.region === 'UK').length}) </option>
                    </select>
                    <Link to={'/filter'}>
                        <button className='w-[110px] h-full bg-white text-black'>Search</button>    
                    </Link>
                </div>
            </div>


            <div className="absolute bottom-32 right-0  w-96 bg-black/20 pl-4 py-4 text-white space-y-2 rounded-l-lg backdrop-blur-md">
                <div className="flex items-center gap-3">
                    <img src={`https://flagsapi.com/${countryCode}/flat/64.png`} width={40} alt="" />
                    <h2 className='text-lg font-medium'>Hey there, Are you from {country}? </h2>
                </div>
                <p className='text-[13px] text-[#F8F4F5]'>Choose from these recommended locations</p>
                <div className="flex gap-2 overflow-y-auto">
                    {state.map(e => <button className={` px-2 h-12 min-w-fit border border-white rounded-sm ${region === e.name && 'border-yellow-300'}`} onClick={() => { dispatch(setRegion(e.name)) }}>{e.name}</button>)}
                </div>
            </div>
            

            {/* <div className="absolute mx-auto inset-x-0 text-center  bottom-28 text-white  space-y-5">
                <p className='font-bold text-2xl'>Show Listings from</p>
                <select name="" id="" className='w-[381px] h-11 rounded-lg border border-white bg-black/20 pl-6 '>
                    <option value="">Select Location</option>
                    <option value="Dubai">Dubai</option>
                    <option value="UK">UK</option>
                    <option value="Thailand">Thailand</option>
                </select>
            </div> */}
        </div>
    )
}

export default Screen1