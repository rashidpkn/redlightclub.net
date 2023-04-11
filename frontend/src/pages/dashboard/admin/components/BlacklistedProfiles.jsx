import React, { useEffect, useState } from 'react'
import lensIcon from '../../../../asset/icons/dashboard/profile/lens.svg'
import positive from '../../../../asset/icons/dashboard/blacklisted/positive.svg'
import negative from '../../../../asset/icons/dashboard/blacklisted/negative.svg'
import axios from 'axios'
import BackendIP from '../../../../BackendIP'
import { useSelector } from 'react-redux'
import { Close } from '@mui/icons-material'


function BlacklistedProfiles() {
    const [blacklistedProfiles, setBlacklistedProfiles] = useState([])
    const fetchData = () => {
        axios.get(`${BackendIP}/blacklist`).then(res => {
            setBlacklistedProfiles(res.data)
        })
    }
    useEffect(() => {
        fetchData()
    }, [])

    const [selectedAds, setSelectedAds] = useState([])



    return (
        <div className="space-y-5">
            <Menu selectedAds={selectedAds} blacklistedProfiles={blacklistedProfiles} setBlacklistedProfiles={setBlacklistedProfiles} fetchData={fetchData} />
            <table className='bg-white rounded-md w-full '>
                <thead className='w-full font-bold text-sm'>
                    <tr className='w-full h-16 border-b'>
                        <th className='h-full w-[5%]  text-start'></th>
                        <th className='h-full w-[15%] text-start'>Profile</th>
                        <th className='h-full w-[15%] text-start'>Report Date</th>
                        <th className='h-full w-[30%] text-start'>Reason</th>
                        <th className='h-full w-[15%] text-start'>Votes</th>
                        <th className='h-full w-[20%] text-start'>Profile Status</th>
                    </tr>
                </thead>
                <tbody className='w-full '>
                    {
                        blacklistedProfiles.map(e => <BlacklistedProfile selectedAds={selectedAds} setSelectedAds={setSelectedAds} {...e} fetchData={fetchData} />)
                    }


                </tbody>

            </table>
        </div>
    )
}

export default BlacklistedProfiles

const BlacklistedProfile = ({ adsTitle, adsId, message, createdAt, vote, id, fetchData, selectedAds, setSelectedAds }) => {
    const { username } = useSelector(state => state.user)
    const Vote = (response) => {

        axios.post(`${BackendIP}/blacklist/vote`, { username, response, id }).then(res => {
            if (res.data) {
                window.alert("Voting is successfull")
            } else {
                window.alert("You are already Voted")
            }
            fetchData()
        })

    }

    return (
        <tr className='w-full h-16 border-b hover:shadow-lg'>
            <td className='h-full w-[5%] text-center'>
                <input type="checkbox" name="" id="" onChange={e => e.target.checked ? setSelectedAds([...selectedAds, adsId]) : setSelectedAds(selectedAds.filter(e => e !== adsId))} />
            </td>
            <td className='h-full w-[15%] '>
                <div className="h-full w-full flex items-center gap-3">
                    <div className="w-8 h-8 bg-black rounded-md"></div>
                    <div className="">
                        <p className='font-bold text-xs'>{adsTitle}</p>
                        <p className='text-xs'>India</p>
                    </div>
                </div>
            </td>
            <td className='h-full w-[15%] text-xs'>{createdAt}</td>
            <td className='h-full w-[30%] text-xs'>{message}</td>
            <td className='h-full w-[15%]'>
                <div className="w-full h-full flex gap-3 text-sm font-bold">
                    <button className='flex gap-2' onClick={() => { Vote(true) }}> <img src={positive} alt="" />{vote.filter(ev => ev.response === true).length}</button>
                    <button className='flex gap-2' onClick={() => { Vote(false) }}><img src={negative} alt="" />{vote.filter(ev => ev.response === false).length}</button>
                </div>
            </td>
            <td className='h-full w-[20%] text-xs text-[#38E25D]'><p>Active</p></td>
        </tr>
    )
}


const Menu = ({ selectedAds, blacklistedProfiles, setBlacklistedProfiles, fetchData }) => {
    const [adsTitle, setAdsTitle] = useState('')
    const deactivate = () => {
        if (selectedAds.length) {
            // eslint-disable-next-line
            selectedAds.map(e => {
                axios.post(`${BackendIP}/ads/block`, { id: e })
            })
            window.alert("Ads is blocked")
        } else {
            window.alert("Please select any ads")
        }
        setDeactiveAlert(false)
    }

    const activate = () => {
        if (selectedAds.length) {
            // eslint-disable-next-line
            selectedAds.map(e => {
                axios.post(`${BackendIP}/ads/unblock`, { id: e })
            })
            window.alert("Ads is unblocked")
        } else {
            window.alert("Please select any ads")
        }
        setActiveAlert(false)
    }
    const [activeAlert, setActiveAlert] = useState(false)
    const [deactiveAlert, setDeactiveAlert] = useState(false)
    return (
        <>
            <div className="flex justify-between items-center flex-wrap gap-3">
                <div className="">
                    <h2 className='font-bold text-2xl'>Blacklisted Profiles</h2>
                    <p className='text-sm text-[#A5A5A5]'>Lorem ipsum olor sit amet </p>
                </div>
                <div className="flex gap-3 flex-wrap justify-center">
                    <div className="w-64 h-14 relative">
                        <input className='w-full h-full rounded-xl bg-white outline-none pl-10' placeholder='Search here' type="text" onChange={e => setAdsTitle(e.target.value)} />

                        <img src={lensIcon} className='absolute w-5 h-5 top-[1.10rem] left-3' alt="" />

                    </div>


                    <button className='hover:shadow-2xl duration-500 w-40 h-14 rounded-xl text-white bg-[#6418C3] text-sm font-bold'
                        onClick={() => {
                            if (adsTitle) {
                                const profile = blacklistedProfiles.filter(e =>
                                    e.adsTitle.toLowerCase()?.includes(adsTitle.toLowerCase())
                                )
                                if (profile) {
                                    setBlacklistedProfiles(profile)


                                } else window.alert('Profile not found')
                            }
                            else {
                                fetchData()
                            }
                        }}

                    >Search</button>

                    <button className='hover:shadow-2xl duration-500 w-40 h-14 rounded-xl text-white bg-[#34C38F] text-sm font-bold' onClick={()=>{setActiveAlert(true)}} >Activate Profile</button>
                    <button className='hover:shadow-2xl duration-500 w-40 h-14 rounded-xl text-white bg-[#F4B000] text-sm font-bold' onClick={()=>{setDeactiveAlert(true)}} >Deactivate Profile</button>

                </div>
            </div>
            {
                activeAlert  && <div className="h-screen w-full fixed top-0 left-0 bg-black/10 flex justify-center items-center">
                    <div className="w-96  bg-white p-5 rounded-lg space-y-10">
                        <div className="flex justify-between w-full">
                            <p className='text-lg font-bold'>Activate</p>
                            <Close onClick={()=>setActiveAlert(false)} />
                        </div>
                        <p className='font-bold text-center'>Do you want to activate this ads? </p>
                        
                            <button className='w-40 h-14 rounded-xl text-white bg-[#34C38F] text-sm font-bold' onClick={activate}>Activate</button>
                            
                        
                    </div>
                </div>
            }
            {
                deactiveAlert  && <div className="h-screen w-full fixed top-0 left-0 bg-black/10 flex justify-center items-center">
                    <div className="w-96  bg-white p-5 rounded-lg space-y-10">
                        <div className="flex justify-between w-full">
                            <p className='text-lg font-bold'>Activate</p>
                            <Close onClick={()=>setDeactiveAlert(false)}/>
                        </div>
                        <p className='font-bold text-center'>Do you want to Deactivate this ads? </p>
                        
                            <button className='w-40 h-14 rounded-xl text-white bg-[#F4B000] text-sm font-bold' onClick={deactivate}>Deactivate</button>
                            
                        
                    </div>
                </div>
            }
        </>
    )
}