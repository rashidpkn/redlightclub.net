import { Verified } from '@mui/icons-material'
import React from 'react'

function Title({ ads }) {
    return (
        <>
            <div className="">
                <h2 className='text-lg lg:text-2xl font-medium'>{ads.adsTitle}  {ads.verify && <Verified fontSize='large' className='text-[#1976D2]' />}</h2>
                <p className='inline-block '>Last seen Online 31/01/2023</p>
            </div>

            <div className="flex lg:gap-5 justify-center items-center lg:border rounded-full p-[2px] lg:p-3">
                <h2>Nationality :</h2>
                <h2>{ads.nationality}</h2>
            </div>
        </>
    )
}

export default Title