import React from 'react'

import totalAmountIcon from '../../../../asset/icons/dashboard/payment history/totalAmout.png'
import upArrowIcon from '../../../../asset/icons/dashboard/payment history/upArrow.png'
import downArrowIcon from '../../../../asset/icons/dashboard/payment history/downArrow.png'

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
    return (
        <div className='space-y-5'>
            



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
                    <TableBody/>
                    <TableBody/>
                    <TableBody/>
                    <TableBody/>
                    <TableBody/>
                    <TableBody/>
                    <TableBody/>
                    <TableBody/>
                    <TableBody/>
                    <TableBody/>
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
                <p className='text-sm text-[#A5A5A5]'>Lorem ipsum olor sit amet </p>
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


const TableBody = () =>{
    return(
        <tr className='w-full h-16 border-b hover:shadow-lg'>

                        <td className='h-full w-[15%] text-center'>
                            <input type="checkbox" name="" id="" />
                        </td>

                        <td className='h-full w-[25%] '>
                            <div className="h-full w-full flex items-center gap-3">
                                <div className="w-8 h-8 bg-black rounded-md"></div>
                                <div className="">
                                    <p className='font-bold text-xs'>Roshni</p>
                                    <p className='text-xs'>India</p>
                                </div>
                            </div>
                        </td>

                        <td className='h-full w-[15%] font-bold text-xs'>400 AED</td>
                        <td className='h-full w-[15%] font-bold text-xs'>Paid</td>
                        <td className='h-full w-[15%] font-bold text-xs'>Platinum</td>
                        <td className='h-full w-[15%] font-bold text-xs'>Active</td>
                    </tr>
    )
}