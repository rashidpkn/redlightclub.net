import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import BackendIP from '../../../../BackendIP'


// icon

import callIcon from '../../../../asset/icons/call.svg'
import emailIcon from '../../../../asset/icons/email.svg'
import telegramIcon from '../../../../asset/icons/telegram.svg'
import whatsappIcon from '../../../../asset/icons/whatsapp.svg'
import adsEdit from '../../../../asset/icons/ads-edit.svg'
import adsDelete from '../../../../asset/icons/ads-delete.svg'
import { setId } from '../../../../redux/slice/utilSlice'
import { useNavigate } from 'react-router-dom'

function ViewAds() {

    // const {username} = useSelector(state=>state.user)
    // const [ids, setIds] = useState([])
    // useEffect(() => {
    //   axios.get(`${BackendIP}/ads/get-user-ads`,{params:{username}}).then(res=>{
    //     let ids = []
    //     res.data?.map(e=>ids.push(e.id))
    //     setIds(ids)
    //   })
    // }, [])

    const dispatch = useDispatch()
    const { id } = useSelector(state => state.util.dashboard)
    const [ads, setAds] = useState({})
    const fetchData = async () => {
        try {
            const { data } = await axios.get(`${BackendIP}/ads/get-by-id`, { params: { id } })
            setAds(data)
            if (!data) {
                if (id < 25) {

                    dispatch(setId(id + 1))
                }
                else dispatch(setId(1))
            }

        } catch (error) {
            window.alert(error.message)

        }
    }
    // const previousAds = async () => {
    //     dispatch(setId(id - 1))
    //     try {
    //         const { data } = await axios.get(`${BackendIP}/ads/get-by-id`, { params: { id } })
    //         setAds(data)
    //         if (!data && Number(id) !== 0) {
    //             dispatch(setId(id - 1))
    //         }
    //     } catch (error) {
    //         window.alert(error.message)

    //     }
    // }
    useEffect(() => {
        fetchData()
        // eslint-disable-next-line
    }, [id])
    const allServices = [
        'Anal sex', 'Foot fetish', 'Parties', 'Submissive', 'BDSM', 'French kissing', 'Reverse oral', 'Squirting',
        'CIM', 'GFE', 'Giving rimming', 'Tantric massage', 'COB', 'Teabagging', 'Couples', 'Role play', 'Tie and tease',
        'Deep  throat', 'Lap dancing', 'Sex toys', 'Uniforms', 'Domination', 'Massage', 'Spanking', 'Face sitting',
        'Nuru massage', 'Strapon', 'Fingering', 'Oral sex blow job', 'Striptease', 'Webcam sex', 'Fisting', 'OWO']
    return (
        <div className='space-y-5'>

            {/* <div className="flex justify-between items-center">
                <button className='w-40 h-10 rounded-xl bg-[#6418C3] text-white font-bold text-sm hover:shadow-xl' onClick={() => { previousAds() }}>Previous Profile</button>
                <button className='w-40 h-10 rounded-xl bg-[#6418C3] text-white font-bold text-sm hover:shadow-xl' onClick={() => { dispatch(setId(id + 1)) }}>Next Profile</button>
            </div> */}

            <div className="flex gap-5 flex-wrap">

                <div className="w-[830px]  bg-white rounded-2xl p-5 pb-10 space-y-5">
                    <div className=" justify-between flex-wrap-reverse border-b border-dashed py-2">

                        <Buttons id={id} fetchData={fetchData} vacation={ads.vacation} {...ads} />

                        <Profile ads={ads} />

                    </div>

                    <div className="flex gap-5  flex-wrap text-xs font-semibold">

                        <Appearance ads={ads} />
                        <OutCall outCall={ads.outCall} currencyType={ads.currencyType} />
                        <InCall inCall={ads.inCall} currencyType={ads.currencyType} />

                    </div>

                    <Intro ads={ads} />


                    <select className="w-40 h-8 bg-[#F6EEFF] rounded-md outline-none border border-[#6418C3] text-[#6418C3]">
                        <option value="">Newest Comments</option>
                        <option value="">Oldest Comments</option>
                    </select>

                    <Review review={ads.review?.reverse()} />

                </div>

                <div className="w-64 space-y-5 flex-shrink-0">
                    <div className="w-full h-80 bg-white rounded-2xl p-5 overflow-y-scroll">
                        <p className='text-lg font-bold'>I Do Provide</p>
                        <div className="space-y-2 mt-5">
                            {ads?.service?.map(e => <p className='text-xs text-[#A5A5A5]'>{e.name}</p>)}
                        </div>
                    </div>

                    <div className="w-full h-80 bg-white rounded-2xl p-5 overflow-y-scroll">
                        <p className='text-lg font-bold'>I Don't Provide</p>
                        <div className="space-y-2 mt-5">
                            {
                                allServices?.filter(e => !ads?.service?.map(ev => ev.name).includes(e))?.map(e => <p className='text-xs text-[#A5A5A5]'>{e}</p>)
                            }
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default ViewAds


const OutCall = ({ outCall, currencyType }) => {
    return (
        <div className="h-28 w-40 font-normal text-xs">
            <div className="flex h-1/4">
                <p className='text-sm font-bold'>Outcalls</p>
            </div>
            <div className="flex h-1/4">
                <div className="w-1/2 h-full">1 hr:</div>
                <div className="w-1/2 h-full">{outCall?.oneHourOut} {currencyType}</div>
            </div>
            <div className="flex h-1/4">
                <div className="w-1/2 h-full">2 hr:</div>
                <div className="w-1/2 h-full">{outCall?.twoHourOut} {currencyType}</div>
            </div>
            <div className="flex h-1/4">
                <div className="w-1/2 h-full">Full Night:</div>
                <div className="w-1/2 h-full">{outCall?.nightOut} {currencyType}</div>
            </div>
        </div>
    )
}

const InCall = ({ inCall, currencyType
}) => {
    return (
        <div className="h-28 w-40 font-normal text-xs">
            <div className="flex h-1/4">
                <p className='text-sm font-bold'>Incalls</p>
            </div>
            <div className="flex h-1/4">
                <div className="w-1/2 h-full">1 hr:</div>
                <div className="w-1/2 h-full">{inCall?.oneHourIn} {currencyType}</div>
            </div>
            <div className="flex h-1/4">
                <div className="w-1/2 h-full">2 hr:</div>
                <div className="w-1/2 h-full">{inCall?.twoHourIn} {currencyType}</div>
            </div>
            <div className="flex h-1/4">
                <div className="w-1/2 h-full">Full Night:</div>
                <div className="w-1/2 h-full">{inCall?.nightIn} {currencyType}</div>
            </div>
        </div>
    )
}

const Appearance = ({ ads }) => {
    return (
        <div className="h-28 w-36 flex flex-col justify-between font-normal text-xs">
            <div className="flex h-1/4">
                <div className="w-1/2 h-full">Age:</div>
                <div className="w-1/2 h-full">{ads.age}</div>
            </div>
            <div className="flex h-1/4">
                <div className="w-1/2 h-full">Height:</div>
                <div className="w-1/2 h-full">{ads.height} cm</div>
            </div>
            <div className="flex h-1/4">
                <div className="w-1/2 h-full">Weight:</div>
                <div className="w-1/2 h-full">{ads.weight} kg</div>
            </div>
            <div className="flex h-1/4">
                <div className="w-1/2 h-full">Hair:</div>
                <div className="w-1/2 h-full">{ads.hair}</div>
            </div>
        </div>
    )
}

const Buttons = ({ id, fetchData, vacation,gallery }) => {
    const navigate = useNavigate()
    const deleteAds = async () => {
        try {
            const { status } = await (await axios.post(`${BackendIP}/ads/delete`, { id })).data
            if (status) {
                window.alert("Ads is Deleted")
                fetchData()
            }
        } catch (error) {
            console.log(error)
            window.alert(error.message)
        }
    }
    return (
        <div className="flex flex-col justify-between items-end gap-3 float-right h-full">
            <p className='hidden md:block text-[12px] text-[#A5A5A5]'>Last seen Online 31/01/2023</p>
            <div className="flex gap-5">
                <button className="hover:shadow-xl h-[38px] w-[38px] rounded-md bg-[#34C38F] flex justify-center items-center cursor-pointer" onClick={() => navigate('/dashboard/edit-ads')}><img src={adsEdit} alt="" /></button>
                <button className="hover:shadow-xl h-[38px] w-[38px] rounded-md bg-[#FF0000] flex justify-center items-center cursor-pointer" onClick={deleteAds}><img src={adsDelete} alt="" /></button>
                {
                    vacation ?
                        <button className='px-3 py-1 rounded-xl bg-[#F4B000] text-white' onClick={() => {
                            axios.post(`${BackendIP}/ads/vacation`, { id, vacation: false }).then(res => {
                                fetchData()
                            })
                        }}>Turn Off Vacation Mode</button>
                        :
                        <button className='px-3 py-1 rounded-xl bg-[#F4B000] text-white' onClick={() => {
                            axios.post(`${BackendIP}/ads/vacation`, { id, vacation: true }).then(res => {
                                fetchData()
                            })
                        }}>Turn On Vacation Mode</button>
                }
            </div>
            <div className="gallery flex gap-5 ">
                    {gallery?.map(e=><div className='w-14 h-14'>
                        <img src={e} className='w-full h-full rounded-md' alt="" />
                    </div>)}
                </div>
        </div>
    )
}





const Review = ({ review }) => {
    return (
        <div className="space-y-5 h-36 overflow-y-scroll">
            {review?.map(e =>
                <div className="w-full   flex gap-5  p-5">
                    <div className="w-9 h-9 rounded-md bg-[#D8D8D8] flex-shrink-0"></div>

                    <div className="space-y-2">
                        <p className='text-base font-bold'>{e.username}</p>
                        <p className='text-xs text-justify'>{e.desc}</p>
                    </div>

                </div>
            )}
        </div>
    )
}


const Profile = ({ ads }) => {
    return (
        <div className="flex gap-5 flex-wrap-reverse">
            <div className="w-36 h-36 overflow-hidden">
                <img src={ads.profilePhoto} alt="" className='h-full w-full rounded-md object-cover object-top hover:scale-125 duration-500' />
            </div>
            <div className="h-36 rounded-md flex flex-col justify-between  p-2">
                <div className="flex gap-2 items-center">
                    <div className="w-2 h-2 rounded-full bg-[#38E25D]"></div>
                    <p className='font-bold text-xs text-[#38E25D]'>Active</p>
                </div>
                <div className="">
                    <p className='font-bold text-2xl'>{ads.adsTitle}</p>
                    <p className='font-bold text-xs text-[#2E2E2E]'>{ads.nationality}</p>
                </div>
                <p className='font-bold text-[10px] text-[#2E2E2E]'>{ads.location}</p>
                
                <div className="flex items-center gap-6">


                    <a target={'_blank'} rel='noreferrer' href={`tel:${ads.phone?.code}${ads.phone?.number}`}>
                        <img alt='icon' src={callIcon} className="w-5 h-5" />
                    </a>
                    <a target={'_blank'} rel='noreferrer' href={`mailto:${ads.email}`}>
                        <img alt='icon' src={emailIcon} className="w-5 h-5" />
                    </a>
                    <a target={'_blank'} rel='noreferrer' href={`https://telegram.com`}>
                        <img alt='icon' src={telegramIcon} className="w-5 h-5" />
                    </a>
                    <a target={'_blank'} rel='noreferrer' href={`https://api.whatsapp.com/send?phone=${ads.phone?.number}`}>
                        <img alt='icon' src={whatsappIcon} className="w-5 h-5" />
                    </a>
                </div>


            </div>
        </div>
    )
}


const Intro = ({ ads }) => {
    return (
        <div className="py-5 text-[#202020]">
            <p className='font-bold text-lg'>Bio</p>
            <p className='text-sm text-justify'>{ads.intro}</p>
        </div>
    )
}