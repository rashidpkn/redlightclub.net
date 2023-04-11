
import { Visibility } from '@mui/icons-material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import BackendIP from '../../../../BackendIP'
import { setId } from '../../../../redux/slice/utilSlice'
import Buttons from './Buttons'

function Manage() {
    const { username } = useSelector(state => state.user)
    const [ads, setAds] = useState([])
    const fetchData = () => {
        axios.get(`${BackendIP}/ads/get-user-ads`, { params: { username } }).then(res => {
            setAds(res.data)
        })
    }
    const [selector, setSelector] = useState(1)
    useEffect(() => {
        fetchData()
        // eslint-disable-next-line
    }, [])

    return (
        <div className='h-full w-full space-y-5'>
            <h1 className='text-2xl font-bold'>Manage My Advets</h1>
            <Buttons />
            <h1 className='text-2xl font-bold'>Profile</h1>
            <div className="flex justify-center md:justify-start  w-full border-b gap-10  text-lg font-assistant mt-10">
                <button onClick={() => setSelector(1)} className={`${selector === 1 && 'border-b-[3px]'} border-[#6426c3]`}>All</button>
                <button onClick={() => setSelector(2)} className={`${selector === 2 && 'border-b-[3px]'} border-[#5ecfff]`}>Live</button>
                <button onClick={() => setSelector(3)} className={`${selector === 3 && 'border-b-[3px]'} border-[#e328af]`}>Blocked</button>
            </div>

            {
                selector === 1 && <div className="flex flex-wrap justify-center lg:justify-start gap-5">
                    {ads.map(e => <Card verify={e.verify} id={e.id} profilePhoto={e.profilePhoto} adsTitle={e.adsTitle} view={e.view} nationality={e.nationality} fetchData={fetchData} vacation={e.vacation} />)}
                </div>
            }

            {
                selector === 2 && <div className="flex flex-wrap justify-center lg:justify-start gap-5">
                    {ads.map(e => e.visibility === true && <Card verify={e.verify} id={e.id} profilePhoto={e.profilePhoto} adsTitle={e.adsTitle} view={e.view} nationality={e.nationality} fetchData={fetchData} vacation={e.vacation} />)}
                </div>
            }

            {
                selector === 3 && <div className="flex flex-wrap justify-center lg:justify-start gap-5">
                    {ads.map(e => e.visibility === false && <Card verify={e.verify} id={e.id} profilePhoto={e.profilePhoto} adsTitle={e.adsTitle} view={e.view} nationality={e.nationality} fetchData={fetchData} vacation={e.vacation} />)}
                </div>
            }







        </div>
    )
}

export default Manage


const Card = ({ id, profilePhoto, adsTitle, view, nationality, fetchData, vacation, verify }) => {
    const dispatch = useDispatch()
    return (
        <div className={` card h-96 w-64 flex flex-col  border items-center justify-center  relative z-40`}>

            <div className="absolute right-0 top-2  flex justify-center items-center gap-1 blur-none z-50">

                <div className="flex">
                    <label class="inline-flex relative items-center  cursor-pointer">
                        <input
                            type="checkbox"
                            className="sr-only peer"
                            checked={vacation}
                            onChange={e => {
                                axios.post(`${BackendIP}/ads/vacation`, { id, vacation: e.target.checked }).then(res => {
                                    window.alert(res.data.reason)
                                    fetchData()
                                })
                            }}
                        />
                        <div className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"
                        ></div>
                    </label>
                </div>

                <div className="group">
                    <div className='w-4 h-4 border rounded-full flex justify-center items-center border-blue-400 text-blue-400'>i</div>
                    <div className="hidden group-hover:flex border absolute   border-blue-400 duration-200">
                        <p>Vacation Mode </p>
                    </div>
                </div>

            </div>

            <div className={`h-[40%] w-[60%] rounded-full border absolute top-2 `}>
                <img src={`${BackendIP}${profilePhoto}`} alt="" className='h-full w-full rounded-full object-cover' />
            </div>

            <div className={`h-[15%] w-full text-center top-48 absolute flex flex-col `}>
                <span className='text-lg font-medium '>{adsTitle}</span>
                <span className='text-sm'>{nationality}</span>
            </div>

            <div className={`h-[15%] w-full text-center top-64 absolute `}>
                <span className='text-lg font-medium flex justify-center items-center gap-2 text-[#75848d]'>
                    <Visibility />
                    {view}
                </span>
            </div>

            <div className={`h-[15%] w-full absolute bottom-5 flex justify-around items-center `}>
                {verify !== true ?
                    <Link to={'/dashboard/verify'}>
                        <button className='border-2 border-[#6426c3] rounded-2xl h-10 w-16 justify-center items-center flex' onClick={() => dispatch(setId(id))}>Verify</button>
                    </Link>
                    :
                    <button className='border-2 border-[#6426c3] rounded-2xl h-10 w-16 justify-center items-center flex' onClick={() => { window.alert("Already  Verified") }}>Verified</button>}
                <Link to={'/dashboard/edit'}>
                    <button className='border-2 rounded-2xl h-10 w-16 border-[#5ECFFF]' onClick={() => dispatch(setId(id))}>Edit</button>
                </Link>
                <button className='border-2 rounded-2xl h-10 w-16 border-[#E328AF]' onClick={() => {
                    axios.post(`${BackendIP}/ads/delete`, { adsTitle }).then(res => {
                        window.alert(res.data.reason)
                        console.log(res.data)
                        fetchData()
                    })
                }}>Delete</button>
            </div>
        </div>
    )
}


