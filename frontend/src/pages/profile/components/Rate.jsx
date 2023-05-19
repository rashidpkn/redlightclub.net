import React from 'react'

import WhatsappIcon from './icons/whatsapp.svg'

function Rate({ currencyType, inCall, outCall, phone }) {
  return (
    <div className="rate space-y-3 text-white px-5 md:px-0">
      <div className="flex justify-center items-center">

        <p className='text-[red] text-lg font-bold w-[630px]'>Service</p>
        <p className='text-[red] text-lg font-bold w-[630px]'></p>
      </div>
      <div className=" flex flex-wrap justify-center gap-3">
        <div className="incall   w-[630px] space-y-3  ">
          <div className="w-full h-14 bg-[red] flex justify-center items-center"><p>InCall</p></div>

          <div className="w-full h-14 bg-white/20 flex justify-between items-center px-3 md:px-8">
            <p className='w-24' >1 Hour</p>
            <a href={`https://api.whatsapp.com/send?phone=${phone?.code}${phone?.number}&text=Hi.`}>
              <button className='w-[133px] h-10 bg-[red] flex justify-center items-center gap-2'><img src={WhatsappIcon} alt="" /> Book Now</button>
            </a>
            <p className='w-24'>{inCall?.oneHourIn} {currencyType}</p>
          </div>

          <div className="w-full h-14  flex justify-between items-center px-3 md:px-8">
            <p className='w-24'>2 Hour</p>
            <a href={`https://api.whatsapp.com/send?phone=${phone?.code}${phone?.number}&text=Hi.`}>
              <button className='w-[133px] h-10 bg-[red] flex justify-center items-center gap-2'><img src={WhatsappIcon} alt="" /> Book Now</button>
            </a>
            <p className='w-24'>{inCall?.twoHourIn} {currencyType}</p>
          </div>

          <div className="w-full h-14 bg-white/20 flex justify-between items-center px-3 md:px-8">
            <p className='w-24'>Full Night</p>
            <a href={`https://api.whatsapp.com/send?phone=${phone?.code}${phone?.number}&text=Hi.`}>
              <button className='w-[133px] h-10 bg-[red] flex justify-center items-center gap-2'><img src={WhatsappIcon} alt="" /> Book Now</button>
            </a>
            <p className='w-24'>{inCall?.nightIn} {currencyType}</p>
          </div>

        </div>
        <div className="outcall  w-[630px] space-y-3">
          <div className="w-full h-14 bg-[red] flex justify-center items-center"><p>OutCall</p></div>

          <div className="w-full h-14 bg-white/20 flex justify-between items-center px-3 md:px-8">
            <p className='w-24' >1 Hour</p>
            <button className='w-[133px] h-10 bg-[red] flex justify-center items-center gap-2'><img src={WhatsappIcon} alt="" /> Book Now</button>
            <p className='w-24'>{outCall?.oneHourOut} {currencyType}</p>
          </div>
          <div className="w-full h-14 flex justify-between items-center px-3 md:px-8">
            <p className='w-24'>2 Hour</p>
            <button className='w-[133px] h-10 bg-[red] flex justify-center items-center gap-2'><img src={WhatsappIcon} alt="" /> Book Now</button>
            <p className='w-24'>{outCall?.twoHourOut} {currencyType}</p>
          </div>
          <div className="w-full h-14 bg-white/20 flex justify-between items-center px-3 md:px-8">
            <p className='w-24'>Full Night</p>
            <button className='w-[133px] h-10 bg-[red] flex justify-center items-center gap-2'><img src={WhatsappIcon} alt="" /> Book Now</button>
            <p className='w-24'>{outCall?.nightOut} {currencyType}</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Rate