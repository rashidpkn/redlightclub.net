import React from 'react'

function Page2({setPageNo}) {
    return (
        <div className='h-full w-full space-y-4'>

            <div className="space-y-2">
                <p className='text-sm font-bold'>Language*</p>
                <select placeholder='ex: Stacy' type="text" className='w-80 h-11 outline-[#6418C3] outline-1 bg-[#F5F5F5] text-sm rounded-xl ' >
                    <option value="">Select your language</option>
                </select>
            </div>

            <div className="flex gap-5 items-center">

                <div className="space-y-2">
                    <p className='text-sm font-bold'>Location*</p>
                    <select placeholder='ex: Stacy' type="text" className='w-80 h-11 outline-[#6418C3] outline-1 bg-[#F5F5F5] text-sm rounded-xl ' >
                        <option value="">Select your Location</option>
                    </select>
                </div>

                <div className="space-y-2">
                    <p className='text-sm font-bold'>Nationality*</p>
                    <select placeholder='ex: Stacy' type="text" className='w-80 h-11 outline-[#6418C3] outline-1 bg-[#F5F5F5] text-sm rounded-xl ' >
                        <option value="">Select your Nationality</option>
                    </select>
                </div>

            </div>

            <p className='text-sm font-bold'>Social</p>

            <div className="space-y-1">
                <div className="flex  items-center">
                    <p className='text-sm font-bold w-32'>Video Url</p>
                    <input type="text" className='w-80 h-11 outline-[#6418C3] outline-1 bg-[#F5F5F5] text-sm rounded-xl pl-5' />
                </div>



                <div className="flex  items-center">
                    <p className='text-sm font-bold w-32'>Onlyfans</p>
                    <div className="flex items-center gap-5 w-max px-5 py-2 rounded-xl bg-[#F6EEFF]">
                        <input type="text" className='w-80 h-11 outline-[#6418C3] outline-1 bg-[#F5F5F5] text-sm rounded-xl pl-5' />
                        <p className='text-sm'>🎉 You earn <span className='text-bold'> 50 Credits </span> by filling this info</p>
                    </div>
                </div>


                <div className="flex  items-center">
                    <p className='text-sm font-bold w-32'>Website</p>
                    <input type="text" className='w-80 h-11 outline-[#6418C3] outline-1 bg-[#F5F5F5] text-sm rounded-xl pl-5' />
                </div>

                <div className="flex  items-center">
                    <p className='text-sm font-bold w-32'>Instagram</p>
                    <input type="text" className='w-80 h-11 outline-[#6418C3] outline-1 bg-[#F5F5F5] text-sm rounded-xl pl-5' />
                </div>

                <div className="flex  items-center">
                    <p className='text-sm font-bold w-32'>Facebook</p>
                    <input type="text" className='w-80 h-11 outline-[#6418C3] outline-1 bg-[#F5F5F5] text-sm rounded-xl pl-5' />
                </div>

                <div className="flex  items-center">
                    <p className='text-sm font-bold w-32'>Telegram</p>
                    <input type="text" className='w-80 h-11 outline-[#6418C3] outline-1 bg-[#F5F5F5] text-sm rounded-xl pl-5' />
                </div>

                <div className="flex  items-center">
                    <p className='text-sm font-bold w-32'>Tiktok</p>
                    <input type="text" className='w-80 h-11 outline-[#6418C3] outline-1 bg-[#F5F5F5] text-sm rounded-xl pl-5' />
                </div>

                <div className="flex  items-center">
                    <p className='text-sm font-bold w-32'>Twitter</p>
                    <input type="text" className='w-80 h-11 outline-[#6418C3] outline-1 bg-[#F5F5F5] text-sm rounded-xl pl-5' />
                </div>

            </div>


        <div className="flex justify-between items-center">
            <button className='font-bold' onClick={()=>setPageNo(1)}>Back</button>
            <button className='px-4 py-2 bg-[#6418C3] rounded-lg text-white font-bold' onClick={()=>setPageNo(3)}>Next</button>
        </div>
        </div>
    )
}

export default Page2