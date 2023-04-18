import React from 'react'
import diamondIcon from '../../../../asset/icons/dashboard/profile/diamond.svg'
import dots from '../../../../asset/icons/dashboard/auction/dots.png'


import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from "chart.js";
import { Bar } from "react-chartjs-2";
import axios from 'axios';
import BackendIP from '../../../../BackendIP';
import { useEffect } from 'react';
import { useState } from 'react';
import { Close } from '@mui/icons-material';

import UpArrow from '../../../../asset/icons/dashboard/auction/upArrow.png'


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);



function AuctionProgress() {
    const [bid, setBid] = useState([])
    const fetchData = () => {

        

        axios.get(`${BackendIP}/bid`).then(res => {
            setBid(res.data)
        })
    }

    useEffect(() => {
        const fetchBid = setInterval(() => {
            fetchData()    
        }, 2000);

        return () => clearInterval(fetchBid)
        
    }, [])


    return (
        <div className='space-y-5'>
            <div className="flex gap-4 flex-wrap">
                <div className=" w-[560px] bg-white rounded-lg p-5 space-y-5">
                    <p className='text-base font-bold'>Bid Progress</p>
                    <div className="h-9 w-full  flex justify-between gap-5 items-center">

                        <div className="w-1/4 bg-black"></div>

                        <div className="w-3/4 flex gap-3">
                            <div className="w-1/3 flex gap-2">
                                <div className="w-2 h-2 rounded-full bg-[#0062F4]"></div>
                                <div className="text-xs">
                                    <p className='font-bold'>AED 300</p>
                                    <p>In Progress</p>
                                </div>
                            </div>


                            <div className="w-1/3 flex gap-2">
                                <div className="w-2 h-2 rounded-full bg-[#F4B000]"></div>
                                <div className="text-xs">
                                    <p className='font-bold'>AED 250</p>
                                    <p>In Progress</p>
                                </div>
                            </div>


                            <div className="w-1/3 flex gap-2">
                                <div className="w-2 h-2 rounded-full bg-[#A63200]"></div>
                                <div className="text-xs">
                                    <p className='font-bold'>AED 250</p>
                                    <p>Closed</p>
                                </div>
                            </div>

                            <select className='w-[80px] h-[28px] rounded-lg border text-xs'>
                                <option value="">Position 1</option>
                            </select>

                        </div>

                    </div>

                    <Chart />

                </div>

                <div className="w-[250px]   flex flex-col gap-4">
                    <div className="w-full h-[100px] bg-white rounded-lg p-5 space-y-3">
                        <p className='text-base font-bold'>Total Bidders</p>

                        <div className="flex justify-between">

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

                    <Winner />


                </div>

            </div>

            <div className="space-y-4">

                <div className="flex flex-wrap gap-4">
                    {[1, 2, 3, 4, 5, 6].map(e => <Card key={e} fetchData={fetchData} bid={bid} tier={'platinum'} position={e} bidEnd={'12 Hr'} />)}
                </div>

                <div className="flex flex-wrap gap-4">
                    {[1, 2, 3, 4, 5, 6].map(e => <Card key={e} fetchData={fetchData} bid={bid} tier={'gold'} position={e} bidEnd={'12 Hr'} />)}
                </div>

                <div className="flex flex-wrap gap-4">
                    {[1, 2, 3, 4, 5, 6].map(e => <Card key={e} fetchData={fetchData} bid={bid} tier={'silver'} position={e} bidEnd={'12 Hr'} />)}
                </div>

            </div>
        </div>
    )
}

export default AuctionProgress


const Card = ({ position, tier, bidEnd, bid, fetchData }) => {
    const [status, setStatus] = useState('close')
    const [largestBidAmount, setLargestBidAmount] = useState(40)
    const [highestBidder, setHighestBidder] = useState('admin')
    const [bids, setBids] = useState([])

    useEffect(() => {
        const status = bid?.find(e => e.position === position && e.tier === tier)?.status
        const largestBidAmount = bid?.find(e => e.position === position && e.tier === tier)?.largestBidAmount
        status === 'open' && setHighestBidder(bid?.find(e => e.position === position && e.tier === tier)?.bid?.find(e => e.amount === largestBidAmount).username)

        setStatus(status ? status : 'close')
        setLargestBidAmount(largestBidAmount ? largestBidAmount : 40)

        setBids(bid?.find(e => e.position === position && e.tier === tier)?.bid)
        // eslint-disable-next-line
    }, [bid])

    const openBid = () => {
        axios.post(`${BackendIP}/bid`, { tier, position }).then(res => {
            window.alert("Biding is started")
        })
        fetchData()
    }

    const closeBid = () => {
        axios.post(`${BackendIP}/bid/close`, { tier, position }).then(res => {
            window.alert("Biding is closed")
        })
        fetchData()
    }

    const [details, setDetails] = useState(false)
    return (
        <>
            <div className="h-[260px] w-[170px] bg-white rounded-md flex flex-col gap-3  justify-center items-center hover:shadow-xl">
                <div className={`h-8 w-8 rounded-md ${tier === 'platinum' && 'bg-[#0062F4]'} ${tier === 'gold' && 'bg-[#F4B000]'} ${tier === 'silver' && 'bg-[#A63200]'} flex justify-center items-center`}>
                    <img src={diamondIcon} alt="" />
                </div>

                <div className="text-center">
                    <p className='font-bold text-xs'>{tier.toUpperCase()}</p>
                    <p className='text-[10px]'>Bid Position {position}</p>
                </div>

                <div className="text-[#6418C3] text-[10px] w-full px-3">
                    <div className="flex justify-between items-center"><p>Bid Status:</p>     <p className='capitalize'>{status}</p></div>
                    <div className="flex justify-between items-center"><p>Highest Bidder:</p> <p className='capitalize'>{highestBidder ? highestBidder : 'Admin'}</p></div>
                    <div className="flex justify-between items-center"><p>Bid Amount :</p>    <p className='capitalize'>{largestBidAmount}</p></div>
                    <div className="flex justify-between items-center"><p>Bid Ends in :</p>   <p className='capitalize'>{bidEnd}</p></div>
                </div>

                <button className='w-[137px] h-6 rounded-lg bg-[#6418C3] text-white text-xs font-semibold' onClick={() => { setDetails(true) }}>View Details</button>
                {
                    status === 'open' && <button className='w-[137px] h-6 rounded-lg bg-[#D80027] text-white text-xs font-semibold' onClick={closeBid}>Close this Bid</button>
                }
                {
                    status === 'close' && <button className='w-[137px] h-6 rounded-lg bg-[#D80027] text-white text-xs font-semibold' onClick={openBid}>Start this Bid</button>
                }
            </div>

            {details && <div className="fixed top-0 left-0 h-screen w-full bg-black/10 flex justify-center items-center z-50">
                <div className="w-[830px]  rounded-2xl bg-white px-12 py-5 space-y-5">
                    <div className="flex w-full justify-end">
                        <Close onClick={() => { setDetails(false) }} />
                    </div>
                    <div className="flex justify-between items-center ">
                        <p className='font-bold text-2xl'>Live Bidding</p>
                        <button className={`${status === 'open' ? 'bg-[#D80027]' : 'bg-[#D80027]/50'} w-32 h-8 rounded-lg  text-xs font-bold text-white`} onClick={() => {
                            status === 'open' ? closeBid() : window.alert("This position already closed")
                        }}>Close this Bid</button>
                    </div>
                    <div className="flex justify-between items-center">

                        <div className="space-y-3">
                            <div className="flex gap-3 items-center">
                                <div className={`w-10 h-10 rounded-lg ${tier === 'platinum' && 'bg-[#0062F4]'} ${tier === 'gold' && 'bg-[#F4B000]'} ${tier === 'silver' && 'bg-[#A63200]'}  flex justify-center items-center`}>
                                    <img src={diamondIcon} alt="" />
                                </div>
                                <div className="">
                                    <p className='text-2xl font-bold'>Platinum</p>
                                    <p className='text-xs'>Position {position}</p>
                                </div>
                            </div>

                            <div className="w-[250px]">
                                <div className="h-2 w-full rounded-full bg-[#F6EEFF]">
                                    <div className="h-full w-[75%] rounded-full bg-[#6418C3] duration-500" />
                                </div>
                                <div className="flex justify-between items-center text-xs font-bold text-[#A5A5A5]">
                                    <p>{status === 'open' ? 'Close in' : 'Closed'}</p>
                                    <p>{status === 'open' ? '51m' : '0 mins'}</p>
                                </div>

                            </div>


                            <div className="w-[250px] flex justify-between items-center">
                                <p className='text-xs'>Current <br /> Bid amount</p>
                                <div className="flex justify-center items-center gap-3">
                                    <div className="text-end text-xs">
                                        <p className='font-bold text-lg'>{largestBidAmount}</p>
                                        <p>AED</p>
                                    </div>
                                    <div className="h-8 w-8">
                                        <img src={UpArrow} alt="" />
                                    </div>
                                </div>
                            </div>

                        </div>
                        {
                            status === 'close' &&
                            <div className="w-80 h-40 rounded-xl bg-[#f6eeff] flex flex-col gap-2 justify-center items-center ">
                                <p className='font-bold text-xs'>Bid has been Closed for</p>
                                <p className='font-bold text-2xl text-[#34C38F]'>AED {largestBidAmount}</p>
                                <p className='font-bold text-xs'><span className='text-[#34C38F] capitalize'>{highestBidder}</span> is the winner</p>
                                <button className='w-36 h-10 rounded-lg bg-[#6418C3] text-white'>Notify Via Email</button>
                            </div>
                        }
                    </div>
                    <div className="flex flex-col gap-3 w-full h-72 overflow-y-scroll sc">
                        {bids?.map(e => <Bids {...e} />)}
                    </div>

                </div>
            </div>}

        </>
    )
}

const Bids = ({ amount, username }) => {
    return (
        <div className="flex justify-between hover:shadow-xl">
            <div className="flex gap-3 items-center">
                <p className='text-xs'>2m ago</p>
                <div className="w-9 h-9 rounded-lg bg-[#0062F4]"></div>
                <div className="text-xs">
                    <p className='font-bold capitalize'>{username}</p>
                    <p>Monday,June 31,2022</p>
                </div>
            </div>
            <p className='text-[#6418C3] text-xs font-bold'>{amount} AED</p>
        </div>
    )
}




const Chart = () => {


    const options = {
        responsive: true,

        plugins: {
            tooltip: {
                enabled: true
            },
            legend: {
                display: false
            }
        },
        scales: {
            x: {
                grid: {
                    color: "rgba(0,0,0,0)"
                }

            }
        }

    };

    const labels = ["Position 1", "Position 2", "Position 3", "Position 4", "Position 5", "Position 6"];

    const data = {
        labels,

        datasets: [
            {
                label: "Platinum",
                categoryPercentage: 0.5,
                data: [1, 2, 3, 4, 5, 6, 7],
                backgroundColor: "#0062F4",
                barThickness: 8,
                borderRadius: 50
            },
            {
                label: "Gold",
                categoryPercentage: 0.5,
                data: [1, 2, 3, 4, 5, 6, 7],
                backgroundColor: "#F4B000",
                barThickness: 8,
                borderRadius: 50
            },
            {
                label: "Silver",
                categoryPercentage: 0.5,
                data: [1, 2, 3, 4, 5, 6, 7],
                backgroundColor: "#FF4D00",
                barThickness: 8,
                borderRadius: 50
            }
        ]
    };

    return (
        <div className="h-52 w-full cursor-pointer">
            <Bar style={{ width: '100%' }} options={options} data={data} />
        </div>
    )
}


const Winner = () => {
    return (
        <div className="w-full  bg-white rounded-lg p-5 space-y-5 relative">

            <img src={dots} className='absolute top-5 right-5' alt="" />

            <div className="text-lg font-bold">
                <p>Hurray!</p>
                <p>
                    <span className='text-[#0062F4] cursor-pointer'>Roshni</span> has won</p>
                <p className='text-[#0062F4] '>Platinum Bid</p>
                <p className='text-xs font-normal text-[#A5A5A5]'>Bid on Position 1</p>
            </div>

            <div className="">
                <p className='text-2xl font-bold text-[#6418C3]'>290 AED</p>
                <button className='w-[132px] h-9 rounded-lg bg-[#6418C3] text-white text-xs'>Notify Via Email</button>
            </div>

        </div>
    )
}