import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import BackendIP from '../../BackendIP'
import { DesktopFilter } from './components/DesktopFilter'
import Gold from './components/Gold'

import MainFilter from './components/MainFilter'
import MobileFilter from './components/MobileFilter'
import None from './components/None'
import Platinum from './components/Platinum'
import Silver from './components/Silver'

function Filter() {
    const [ads, setAds] = useState([])
    const { showFilter } = useSelector(state => state.util.filter)
    const { hair, eye, price, age, nationality, location, height, weight } = useSelector(state => state.filter)
    const fetchData = () => {
        axios.get(`${BackendIP}/ads/get-all-ads`).then(res => {
            setAds(res.data)
        })
    }
    useEffect(() => {
        fetchData()
    }, [])

    useEffect(() => {
        if (showFilter) {
            fetchData()
        }
    }, [showFilter])

    return (
        <div style={{ background: 'linear-gradient(rgb(112, 16, 19), rgb(92, 12, 18), rgb(72, 9, 15), rgb(53, 7, 9), rgb(37, 0, 0))' }} className=' min-h-screen w-full lg:px-[5%] space-y-5 py-5'>
            <div className="h-36 w-full bg-white"></div>
            <MainFilter />
            <div className="flex gap-5 flex-wrap">
                {
                    ads.map(e => e.tier === 'platinum' && <Platinum {...e} />)
                }
            </div>
            <div className="flex gap-5 flex-wrap">
                {ads.map(e => e.tier === 'gold' && <Gold {...e} />)}
            </div>
            <div className="flex gap-5 flex-wrap">
                {ads.map(e => e.tier === 'silver' && <Silver {...e} />)}
            </div>
            <div className="flex gap-5 flex-wrap px-3 lg:px-0">
                {
                    ads.map(e =>
                        (e.tier === 'none') &&
                        (hair ? e.hair === hair : true) &&
                        (location ? e.location === location : true) &&
                        (eye ? e.eye === eye : true) &&
                        (nationality ? e.nationality === nationality : true) &&
                        (e.inCall.oneHourIn >= price.from && e.inCall.oneHourIn <= price.to) &&
                        (e.age >= age.from && e.age <= age.to) &&
                        (e.height >= height.from && e.height <= height.to) &&
                        (e.weight >= weight.from && e.weight <= weight.to) &&
                        e.visibility === true && e.vacation === false &&
                        <None adsTitle={e.adsTitle} age={e.age} introduction={e.intro} profilePhoto={e.profilePhoto} id={e.id} />)
                }
            </div>
            {showFilter && <>
                <MobileFilter />
                <DesktopFilter />
            </>}
        </div>
    )
}

export default Filter

