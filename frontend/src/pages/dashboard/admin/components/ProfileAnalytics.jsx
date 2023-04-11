import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import BackendIP from '../../../../BackendIP'
import { setId } from '../../../../redux/slice/utilSlice'
import Graph from '../../components/Graph'
import { MainMenu } from './Home'

function ProfileAnalytics() {
    const dispatch = useDispatch()
    const { id } = useSelector(state => state.util.dashboard)
    const [date, setDate] = useState([])
    const [view, setView] = useState([])

    const [ads, setAds] = useState([])

    const fetchData = () => {
        axios.get(`${BackendIP}/ads/get-all-ads`).then(res => {
            setAds(res.data)
            if (!id) {
                dispatch(setId(res.data[0].id))
            }
        })
    }
    useEffect(() => {
        fetchData()
        // eslint-disable-next-line
    }, [])






    useEffect(() => {

        axios.get(`${BackendIP}/analytics/profile`, { params: { id } }).then(res => {
            let date = []
            let view = []
            //eslint-disable-next-line
            res.data.map(e => {
                date.push(e.date)
                view.push(e.view)

            })
            setDate(date)
            setView(view)
        })
        //eslint-disable-next-line
    }, [id])

    return (
        <div className='space-y-5'>
            <MainMenu />

            <div className="flex gap-5 flex-wrap">
                <div className="h-[400px] w-[766px] bg-white rounded-md p-5 space-y-5" >
                    <div className="flex justify-between">
                        <p className='font-bold'>Ad Activity</p>
                        <select onChange={e => {
                            dispatch(setId(e.target.value)); setDate([]); setView([]);
                        }}>
                            <option value="">Select any Ads</option>
                            {ads.map(e => <option key={e.id} value={e.id}>{e.adsTitle}</option>)}
                        </select>
                    </div>

                    <div className="flex gap-5 ">
                        <div className="flex gap-5">
                            <div className="h-10 w-10 bg-black"></div>
                            <div className="">
                                <p className='text-xs font-bold'>240</p>
                                <p className='text-xs'>Total Ads Count</p>
                            </div>
                        </div>
                        <div className="flex justify-between w-72 h-10">

                            <div className="w-1/3 flex gap-2">
                                <div className="w-2 h-2 rounded-full bg-[#0062F4]"></div>
                                <div className="text-xs">
                                    <p className='font-bold'>400</p>
                                    <p>Platinum</p>
                                </div>
                            </div>


                            <div className="w-1/3 flex gap-2">
                                <div className="w-2 h-2 rounded-full bg-[#F4B000]"></div>
                                <div className="text-xs">
                                    <p className='font-bold'>200</p>
                                    <p>Gold</p>
                                </div>
                            </div>


                            <div className="w-1/3 flex gap-2">
                                <div className="w-2 h-2 rounded-full bg-[#A63200]"></div>
                                <div className="text-xs">
                                    <p className='font-bold'>230</p>
                                    <p>Silver</p>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="w-full h-64">
                        {
                            id && <Graph date={date} view={view} />
                        }
                    </div>


                </div>

                <div className="h-[400px] w-[324px] bg-white rounded-md p-5 space-y-5">
                    <div className="">
                        <p className='text-base font-bold'>Top Profiles</p>
                        <p className='text-xs'>Profiles with the most traffic</p>
                    </div>

                    <TopVisitedProfile />
                    <TopVisitedProfile />
                    <TopVisitedProfile />
                    <TopVisitedProfile />
                    <TopVisitedProfile />

                </div>
            </div>


        </div>
    )
}

export default ProfileAnalytics


const TopVisitedProfile = () => {
    return (
        <div className="flex justify-between hover:shadow-lg cursor-pointer">
            <div className="flex gap-3 items-center">
                <div className="w-11 h-11 rounded-md bg-black"></div>
                <div className="flex flex-col justify-start items-start">
                    <p className='font-bold text-xs'>Roshni</p>
                    <p className='text-xs'>India</p>
                </div>
            </div>
            <div className="flex flex-col items-end">
                <p className='text-xs font-bold'>300</p>
                <p className='text-xs '>8:30</p>
            </div>
        </div>
    )
}

