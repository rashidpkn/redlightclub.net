import { Close } from '@mui/icons-material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import lensIcon from '../../../../asset/icons/dashboard/profile/lens.svg'
import BackendIP from '../../../../BackendIP'


function ReportedProfiles() {
    const [reportedProfiles, setReportedProfiles] = useState([])
    const fetchData = () =>{
        axios.get(`${BackendIP}/report`).then(res=>{
            setReportedProfiles(res.data)
        })
    }
    useEffect(() => {
        fetchData()
    }, [])
    
    return (
        <div className="space-y-5">
            <Menu data={reportedProfiles} setReportedProfiles={setReportedProfiles} fetchData={fetchData} />
            <table className='bg-white rounded-md w-full '>
                <thead className='w-full font-bold text-sm'>
                    <tr className='w-full h-16 border-b'>
                        <th className='h-full w-[5%]  text-start'></th>
                        <th className='h-full w-[20%] text-start'>Profile</th>
                        <th className='h-full w-[25%] text-start'>Report Date</th>
                        <th className='h-full w-[25%] text-start'>Reason</th>
                        <th className='h-full w-[25%] text-start'>Action</th>
                        
                    </tr>
                </thead>
                <tbody className='w-full '>
                    {reportedProfiles.map(e=><ReportedProfile {...e} fetchData={fetchData}/>)}
                    
                </tbody>

            </table>
        </div>
    )
}

export default ReportedProfiles

const ReportedProfile = ({adsTitle,reason,createdAt,id , fetchData}) => {
    const deleteAds = () =>{
        axios.post(`${BackendIP}/report/delete-ads`,{id,adsTitle}).then(res=>{
            window.alert("Ads is Deleted")
            fetchData()
        })
        setDeleteAdsAlert(false)
    }
    const deleteReport = () =>{
        axios.post(`${BackendIP}/report/delete-report`,{id}).then(res=>{
            window.alert("Report is Deleted")
            fetchData()
        })
        setDeleteReportAlert(false)
    }
    const [deleteAdsAlert, setDeleteAdsAlert] = useState(false)
    const [deleteReportAlert, setDeleteReportAlert] = useState(false)
    return (
        <>
        <tr className='w-full h-16 border-b hover:shadow-lg'>
            <td className='h-full w-[5%] text-center'><input type="checkbox" name="" id="" /></td>
            <td className='h-full w-[20%] '>
                <div className="h-full w-full flex items-center gap-3">
                    <div className="w-8 h-8 bg-black rounded-md"></div>
                    <div className="">
                        <p className='font-bold text-xs'>{adsTitle}</p>
                        <p className='text-xs'>India</p>
                    </div>
                </div>
            </td>
            <td className='h-full w-[25%] text-xs'>{createdAt}</td>
            <td className='h-full w-[25%] text-xs'>{reason}</td>
            
            <td className='h-full w-[25%] '>
                <div className="h-full w-full flex gap-3 items-center">
                    <button className='px-2 h-9 rounded-lg bg-[#38E25D] text-black font-bold text-[10px]' onClick={()=>setDeleteReportAlert(true)}>Delete Report</button>
                    <button className='px-2 h-9 rounded-lg bg-[#ce0000] text-white font-bold text-[10px]' onClick={()=>setDeleteAdsAlert(true)}>Delete Ads</button>
                </div>
            </td>
        </tr>

        {
            deleteAdsAlert && <div className="fixed h-screen w-full bg-black/10 top-0 left-0 z-50 flex justify-center items-center">
            <div className="bg-white w-[500px] rounded-lg p-5 space-y-10">

                <div className="flex justify-between w-full">
                    <div className="">
                        <p className='font-bold text-2xl'>Delete ads</p>
                    </div>
                    <div className="flex items-center gap-5">
                        <Close className='font-bold text-[#A5A5A5]' fontSize='small' onClick={()=>{setDeleteAdsAlert(false)}} />
                    </div>
                </div>
                <p className='font-bold text-center'>Do you want to delete this ads?</p>

                <div className="flex justify-between items-center">
                    <button className='w-[140px] h-12 bg-[#FF0000] rounded-xl text-white font-bold text-xs'  onClick={deleteAds}>Delete ads</button>
                    <button className='w-[140px] h-12 bg-[#34C38F] rounded-xl text-white font-bold text-xs' onClick={()=>{setDeleteAdsAlert(false)}}>Cancel</button>
                </div>
            </div>
        </div>
        }
        
        {
            deleteReportAlert && <div className="fixed h-screen w-full bg-black/10 top-0 left-0 z-50 flex justify-center items-center">
            <div className="bg-white w-[500px] rounded-lg p-5 space-y-10">

                <div className="flex justify-between w-full">
                    <div className="">
                        <p className='font-bold text-2xl'>Delete Report</p>
                    </div>
                    <div className="flex items-center gap-5">
                        <Close className='font-bold text-[#A5A5A5]' fontSize='small'  onClick={()=>setDeleteReportAlert(false)} />
                    </div>
                </div>
                <p className='font-bold text-center'>Do you want to delete this Report?</p>

                <div className="flex justify-between items-center">
                    <button className='w-[140px] h-12 bg-[#FF0000] rounded-xl text-white font-bold text-xs' onClick={deleteReport} >Delete Report</button>
                    <button className='w-[140px] h-12 bg-[#34C38F] rounded-xl text-white font-bold text-xs' onClick={()=>setDeleteReportAlert(false)} >Cancel</button>
                </div>
            </div>
        </div>
        }
        </>
    )
}


const Menu = ({data, setReportedProfiles,fetchData}) => {
    const [adsTitle, setAdsTitle] = useState('')
    return (
        <div className="flex justify-between items-center flex-wrap gap-3">
            <div className="">
                <h2 className='font-bold text-2xl'>Reported Profiles</h2>
                <p className='text-sm text-[#A5A5A5]'>Lorem ipsum olor sit amet </p>
            </div>
            <div className="flex gap-3 flex-wrap justify-center">
                <div className="w-64 h-14 relative">
                    <input className='w-full h-full rounded-xl bg-white outline-none pl-10' placeholder='Search here' type="text" onChange={e=>{setAdsTitle(e.target.value)}} />

                    <img src={lensIcon} className='absolute w-5 h-5 top-[1.10rem] left-3' alt="" />

                </div>
                <button className='hover:shadow-2xl duration-500 w-36 h-14 rounded-xl text-white bg-[#6418C3] text-sm font-bold' onClick={()=>{
                    if(adsTitle){
                        const profile = data.filter(e=>
                            e.adsTitle.toLowerCase()?.includes(adsTitle.toLowerCase())
                            )
                            if(profile){
                                setReportedProfiles(profile)
                                
                            }else window.alert('Profile not found')
                        }
                        else{
                            fetchData()
                        }
                }}>Search</button>
            </div>
        </div>
    )
}