import React from 'react'
import sexToy1 from '../../../../asset/images/dashboard/user/sextoys/sextoy1.png'
import sexToy2 from '../../../../asset/images/dashboard/user/sextoys/sextoy2.png'
import sexToy3 from '../../../../asset/images/dashboard/user/sextoys/sextoy3.png'

function SexToys() {
  return (
    <div className='space-y-5'>
        <div className="">
            <p className='text-2xl font-bold'>Sex Toys</p>
            <p className='text-sm text-[#A5A5A5]'>Lorem ipsum dolor sit</p>
        </div>
        <div className="flex flex-wrap gap-3">
            <div className="w-[717px]  h-[300px] hover:shadow-xl"><img src={sexToy1} className='w-full h-full rounded-xl' alt="" /> </div>
            <div className="w-[360px]  h-[300px] hover:shadow-xl"><img src={sexToy2} className='w-full h-full rounded-xl' alt="" /> </div>
            <div className="w-[1092px] h-[300px] hover:shadow-xl"><img src={sexToy3} className='w-full h-full rounded-xl' alt="" /> </div>
        </div>
    </div>
  )
}

export default SexToys