import React, { useEffect, useState } from 'react'

// import totalAmountIcon from '../../../../asset/icons/dashboard/payment history/totalAmout.png'
// import upArrowIcon from '../../../../asset/icons/dashboard/payment history/upArrow.png'
// import downArrowIcon from '../../../../asset/icons/dashboard/payment history/downArrow.png'

// import { Line } from 'react-chartjs-2'
import {
    Chart as ChartJS, CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
// import { useSelector } from 'react-redux';

import diamondIcon from '../../../../asset/icons/dashboard/profile/diamond.svg'
import { useSelector } from 'react-redux';
import axios from 'axios';
import BackendIP from '../../../../BackendIP';


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
    const {username} = useSelector(state=>state.user)

    const [paymentHistory, setPaymentHistory] = useState([])

    useEffect(() => {
      axios.get(`${BackendIP}/payment/get-by-user`,{params:{username}}).then(res=>{
        setPaymentHistory(res.data)
      })

    
    }, [username])
    
    return (
        <div className='space-y-5'>




            <table className='bg-white rounded-md w-full '>
                <thead className='w-full font-bold text-sm'>

                    <tr className='w-full h-16 border-b'>
                        <th className='h-full w-[15%]  text-start'></th>
                        <th className='h-full w-[25%] text-start'>Bid</th>
                        <th className='h-full w-[15%] text-start'>Winning Bid Amount</th>
                        <th className='h-full w-[15%] text-start'>Payment Status</th>
                        <th className='h-full w-[15%] text-start'>Date</th>
                        <th className='h-full w-[15%] text-start'>Invoice</th>
                    </tr>

                </thead>
                <tbody className='w-full '>
                    {
                        paymentHistory.map(e=><TableBody {...e} />)
                    }
                   

                </tbody>

            </table>


        </div>
    )
}

export default PaymentsHistory


const TableBody = (
    { bid, amount, status, invoice }
) => {
    return (
        <tr className='w-full h-16 border-b hover:shadow-lg'>

            <td className='h-full w-[15%] text-center'>
                <input type="checkbox" name="" id="" />
            </td>

            <td className='h-full w-[25%] '>
                <div className="h-full w-full flex items-center gap-3">
                    <div className={`w-8 h-8 
                                ${bid?.tier === 'platinum' && 'bg-[#0062F4]'}
                                ${bid?.tier === 'gold' && 'bg-[#F4B000]'}
                                ${bid?.tier === 'silver' && 'bg-[#A63200]'}
                                
                                 rounded-md flex justify-center items-center`}>
                        <img src={diamondIcon} className='w-5' alt="" />
                    </div>
                    <div className="">
                        <p className='font-bold text-xs capitalize'>{bid?.tier}</p>
                        <p className='text-xs'> Position {bid?.position}</p>
                    </div>
                </div>
            </td>

            <td className='h-full w-[15%] font-bold text-xs'>{amount} AED</td>
            <td className={`h-full w-[15%] font-bold text-xs capitalize
            ${status==='paid' && 'text-[#38E25D]'}
            ${status==='pending' && 'text-[#F4B000]'}
            ${status==='decliend' && 'text-[#CE0000]'}
            `}>{status}</td>
            <td className='h-full w-[15%] font-bold text-xs'>APR 19,2023</td>
            <td className='h-full w-[15%] font-bold text-xs'>{invoice}</td>
        </tr>
    )
}