import axios from 'axios'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import BackendIP from '../../../BackendIP'
import { setQno } from '../../../redux/slice/utilSlice'


function Q10() {
    const dispatch = useDispatch()
    const { ads, user } = useSelector(state => state)
    const { username, email } = user
    const navigate = useNavigate()
    const {region} = useSelector(state=>state.util)
    return (
        <div className='flex flex-col justify-center items-center gap-10 h-full'>
            <button
                className='h-12 w-36 bg-red-800 rounded-md'
                onClick={() => {
                    axios.post(`${BackendIP}/ads/create`, { ads, username, email,region }).then(res => {
                        if (res.data.status) {
                            window.alert("Ads is created")
                            navigate('/dashboard')
                            dispatch(setQno(1))
                        }
                    })
                }}>
                Publish Your Ads
            </button>
        </div>
    )
}

export default Q10