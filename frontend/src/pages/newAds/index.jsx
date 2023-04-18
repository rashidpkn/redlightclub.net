import React, { useEffect, useState } from 'react'
import lady from '../../asset/images/new-ads/lady.png'
import Page1 from './components/Page1'
import Page2 from './components/Page2'
import Page3 from './components/Page3'
import Page4 from './components/Page4'
import Page5 from './components/Page5'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import axios from 'axios'
import BackendIP from '../../BackendIP'


function NewAds() {
    const [pageNo, setPageNo] = useState(1)
    const [progress, setProgress] = useState(pageNo / 5 * 100)
    const [disable, setDisable] = useState(true)
    const { ads, user } = useSelector(state => state)
    const { username, email } = user
    const { region } = useSelector(state => state.util)
    useEffect(() => {
        setProgress(pageNo / 5 * 100)
    }, [pageNo])
    const navigate = useNavigate()
    const [underVerifcation, setUnderVerifcation] = useState(false)
    const PublishAds = () => {
        axios.post(`${BackendIP}/ads/create`, { ads, username, email, region }).then(res => {
            if (res.data.status) {
                setUnderVerifcation(true)
                

            }
        })
    }

    return (
        <div className='min-h-screen h-full'>
            <div className="nav h-24 w-full px-20 flex gap-5 items-center shadow-xl">
                <div className="h-9 w-9">
                    <img src="/images/common/logo-rounded.png" className='h-full w-full' alt="" />
                </div>
                <p className='text-[#E11700] font-bold text-xl'>Red Light Club</p>
            </div>

            <div className="p-5 bg-[#F5F5F5] h-[calc(100%-7rem)]  mt-4 flex justify-center items-center">
                <div className="w-full h-full bg-white rounded-xl flex">
                    <img src={lady} className='h-[700px] w-[40%] hidden md:block ' alt="" />
                    <div className="h-auto w-full md:w-[60%] flex flex-col justify-between gap-3 ">
                        <div className="w-full h-[90%] p-5">
                            {pageNo === 1 && <Page1 setDisable={setDisable} />}
                            {pageNo === 2 && <Page2 setDisable={setDisable} />}
                            {pageNo === 3 && <Page3 setDisable={setDisable} />}
                            {pageNo === 4 && <Page4 setDisable={setDisable} />}
                            {pageNo === 5 && <Page5 setDisable={setDisable} />}
                        </div>

                        <div className="w-full h-[10%] flex flex-col justify-between">
                            <div className="flex justify-between items-center px-5">
                                <button className='font-bold' onClick={() => { pageNo !== 1 ? setPageNo(pageNo - 1) : navigate('/dashboard') }}>Back</button>
                                <button className={`${disable ? 'bg-[#6418C3]/50' : 'bg-[#6418C3]'} px-4 py-2  rounded-lg text-white font-bold`} onClick={() => {
                                    if (!disable) {

                                        if (pageNo !== 5) {
                                            setPageNo(pageNo + 1)
                                        } else PublishAds()
                                        setDisable(true)
                                    }
                                }}>
                                    {pageNo !== 5 ? 'Next' : 'Publish'}
                                </button>
                            </div>
                            <div className="w-full h-1">
                                <div className={`h-full bg-[#6418c3] duration-500 rounded-full`} style={{ width: `${progress}%` }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
               {underVerifcation && <UnderVerification/>}
        </div>
    )
}

export default NewAds


const UnderVerification = () => {
    const navigate = useNavigate()
    return (
        <div className="fixed -top-5 left-0 h-screen w-full bg-black/30 flex justify-center items-center">
            <div className="p-5 w-96 bg-white rounded-lg space-y-5">
                <p className='text-center font-medium text-xl'>Your ads is under verification</p>
                <div className="flex justify-center items-center">
                    <button className='px-4 py-3 rounded-lg bg-[#34C38F] text-white font-bold' onClick={()=>{
                        navigate('/dashboard/Profiles')
                    }}>Goto Dashboard</button>
                </div>
            </div>
        </div>
    )
}