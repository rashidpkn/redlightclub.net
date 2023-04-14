import { Visibility } from '@mui/icons-material'
import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import BackendIP from '../../../../BackendIP'

function EditAds() {
  const { id } = useSelector(state => state.util.dashboard)
  const [ads, setAds] = useState({})
  useEffect(() => {
    axios.get(`${BackendIP}/ads/get-by-id`, { params: { id } }).then(res => {
      setAds(res.data)
      
    })

  }, [id])

  const editAds = () => {
    axios.post(`${BackendIP}/ads/edit`, { edit: ads, id: ads.id }).then(res => {
      window.alert("Edit is done")
    })
  }

  return (
    <div className='space-y-5'>
      <Menu editAds={editAds} />
      <div className="flex gap-5">

        <div className="w-[632px]   space-y-5">
          <GeneralInfo ads={ads} setAds={setAds} />
          <Contacts ads={ads} setAds={setAds} />
          <Details ads={ads} setAds={setAds} />
          <Bio ads={ads} setAds={setAds} />
        </div>

        <div className="w-[230px] h-11 space-y-5">
          <p className='font-bold text-sm text-[#C7C7C7]'>Profile Picture</p>
          <div className="w-full h-[270px] overflow-hidden rounded-xl">
            <img src={ads.profilePhoto} className='h-full w-full  hover:scale-125 object-top duration-200' alt="" />
          </div>
          <div className="flex items-center flex-wrap gap-2">
            {ads?.gallery?.map(e=><div className="w-10 h-12 overflow-hidden border rounded-md "><img src={e} className='h-full w-full  hover:scale-125 object-top duration-200' alt="" /></div>)}
          </div>
          <ProfilePhoto ads={ads} setAds={setAds} />
          
        </div>
      </div>

    </div>
  )
}

export default EditAds



const Menu = ({ editAds }) => {
  const navigate = useNavigate()
  return (
    <div className="flex justify-between items-center">

      <button className='text-xl font-bold'>Edit Profile</button>

      <div className="flex items-center gap-5 text-white">
        <button className='rounded-lg w-9  h-9 bg-[#0062F4]' onClick={() => navigate('/dashboard/view')}>
          <Visibility />
        </button>
        <button className='rounded-lg w-36 h-9 bg-[#6418C3]' onClick={() => { editAds() }}>Save Changes</button>
      </div>
    </div>
  )
}

const GeneralInfo = ({ ads, setAds }) => {
  return (
    <>
      <p className='text-xl font-bold'>General Info</p>
      <div className="flex justify-between">

        <div className="space-y-3">
          <p className='font-bold text-sm text-[#C7C7C7]'>Ads Title</p>
          <input type="text" className='w-[300px] h-10 rounded-xl bg-white pl-5' value={ads?.adsTitle} onChange={e => setAds({ ...ads, adsTitle: e.target.value })} />
        </div>

        <div className="space-y-3">
          <p className='font-bold text-sm text-[#C7C7C7]'>Nationality</p>
          <input type="text" className='w-[300px] h-10 rounded-xl bg-white pl-5' value={ads?.nationality} onChange={e => setAds({ ...ads, nationality: e.target.value })} />
        </div>

      </div>

      <div className="flex justify-between">

        <div className="space-y-3">
          <p className='font-bold text-sm text-[#C7C7C7]'>Language</p>
          <input type="text" className='w-[300px] h-10 rounded-xl bg-white pl-5' value={ads?.language} onChange={e => setAds({ ...ads, language: e.target.value })} />
        </div>

        <div className="space-y-3">
          <p className='font-bold text-sm text-[#C7C7C7]'>Location</p>
          <input type="text" className='w-[300px] h-10 rounded-xl bg-white pl-5' value={ads?.location} onChange={e => setAds({ ...ads, location: e.target.value })} />
        </div>

      </div>

    </>
  )
}

const Contacts = ({ ads, setAds }) => {
  return (
    <>
      <p className='text-xl font-bold'>Contacts</p>
      <div className="flex justify-between">

        <div className="space-y-3">
          <p className='font-bold text-sm text-[#C7C7C7]'>Email Address</p>
          <input type="text" className='w-[300px] h-10 rounded-xl bg-white pl-5' value={ads?.email} onChange={e => setAds({ ...ads, email: e.target.value })} />
        </div>

        <div className="space-y-3">
          <p className='font-bold text-sm text-[#C7C7C7]'>Phone </p>
          <input type="text" className='w-[300px] h-10 rounded-xl bg-white pl-5' value={ads?.phone?.number} onChange={e => setAds({ ...ads, phone: { ...ads.phone, number: e.target.value } })} />
        </div>

      </div>

      <div className="flex justify-between">

        <div className="space-y-3">
          <p className='font-bold text-sm text-[#C7C7C7]'>Telegram Number</p>
          <input type="text" className='w-[300px] h-10 rounded-xl bg-white pl-5' />
        </div>

        <div className="space-y-3">
          <p className='font-bold text-sm text-[#C7C7C7]'>WhatsApp Number</p>
          <input type="text" className='w-[300px] h-10 rounded-xl bg-white pl-5' value={ads?.phone?.number} onChange={e => setAds({ ...ads, phone: { ...ads.phone, number: e.target.value } })} />
        </div>

      </div>
    </>
  )
}



const Details = ({ ads, setAds }) => {
  return (
    <>
      <p className='text-xl font-bold'>Details</p>
      <div className="flex justify-between items-center">
        <div className="">
          <p className='font-bold text-sm text-[#C7C7C7]'>Age</p>
          <input type="number" className='w-20 h-10 rounded-xl bg-white' value={ads?.age} onChange={e => setAds({ ...ads, age: Number(e.target.value) })} />
        </div>
        <div className="">
          <p className='font-bold text-sm text-[#C7C7C7]'>Height</p>
          <input type="number" className='w-20 h-10 rounded-xl bg-white' value={ads?.height} onChange={e => setAds({ ...ads, height: Number(e.target.value) })} />
        </div>
        <div className="">
          <p className='font-bold text-sm text-[#C7C7C7]'>Weight</p>
          <input type="number" className='w-20 h-10 rounded-xl bg-white' value={ads?.weight} onChange={e => setAds({ ...ads, weight: Number(e.target.value) })} />
        </div>
        <div className="">
          <p className='font-bold text-sm text-[#C7C7C7]'>Hair</p>
          <input type="text" className='w-28 h-10 rounded-xl bg-white' value={ads?.hair} onChange={e => setAds({ ...ads, hair: e.target.value })} />
        </div>
        <div className="">
          <p className='font-bold text-sm text-[#C7C7C7]'>Eye</p>
          <input type="text" className='w-28 h-10 rounded-xl bg-white' value={ads?.eye} onChange={e => setAds({ ...ads, eye: e.target.value })} />
        </div>
      </div>
    </>
  )
}


const Bio = ({ ads, setAds }) => {
  return (
    <>
      <p className='text-xl font-bold'>Bio</p>
      <textarea value={ads?.intro} onChange={e => setAds({ ...ads, intro: e.target.value })} className='w-full rounded-xl bg-white p-5' />
    </>
  )
}



const ProfilePhoto = ({ads,setAds}) => {
  const { adsTitle } = ads
  const { getRootProps, getInputProps } = useDropzone({
      accept: {
          'image/*': ['.png', '.jpg', '.jpegs', '.webp'],
      },
      maxFiles: 1,
      onDrop: acceptedFiles => {
          const data = new FormData()
          data.append('name', adsTitle)
          data.append('profile', acceptedFiles[0])
          axios.post(`${BackendIP}/upload/profile`, data).then(res => { window.alert('Profile is Uploaded') }).then(res => {
            setAds({...ads,profilePhoto:`/files/${adsTitle}-${acceptedFiles[0].name}`})
          })
      }
  });

  return (
      
          <div className='w-full h-14 rounded-xl border border-[#6418C3] text-[#6418C3] text-lg font-bold'>
              <div {...getRootProps({ className: 'dropzone h-full h-full flex justify-center items-center' })}>
                  <input {...getInputProps()} />
                  <p>CHANGE PHOTOS</p>
              </div>
          </div>
      
  )
}