

import { Close, Visibility } from '@mui/icons-material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import BackendIP from '../../../../BackendIP'

//icon
import adsView from '../../../../asset/icons/ads-view.svg'
import adsEdit from '../../../../asset/icons/ads-edit.svg'
import adsDelete from '../../../../asset/icons/ads-delete.svg'

import globalIcon from '../../../../asset/icons/dashboard/profile/global.svg'
import lensIcon from '../../../../asset/icons/dashboard/profile/lens.svg'
import diamondIcon from '../../../../asset/icons/dashboard/profile/diamond.svg'
import { useDispatch, useSelector } from 'react-redux'
import { setId } from '../../../../redux/slice/utilSlice'
import { Link, useNavigate } from 'react-router-dom'

let fetch_data = []

function Profile() {
    const [filter, setFilter] = useState(1)
    const [ads, setAds] = useState([])
    const [location, setLocation] = useState('')
    const fetchData = () => {
        fetch_data.length === 0 ? axios.get(`${BackendIP}/ads/get-all-ads`).then(res => {
            fetch_data = res.data
            setAds(res.data)
        }) : setAds(fetch_data)
    }
    useEffect(() => {
        fetchData()
    }, [])
    const {region} = useSelector(state=>state.util)
    return (
        <div className='space-y-5'>
            <Menu data={ads} setAds={setAds} fetchData={fetchData} locations={[...new Set(ads.map(e=>e.region===region ? e.location: null ))]} setLocation={setLocation} />
            <Filter  filter={filter} setFilter={setFilter}/>
            <div className="flex flex-wrap gap-3 gap-y-5">
                
                {ads.map(e => (
                    e.region === region &&
                    (location ? location === e.location : true )
                    &&
                    (filter === 1 ||  (
                        (filter===2 && e.visibility) || (filter ===3 && e.visibility === false)
                    ) )&&
                <Card key={e.id} {...e} fetchData={fetchData} />
                ))}

            </div>
            {ads.filter(e => (
                    e.region === region &&(location ? location === e.location : true )&&
                    (filter === 1 ||  ((filter===2 && e.visibility) || (filter ===3 && e.visibility === false))))).length === 0 &&<p className='text-center font-bold text-xl mt-10'>Ads Not Found</p>            
            }
        </div>
    )
}

export default Profile




const Card = ({ adsTitle, view, nationality, visibility, profilePhoto, id, fetchData }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const deleteAds = async () => {
        try {
            const { status } = await (await axios.post(`${BackendIP}/ads/delete`, { id })).data
            if (status) {
                window.alert("Ads is Deleted")
                fetchData()
            }
        } catch (error) {
            console.log(error)
            window.alert(error.message)
        }
    }
    const editAds = () => {
        dispatch(setId(id))
        navigate('/dashboard/edit-ads')
    }
    const viewAds = () => {
        dispatch(setId(id))
        navigate('/dashboard/view')
    }
    const adsAnalytics = () => {
        dispatch(setId(id))
        navigate('/dashboard/ads-analytics')
    }

    const [deleteAlert, setDeleteAlert] = useState(false)




    return (
        <>
            <div className="w-[169px] h-[230px]  bg-white rounded-xl relative flex flex-col justify-center items-center gap-1 hover:shadow-xl duration-500 group">
                <div className="absolute top-2 right-1 flex text-blue-500 text-[8px] items-center gap-1 cursor-pointer" onClick={adsAnalytics}>
                    <Visibility fontSize='small' /> <span>{view}</span>
                </div>
                <div className="w-[80px] h-[80px] bg-black rounded-lg  relative">
                    <img src={profilePhoto} className='h-full w-full object-cover object-top scale-110 rounded-lg' alt="" />
                    <div className="absolute w-8 h-8 rounded-xl -bottom-1 -right-5 bg-[#0062F4] flex justify-center items-center">
                        <img src={diamondIcon} alt="" />
                    </div>
                </div>
                <p className='text-sm font-bold'>{adsTitle}</p>
                <p className='text-[10px] text-[#A5A5A5]'>{nationality ? nationality : 'UAE'} </p>
                {visibility ? <p className='text-[8px] font-bold text-[#38E25D]'>Active</p> : <p className='text-xs font-bold text-[#ff0000]'>Inactive</p>}


                <div className="flex justify-center items-center gap-5">
                    <button className="hover:shadow-xl h-[26px] w-[26px] rounded-md bg-[#0062F4] flex justify-center items-center cursor-pointer" onClick={viewAds}><img src={adsView} alt="" /></button>
                    <button className="hover:shadow-xl h-[26px] w-[26px] rounded-md bg-[#34C38F] flex justify-center items-center cursor-pointer" onClick={editAds}><img src={adsEdit} alt="" /></button>
                    <button className="hover:shadow-xl h-[26px] w-[26px] rounded-md bg-[#FF0000] flex justify-center items-center cursor-pointer" onClick={()=>{setDeleteAlert(true)}}><img src={adsDelete} alt="" /></button>
                </div>

                <p className='text-[10px] text-[#A5A5A5]'>Last seen Online 31/01/2023</p>
            </div>

            {deleteAlert && <div className="fixed h-screen w-full bg-black/10 top-0 left-0 z-50 flex justify-center items-center">
                <div className="bg-white w-[500px] rounded-lg p-5 space-y-10">

                    <div className="flex justify-between w-full">
                        <div className="">
                            <p className='font-bold text-2xl'>Delete Profile</p>
                        </div>
                        <div className="flex items-center gap-5">
                            <Close className='font-bold text-[#A5A5A5]' fontSize='small' onClick={()=>{setDeleteAlert(false)}} />
                        </div>
                    </div>
                    <p className='font-bold text-center'>Do you want to delete this Profile?</p>

                    <div className="flex justify-between items-center">
                        <button className='w-[140px] h-12 bg-[#FF0000] rounded-xl text-white font-bold text-xs' onClick={()=>{deleteAds();setDeleteAlert(false)}}>Delete Profile</button>
                        <button className='w-[140px] h-12 bg-[#34C38F] rounded-xl text-white font-bold text-xs' onClick={()=>{setDeleteAlert(false)}}>Cancel</button>
                    </div>
                </div>
            </div>}
        </>
    )
}


const Menu = ({data,setAds,fetchData,locations,setLocation}) => {
    const [adsTitle, setAdsTitle] = useState('')
    return (
        <div className="flex justify-between items-center flex-wrap gap-3">
            <div className="">
                <h2 className='font-bold text-2xl'>Profiles</h2>
            </div>
            <div className="flex gap-3 flex-wrap justify-center">
                <div className="w-64 h-14 relative">
                    <input className='w-full h-full rounded-xl bg-white outline-none pl-10' onChange={e=>{
                            setAdsTitle(e.target.value)
                            if(e.target.value === ''){
                                fetchData()
                            }
                        }} placeholder='Search here' type="text" />

                    <img src={lensIcon} className='absolute w-5 h-5 top-[1.10rem] left-3' alt="" />

                </div>


                <div className="w-64 h-14 relative px-3 bg-white rounded-xl">
                    <select className='w-full h-full   outline-none px-10' placeholder='Location' type="text" onChange={e=>setLocation(e.target.value) } >
                        <option value="">Location</option>
                        {locations.map(e=><option value={e}>{e}</option>)}
                    </select>
                    <img src={globalIcon} className='absolute w-5 h-5 top-[1.10rem] left-3' alt="" />
                </div>


                <button className='hover:shadow-2xl duration-500 w-36 h-14 rounded-xl text-white bg-[#6418C3] text-sm font-bold' onClick={()=>{
                    if(adsTitle){

                        const profile = data.filter(e=>
                            e.adsTitle.toLowerCase()?.includes(adsTitle.toLowerCase())
                            )
                            if(profile){
                                
                                setAds(profile)
                            }else window.alert('Profile not found')
                        }
                        else{
                            fetchData()
                        }
                }}>Search</button>


                <Link to={'/new-ads'}>
                    <button className='hover:shadow-2xl duration-500 w-36 h-14 rounded-xl text-white bg-[#34C38F] text-sm font-bold'>Add Profile</button>
                </Link>
            </div>
        </div>
    )
}

const Filter = ({filter, setFilter}) => {
    
    return (
        <div className="border-b-2 flex w-fit gap-5 flex-wrap justify-center">

            <div className={`hover:shadow-xl duration-500 flex justify-center w-20 mx-2 ${filter === 1 && 'border-b-4'}  border-[#6418C3] cursor-pointer`} onClick={() => setFilter(1)}>
                <p className='pb-2 text-[#A5A5A5] font-bold text-base'>All</p>
            </div>

            <div className={`hover:shadow-xl duration-500 flex justify-center w-20 mx-2 ${filter === 2 && 'border-b-4'}  border-[#6418C3] cursor-pointer`} onClick={() => setFilter(2)}>
                <p className='pb-2 text-[#A5A5A5] font-bold text-base'>Active</p>
            </div>

            <div className={`hover:shadow-xl duration-500 flex justify-center w-20 mx-2 ${filter === 3 && 'border-b-4'}  border-[#6418C3] cursor-pointer`} onClick={() => setFilter(3)}>
                <p className='pb-2 text-[#A5A5A5] font-bold text-base'>Inactive</p>
            </div>

            <div className={`hover:shadow-xl duration-500 flex justify-center w-20 mx-2 ${filter === 4 && 'border-b-4'}  border-[#6418C3] cursor-pointer`} onClick={() => setFilter(4)}>
                <p className='pb-2 text-[#A5A5A5] font-bold text-base'>Blacklist</p>
            </div>

        </div>
    )
}