import { Close } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'


import lensIcon from '../../../../asset/icons/dashboard/profile/lens.svg'
import { useSelector } from 'react-redux'
import axios from 'axios'
import BackendIP from '../../../../BackendIP'

function ReportIssues() {
    const [reports, setReports] = useState([])

    const fetchData = () => {
        axios.get(`${BackendIP}/issues`).then(res => {
            setReports(res.data)
        })
    }

    useEffect(() => {
        fetchData()
    }, [])


    return (
        <div className='space-y-5'>
            <Menu fetchData={fetchData}/>
            <table className='bg-white rounded-md w-full '>
                <thead className='w-full font-bold text-sm'>

                    <tr className='w-full h-16 border-b'>
                        <th className='h-full w-[10%]  text-start'>SL.NO</th>
                        <th className='h-full w-[20%] text-start'>Profile</th>
                        <th className='h-full w-[20%] text-start'>Reason</th>
                        <th className='h-full w-[30%] text-start'>Description</th>
                        <th className='h-full w-[20%] text-start'>Vote</th>
                    </tr>
                </thead>
                <tbody className='w-full'>
                    {reports.map(e => <TableRow {...e} e={e} fetchData={fetchData}/>)}


                </tbody>
            </table>
        </div>
    )
}

export default ReportIssues



const TableRow = ({ id, phoneNumber, subject, description, vote, e,fetchData}) => {
    const [alertDetails, setAlertDetails] = useState(false)
    const {username} = useSelector(state=>state.user)
    return (
        <>
            <tr className='w-full h-16 border-b hover:shadow-lg'>
                <td className='h-full w-[10%]  font-bold text-xs'>1</td>
                <td className='h-full w-[20%] font-bold text-xs'>{e.username}</td>
                <td className='h-full w-[20%] font-bold text-xs'>{subject}</td>
                <td className='h-full w-[30%] font-bold text-xs'>{description}</td>
                <td className='h-full w-[20%] font-bold text-xs'>
                    <div className="flex justify-center items-center w-full h-full gap-5">
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 bg-black" onClick={()=>axios.post(`${BackendIP}/issues/vote`,{id,username,response:true}).then(res=>{res.data?window.alert("Done"):window.alert("You are alredy voted");fetchData()})}></div>
                            <p>{vote?.filter(e => e.response === true).length}</p></div>
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 bg-black" onClick={()=>axios.post(`${BackendIP}/issues/vote`,{id,username,response:false}).then(res=>{res.data?window.alert("Done"):window.alert("You are alredy voted");fetchData()})}></div>
                            <p>{vote?.filter(e => e.response === false).length}</p></div>
                    </div>
                </td>

            </tr>
            {
                alertDetails && <div className="fixed w-full h-screen bg-black/10 top-0 left-0 flex justify-center items-center">
                    <div className="w-[750px]  bg-white rounded-xl p-5 space-y-5">
                        <div className="flex justify-between items-center">
                            <p className='font-bold text-sm'>Ticket Details</p>
                            <Close onClick={() => setAlertDetails(false)} />
                        </div>
                        <div className="flex justify-between w-full">
                            <div className="">
                                <p className='text-sm font-bold text-[#C7C7C7]'>Name</p>
                                <input type="text" className='w-[300px] h-11 bg-[#F5F5F5] rounded-xl' />
                            </div>
                            <div className="">
                                <p className='text-sm font-bold text-[#C7C7C7]'>Email</p>
                                <input type="text" className='w-[300px] h-11 bg-[#F5F5F5] rounded-xl' />
                            </div>
                        </div>

                        <div className="">
                            <p className='text-sm font-bold text-[#C7C7C7]'>Ticket Type</p>
                            <input type="text" className='w-[300px] h-11 bg-[#F5F5F5] rounded-xl' />
                        </div>

                        <div className="">
                            <p className='text-sm font-bold text-[#C7C7C7]'>Subject</p>
                            <input type="text" className='w-full h-11 bg-[#F5F5F5] rounded-xl' />
                        </div>

                        <div className="">
                            <p className='text-sm font-bold text-[#C7C7C7]'>Details</p>
                            <input type="text" className='w-full h-48 bg-[#F5F5F5] rounded-xl' />
                        </div>

                        

                        <div className="flex gap-5">
                            <button className='h-11 w-40 rounded-2xl text-white bg-[#5ECFFF]' onClick={() => { setAlertDetails(false) }}>Message Client</button>
                            <button className='h-11 w-40 rounded-2xl text-white bg-[#34C38F]' onClick={() => { setAlertDetails(false) }}>Mark Resolved</button>

                        </div>

                    </div>
                </div>
            }

        </>
    )
}



const Menu = ({fetchData}) => {
    const [reportIssue, setReportIssue] = useState(false)
    const { username } = useSelector(state => state.user)
    const [report, setReport] = useState({
        username: '',
        phoneNumber: '',
        subject: '',
        description: ''
    })


    const [insideClick, setInsideClick] = useState(0)
    const [outsideClick, setOutsideClick] = useState(0)
    useEffect(() => {
  
      if (outsideClick > insideClick) {
        setReportIssue(false)
        setInsideClick(0)
        setOutsideClick(0)
      }
      // eslint-disable-next-line
    }, [outsideClick])


    return (
        <>
            <div className="flex justify-between items-center flex-wrap gap-3">
                <div className="">
                    <h2 className='font-bold text-2xl'>Report Issues</h2>
                    <p className='text-sm text-[#A5A5A5]'>Report Problematic Customers here to help others avoid the same problems </p>
                </div>
                <div className="flex gap-3 flex-wrap justify-center">
                    <div className="w-64 h-14 relative">
                        <input className='w-full h-full rounded-xl bg-white outline-none pl-10' placeholder='Search here' type="text" />

                        <img src={lensIcon} className='absolute w-5 h-5 top-[1.10rem] left-3' alt="" />

                    </div>
                    <button className='hover:shadow-2xl duration-500 w-36 h-14 rounded-xl text-white bg-[#6418C3] text-sm font-bold' >Search</button>
                    <button className='hover:shadow-2xl duration-500 w-36 h-14 rounded-xl text-white bg-[#CE0000] text-sm font-bold' onClick={setReportIssue}>Report a issue</button>
                </div>
            </div>
            {reportIssue && <div className="fixed z-50 -top-5 left-0 h-screen w-full bg-black/30 flex justify-center items-center" onClick={()=>{setOutsideClick(outsideClick+1)}}>
                <div className=" w-[736px] rounded-2xl bg-white p-8" onClick={()=>{setInsideClick(insideClick+1)}}>
                    <p className='text-xl font-bold'>Report a Issues</p>
                    <div className="mt-6 flex gap-5">
                        <div className="space-y-3.5">
                            <p className='text-sm font-bold '>Username</p>
                            <input className='w-[300px] h-[47px] bg-[#F5F5F5] rounded-xl pl-5' type="text" onChange={e => setReport({ ...report, username: e.target.value })} />
                        </div>
                        <div className="space-y-3.5">
                            <p className='text-sm font-bold '>Phone Number</p>
                            <input className='w-[300px] h-[47px] bg-[#F5F5F5] rounded-xl pl-5' type="text" onChange={e => setReport({ ...report, phoneNumber: e.target.value })} />
                        </div>
                    </div>
                    <div className="space-y-3.5 mt-6">
                        <p className='text-sm font-bold '>Reason for report</p>
                        <select className='w-[300px] h-[47px] bg-[#F5F5F5] rounded-xl pl-5' type="text" onChange={e => setReport({ ...report, subject: e.target.value })} >
                            <option value="">Select your reason</option>
                            <option value="Police Authority">Police Authority</option>
                            <option value="Rude Behaviour">Rude Behaviour</option>
                            <option value="Scam">Scam</option>
                            <option value="Time Waster">Time Waster</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div className="space-y-3.5 mt-6">
                        <p className='text-sm font-bold '>Description</p>
                        <textarea className='w-full h-[217px] bg-[#F5F5F5] rounded-xl p-5' type="text" onChange={e => setReport({ ...report, description: e.target.value })} />
                    </div>
                    <div className="flex gap-5 mt-4">
                        <button className='px-4 py-3 rounded-xl bg-[#D80027] text-sm font-bold text-white' onClick={() => {
                            axios.post(`${BackendIP}/issues`, { ...report, reportedby: username }).then(res => {
                                window.alert("You Repoting is submitted")
                                fetchData()
                                setReportIssue(false)
                            })
                        }}>Report Issue</button>
                        <button className='px-4 py-3 rounded-xl bg-[#D80027] text-sm font-bold text-white' onClick={() => { setReportIssue(false) }}>Close</button>

                    </div>
                </div>
            </div>}
        </>
    )
}