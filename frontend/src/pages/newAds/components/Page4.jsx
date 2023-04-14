import React, { useCallback, useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import BackendIP from '../../../BackendIP'
import { clearGallery, setGallery, setProfilePhoto } from '../../../redux/slice/adsSlice'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'

const accept = {
    'image/*': ['.png', '.jpg', '.jpegs', '.webp'],
}

function Page4({ setDisable }) {

    useEffect(() => {
        setDisable(false)
        // eslint-disable-next-line
    }, [])



    return (
        <div className='w-full h-full space-y-5'>
            <p className='text-sm font-bold'>Upload Profile Photo</p>
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

    const onDrop = useCallback(acceptedFiles => {
        setPreview(URL.createObjectURL(acceptedFiles[0]))
        const data = new FormData()
        data.append('name', adsTitle)
        data.append('profile', acceptedFiles[0])
        axios.post(`${BackendIP}/upload/profile`, data).then(res => { window.alert('Profile is Uploaded') }).then(res => {
            dispatch(setProfilePhoto(`/files/${adsTitle}-${acceptedFiles[0].name}`))
        })
        // eslint-disable-next-line
    }, [])

    const { getRootProps, getInputProps } = useDropzone({ onDrop, accept, maxFiles: 1 })
    return (
        <>
        <div className="w-80 h-32 bg-[#F5F5F5] border-[3px] border-dashed border-[#CBC8C8] rounded-lg flex justify-center items-center" {...getRootProps()}>
            <input {...getInputProps()} />
            <p className='text-sm font-bold'>Upload Photo</p>
        </div>
        {preview && <img src={preview} className='w-[100px] h-[124px] rounded-xl' alt="" />}
        </>
    )
}

const Gallery = () => {
    const dispatch = useDispatch()
    const { adsTitle } = useSelector(state => state.ads)
    const [preview, setPreview] = useState([])

    const onDrop = useCallback(acceptedFiles => {
        dispatch(clearGallery())
        setPreview([])
        const data = new FormData()
        data.append('name', adsTitle)
        acceptedFiles.map(e => data.append('gallery', e))
        axios.post(`${BackendIP}/upload/gallery`, data).then(res => { window.alert('Gallery images is Uploaded') })
        acceptedFiles.map(e => dispatch(setGallery(`/files/${adsTitle}-${e.name}`)))
        setPreview(acceptedFiles.map(e=>URL.createObjectURL(e)))
        // eslint-disable-next-line
    }, [])

    const { getRootProps, getInputProps } = useDropzone({ onDrop, accept, maxFiles: 3 })
    return (
        <>
        <div className="w-80 h-32 bg-[#F5F5F5] border-[3px] border-dashed border-[#CBC8C8] rounded-lg flex justify-center items-center" {...getRootProps()}>
            <input {...getInputProps()} />
            <p className='text-sm font-bold'>Upload Photo</p>
        </div>
        <div className="flex gap-5 flex-wrap">
            {preview.map(e=><img src={e} className='w-[100px] h-[124px] rounded-xl' alt="" />)}
        </div>
        </>
    )
}