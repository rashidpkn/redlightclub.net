import React, { useEffect, useState } from 'react'
import lensIcon from '../../../../asset/icons/dashboard/profile/lens.svg'
import axios from 'axios'
import BackendIP from '../../../../BackendIP'

function Affiliative() {
    const [user, setUser] = useState([])
    useEffect(() => {
        axios.get(`${BackendIP}/user`).then(res => {

            setUser(res.data)
        })
    }, [])

    return (
        <div className='w-full h-full space-y-5'>
            <div className="menu flex justify-between items-center">
                <p className='font-cairo text-2xl font-bold'>Affiliative</p>
                <div className="w-64 h-14 relative shadow-md">
                    <input className='w-full h-full rounded-xl bg-white outline-none pl-10' placeholder='Search here' type="text" />
                    <img src={lensIcon} className='absolute w-5 h-5 top-[1.10rem] left-3' alt="" />
                </div>
            </div>
            <table className='bg-white rounded-2xl w-full '>
                <thead className='w-full font-bold text-sm'>

                    <tr className='w-full h-16 border-b'>
                        <th className='h-full w-[10%]  text-start'>#</th>
                        <th className='h-full w-[15%] text-start'>Username</th>
                        <th className='h-full w-[15%] text-start'>No of Affilites</th>
                        <th className='h-full w-[15%] text-start'>User Status</th>
                        <th className='h-full w-[15%] text-start'>Credits Earned</th>
                        <th className='h-full w-[15%] text-start'>Affiliates Activity</th>
                    </tr>
                </thead>
                <tbody className='w-full '>
                    {user.map(e => e.referredto.length !== 0 && <TableRow {...e} />)}
                </tbody>

            </table>
        </div>
    )
}

export default Affiliative

const TableRow = ({ username, referredto }) => {
    const [viewActivity, setViewActivity] = useState(false)
    return (
        <>
            <tr className='w-full h-16 border-b hover:shadow-lg'>
                <td className='h-full w-[10%] font-bold text-xs'>1</td>
                <td className='h-full w-[15%] font-bold text-xs capitalize'>{username}</td>
                <td className='h-full w-[15%] font-bold text-xs'>{referredto?.length}</td>
                <td className='h-full w-[15%] font-bold text-xs'>
                    {referredto?.length < 5 && "Beginner"}
                    {referredto?.length >= 5 && referredto?.length < 10 && "Intermediate"}
                    {referredto?.length >= 10 && "Expert"}
                </td>
                <td className='h-full w-[15%] font-bold text-xs'>{referredto.reduce((a, b) => a.amount + b.amount)}</td>
                <td className='h-full w-[15%] font-bold text-xs'>
                    <button className='bg-[#0062F4] py-2 px-5 rounded-lg text-white' onClick={()=>{setViewActivity(true)}}>View Activity</button>
                </td>
            </tr>
            {
                viewActivity && <ViewActivity referredto={referredto} setViewActivity={setViewActivity} />
            }
        </>
    )
}

const ViewActivity = ({ referredto,setViewActivity }) => {

    const [inner, setInner] = useState(0)
    const [outer, setOuter] = useState(0)

    useEffect(() => {
      if(inner < outer){
            setViewActivity(false)
      }
      // eslint-disable-next-line
    }, [inner,outer])
    

    return (
        <div className="fixed bg-black/30 h-screen w-full top-0 left-0 z-50 flex justify-center items-center" onClick={()=>setOuter(outer + 1)}>
            <div className="w-[1148px] h-[659px] bg-white p-8  rounded-2xl" onClick={()=>setInner(inner+1)} >
                <table className=' rounded-2xl w-full'>
                    <thead className='w-full font-bold text-sm'>
                        <tr className='w-full h-16 border-b'>
                            <th className='h-full w-[5%]   text-start'>Si No</th>
                            <th className='h-full w-[20%]  text-start'>Date</th>
                            <th className='h-full w-[20%]  text-start'>Affiliates Name</th>
                            <th className='h-full w-[25%]  text-start'>Affiliates Activity</th>
                            <th className='h-full w-[30%]  text-start'>Credit Earned by User</th>
                        </tr>
                    </thead>
                    <tbody className='w-full'>
                        {referredto.map((e,index)=><tr className='w-full h-16 border-b hover:shadow-lg'>
                            <td className='h-full w-[5%]   font-bold text-xs'>{index + 1}</td>
                            <td className='h-full w-[20%] font-bold text-xs'>{e.date}</td>
                            <td className='h-full w-[20%] font-bold text-xs'>{e.username}</td>
                            <td className='h-full w-[25%] font-bold text-xs'>Banner</td>
                            <td className='h-full w-[30%] font-bold text-xs'>{e.amount}</td>
                        </tr>)}
                        
                    </tbody>
                </table>
            </div>
        </div>
    )
}