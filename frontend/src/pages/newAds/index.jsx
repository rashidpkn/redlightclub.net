import React, { useEffect, useState } from 'react'
import lady from '../../asset/images/new-ads/lady.png'
import Page1 from './components/Page1'
import Page2 from './components/Page2'
import Page3 from './components/Page3'
import Page4 from './components/Page4'
import Page5 from './components/Page5'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import axios from 'axios'
import BackendIP from '../../BackendIP'
import { Close, Done } from '@mui/icons-material'

import verifyIcon from '../../asset/icons/dashboard/profile/verify.svg'
import { useDropzone } from 'react-dropzone'



function NewAds() {
    const [pageNo, setPageNo] = useState(1)
    const [progress, setProgress] = useState(pageNo / 5 * 100)
    const [disable, setDisable] = useState(true)
    const { ads, user } = useSelector(state => state)
    const { username, email } = user
    const { region } = useSelector(state => state.util)
    const [data, setData] = useState({})
    
    useEffect(() => {
        setProgress(pageNo / 5 * 100)
    }, [pageNo])
    const navigate = useNavigate()
    const [underVerifcation, setUnderVerifcation] = useState(false)
    const PublishAds = () => {
        axios.post(`${BackendIP}/ads/create`, { ads, username, email, region }).then(res => {
            const {status,data} = res.data
            setData(data)
            if (status) {
                setUnderVerifcation(true)
            }
        })
    }

    return (
        <div className='min-h-screen h-full'>
            <div className="nav h-[90px] w-full px-[72px] flex gap-[12px] items-center shadow-xl">
                <div className="w-[39.26px] h-[38.33px]">
                    <img src="/images/common/logo-rounded.png" className='h-full w-full' alt="" />
                </div>
                <p className='text-[#E11700] font-bold text-xl line leading-9 font-cairo'>Red Light Club</p>
            </div>

            <div className="p-5 bg-[#F5F5F5] h-[calc(100%-90px)]  mt-[8px] flex justify-center items-center">
                <div className="w-full h-full bg-white rounded-xl flex">
                    <img src={lady} className='h-[700px] w-[550px] hidden md:block ' alt="" />
                    <div className="h-auto w-full md:w-[calc(100%-550px)] flex flex-col justify-between gap-3 ">
                        <div className="w-full h-[90%] pt-[50px] pl-[60px]">
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
               {underVerifcation && <UnderVerification data={data}/>}
        </div>
    )
}

export default NewAds


const UnderVerification = ({data}) => {
    const [verify, setVerify] = useState(false)
    
    return (
        verify ? <Verify e={data} setVerify={setVerify} /> :
        <div className="fixed -top-5 left-0 h-screen w-full bg-black/30 flex justify-center items-center">
            <div className="w-[1114px] h-[442px] rounded-xl bg-[#F5F5F5] p-[26px]">
                <div className="flex justify-end">
                    <Close className='text-[#A5A5A5] font-bold' style={{fontWeight:700}} fontSize='small'/>
                </div>
                <p className='text-center font-cairo font-bold text-[26px] mt-[9px]'>Almost done, Get verified and land more clients!</p>
                <div className="flex justify-center items-center mt-[33px]">
                    <img src={verifyIcon} className="w-[34px] h-[41px]" alt="" />
                </div>
                <p className='text-center text-xl mt-[33px] font-normal'>
                Verified accounts have a badge on their profile to show that <br /> 
                Red Light Club has confirmed and verified their identity, so <br /> 
                that customers feel safer to choose their profiles.
                </p>
                
                <div className="flex justify-center items-center mt-14 gap-16">
                    
                        
                        <Link to={'/dashboard'}> <button className='text-sm font-bold ' >I'll do this later</button></Link>
                        <button className='px-10 py-3 rounded-xl bg-[#34C38F] font-bold text-sm text-white' onClick={()=>setVerify(true)}>Verify</button>
                        
                    
                </div>
            </div>
        </div>
    )
}


export const Verify = ({ e, setVerify}) => {
    const [step, setStep] = useState(1)
    // eslint-disable-next-line
    const [preview, setPreview] = useState('')
    const [verificationImage, setVerificationImage] = useState('')
    const navigate = useNavigate()
    return (
        <div className="fixed -top-5 left-0 flex justify-center items-center h-screen w-full bg-black/20 z-50">
            <div className="max-w-[1000px] min-w-[700px]  rounded-xl bg-[#F5F5F5] p-5">
                <div className="flex justify-end">
                    <Close onClick={() => setVerify(false)} />
                </div>
                {
                    step === 1 &&
                    <div className="flex justify-center items-center">
                        <div className="space-y-3">
                            <p className='text-lg font-bold'>What to do</p>
                            <p>Step 1 : Take a white paper and write down the unique code shown.</p>
                            <p>Step 2 : Take a selfie clearly showing you holding the paper with unique code and your face</p>
                            <p>Step 3 : Upload the image onto our website and thats it. We’ll take care of the rest!</p>
                            <div className="flex justify-center items-center">
                                <div className="w-48 h-14 bg-white flex justify-center items-center">
                                    <p>12B3411</p>
                                </div>
                            </div>
                            <p className='text-sm'>Note: While taking the photo please be in a well lit room with nothing obstructing the camera and you.</p>
                            <p className='text-sm'>We do not use or share this photo on the website or for any other purposes.</p>
                            <div className="flex justify-center items-center">
                                <button className='px-10 py-3 rounded-xl bg-[#34C38F] text-white' onClick={() => { setStep(2) }}>Continue</button>
                            </div>
                        </div>
                    </div>
                }
                {
                    step === 2 && <div className="flex flex-col justify-center items-center h-full gap-5">
                        <ProfilePhoto {...e} setPreview={setPreview} setVerificationImage={setVerificationImage} />
                        <button className='px-10 py-3 rounded-xl bg-[#34C38F] text-white' onClick={() => {
                            if (verificationImage) {
                                axios.post(`${BackendIP}/verify/request`, { id: e.id, verificationImage }).then(res => {
                                    setStep(3)
                                    setTimeout(() => {
                                        navigate('/dashboard')
                                    }, 2000);
                                })

                            } else {
                                window.alert("Upload Verification image")
                            }
                        }}>Submit</button>
                    </div>
                }
                {
                    step === 3 && <div className="h-full flex flex-col justify-center items-center gap-5">
                        <div className="h-10 w-10 rounded-full border border-[#34C38F] text-[#34C38F] flex justify-center items-center">
                            <Done />
                        </div>
                        <p className='text-xl font-bold'>Your request has been successfully submitted</p>
                    </div>
                }
            </div>
        </div>
    )
}


const ProfilePhoto = ({ adsTitle, setPreview, setVerificationImage }) => {
    const { getRootProps, getInputProps } = useDropzone({
        accept: {
            'image/*': ['.png', '.jpg', '.jpegs', '.webp'],
        },
        maxFiles: 1,
        onDrop: acceptedFiles => {
            setPreview(URL.createObjectURL(acceptedFiles[0]))
            const data = new FormData()
            data.append('name', adsTitle)
            data.append('profile', acceptedFiles[0])
            axios.post(`${BackendIP}/upload/profile`, data).then(res => { window.alert('Virification image  is Uploaded') }).then(res => {
                setVerificationImage(`/files/${adsTitle}-${acceptedFiles[0].name}`)
            })
        }
    });

    return (
        <div className='flex flex-col justify-center items-center gap-10'>
            <div className="profilePhoto h-16 w-64 bg-[#F5F5F5] border-[3px] border-dashed border-[#CBC8C8] rounded-lg flex justify-center items-center">
                <div {...getRootProps({ className: 'dropzone h-full h-full flex justify-center items-center' })}>
                    <input {...getInputProps()} />
                    <p>Upload Image</p>
                </div>
            </div>

        </div>
    )
}