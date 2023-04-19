import axios from 'axios'
import React, { useEffect, useState } from 'react'

import BackendIP from '../../../../BackendIP'



import { HomeAnalatics } from './Home'
import { useSelector } from 'react-redux'


function Analatics() {
    const {username} = useSelector(state=>state.user)
   const [ads, setAds] = useState([])

   useEffect(() => {
    axios.get(`${BackendIP}/ads/get-user-ads`, { params: { username } }).then(res => {
        setAds(res.data)
    })
   }, [username])
   
    return (
        <div className="space-y-5">
            <HomeAnalatics ads={ads} />
        </div>
    )
}

export default Analatics