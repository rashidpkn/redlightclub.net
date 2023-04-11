import React from 'react'
import BackendIP from '../../../BackendIP'

function Photos({ ads, photo, setPhoto }) {
    return (
        <div className="w-full lg:w-1/2 lg:h-[800px]`">
            <img className='w-full h-[500px] lg:h-[750px] object-cover' src={photo} alt="" />
            <div className="flex justify-center items-center gap-5 relative bottom-12">
                <img className='w-24 h-24 rounded-md' onClick={() => setPhoto(`${BackendIP}${ads.profilePhoto}`)} src={`${BackendIP}${ads.profilePhoto}`} alt="" />
                {
                    ads.gallery?.map(e => <img onClick={() => setPhoto(`${BackendIP}${e}`)} className='w-24 h-24 rounded-md' src={`${BackendIP}${e}`} alt={e.adsTitle} />)
                }
            </div>
        </div>
    )
}

export default Photos