import React, { useCallback, useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import BackendIP from '../../../BackendIP'
import { clearGallery, setGallery, setProfilePhoto } from '../../../redux/slice/adsSlice'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'

import loadingSvg from '../../../asset/images/new-ads/loading.svg'

const accept = {
    'image/*': ['.png', '.jpg', '.jpegs', '.webp'],
}

function Page4({ setDisable }) {
const {profilePhoto} = useSelector(state=>state.ads)
    useEffect(() => {
        if(profilePhoto){
            setDisable(false)
        }else{
            setDisable(true)
        }
        // eslint-disable-next-line
    }, [profilePhoto])



    return (
        <div className='w-full h-full space-y-5'>
            <p className='text-sm font-bold'>Upload Profile Photo*</p>
            <ProfilePhoto />

            <p className='text-sm font-bold'>Upload Gallery Photo</p>
            <Gallery />
        </div>
    )
}

export default Page4


const ProfilePhoto = () => {
    const dispatch = useDispatch()
    const { adsTitle } = useSelector(state => state.ads)
    const [preview, setPreview] = useState('')
    const [loading, setLoading] = useState(false)

    const onDrop = useCallback(acceptedFiles => {
        setPreview(URL.createObjectURL(acceptedFiles[0]))
        setLoading(true)
        const data = new FormData()
        data.append('name', adsTitle)
        data.append('profile', acceptedFiles[0])
        axios.post(`${BackendIP}/upload/profile`, data).then(res => {
            dispatch(setProfilePhoto(`/files/${adsTitle}-${acceptedFiles[0].name}`))
            setLoading(false)
        })
        // eslint-disable-next-line
    }, [])

    const { getRootProps, getInputProps, } = useDropzone({ onDrop, accept, maxFiles: 1 })
    return (
        <>
            <div className="flex gap-5 items-center">
                <div className="w-80 h-32 bg-[#F5F5F5] border-[3px] border-dashed border-[#CBC8C8] rounded-lg flex justify-center items-center" {...getRootProps()}>
                    <input {...getInputProps()} />
                    <p className='text-sm font-bold'>Upload Photo</p>
                </div>
                {loading && <img className='h-16' src={loadingSvg} alt="" />}
                
            </div>
            {preview && <img src={preview} className='w-[100px] h-[124px] rounded-xl' alt="" />}
        </>
    )
}

const Gallery = () => {
    const dispatch = useDispatch()
    const { adsTitle } = useSelector(state => state.ads)
    const [preview, setPreview] = useState([])
    const [loading, setLoading] = useState(false)

    const onDrop = useCallback(acceptedFiles => {
        setLoading(true)
        dispatch(clearGallery())
        setPreview([])
        const data = new FormData()
        data.append('name', adsTitle)
        acceptedFiles.map(e => data.append('gallery', e))
        axios.post(`${BackendIP}/upload/gallery`, data).then(res => { setLoading(false) })
        acceptedFiles.map(e => dispatch(setGallery(`/files/${adsTitle}-${e.name}`)))
        setPreview(acceptedFiles.map(e => URL.createObjectURL(e)))
        // eslint-disable-next-line
    }, [])

    const { getRootProps, getInputProps } = useDropzone({ onDrop, accept, maxFiles: 3 })
    return (
        <>
        <div className="flex gap-5 items-center">
            <div className="w-80 h-32 bg-[#F5F5F5] border-[3px] border-dashed border-[#CBC8C8] rounded-lg flex justify-center items-center" {...getRootProps()}>
                <input {...getInputProps()} />
                <p className='text-sm font-bold'>Upload Photo</p>
            </div>
            {loading && <img className='h-16' src={loadingSvg} alt="" />}
        </div>
            <div className="flex gap-5 flex-wrap">
                {preview.map(e => <img src={e} className='w-[100px] h-[124px] rounded-xl' alt="" />)}
            </div>
        </>
    )
}