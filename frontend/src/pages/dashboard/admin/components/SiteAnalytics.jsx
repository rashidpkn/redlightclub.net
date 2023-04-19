import axios from 'axios'
import React, { useEffect, useState } from 'react'
import BackendIP from '../../../../BackendIP'
import Graph from '../../components/Graph'
import { TopBidLocation } from './Home'

import totalVisit from '../../../../asset/icons/dashboard/site analytics/totalVisit.png'
import customers from '../../../../asset/icons/dashboard/site analytics/customers.png'


function SiteAnalytics() {
    const [date, setDate] = useState([])
    const [view, setView] = useState([])
    const [totalViewers, setTotalViewers] = useState(0)
    const [users, setUsers] = useState([])
    useEffect(() => {
        axios.get(`${BackendIP}/user`).then(res=>{
            setUsers(res.data)
        })
    
    }, [])
    
    useEffect(() => {
        axios.get(`${BackendIP}/analytics`).then(res => {
            let date = []
            let view = []
            let viewers = 0
            //eslint-disable-next-line
            res.data.map(e => {
                date.push(e.date)
                view.push(e.view)   
                viewers = viewers+e.view
            })
            setTotalViewers(viewers)
            setDate(date)
            setView(view)
        })
        //eslint-disable-next-line
    }, [])
    return (
        <div className=' space-y-5'>
            {/* <h1 className='text-2xl font-bold'>Site Analytics</h1>
            <Graph date={date} view={view} /> */}
            <div className="w-full p-5 bg-white rounded-lg space-y-5">
                <div className="flex justify-between">
                    <div className="">
                        <p className='text-lg font-bold'>Website Trafic</p>
                        <p className='text-xs'>Website Traffic for Redlightclub.net</p>
                    </div>
                    <select name="" id="">
                        <option value="">Weekly</option>
                        <option value="">Monthly</option>
                        <option value="">Yearly</option>
                    </select>
                </div>
                <div className=" w-full">
                    <Graph date={date} view={view} />
                </div>
            </div>
            <div className="flex items-center flex-wrap gap-5">
                
                <div className="w-64 h-[150px] bg-white rounded-md p-5 flex flex-col justify-between">
                    <p className='text-xl font-bold'>Total Site Visits</p>
                    <div className="flex gap-3 items-center">
                        <div className="h-7 w-7 bg-[#0062F4] rounded-lg flex justify-center items-center">
                            <img src={totalVisit} alt="" />
                        </div>
                        <p className='text-xl font-bold'>{totalViewers}</p>
                    </div>
                    <p className='text-[10px]'>Lorem ipsum dolor sit amet, </p>
                </div>

                <div className="w-64 h-[150px] bg-white rounded-md p-5 flex flex-col justify-between">
                    <p className='text-xl font-bold'>Users</p>
                    <div className="flex gap-3 items-center">
                        <div className="h-7 w-7 bg-[#6418C3] rounded-lg flex justify-center items-center">
                            <img src={users} alt="" />
                        </div>
                        <p className='text-xl font-bold'>{users.length}</p>
                    </div>
                    <p className='text-[10px]'>Lorem ipsum dolor sit amet, </p>
                </div>

                <div className="w-64 h-[150px] bg-white rounded-md p-5 flex flex-col justify-between">
                    <p className='text-xl font-bold'>Customers</p>
                    <div className="flex gap-3 items-center">
                        <div className="h-7 w-7 bg-[#34C38F] rounded-lg flex justify-center items-center">
                            <img src={customers} alt="" />
                        </div>
                        <p className='text-xl font-bold'>{users.filter(e=>e.role==='user').length}</p>
                    </div>
                    <p className='text-[10px]'>Lorem ipsum dolor sit amet, </p>
                </div>

                

            </div>
            <TopBidLocation />
        </div>
    )
}

export default SiteAnalytics

