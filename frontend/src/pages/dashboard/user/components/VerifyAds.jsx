import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDropzone } from 'react-dropzone'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import BackendIP from '../../../../BackendIP'

function VerifyAds() {
    const [preview, setPreview] = useState('')
    const [verificationImage, setVerificationImage] = useState('')
    const [ads, setAds] = useState({})
    const {id} = useSelector(state=>state.util.dashboard)
    const fetchData = () =>{
        axios.get(`${BackendIP}/ads/get-by-id`,{params:{id}}).then(res=>{
            setAds(res.data)
        })
    }
    useEffect(() => {
      fetchData()
      // eslint-disable-next-line
    }, [])
    const navigate = useNavigate()
    return (
        <div className='h-full w-full space-y-5'>
            <h1 className='text-2xl font-bold'>Verify Ads</h1>
            <div className=" w-full  rounded-xl p-5 flex  gap-10 flex-wrap-reverse md:flex-nowrap bg-white">
                <div className="h-80 w-full md:w-64 space-y-3 flex-shrink-0">
                    <div className="w-full h-3/4">
                        {preview ? <img src={preview} className='w-full h-full object-cover' alt="" /> :  <img src="/image/dashboard/verifyDemo.png" className='w-full h-full object-cover' alt="" />}
                    </div>
                    <ProfilePhoto adsTitle={ads.adsTitle} setPreview={setPreview} setVerificationImage={setVerificationImage} />
                </div>
                <ul className='list-disc h-auto space-y-3 text-sm'>
                    <li>To verify advert &nbsp;
                        <span className='font-bold'> {ads.adsTitle} </span> 
                            please upload a picture of person from advert &nbsp;
                        <span className='font-bold'> {ads.adsTitle} </span> 
                            holding a piece of paper with current date and text "I love Mike".</li>
                    <li>We only accept pictures at least <span className='font-bold'> 700 px </span>  on the short side.</li>
                    <li> You can take the picture with a cell phone. If you don't know how to take a picture of yourself, please use a bathroom mirror.</li>
                    <li> We don't verify adverts if a person in the verification picture looks different from the one in the advert (is not the same person).</li>
                    <li> We will not use this picture anywhere on the website.</li>
                    <button className='px-4 py-3 rounded-xl bg-[#34C38F] text-white' onClick={()=>{
                        if(verificationImage){
                            axios.post(`${BackendIP}/verify/request`,{id,verificationImage})
                            window.alert("Request is processing")
                            navigate('/dashboard')
                        }else{
                            window.alert("Upload Verification image")
                        }
                    }}
                    
                    >Verify</button>
                </ul>

            </div>
        </div>
    )
}

export default VerifyAds



const ProfilePhoto = ({adsTitle, setPreview, setVerificationImage}) => {
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