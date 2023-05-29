import React, { useEffect, useState } from 'react'

import totalAmountIcon from '../../../../asset/icons/dashboard/payment history/totalAmout.png'
import upArrowIcon from '../../../../asset/icons/dashboard/payment history/upArrow.png'
import downArrowIcon from '../../../../asset/icons/dashboard/payment history/downArrow.png'

import diamondIcon from '../../../../asset/icons/dashboard/profile/diamond.svg'


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
import { useSelector } from 'react-redux';
import axios from 'axios'
import BackendIP from '../../../../BackendIP'


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
)





function PaymentsHistory() {
    const [paymentHistory, setPaymentHistory] = useState([])
    const [totalAmount, setTotalAmount] = useState(0)

    useEffect(() => {
      axios.get(`${BackendIP}/payment`).then(res=>{
        setPaymentHistory(res.data)
        
        let amount = 0
        // eslint-disable-next-line
        res.data?.map(e=>{
            amount = amount + e.amount
        })
        setTotalAmount(amount)

      })
    }, [])
    
    return (
        <div className='space-y-5'>
            <Menu />
            <div className="flex gap-4 flex-wrap">

                <div className="w-[600px] min-h-[260px] h-auto bg-white rounded-lg p-5">
                    <div className="">
                        <p className='text-xl font-bold'>Bid Income</p>
                        <p className='text-sm text-[#A5A5A5]'></p>
                    </div>
                    <Graph />
                </div>

                <div className="space-y-5">
                    <div className="w-[475px] h-[130px] bg-white rounded-lg p-5 flex justify-between items-center font-bold">
                        <div className="flex items-center gap-3">
                            <img src={totalAmountIcon} alt="" />
                            <div className="">
                                <p className='text-sm'>Total Amount</p>
                                <p className='text-2xl'>AED {totalAmount}</p>
                            </div>
                        </div>

                        <div className="flex flex-col items-end">
                            <p className='text-sm'>Average from last </p>
                            <p className='text-sm'>+0,5% invoices sent</p>
                        </div>

                    </div>
                    <div className="flex gap-5 font-bold">

                        <div className="w-[230px] h-[130px] bg-white rounded-lg p-5 space-y-5">
                            <p className='text-lg'>Successful Bids</p>
                            <div className="flex items-center gap-5">
                                <p className='text-3xl'>{paymentHistory.filter(e=>e.status==='paid').length}</p>
                                <div className="w-20 h-8 rounded-xl bg-[#38E25D] flex gap-1 justify-center items-center text-white font-normal text-sm">
                                    <img src={upArrowIcon} alt="" />
                                    <p>+ 0.5%</p>
                                </div>
                            </div>
                        </div>

                        <div className="w-[230px] h-[130px] bg-white rounded-lg p-5 space-y-5">
                            <p className='text-lg'>Declined Bids</p>
                            <div className="flex items-center gap-5">
                                <p className='text-3xl'>{paymentHistory.filter(e=>e.status==='declined').length}</p>
                                <div className="w-20 h-8 rounded-xl bg-[#D80027] flex gap-1 justify-center items-center text-white font-normal text-sm">
                                <img src={downArrowIcon} alt="" />
                                    <p>- 0.5%</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>



            <table className='bg-white rounded-md w-full '>
                <thead className='w-full font-bold text-sm'>

                    <tr className='w-full h-16 border-b'>
                        <th className='h-full w-[15%]  text-start'></th>
                        <th className='h-full w-[25%] text-start'>Bidder</th>
                        <th className='h-full w-[15%] text-start'>Bid Amount</th>
                        <th className='h-full w-[15%] text-start'>Payment Status</th>
                        <th className='h-full w-[15%] text-start'>Bid Category</th>
                        <th className='h-full w-[15%] text-start'>Profile Status</th>
                    </tr>

                </thead>
                <tbody className='w-full '>
                    {paymentHistory.map(e=><TableBody {...e} />)}
                </tbody>

            </table>


        </div>
    )
}

export default PaymentsHistory



const Menu = () => {
    return (
        <div className="flex justify-between items-center flex-wrap gap-3">
            <div className="">
                <h2 className='font-bold text-2xl'>Payment History</h2>
            </div>

        </div>
    )
}


const Graph = () => {
    const { isDarkMode } = useSelector(state => state.util)

    const options = {
        elements: {
            point: {
                radius: 0
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
        },
        scales: {
            x:{
                grid: {
                    color:"rgba(0,0,0,0)"
                }
                
            },
            y:{
                grid: {
                    color:"rgba(0,0,0,0)"
                }
            }
        },

    };

    const data = {
        labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        datasets: [
            {
                label: 'Revenue ',
                data: [10, 30, 20, 40, 30, 40, 50],
                borderColor: isDarkMode ? '#3b82f6' : " #6418C3",
                tension: 0.4,
                borderWidth: 5,
                filler: true,
            }
        ],

    };
    return (
        <div className="h-56 w-full cursor-pointer">
            <Line options={options} data={data} />
        </div>
    )
}


const TableBody = ({username,amount,status,bid}) =>{
    return(
        <tr className='w-full h-16 border-b hover:shadow-lg'>

                        <td className='h-full w-[15%] text-center'>
                            <input type="checkbox" name="" id="" />
                        </td>

                        <td className='h-full w-[25%] '>
                            <div className="h-full w-full flex items-center gap-3">
                                <div className={`w-8 h-8  rounded-md flex justify-center items-center
                                ${bid?.tier === 'platinum' && 'bg-[#0062F4]'}
                                ${bid?.tier === 'gold' && 'bg-[#F4B000]'}
                                ${bid?.tier === 'silver' && 'bg-[#A63200]'}
                                `}>
                                    <img src={diamondIcon} alt="" />
                                </div>
                                <div className="">
                                    <p className='font-bold text-xs capitalize'>{username}</p>
                                    {/* <p className='text-xs'>India</p> */}
                                </div>
                            </div>
                        </td>

                        <td className='h-full w-[15%] font-bold text-xs'>{amount} AED</td>
                        <td className={`h-full w-[15%] font-bold text-xs capitalize 
                        ${status==='paid' && 'text-[#38E25D]'}
                        ${status==='pending' && 'text-[#F4B000]'}
                        ${status==='decliend' && 'text-[#CE0000]'}
                        `}>{status}</td>
                        <td className='h-full w-[15%] font-bold text-xs capitalize'>{bid?.tier}</td>
                        <td className='h-full w-[15%] font-bold text-xs'>Active</td>
                    </tr>
    )
}