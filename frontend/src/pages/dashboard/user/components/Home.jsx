import React from 'react'

import cardImage from '../../../../asset/images/dashboard/user/card.png'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import BackendIP from '../../../../BackendIP'
import { Close } from '@mui/icons-material'
import { Link, useNavigate } from 'react-router-dom'
import { setId } from '../../../../redux/slice/utilSlice'

import liveAds from '../../../../asset/icons/dashboard/home-user/live-ads.svg'
import profileView from '../../../../asset/icons/dashboard/home-user/profile-views.svg'
import rating from '../../../../asset/icons/dashboard/home-user/rating.svg'
import Star from '../../../../asset/icons/dashboard/home-user/star'
import clickRate from '../../../../asset/icons/dashboard/home-user/click-rate.svg'
import responseRate from '../../../../asset/icons/dashboard/home-user/response-rate.svg'

import { Line } from 'react-chartjs-2'
import {
    Chart as ChartJS, CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";




function Home() {
    const { username } = useSelector(state => state.user)

    const [user, setUser] = useState({})
    const [ads, setAds] = useState([])

    useEffect(() => {
        axios.get(`${BackendIP}/ads/get-user-ads`, { params: { username } }).then(res => {
            setAds(res.data)
        })
        axios.get(`${BackendIP}/user/get-a-user`, { params: { username } }).then(res => {
            setUser(res.data)
        })
        // eslint-disable-next-line
    }, [])




    const [verifyEmailAlert, setVerifyEmailAlert] = useState(false)

    return (
        <div className='space-y-5'>
            <div className="flex gap-5 items-center">
                <p className='text-red-500'>Please Verify Your Email</p>
                <button className='px-4 py-3 rounded-xl bg-[#34C38F] text-white' onClick={() => setVerifyEmailAlert(true)}>Verify Now</button>
            </div>

            <Profile ads={ads} user={user} />

            <HomeAnalatics ads={ads} />

            {verifyEmailAlert && <VerifyBox setVerifyEmailAlert={setVerifyEmailAlert} />}
        </div>
    )
}

export default Home


const Profile = ({ ads, user }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    return (
        <div className=" bg-white rounded-xl flex justify-between p-5">
            <div className="space-y-5">
                <div className="flex gap-5">
                    <img src={ads[0]?.profilePhoto} className='w-36 h-36 border' alt="" />
                    <div className="flex flex-col justify-between">
                        <div className="">
                            <p className='text-2xl font-bold'>{ads[0]?.adsTitle}</p>
                            <p className='text-xs text-[#2e2e2e]/70'>{ads[0]?.location}</p>
                        </div>
                        {ads[0]?.visibility ? <p className='text-xs font-bold text-[#38E25D]'>Active</p> : <p className='text-xs font-bold text-[#E11700]'>Inactive</p>}

                        <button className='rounded-xl h-10 w-36 border font-bold text-[#585858] text-xs'
                            onClick={() => {
                                dispatch(setId(ads[0]?.id))
                                navigate('/dashboard/edit-ads')
                            }}
                        >Edit Profile</button>
                    </div>
                </div>
                <div className="flex gap-5 items-center justify-center">
                    <div className="w-36  rounded-lg bg-[#F5F5F5] p-4">
                        <p className='text-[10px] text-[#202020]'>Live Ads</p>
                        <div className="flex gap-3 items-center">
                            <div className="w-6 h-6">
                                <img src={liveAds} className='w-full h-full' alt="" />
                            </div>
                            <p className='text-lg font-bold'>{ads.length}</p>
                        </div>
                    </div>
                    <div className="w-36  rounded-lg bg-[#F5F5F5] p-4">
                        <p className='text-[10px] text-[#202020]'>Profile Views</p>
                        <div className="flex gap-3 items-center">
                            <div className="w-6 h-6">
                                <img src={profileView} className='w-full h-full' alt="" />
                            </div>
                            <p className='text-lg font-bold'>{ads[0]?.view}</p>
                        </div>
                    </div>
                    <div className="w-36  rounded-lg bg-[#F5F5F5] p-4">
                        <p className='text-[10px] text-[#202020]'>Rating</p>
                        <div className="flex gap-3 items-center">
                            <div className="w-6 h-6">
                                <img src={rating} className='w-full h-full' alt="" />
                            </div>
                            <p className='text-lg font-bold'>0</p>
                        </div>
                    </div>
                </div>
            </div>

            <Card {...user} />
        </div>
    )
}


export const HomeAnalatics = ({ ads }) => {
    return (
        <>
            <div className=" flex gap-3 flex-wrap">
                <AdsAnalytics ads={ads} />
                <OverallStatistics ads={ads} />
                <ClickAndResponse />
            </div>
            <SiteTraffic />
        </>
    )
}


const AdsAnalytics = ({ ads }) => {
    const [date, setDate] = useState([])
    const [view, setView] = useState([])
    const [id, setId] = useState(0)

    useEffect(() => {
        let date = []
        let view = []
        //eslint-disable-next-line
        ads[id]?.analytics?.map(e => {
            date.push(e.date)
            view.push(e.view)

        })
        setDate(date)
        setView(view)
    }, [id, ads])


    return (
        <div className="h-[380px] w-[570px] rounded-xl bg-white p-4">
            <div className="flex justify-between items-center">
                <div className="">
                    <p className='text-xl font-bold'>Ad Analytics</p>
                    <p className='text-[10px] text-[#A5A5A5]'>Jan 1 - Dec 31,2023</p>
                </div>
                <div className="flex gap-3">

                    <select className='text-xs font-bold' onChange={e => setId(e.target.value)}>
                        {ads?.map((e, index) => <option key={index} value={index}>{e?.adsTitle}</option>)}
                    </select>
                    <select className='text-xs font-bold' >
                        <option value="Monthly">Monthly</option>
                        <option value="Half Yearly">Half Yearly</option>
                        <option value="Yearly">Yearly</option>
                    </select>
                </div>
            </div>
            <div className="">
                <Graph date={date} view={view} />
            </div>
        </div>
    )
}


const ClickAndResponse = () => {
    return (
        <div className="w-[210px] space-y-5">

            <div className="w-full rounded-xl bg-white p-4 space-y-3">
                <p className='text-xl font-bold'>Click Rate</p>
                <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg flex justify-center items-center bg-[#0062F4]">
                        <img src={clickRate} alt="" />
                    </div>
                    <p className='text-xl font-bold'>1.5%</p>
                </div>
                <p className='text-[9px]'>How often customers have clicked on your profile on our site.</p>
            </div>
            <div className="w-full rounded-xl bg-white p-4 space-y-3">
                <p className='text-xl font-bold'>Response Rate</p>
                <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg flex justify-center items-center bg-[#6418C3]">
                        <img src={responseRate} alt="" />
                    </div>
                    <p className='text-xl font-bold'>20%</p>
                </div>
                <p className='text-[9px]'>The percentage of customers who view your profile that speak to you.</p>
            </div>

        </div>
    )
}

const OverallStatistics = ({ ads }) => {
    const [selectedAds, setSelectedAds] = useState({})
    const review = ads?.find(e=>e.id===selectedAds && e)?.review
    
    const [rating, setRating] = useState(0)

    useEffect(() => {
      let rate = 0
        review?.map(e=>{
            rate = rate + Number(e.rating)
        })
        setRating(Math.round(rate/review?.length))
    }, [selectedAds])

    // useEffect(() => {
    //   console.log(review)
    // }, [selectedAds])
    

    return (
        <div className="h-[380px] w-[300px] rounded-xl bg-white p-4 space-y-5">
            <div className="flex justify-between items-center">
                <p className='text-xl font-bold'>Overall Statistics</p>
                <select className='text-xs font-bold' onChange={e=>{setSelectedAds(Number(e.target.value))}}>
                    {ads?.map((e, index) => <option key={index} value={e?.id}>{e?.adsTitle}</option>)}
                </select>
            </div>
            <div className="flex ">
                <div className="w-full flex flex-col justify-center">
                    <p className='text-xl font-bold'>{rating?rating:0}</p>
                    <p className='text-sm'>Overall Rating</p>
                </div>
                <div className="w-full flex flex-col justify-center">
                    <p className='text-xl font-bold'>{review?.length}</p>
                    <p className='text-sm'>Reviews</p>
                </div>
            </div>
            <div className="flex justify-between">
                <div className=""></div>
                <div className="space-y-5">
                    <div className="flex justify-center items-center gap-1"> <p>{review?.filter(e=>Number(e.rating) ===1 ).length} /1</p>
                        <Star fill='#6418C3' />
                    </div>
                    <div className="flex justify-center items-center gap-1"> <p>{review?.filter(e=>Number(e.rating) ===2 ).length} /2</p>
                        <Star fill='#5ECFFF' />
                    </div>
                    <div className="flex justify-center items-center gap-1"> <p>{review?.filter(e=>Number(e.rating) ===3 ).length} /3</p>
                        <Star fill='#E328AF' />
                    </div>
                    <div className="flex justify-center items-center gap-1"> <p>{review?.filter(e=>Number(e.rating) ===4 ).length} /4</p>
                        <Star fill='#FFAB2D' />
                    </div>
                    <div className="flex justify-center items-center gap-1"> <p>{review?.filter(e=>Number(e.rating) ===5 ).length} /5</p>
                        <Star fill='#FF4A55' />
                    </div>
                </div>
            </div>
        </div>
    )
}


const SiteTraffic = () => {
    const [date, setDate] = useState([])
    const [view, setView] = useState([])
    const [select, setSelect] = useState('Daily')
    useEffect(() => {
        axios.get(`${BackendIP}/analytics`).then(res => {
            let date = []
            let view = []
            let feb = 0
            let march = 0
            let april = 0
            //eslint-disable-next-line
            res.data.map(e => {
                if (select === 'Daily') {
                    view.push(e.view)
                    date.push(e.date)
                }
                else if (select === 'Monthly') {
                    date = [2,3,4]
                    if (Number(e.date.split('-')[1]) === 2) {
                        feb = feb + e.view
                    }
                    if (Number(e.date.split('-')[1]) === 3) {
                        march = march + e.view
                    }
                    if (Number(e.date.split('-')[1]) === 4) {
                        april = april + e.view
                    }
                }
            })
            
            setDate(date)
            if(select==='Daily'){
                setView(view)
            }else if(select==='Monthly'){
                setView([feb, march, april])
            }
        })
        //eslint-disable-next-line
    }, [select])

   
    return (
        <div className="  rounded-xl bg-white p-4">
            <div className="flex justify-between items-center">
                <div className="">
                    <p className='text-xl font-bold'>Website Traffic</p>
                    <p className='text-[10px] text-[#A5A5A5]'>Website Traffic for Redlightclub.net</p>
                </div>
                <select className='text-xs font-bold' onChange={(e) => { setSelect(e.target.value) }}>
                    <option value="Daily">Daily</option>
                    <option value="Monthly">Monthly</option>
                    <option value="Half Yearly">Half Yearly</option>
                    <option value="Yearly">Yearly</option>
                </select>
            </div>
            <div className="w-full ">
                <Graph date={date} view={view} />
            </div>
        </div>
    )
}


const Card = ({ credit, username }) => {
    // const { username } = useSelector(state => state.user)
    const [effect, setEffect] = useState(false);
    return (
        <div className="flex flex-col justify-center items-center">
            <div className={`relative w-[375px] h-[228px]  ${effect ? 'rotate-card' : 'cursor-pointer'} `}
                onClick={() => {
                    setEffect(true)
                }}
                onAnimationEnd={() => {
                    setEffect(false)
                }}
            >
                <img className='w-full h-full' src={cardImage} alt="" />
                <div className="h-10 w-full absolute bottom-5 flex justify-between items-center p-5 text-white font-bold">
                    <p className='capitalize'>{username}</p>
                    <div className="flex flex-col justify-center items-center ">
                        <p className='text-[8px]'>Available Credit</p>
                        <p>AED {credit}</p>
                    </div>
                </div>
            </div>
            <p className='text-[13px]'>Need more credits?
                <Link to={'/dashboard/earn-credit'}>
                    <span className='text-[#0062F4] cursor-pointer'>Learn How</span>
                </Link>
            </p>
        </div>
    )
}


const VerifyBox = ({ setVerifyEmailAlert }) => {
    const [insideClick, setInsideClick] = useState(0)
    const [outsideClick, setOutsideClick] = useState(0)
    useEffect(() => {

        if (outsideClick > insideClick) {
            setVerifyEmailAlert(false)
            setInsideClick(0)
            setOutsideClick(0)
        }
        // eslint-disable-next-line
    }, [outsideClick])
    return (
        <div className="fixed top-0 left-0 z-50 h-screen w-full flex justify-center items-center bg-black/30 p-3" onClick={() => { setOutsideClick(outsideClick + 1) }}>
            <div className="max-w-[600px] w-full bg-white rounded-lg p-5 flex flex-col justify-center items-center gap-5" onClick={() => { setInsideClick(insideClick + 1) }}>
                <div className="w-full flex justify-between items-center">
                    <div className=""></div>
                    <p>Verify Your Email</p>
                    <Close onClick={() => setVerifyEmailAlert(false)} />
                </div>

                <p className='text-center'>We have sent you a 4 Digit OTP code to your email address. <br /> Please check your email and input the code to verify your email.</p>

                <div className="flex justify-center items-center gap-3 text-center">
                    <input className='h-12 w-12 border rounded-md text-center' type="number" min={0} max={9} />
                    <input className='h-12 w-12 border rounded-md text-center' type="number" min={0} max={9} />
                    <input className='h-12 w-12 border rounded-md text-center' type="number" min={0} max={9} />
                    <input className='h-12 w-12 border rounded-md text-center' type="number" min={0} max={9} />
                </div>

                <button className='px-4 py-3 rounded-lg bg-[#34C38F] text-white'>Submit</button>


            </div>
        </div>
    )
}




ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
)

function Graph({ date, view }) {
    const { isDarkMode } = useSelector(state => state.util)


    const options = {
        elements: {
            point: {
                radius: 0
            }
        },
        scales: {
            x: {
                grid: {
                    color: "rgba(0,0,0,0)"
                }

            },
            y: {
                grid: {
                    color: "rgba(0,0,0,0)"
                }
            }
        },
        animations: {
            radius: {
                duration: 400,
                loop: (context) => context.active
            }
        },
        hoverRadius: 8,
        hoverBackgroundColor: isDarkMode ? '#3b82f6' : " #6418C3",
        interaction: {
            mode: "nearest",
            intersect: false,
            axis: "x"
        },
        plugins: {
            tooltip: {
                enabled: true
            },
            legend: {
                display: false
            }
        }
    };


    const data = {
        labels: date,
        datasets: [
            {
                label: 'Views ',
                data: view,
                borderColor: '#E328AF',
                tension: 0.4,
                borderWidth: 3,
                filler: true,
            }
        ],
    };

    return (
        <div className="graph h-full w-full">
            <Line className='w-full' options={options} data={data} />
        </div>

    )
}