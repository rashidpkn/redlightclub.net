import { Close } from '@mui/icons-material'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import BackendIP from '../../../../BackendIP'

function Blacklisted() {
    const [report, setReport] = useState(false)
    const [list, setList] = useState([])
    const fetchData = () => {
        axios.get(`${BackendIP}/blacklist`).then(res => {
            setList(res.data)
        })
    }
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className='h-full w-full space-y-5'>
            <h1 className='text-2xl font-bold'>Blacklisted Clients</h1>
            {
                list?.map(e => <List {...e} fetchData={fetchData} />)
            }
            <button className='fixed bottom-5 right-5 border bg-red-500 px-3 py-2 rounded-lg text-white' onClick={() => setReport(true)}>Report an issue</button>
            {
                report && <Report fetchReport={fetchData} setReport={setReport} />
            }
        </div>
    )
}

export default Blacklisted


const List = ({ adsTitle, message, vote, id, fetchData, adsId }) => {
    const [ads, setAds] = useState({})
    useEffect(() => {
        axios.get(`${BackendIP}/ads/get-by-id`, { params: { id: adsId } }).then(res => {
            setAds(res.data)
        })
        // eslint-disable-next-line
    }, [])

    const { username } = useSelector(state => state.user)
    return (<div class="w-full  border  rounded-2xl p-5 space-y-5 border-[#5ecfff]">
        <div className="flex justify-between">

            <div class="flex items-center gap-5">
                <div class="h-12 w-12 rounded-full border border-[#5ecfff] overflow-hidden">
                    <img src={`${BackendIP}${ads.profilePhoto}`} alt="" />
                </div>
                <p>{adsTitle}</p>
            </div>
            <button className='border bg-red-500 px-3 py-2 rounded-lg text-white' onClick={()=>{
                axios.post(`${BackendIP}/blacklist/delete`,{id}).then(res=>{
                    window.alert("Report is deleted")
                    fetchData()
                })
            }}>Delete</button>
        </div>
        <p class="text-justify">{message}</p>
        <div class="flex gap-5">
            <div className="flex gap-3 justify-center items-center">
                <div class="h-10 w-10 flex justify-center items-center" onClick={() => axios.post(`${BackendIP}/blacklist/vote`, { username, response: true, id }).then(res => {
                    if (res.data) {
                        window.alert("Voting is successfull")
                    } else {
                        window.alert("You are already Voted")
                    }
                    fetchData()
                })}>
                    <img src="/image/dashboard/icon/up.png" className='h-8 w-8' alt="" />
                    {/* <North fontSize='large'  /> */}
                    </div>
                <p>{vote.filter(ev => ev.response === true).length}</p>
            </div>
            <div className="flex gap-3 justify-center items-center" >
                <div class="h-10 w-10 flex justify-center items-center" onClick={() => axios.post(`${BackendIP}/blacklist/vote`, { username, response: false, id }).then(res => {
                    if (res.data) {
                        window.alert("Voting is successfull")
                    } else {
                        window.alert("You are already Voted")
                    }
                    fetchData()
                })} >
                    <img src="/image/dashboard/icon/down.png" className='h-10 w-10' alt="" />
                    {/* <SouthOutlined fontSize='large' /> */}
                    </div>
                <p>{vote.filter(ev => ev.response === false).length}</p>
            </div>
        </div>
    </div>)
}


const Report = ({ setReport, fetchReport }) => {
    const [ads, setAds] = useState([])
    const fetchData = () => {
        axios.get(`${BackendIP}/ads/get-all-ads`).then(res => {
            setAds(res.data)
        })
    }
    useEffect(() => {
        fetchData()
    }, [])
    const [selectAds, setSelectAds] = useState({})
    const [message, setMessage] = useState('')
    const { username } = useSelector(state => state.user)
    return (
        <div className="fixed h-screen w-screen bg-black/30 -top-5 left-0 flex justify-center items-center">
            <div className=" w-96 bg-white border rounded-xl">
                <div className="h-20 w-full px-5 flex justify-between items-center border-b">
                    <div className=""></div>
                    <p>Report an issue</p>
                    <Close onClick={() => { setReport(false) }} />
                </div>
                <div className="p-5 space-y-5">
                    <select className='w-full h-12 border outline-none' onChange={e => { setSelectAds(JSON.parse(e.target.value)) }}>
                        <option value="">Select ads</option>
                        {ads.map(e => <option value={JSON.stringify({ id: e.id, adsTitle: e.adsTitle })}>{e.adsTitle}</option>)}
                    </select>
                    <textarea className='h-40 w-full border outline-none p-3' placeholder='message' onChange={e => { setMessage(e.target.value) }}></textarea>

                    <button className='border bg-red-500 px-3 py-2 rounded-lg text-white ' onClick={() => {
                        axios.post(`${BackendIP}/blacklist`, { ...selectAds, message, username }).then(res => {
                            if (res.data) {

                                window.alert("Ads reported")
                            } else {
                                window.alert(`
                            Already reported this profile 
                            Please vote
                            `)
                            }
                            fetchReport()
                        })
                        setReport(false)
                    }}>Submit</button>

                </div>

            </div>
        </div>
    )
}


