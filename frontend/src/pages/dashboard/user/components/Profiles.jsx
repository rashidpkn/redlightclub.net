import { Add, Close, Done } from '@mui/icons-material'
import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import BackendIP from '../../../../BackendIP'
import { useDispatch, useSelector } from 'react-redux'
import { setId } from '../../../../redux/slice/utilSlice'
import { useDropzone } from 'react-dropzone'
import verifyIcon from '../../../../asset/icons/dashboard/profile/verify.svg'
import DiamondIcon from '../../../../asset/icons/dashboard/profile/diamond.svg'


function Profiles() {
    const { username } = useSelector(state => state.user)
    const [ads, setAds] = useState([])
    useEffect(() => {
        axios.get(`${BackendIP}/ads/get-user-ads`, { params: { username } }).then(res => {
            setAds(res.data)
        })

    }, [username])

    return (
        <div className='space-y-5'>
            <div className="flex justify-between items-center">
                <p className='text-2xl font-bold'>Your Profile</p>
                <div className="flex gap-5 text-white text-sm font-bold">
                    
                    <Link to={'/new-ads'}>
                        <button className='px-4 py-3 rounded-xl bg-[#34C38F] hover:shadow-xl'><Add /> Add New Profile</button>
                    </Link>
                </div>
            </div>
            <div className="flex flex-wrap justify-start items-center gap-4">
                {ads.map(e => <Card key={e.id} {...e} e={e} />)}

            </div>
        </div>
    )
}

export default Profiles

const Card = ({ adsTitle, profilePhoto, id, e, tier, position }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [verify, setVerify] = useState(false)
    return (
        <>
            <div className={`w-[170px]  rounded-xl p-2 bg-white flex flex-col items-center gap-1 hover:shadow-xl
                ${tier === 'platinum' && 'border-[#0062F4] border-2'}
                ${tier === 'gold' && 'border-[#F4B000] border-2'}
                ${tier === 'silver' && 'border-[#A63200] border-2'}
            `}>
                <div className="h-[145px] w-full rounded-md bg-[#F6EEFF] relative">
                    <img src={profilePhoto} className='w-full h-full object-cover object-top rounded-md' alt="" />

                    {e.verify && <div className="absolute top-1 right-1  flex justify-center items-center">
                        <img src={verifyIcon} alt="" />
                    </div>}

                   {tier !== 'none' && <div className={`absolute bottom-0 w-full h-[43px] rounded-b-lg p-5 flex justify-between items-center text-white
                 ${tier === 'platinum' && 'bg-[#0062F4]'}
                 ${tier === 'gold' && 'bg-[#F4B000]'}
                 ${tier === 'silver' && 'bg-[#A63200]'}`}>
                        <img src={DiamondIcon} alt="" />
                        <p className='text-sm font-bold capitalize'>{tier}</p>
                        <p className='text-[10px]'>{position}</p>
                    </div>}

                </div>
                <p className='text-xs font-bold'>{adsTitle}</p>
                {tier !== 'none' && <p className='text-[8px] font-bold text-[#6418C3]'>Expires in 7 Days</p>}
                <button className='w-full h-9 rounded-lg bg-[#6418C3] text-white' onClick={() => {
                    dispatch(setId(id))
                    navigate('/dashboard/view')
                }}>View Profile</button>

                 <button className='w-full h-9 rounded-lg bg-[#6418C3] text-white' onClick={()=>{
                    e.verify ?
                    window.alert('You are already verified')
                    :
                    setVerify(true)
                 }}>Verify Ads</button>

            </div>
            {
                verify && <Verify e={e} setVerify={setVerify} />
            }

        </>
    )
}


export const Verify = ({ e, setVerify }) => {
    const [step, setStep] = useState(1)
    // eslint-disable-next-line
    const [preview, setPreview] = useState('')
    const [verificationImage, setVerificationImage] = useState('')
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
                        
                    </div>
                }
                {
                    step === 2 && <div className="flex flex-col justify-center items-center h-full gap-5">
                        <ProfilePhoto {...e} setPreview={setPreview} setVerificationImage={setVerificationImage} />
                        <button className='px-10 py-3 rounded-xl bg-[#34C38F] text-white' onClick={() => {
                            if (verificationImage) {
                                axios.post(`${BackendIP}/verify/request`, { id: e.id, verificationImage }).then(res => {
                                    setStep(3)
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