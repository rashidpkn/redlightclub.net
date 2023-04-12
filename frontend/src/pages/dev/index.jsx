import React, { useState } from 'react'
import lady from '../../asset/images/new-ads/lady.png'
import Page1 from './components/Page1'
import Page2 from './components/Page2'
import Page3 from './components/Page3'


function NewAds() {
    const [pageNo, setPageNo] = useState(1)
  return (
    <div className='h-screen'>
        <div className="nav h-24 w-full px-20 flex gap-5 items-center shadow-xl">
            <div className="h-9 w-9">
                <img src="/images/common/logo-rounded.png" className='h-full w-full' alt="" />
            </div>
            <p className='text-[#E11700] font-bold text-xl'>Red Light Club</p>
        </div>
        
        <div className="p-5 bg-[#F5F5F5] h-[calc(100%-7rem)] mt-4 flex justify-center items-center">
            <div className="w-full h-full bg-white rounded-xl flex">
                <div className="h-full w-[40%]">
                    <img src={lady} className='w-full h-full rounded-l-xl' alt="" />
                </div>
                <div className="h-full w-[60%] p-5">
                    {pageNo === 1 && <Page1 setPageNo={setPageNo}/>}
                    {pageNo === 2 && <Page2 setPageNo={setPageNo}/>}
                    {pageNo === 3 && <Page3 setPageNo={setPageNo}/>}
                </div>
            </div>
        </div>

    </div>
  )
}

export default NewAds


