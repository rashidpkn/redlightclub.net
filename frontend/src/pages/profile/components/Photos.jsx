import React from 'react'
import BackendIP from '../../../BackendIP'

function Photos({profilePhoto,gallery}) {
  return (
    <div className='photos space-y-3'>
        <div className="profilePhoto w-[630px] h-[600px]">
            <img src={BackendIP +profilePhoto} alt="" className='w-full h-full object-top' />
        </div>
        <div className="w-full flex justify-center items-center">
            {gallery?.map(e=><div key={e} className='w-20 h-20'>
                <img src={BackendIP + e} alt="" className='h-full w-full object-cover object-top ' />
            </div>)}
        </div>
    </div>
  )
}

export default Photos