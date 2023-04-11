import axios from 'axios'
import React, { useState } from 'react'
import BackendIP from '../../BackendIP'
import Nationality from '../newAds/components/Nationality'
import { LocationSearchInput } from './components/LocationSearchInput'

function DataImport() {
    const [username, setUsername] = useState('ads')
    const [email, setEmail] = useState('ads@redlightclub.net')
    const [ads, setAds] = useState(
        {
        adsTitle: '',
        phone: {
          code: '+91',
          number: ''
        },
        intro: '',
        location: '',
        nationality: '',
        language: [],
        eye: '',
        hair: '',
        measurement: {
          bust: 60,
          waist: 60,
          hip: 60
        },
        socialMedia: {
          video: '',
          website: '',
          instagram: '',
          twitter: '',
          telegram: '',
          facebook: '',
          tiktok: ''
        },
        height: 160,
        weight: 55,
        age: 22,
        currencyType: 'AED',
        outCall: {
          oneHourOut: 400,
          twoHourOut: 500,
          nightOut: 600
        },
        inCall: {
          oneHourIn: 400,
          twoHourIn: 500,
          nightIn: 600
        },
        service: [],
        profilePhoto: '',
        gallery: []
      }
      )

      const publishAds = ()=>{
        
        axios.post(`${BackendIP}/ads/create`, { ads, username, email }).then(res => {
            if (res.data.status) {
                window.alert("Ads is created")
                
            }
        })
      }
    return (
        <form onSubmit={e=>{
            e.preventDefault()
            publishAds()
        }} className='flex flex-col justify-center items-center p-[5%] gap-5 border'>

            <div className="flex flex-col gap-2 w-full md:w-96">
                <label htmlFor="username">Username</label>
                <input value={username} onChange={e=>setUsername(e.target.value)} required className='border-b outline-none' type="text" />
            </div>

            <div className="flex flex-col gap-2 w-full md:w-96">
                <label htmlFor="Email">Email</label>
                <input value={email} onChange={e=>setEmail(e.target.value)} required className='border-b outline-none' type="email" />
            </div>

            <div className="flex flex-col gap-2 w-full md:w-96">
                <label htmlFor="adsTitle">AdsTitle</label>
                <input value={ads.adsTitle} onChange={e=>setAds({...ads,adsTitle:e.target.value})} required className='border-b outline-none' type="text" />
            </div>

            <div className="flex flex-col gap-2 w-full md:w-96">
                <label htmlFor="Phone NO">Phone NO</label>
                <div className="w-full space-x-[5%]">
                    <input value={ads.phone.code}   onChange={e=>setAds({...ads,phone:{...ads.phone,code:e.target.value}})}   required className='w-[20%] border-b outline-none' type="text" />
                    <input value={ads.phone.number} onChange={e=>setAds({...ads,phone:{...ads.phone,number:e.target.value}})} required className='w-[75%] border-b outline-none' type="number" />
                </div>
            </div>

            <div className="flex flex-col gap-2 w-full md:w-96">
                <label htmlFor="Introduction">Introduction</label>
                <textarea value={ads.intro} onChange={e=>setAds({...ads,intro:e.target.value})} required cols={5} className='border-b outline-none min-h-[100px]' type="text" />
            </div>

            <div className="flex flex-col gap-2 w-full md:w-96">
                <label htmlFor="Location">Location</label>
                <LocationSearchInput  getLocation={location=>setAds({...ads,location})} />
                {/* <input value={ads.location} onChange={e=>setAds({...ads,location:e.target.value})} required className='border-b outline-none' type="text" /> */}
            </div>

            <div className="flex flex-col gap-2 w-full md:w-96">
                <label htmlFor="Nationality">Nationality</label>
                <select value={ads.nationality} onChange={e=>setAds({...ads,nationality:e.target.value})} required className='border-b outline-none' type="text" >
                    <Nationality/>
                    </select>
            </div>

            <div className="flex flex-col gap-2 w-full md:w-96">
                <label htmlFor="Language">Language</label>
                <input value={ads.language} onChange={e=>setAds({...ads,language:e.target.value})} required className='border-b outline-none' type="text" />
            </div>

            <div className="flex flex-col gap-2 w-full md:w-96">
                <label htmlFor="Eye">Eye</label>
                <select value={ads.eye} onChange={e=>setAds({...ads,eye:e.target.value})} required className='border-b outline-none' type="text" >
                <option className='text-black' value="">Select Your Eye color</option>
                    <option className='text-black' value="Brown">Brown</option>
                    <option className='text-black' value="Blue">Blue</option>
                    <option className='text-black' value="Hazel">Hazel</option>
                    <option className='text-black' value="Amber">Amber</option>
                    <option className='text-black' value="Green">Green</option>
                    <option className='text-black' value="Gray">Gray</option>
                </select>
            </div>

            <div className="flex flex-col gap-2 w-full md:w-96">
                <label htmlFor="Hair">Hair</label>
                <select value={ads.hair} onChange={e=>setAds({...ads,hair:e.target.value})} required className='border-b outline-none' type="text" >
                <option className='text-black' value="">Select Your Hair color</option>
                    <option className='text-black' value="Black">Black</option>
                    <option className='text-black' value="Brown">Brown</option>
                    <option className='text-black' value="Blond">Blond</option>
                    <option className='text-black' value="White/Gray">White/Gray</option>
                    <option className='text-black' value="Red">Red</option>
                    </select>
            </div>

            <div className="flex flex-col gap-2 w-full md:w-96">
                <label htmlFor="Hair">Measurements</label>
                <div className="space-x-[12.5%]">
                    <input value={ads.measurement.bust}  onChange={e=>setAds({...ads,measurement:{...ads.measurement,bust:e.target.value}})} required className='border-b outline-none w-[25%]' type="number" />
                    <input value={ads.measurement.hip}   onChange={e=>setAds({...ads,measurement:{...ads.measurement,hip:e.target.value}})} required className='border-b outline-none w-[25%]' type="number" />
                    <input value={ads.measurement.waist} onChange={e=>setAds({...ads,measurement:{...ads.measurement,waist:e.target.value}})} required className='border-b outline-none w-[25%]' type="number" />
                </div>
            </div>

            <div className="flex flex-col gap-2 w-full md:w-96">
                <label htmlFor="Hair">Social Media</label>
                <div className="flex justify-between items-center flex-wrap gap-y-5">
                    <input value={ads.socialMedia.video}      onChange={e=>setAds({...ads,socialMedia:{...ads.socialMedia,video:e.target.value}})}     placeholder={"video"}     className='border-b outline-none w-[48%]' type="text" />
                    <input value={ads.socialMedia.website}    onChange={e=>setAds({...ads,socialMedia:{...ads.socialMedia,website:e.target.value}})}   placeholder={"website"}   className='border-b outline-none w-[48%]' type="text" />
                    <input value={ads.socialMedia.instagram}  onChange={e=>setAds({...ads,socialMedia:{...ads.socialMedia,instagram:e.target.value}})} placeholder={"instagram"} className='border-b outline-none w-[48%]' type="text" />
                    <input value={ads.socialMedia.twitter}    onChange={e=>setAds({...ads,socialMedia:{...ads.socialMedia,twitter:e.target.value}})}   placeholder={"twitter"}   className='border-b outline-none w-[48%]' type="text" />
                    <input value={ads.socialMedia.telegram}   onChange={e=>setAds({...ads,socialMedia:{...ads.socialMedia,telegram:e.target.value}})}  placeholder={"telegram"}  className='border-b outline-none w-[48%]' type="text" />
                    <input value={ads.socialMedia.facebook}   onChange={e=>setAds({...ads,socialMedia:{...ads.socialMedia,facebook:e.target.value}})}  placeholder={"facebook"}  className='border-b outline-none w-[48%]' type="text" />
                    <input value={ads.socialMedia.tiktok}     onChange={e=>setAds({...ads,socialMedia:{...ads.socialMedia,tiktok:e.target.value}})}    placeholder={"tiktok"}    className='border-b outline-none w-[48%]' type="text" />
                </div>
            </div>

            <div className="flex flex-col gap-2 w-full md:w-96">
                <label htmlFor="Height">Height</label>
                <input value={ads.height} onChange={e=>setAds({...ads,height:e.target.value})} required className='border-b outline-none' type="number" />
            </div>

            <div className="flex flex-col gap-2 w-full md:w-96">
                <label htmlFor="Weight">Weight</label>
                <input value={ads.weight} onChange={e=>setAds({...ads,weight:e.target.value})} required className='border-b outline-none' type="number" />
            </div>

            <div className="flex flex-col gap-2 w-full md:w-96">
                <label htmlFor="Age">Age</label>
                <input value={ads.age}    onChange={e=>setAds({...ads,age:e.target.value})}   required className='border-b outline-none' type="number" />
            </div>

            <div className="flex flex-col gap-2 w-full md:w-96">
                <label htmlFor="Currency">Currency Type</label>
                <input value={ads.currencyType} onChange={e=>setAds({...ads,currencyType:e.target.value})} required  className='border-b outline-none' type="text" />
            </div>

            <div className="flex flex-col gap-2 w-full md:w-96">
                <label htmlFor="OutCall">OutCall</label>
                <div className="flex justify-between items-center flex-wrap gap-y-5">
                    <input value={ads.outCall.oneHourOut} onChange={e=>setAds({...ads,outCall:{...ads.outCall ,oneHourOut : e.target.value}})} className='border-b outline-none w-[48%]' type="number" />
                    <input value={ads.outCall.twoHourOut} onChange={e=>setAds({...ads,outCall:{...ads.outCall ,twoHourOut : e.target.value}})} className='border-b outline-none w-[48%]' type="number" />
                    <input value={ads.outCall.nightOut}   onChange={e=>setAds({...ads,outCall:{...ads.outCall ,nightOut   : e.target.value}})} className='border-b outline-none w-[48%]' type="number" />
                </div>
            </div>

            <div className="flex flex-col gap-2 w-full md:w-96">
                <label htmlFor="InCall">InCall</label>
                <div className="flex justify-between items-center flex-wrap gap-y-5">
                    <input value={ads.inCall.oneHourIn} onChange={e=>setAds({...ads,inCall:{...ads.inCall, oneHourIn : e.target.value}})} className='border-b outline-none w-[48%]' type="number" />
                    <input value={ads.inCall.twoHourIn} onChange={e=>setAds({...ads,inCall:{...ads.inCall, twoHourIn : e.target.value}})} className='border-b outline-none w-[48%]' type="number" />
                    <input value={ads.inCall.nightIn}   onChange={e=>setAds({...ads,inCall:{...ads.inCall, nightIn   : e.target.value}})} className='border-b outline-none w-[48%]' type="number" />
                </div>
            </div>

            {/* <div className="flex flex-col gap-2 w-full md:w-96">
                <label htmlFor="Service">Service</label>
                <input className='border-b outline-none' type="text" />
            </div> */}
            
            <div className="flex flex-col gap-2 w-full md:w-96">
                <label htmlFor="ProfilePhoto">ProfilePhoto</label>
                <input value={ads.profilePhoto} onChange={e=>setAds({...ads,profilePhoto:e.target.value})}  required className='border-b outline-none' type="text" />
            </div>

            <div className="flex flex-col gap-2 w-full md:w-96">
                <label htmlFor="Gallery">Gallery</label>
                <input value={ads.gallery} onChange={e=>setAds({...ads,gallery:e.target.value.split(',')})}  className='border-b outline-none' type="text" />
            </div>

            <button className='h-12 bg-rose-800 px-5 rounded-md text-white' type='submit'>Publish Ads</button>

        </form>
    )
}

export default DataImport