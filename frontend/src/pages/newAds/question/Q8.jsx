import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDropzone } from 'react-dropzone'
import { useSelector, useDispatch } from 'react-redux'

import BackendIP from '../../../BackendIP'
import { clearGallery, setGallery, setProfilePhoto } from '../../../redux/slice/adsSlice'
import { setDisableNext, setError } from '../../../redux/slice/utilSlice'

function Q8() {
    const { profilePhoto } = useSelector(state => state.ads)
    const dispatch = useDispatch()
    useEffect(() => {
        if(profilePhoto){
          dispatch(setError(""))
            dispatch(setDisableNext(false))
        }else{
          dispatch(setError("Please Provide profile photo"))
        }
    // eslint-disable-next-line
      }, [profilePhoto])
    return (
        <div className="h-full w-full flex flex-col justify-center items-center gap-10">
            <ProfilePhoto />
            <Gallery />
        </div>
    )
}

export default Q8


const ProfilePhoto = () => {
    const dispatch = useDispatch()
    // const { username } = useSelector(state => state.user)
    const { adsTitle } = useSelector(state => state.ads)
    const [preview, setPreview] = useState('')
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
            axios.post(`${BackendIP}/upload/profile`, data).then(res => { window.alert('Profile is Uploaded') }).then(res => {
                dispatch(setProfilePhoto(`/files/${adsTitle}-${acceptedFiles[0].name}`))
            })
        }
    });

    return (
        <div className='flex flex-col justify-center items-center gap-10'>
            <div className="profilePhoto border h-16 w-64 flex justify-center items-center border-red-500">
                <div {...getRootProps({ className: 'dropzone h-full h-full flex justify-center items-center' })}>
                    <input {...getInputProps()} />
                    <p>Profile Photo</p>
                </div>
            </div>
            {
                preview && <img src={preview} className='w-36 h-36' alt="" />
            }
        </div>
    )
}




const Gallery = () => {
    const dispatch = useDispatch()
    const { adsTitle } = useSelector(state => state.ads)
    const [preview, setPreview] = useState([])
    const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
        accept: {
            'image/*': ['.png', '.jpg', '.jpegs', '.webp'],
        },
        maxFiles: 5,
        onDrop: acceptedFiles => {
            dispatch(clearGallery())
            setPreview([])
            const data = new FormData()
            data.append('name', adsTitle)
            acceptedFiles.map(e => data.append('gallery', e))
            axios.post(`${BackendIP}/upload/gallery`, data).then(res => { window.alert('Gallery images is Uploaded') })
            acceptedFiles.map(e => dispatch(setGallery(`/files/${adsTitle}-${e.name}`)))
        }
    });

    useEffect(() => {
        // eslint-disable-next-line 
        acceptedFiles.map(file => {
            setPreview(prev => [...prev, URL.createObjectURL(file)])
        })


    }, [acceptedFiles])

    return (
        <div className='flex flex-col justify-center items-center gap-10'>
            <div className="profilePhoto border h-16 w-64 flex justify-center items-center border-red-500">
                <div {...getRootProps({ className: 'dropzone h-full h-full flex justify-center items-center' })}>
                    <input {...getInputProps()} />
                    <p>Gallery Upto 5 Photos</p>
                </div>
            </div>
            <div className="gallery flex gap-10 justify-center items-center">
                {
                    preview.map((file, index) => <img key={index} src={file} className='w-36 h-36' alt="" />)
                }
            </div>
        </div>
    )
}

