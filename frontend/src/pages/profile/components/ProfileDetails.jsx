import React from 'react'

import CallIcon from './icons/call.svg'
import WhatsappIcon from './icons/whatsapp.svg'
import TelegramIcon from './icons/telegram.svg'
import EmailIcon from './icons/email.svg'

function ProfileDetails({ adsTitle, updatedAt, service, age, height, weight, hair, eye, phone, email, socialMedia }) {
    return (
        <div className='profile-details space-y-3 text-white w-[630px] px-5 md:px-0'>
            <div className="w-full h-20 bg-[red] hidden md:flex justify-between items-center px-8">
                <p className="text-xl font-bold capitalize">{adsTitle}</p>
                <p>{updatedAt}</p>
            </div>
            <div className="services md:p-8 w-full space-y-3">
                <p className='text-[red] text-lg font-bold'>Service</p>
                <div className="flex flex-wrap  items-center w-full gap-y-3">
                    {service?.map(e => <div className='w-1/4'>{e.name}</div>)}
                </div>
            </div>
            <div className="contact w-full flex flex-wrap justify-between items-center px-8 gap-y-3">
                <a href={`tel:` + phone?.code + phone?.number}>
                    <button className='w-32 h-10 bg-[red] flex justify-center items-center'>
                        <img src={CallIcon} alt="" />
                    </button>
                </a>
                <a href={`https://api.whatsapp.com/send?phone=${phone?.code}${phone?.number}&text=Hi.`}>
                    <button className='w-32 h-10 bg-[red] flex justify-center items-center'>
                        <img src={WhatsappIcon} alt="" />
                    </button>
                </a>
                <button className='w-32 h-10 bg-[red] flex justify-center items-center'>
                    <img src={TelegramIcon} alt="" />
                </button>
                <a href={"mailto:"+email}>
                <button className='w-32 h-10 bg-[red] flex justify-center items-center'>
                    <img src={EmailIcon} alt="" />
                </button>
                </a>
            </div>
            <div className="services md:p-8 w-full space-y-3">
                <p className='text-[red] text-lg font-bold'>Info</p>
                <div className="lg:w-full md:w-[280px] text-lg">
                    <div className="w-full flex justify-between items-center">
                        <p className='w-24'>Age</p>
                        <p className='w-4'>:</p>
                        <p className='w-24'>{age}</p>
                    </div>
                    <div className="w-full flex justify-between items-center">
                        <p className='w-24'>Height</p>
                        <p className='w-4'>:</p>
                        <p className='w-24'>{height}</p>
                    </div>
                    <div className="w-full flex justify-between items-center">
                        <p className='w-24'>Weight</p>
                        <p className='w-4'>:</p>
                        <p className='w-24'>{weight}</p>
                    </div>
                    <div className="w-full flex justify-between items-center">
                        <p className='w-24'>Hair</p>
                        <p className='w-4'>:</p>
                        <p className='w-24'>{hair}</p>
                    </div>
                    <div className="w-full flex justify-between items-center">
                        <p className='w-24'>Eye</p>
                        <p className='w-4'>:</p>
                        <p className='w-24'>{eye}</p>
                    </div>
                    <div className="w-full flex justify-between items-center">
                        <p className='w-24'>Bust</p>
                        <p className='w-4'>:</p>
                        <p className='w-24'>22</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileDetails