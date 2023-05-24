import axios from 'axios'
import React, { useEffect, useState } from 'react'
import BackendIP from '../../../BackendIP'
import { Link } from 'react-router-dom'

function Screen5() {
    return (
        <div className='w-full' >
            <Section id={[24, 29, 44, 14]} location={'Dubai'} color={'#fff'} />
            <Section id={[29, 44, 14, 24]} location={'Thailand'} color={'#CA3A31'} />
            <Section id={[44, 14, 24, 29]} location={'UK'} color={'#fff'} />
            <Section id={[14, 24, 29, 44]} location={'Bangalore'} color={'#CA3A31'} />
        </div>
    )
}

export default Screen5

const Section = ({ id,color,location }) => {


    return (
        <section className={`w-full h-screen sticky top-0  flex justify-between px-5`} style={{backgroundColor:color}} >
            <BigProfile id={id[0]} location={location} color={color} />
            <div className="h-full w-[25%] p-3 flex justify-center items-end">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est omnis quo amet ipsam quibusdam sequi tenetur, similique non nihil assumenda dolorem nesciunt enim molestias beatae! Atque rem mollitia cumque corporis?</p>
            </div>
            <div className={`h-full w-[25%]  p-3 flex flex-col justify-center items-center gap-5`}>
                <SmallProfile id={id[1]} />
                <SmallProfile id={id[2]} />
                <SmallProfile id={id[3]} />
            </div>

        </section>
    )
}

const BigProfile = ({ id,location,color }) => {
    const [ads, setAds] = useState({})
    useEffect(() => {
        axios.get(`${BackendIP}/ads/get-by-id`, { params: { id } }).then(res => {
            setAds(res.data)
        })
    }, [id])

    return (
        <Link to={'/profile/' + id} className='h-full w-1/2'>
            <div className="h-full w-full  flex justify-between">
                <div className="h-full w-[10%] flex justify-center items-end py-32">
                    <p className={`rotate-[270deg]  text-4xl shrink-0  ${color==='#fff' ? 'text-[#CA3A31]' : 'text-white'}`}>{location}</p>
                </div>
                <div className="h-full w-[80%]">
                    <img src={BackendIP + ads.profilePhoto} className='w-full h-full object-cover' alt="" />
                </div>
                <div className="h-full w-[10%] flex justify-center items-baseline py-32">
                <p className={`rotate-[270deg]  text-2xl shrink-0  ${color==='#fff' ? 'text-[#CA3A31]' : 'text-white'}`}>Red Light Club</p>
                </div>
            </div>
        </Link>
    )
}

const SmallProfile = ({ id }) => {
    const [ads, setAds] = useState({})
    useEffect(() => {
        axios.get(`${BackendIP}/ads/get-by-id`, { params: { id } }).then(res => {
            setAds(res.data)
        })
    }, [id])
    return (
        <div className="h-[30%] w-full border border-black">
            <img src={BackendIP + ads.profilePhoto} className='w-full h-full object-cover object-top' alt="" />
        </div>
    )
}