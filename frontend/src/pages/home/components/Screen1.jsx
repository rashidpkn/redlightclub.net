import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setRegion } from '../../../redux/slice/utilSlice'
import states from './states'

function Screen1() {
    
    const [state, setState] = useState([])
    const [country, setCountry] = useState('')
    const dispatch = useDispatch()
    const {region} = useSelector(state=>state.util)
    const [countryCode, setCountryCode] = useState('')
    useEffect(() => {
            axios.get('https://api.country.is').then(res => {
                setCountryCode(res.data.country)
                    setCountry(states.find(e=>e.iso2 === res.data.country).name)
                    setState(states.find(e=>e.iso2=== res.data.country).states);
        }).catch(err=>{
            console.log(err.message);
        })
    }, [])

    return (
        <div className='h-screen bg-cover bg-center bg-no-repeat relative' style={{ backgroundImage: "url('/images/home/Home banner-2.png')" }}>
            <div className="absolute top-56 right-0  w-96 bg-black/20 p-4 text-white space-y-2 rounded-lg backdrop-blur-md">
                <div className="flex items-center gap-3"> 
                <img src={`https://flagsapi.com/${countryCode}/flat/64.png`} width={40} alt="" />
                <h2 className='text-lg font-medium'>Hey there, Are you from {country}? </h2> 
                </div>
                <p className='text-[13px]'>Choose from these recommended locations</p>
                <div className="flex gap-2 overflow-y-auto">
                    {state.map(e=><button className={` px-2 h-12 min-w-fit border border-white rounded-sm ${region === e.name && 'border-yellow-300'}`} onClick={()=>{dispatch(setRegion(e.name))}}>{e.name}</button>)}
                </div>
            </div>
            <div className="absolute mx-auto inset-x-0 text-center  bottom-28 text-white  space-y-5">
                <p className='font-bold text-2xl'>Show Listings from</p>
                <select name="" id="" className='w-[381px] h-11 rounded-lg border border-white bg-black/20 pl-6 '>
                    <option value="">Select Location</option>
                </select>
            </div>
        </div>
    )
}

export default Screen1