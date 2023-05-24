import axios from 'axios'
import React, { useEffect, useState } from 'react'
import BackendIP from '../../../BackendIP'
import { Link } from 'react-router-dom'

function Screen5() {
    return (
        <div className='w-full   sc' >
            <Section id={[24, 29, 44, 14]} />
            <Section id={[29, 44, 14, 24]} />
            <Section id={[44, 14, 24, 29]} />
            <Section id={[14, 24, 29, 44]} />
        </div>
    )
}

export default Screen5

const Section = ({ id }) => {


    return (
        <section className={`w-full h-screen sticky top-0  flex justify-between px-5 bg-white`} >
            <BigProfile id={id[0]} />
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

const BigProfile = ({ id }) => {
    const [ads, setAds] = useState({})
    useEffect(() => {
        axios.get(`${BackendIP}/ads/get-by-id`, { params: { id } }).then(res => {
            setAds(res.data)
        })
    }, [id])

    return (
        <Link to={'/profile/' + id} className='h-full w-1/2'>
            <div className="h-full w-full  flex justify-between">
                <div className="h-full w-1/6"></div>
                <div className="h-full w-4/6">
                    <img src={BackendIP + ads.profilePhoto} className='w-full h-full object-cover' alt="" />
                </div>
                <div className="h-full w-1/6"></div>
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