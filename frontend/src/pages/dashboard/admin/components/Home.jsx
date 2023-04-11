import React, { useEffect, useState } from 'react'

// icon
import userIcon from '../../../../asset/icons/dashboard/home/user.png'
import verifiedIcon from '../../../../asset/icons/dashboard/home/verified.png'
import adsRedIcon from '../../../../asset/icons/dashboard/home/ads-red.png'
import adsGreenIcon from '../../../../asset/icons/dashboard/home/ads-green.png'
import upArrowIcon from '../../../../asset/icons/dashboard/home/upArrow.svg'
import upGraphIcon from '../../../../asset/icons/dashboard/home/upGraph.svg'

import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'




import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from "chart.js";
import { Line } from "react-chartjs-2";
import RadialProgressChart from 'radial-progress-chart'
import axios from 'axios'
import BackendIP from '../../../../BackendIP'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);







function Home() {
    return (
        <div className='space-y-5'>
            <MainMenu />
            <div className="flex flex-wrap gap-5">
                <BidRevenue />
                <TopBidLocation />

            </div>

        </div>
    )
}

export default Home



export const MainMenu = () => {
    const [ads, setAds] = useState([])
    useEffect(() => {
      axios.get(`${BackendIP}/ads/get-all-ads`).then(res=>{
        setAds(res.data)
      })
    }, [])

    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get(`${BackendIP}/user`).then(res=>{

            setUsers(res.data)
        })
    }, [])
    
    
    return (
        <div className="flex gap-5 flex-wrap justify-center md:justify-start">

            <Menu path={'profiles'}>
                <img className='w-12 h-12' src={adsGreenIcon} alt="" />
                <div className="">
                    <p className='font-bold text-lg'>Active Ads</p>
                    <p className='font-bold text-2xl text-[#84DA91]'>{ads?.filter(e=>e.visibility===true)?.length}</p>
                </div>
            </Menu>

            <Menu path={'profiles'}>
                <img className='w-12 h-12' src={adsRedIcon} alt="" />
                <div className="">
                    <p className='font-bold text-lg'>Inactive Ads</p>
                    <p className='font-bold text-2xl text-[#FF0000]'>{ads?.filter(e=>e.visibility===false)?.length}</p>
                </div>
            </Menu>

            <Menu path={'verification'}>
                <img className='w-12 h-12' src={verifiedIcon} alt="" />
                <div className="">
                    <p className='font-bold text-2xl'>{ads?.filter(e=>e.verificationRequest===true)?.length}</p>
                    <p className='font-bold text-sm text-[#A5A5A5]' >Pending Verifications</p>
                </div>
            </Menu>

            <Menu path={'customers'}>
                <img className='w-12 h-12' src={userIcon} alt="" />
                <div className="">
                    <p className='font-bold text-2xl'>{users?.length}</p>
                    <p className='font-bold text-sm text-[#A5A5A5]' >Customers</p>
                </div>
            </Menu>

        </div>
    )
}

const Menu = ({ children, path }) => {
    const { isDarkMode } = useSelector(state => state.util)
    return (
        <Link to={`/dashboard/${path}`}>
            <div className={`${isDarkMode ? 'bg-[#1A1F28] text-white  shadow-blue-500 menu-shadow' : 'bg-white hover:shadow-xl'} w-64 h-32  rounded-xl flex items-center justify-center gap-5  duration-[1.5s] cursor-pointer`}>
                {children}
            </div>
        </Link>
    )
}

const BidRevenue = () => {

    const { isDarkMode } = useSelector(state => state.util)
    return (
        <div className={`${isDarkMode ? 'bg-[#1A1F28] text-white shadow-blue-500 menu-shadow' : 'bg-white'} duration-[1.5s] rounded-xl  w-[800px] p-6 space-y-5`}>
            <h2 className='text-xl font-bold'>Bid Revenue</h2>
            <p className='text-sm text-[#787878] font-bold'>Daily Bid Revenue in $</p>
            <div className="flex h-80 w-full gap-10">
                <div className="w-[calc(100%-13rem)] h-full">
                    <BidGragh />
                </div>
                <div className="w-52 h-full flex flex-col justify-center gap-3 px-5">
                    <div className="flex gap-5">
                        <p className='text-3xl font-bold'>49%</p>

                        <img src={upArrowIcon} className='w-8 h-8' alt="" />



                    </div>
                    <p className='text-base font-bold'>Total Increase</p>
                    <p className='font-bold'><img src={upGraphIcon} className='inline h-4' alt="" /> <span className='text-[#38E25D]'>5.4%</span> than last day</p>
                </div>
            </div>
        </div>
    )
}

export const TopBidLocation = () => {
    const { isDarkMode } = useSelector(state => state.util)
    useEffect(() => {
        new RadialProgressChart('.main', {
            diameter: 130,
            shadow: {
                width: 0,
            },

            series: [
                { value: 60, color: '#6418C3' },
                { value: 65, color: '#E328AF' },
                { value: 70, color: '#5ECFFF' }
            ]
        }
        );
    }, [])
    return (<div className={`${isDarkMode ? 'bg-[#1A1F28] text-white shadow-blue-500 menu-shadow' : 'bg-white text-black'} duration-[1.5s]  rounded-xl h-auto w-64 py-10 px-5 space-y-5`}>
        <div className="">
            <p className='font-bold text-lg'>Top Location</p>
            <p className='text-xs'>Location with most listings</p>
        </div>

        {/* graph */}
        <div className="flex justify-center items-center cursor-pointer">
            <div className='main h-32 w-32' ></div>
        </div>

        <div className="space-y-5 px-5">
            <div className="w-full flex justify-between">
                <div className="flex gap-2 items-center cursor-pointer">
                    <div className="h-2 w-2 bg-[#5ECFFF] rounded-full" />
                    <p className='text-sm'>UAE</p>
                </div>
                <p className='font-bold text-lg'>45125</p>
            </div>
            <div className="w-full flex justify-between">
                <div className="flex gap-2 items-center cursor-pointer">
                    <div className="h-2 w-2 bg-[#E328AF] rounded-full" />
                    <p className='text-sm'>INDIA</p>
                </div>
                <p className='font-bold text-lg'>245</p>
            </div>
            <div className="w-full flex justify-between">
                <div className="flex gap-2 items-center cursor-pointer">
                    <div className="h-2 w-2 bg-[#6418C3] rounded-full" />
                    <p className='text-sm'>UK</p>
                </div>
                <p className='font-bold text-lg'>675</p>
            </div>
        </div>

    </div>
    )

}





function BidGragh() {
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
        labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        datasets: [
            {
                label: 'Revenue ',
                data: [100, 300, 200, 400, 300, 400, 300],
                borderColor: isDarkMode ? '#3b82f6' : " #6418C3",
                tension: 0.4,
                borderWidth: 5,
                filler: true,
            }
        ],

    };

    return <Line className='cursor-pointer' options={options} data={data} />;
}