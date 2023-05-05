import React, { useEffect, useState } from 'react'

import auctionsIcon from '../../../../asset/icons/dashboard/affiliative/Auctions.svg'
import bannerIcon from '../../../../asset/icons/dashboard/affiliative/Banners.svg'
import purchaseIcon from '../../../../asset/icons/dashboard/affiliative/purchase.svg'
import startIcon from '../../../../asset/icons/dashboard/affiliative/star.svg'
import cashIcon from '../../../../asset/icons/dashboard/affiliative/cash.svg'
import referralIcon from '../../../../asset/icons/dashboard/affiliative/Referral.svg'
import ring from '../../../../asset/icons/dashboard/affiliative/ring.png'
import mark from '../../../../asset/icons/dashboard/affiliative/mark.svg'
import { useSelector } from 'react-redux'
import axios from 'axios'
import BackendIP from '../../../../BackendIP'

function Affiliative() {
    const {username} = useSelector(state=>state.user)

    const [user, setUser] = useState({})
    useEffect(() => {
        axios.get(`${BackendIP}/user/get-a-user`, { params: { username } }).then(res => {
            setUser(res.data)
        })
    }, [username])
    
    return (
        <div className='space-y-5'>
            <p className='text-2xl font-bold'> Affiliative </p>
            <div className="w-full min-h-[435px] h-full  relative mt-2 hover:shadow-earn-credit-shadow duration-200 cursor-pointer rounded-xl">

                <div className="absolute h-full w-full backdrop-blur-xl rounded-xl px-7 py-8  text-white flex divide-x" style={{ background: 'rgba(255, 0, 0, 0.44)' }}>

                    <div className="w-2/3 h-full flex flex-col items-center justify-between p-3">


                        <div className="space-y-3">
                            <p className='text-center text-lg font-bold'>{user?.referredto?.length}/10 Referrals</p>

                            <div className="w-[510px] h-[90px] flex flex-col justify-center">
                                <div className="w-full flex justify-between items-center">
                                    <div className="w-1/3"></div>
                                    <div className="w-[17px] h-[22px">
                                        <img src={mark} alt="" />
                                    </div>
                                    <p className='w-1/3 text-[10px]'>Next tier in : 4 more Referrals</p>
                                </div>
                                <div className="mt-3">
                                    <div className="w-full h-2 bg-white rounded-full relative flex justify-between items-center">
                                        <div className="absolute  h-full rounded-full bg-[#635FFF]" style={{width:`${user?.referredto?.length*10}%`}}></div>
                                        <div className="w-4 h-4 bg-[#6418C3] rounded-full relative z-10"></div>
                                        <div className="w-7 h-7 bg-[#6418C3] rounded-full relative z-10"></div>
                                        <div className="w-4 h-4 bg-[#6418C3] rounded-full relative z-10"></div>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center mt-10">
                                    <p>Beginner</p>
                                    <p>Intermediate</p>
                                    <p>Expert</p>
                                </div>
                            </div>


                        </div>


                        <div className="flex justify-between w-full text-black">
                            <div className="w-56 h-16 bg-white rounded-xl flex justify-center items-center gap-7">
                                <div className="flex gap-1">
                                    <img src={startIcon} width={20} alt="" />
                                    <img src={startIcon} width={20} alt="" />
                                </div>
                                <div className="">
                                    <p className='text-lg font-bold'>Intermediate</p>
                                    <p className='text-[10px]'>Current Status</p>
                                </div>
                            </div>
                            <div className="w-56 h-16 bg-white rounded-xl flex justify-center items-center gap-7">
                                <div className="w-12 h-12">
                                    <img src={cashIcon} alt="" />
                                </div>
                                <div className="">
                                    <p className='text-lg font-bold'>364 AED</p>
                                    <p className='text-[10px]'>Total Credits Earned</p>
                                </div>
                            </div>
                            <div className="w-56 h-16 bg-white rounded-xl flex justify-center items-center gap-7">
                                <div className="w-12 h-12">
                                    <img src={referralIcon} className='w-full h-full' alt="" />
                                </div>
                                <div className="">
                                    <p className='text-lg font-bold'>{user?.referredto?.length}/10</p>
                                    <p className='text-[10px]'>Referrals Joined</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/3 h-full p-3 space-y-4">
                        <div className="space-y-2">
                            <p className='text-xl font-bold'>Affiliate Program Link</p>
                            <p className='text-sm font-light'>Note: This is custom generated link specially for your use</p>
                        </div>

                        <input type="text" className='bg-white w-[325px] h-12 rounded-xl text-black' readOnly value={`https://redlightclub.net/invite/${username}`} onClick={e=>{
                            navigator.clipboard.writeText(e.target.value)
                            window.alert("You are copied the invitation link please send to your friends")
                            }} />

                        <div className="w-full">
                            <p className='text-xl font-bold'>Tier Breakdown</p>
                            <div className="">

                                <div className="flex justify-between items-center w-full">
                                    <div className="w-1/4 flex justify-center">
                                        <img src={startIcon} alt="" />
                                    </div>
                                    <p className='w-3/4'><b> Beginner </b> : You get 20% of spend by your referrals</p>
                                </div>

                                <div className="flex justify-between items-center w-full">
                                    <div className="w-1/4 flex justify-center">
                                        <img src={startIcon} alt="" />
                                        <img src={startIcon} alt="" />
                                    </div>
                                    <p className='w-3/4'><b> Intermediate</b> : You get 30% of spend by your referrals</p>
                                </div>

                                <div className="flex justify-between items-center w-full">
                                    <div className="w-1/4 flex justify-center">
                                        <img src={startIcon} alt="" />
                                        <img src={startIcon} alt="" />
                                        <img src={startIcon} alt="" />
                                    </div>
                                    <p className='w-3/4'><b> Expert </b> : You get 30% of spend by your referrals</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="bg-white p-5 w-full rounded-xl space-y-10">
                <p className='text-xl font-bold'> Earnings Breakdown </p>
                <div className="flex justify-between">
                    <div className="flex gap-3">

                        <div className="w-44  bg-[#F5F5F5] rounded-xl p-6 space-y-3">
                            <div className="w-9 h-9">
                                <img src={auctionsIcon} className='w-full h-full' alt="" />
                            </div>
                            <div className="">
                                <p className='text-lg font-bold'>364 AED</p>
                                <p className='text-[10px]'>Credits Earned from <br />
                                    from Auctions by referrals</p>
                            </div>
                        </div>

                        <div className="w-44  bg-[#F5F5F5] rounded-xl p-6 space-y-3">
                            <div className="w-9 h-9">
                                <img src={bannerIcon} className='w-full h-full' alt="" />
                            </div>
                            <div className="">
                                <p className='text-lg font-bold'>364 AED</p>
                                <p className='text-[10px]'>Credits Earned from <br />
                                    from Auctions by referrals</p>
                            </div>
                        </div>

                        <div className="w-44  bg-[#F5F5F5] rounded-xl p-6 space-y-3">
                            <div className="w-9 h-9">
                                <img src={purchaseIcon} className='w-full h-full' alt="" />
                            </div>
                            <div className="">
                                <p className='text-lg font-bold'>364 AED</p>
                                <p className='text-[10px]'>Credits Earned from <br />
                                    from Auctions by referrals</p>
                            </div>
                        </div>

                    </div>
                    <div className="space-y-3">
                        <p className='text-xl font-bold'>Overall Revenue</p>
                        <div className="flex gap-10">

                            <div className="space-y-5">
                                <div className="flex gap-3 items-center">
                                    <div className="w-4 h-4 bg-[#6418C3]"></div>
                                    <p>Toys Purchase</p>
                                </div>
                                <div className="flex gap-3 items-center">
                                    <div className="w-4 h-4 bg-[#FF4A55]"></div>
                                    <p>Toys Purchase</p>
                                </div>
                                <div className="flex gap-3 items-center">
                                    <div className="w-4 h-4 bg-[#FFAB2D]"></div>
                                    <p>Toys Purchase</p>
                                </div>
                            </div>

                            <div className="w-28 h-28">
                                <img src={ring} className='w-full h-full' alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <table className='w-full'>
                    <thead className='w-full font-bold h-12 border-b'>
                        <tr className='w-full'>
                            <th className='w-[10%]'>SI.NO</th>
                            <th className='w-[30%]'>Date</th>
                            <th className='w-[15%]'>Name</th>
                            <th className='w-[15%]'>Activity</th>
                            <th className='w-[30%]'>My Earning</th>
                        </tr>
                    </thead>
                    <tbody className='w-full'>
                    {user?.referredto?.map((e,index)=><TableRow  {...e} index={index} />)}

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Affiliative

const TableRow = ({index,username,amount,date}) => {
    return (
        <tr className='w-full text-center text-xs h-12 hover:shadow-md font-medium'>
            <td className='w-[10%]'>{index + 1}</td>
            <td className='w-[30%]'> {new Date(date).toString()}</td>
            <td className='w-[15%]'>{username}</td>
            <td className='w-[15%]'>Purchased toy</td>
            <td className='w-[30%]'>AED {amount ? amount : 0}</td>
        </tr>
    )
}