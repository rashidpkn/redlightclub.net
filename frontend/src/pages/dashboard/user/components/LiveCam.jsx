import React from 'react'
import catWomen from '../../../../asset/images/dashboard/user/cat and women.png'

function LiveCam() {
  return (
    <div className='w-full h-96 bg-white rounded-2xl flex justify-center items-center gap-5'>
        <div className="space-y-3">
            <p className='text-[#6418C3] font-bold text-4xl'>Our Nerds are <br /> still working on <br /> this feature.</p>
            <p className='text-[#6418C3] font-medium text-2xl' >When its ready we will let you know !</p>
        </div>
        <img src={catWomen} alt="" />
    </div>
  )
}

export default LiveCam