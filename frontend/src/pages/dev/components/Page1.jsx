import React from 'react'

function Page1({setPageNo}) {
    return (
        <div className='h-full w-full space-y-4'>

            <div className="space-y-2">
                <p className='text-sm font-bold'>Profile Title*</p>
                <input placeholder='ex: Stacy' type="text" className='w-80 h-11 outline-[#6418C3] outline-1 bg-[#F5F5F5] text-sm rounded-xl pl-5' />
            </div>

            <div className="space-y-2">
                <p className='text-sm font-bold'>Phone Number*</p>
                <input type="text" className='w-80 h-11 outline-[#6418C3] outline-1 bg-[#F5F5F5] text-sm rounded-xl pl-5' />
            </div>

            <div className="flex gap-5">
                <div className="space-y-2">
                    <p className='text-sm font-bold'>Age*</p>
                    <select type="text" className='w-16 h-11 outline-[#6418C3] outline-1 text-center bg-[#F5F5F5] text-sm rounded-xl' >
                        <option value="">Age</option>
                        { [...Array(23)].map((e,i)=><option value={i+18}>{i+18}</option>)}
                    </select>
                </div>

                <div className="space-y-2">
                    <p className='text-sm font-bold'>Height(cm)*</p>
                    <select type="text" className='w-16 h-11 outline-[#6418C3] outline-1 text-center bg-[#F5F5F5] text-sm rounded-xl' >
                        <option value="">Height</option>
                    { [...Array(101)].map((e,i)=><option value={i+100}>{i+100}</option>)}
                    </select>
                </div>

                <div className="space-y-2">
                    <p className='text-sm font-bold'>Weight(kg)*</p>
                    <select type="text" className='w-16 h-11 outline-[#6418C3] outline-1 text-center bg-[#F5F5F5] text-sm rounded-xl' >
                    <option className='text-start' value="">Weight</option>
                    { [...Array(41)].map((e,i)=><option className='text-start' value={i+40}>{i+40}</option>)}
                        </select>
                </div>
            </div>

            <div className="flex gap-5">
                <div className="space-y-2">
                    <p className='text-sm font-bold'>Hair*</p>
                    <select type="text" className='w-32 h-11 outline-[#6418C3] outline-1 bg-[#F5F5F5] text-sm rounded-xl text-center' >
                        <option value="">Select your hair colour</option>
                    <option value="Black">Black</option>
                    <option value="Brown">Brown</option>
                    <option value="Blond">Blond</option>
                    <option value="White/Gray">White/Gray</option>
                    <option value="Red">Red</option>
                    </select>
                </div>

                <div className="space-y-2">
                    <p className='text-sm font-bold'>Eye Color*</p>
                    <select type="text" className='w-32 h-11 outline-[#6418C3] outline-1 bg-[#F5F5F5] text-sm rounded-xl text-center' >
                    <option value="">Select your eye colour</option>
                    <option value="Brown">Brown</option>
                    <option value="Blue">Blue</option>
                    <option value="Hazel">Hazel</option>
                    <option value="Amber">Amber</option>
                    <option value="Green">Green</option>
                    <option value="Gray">Gray</option>
                    </select>
                </div>
            </div>
            
            <div className="space-y-2">
                <p className='text-sm font-bold'>Measurments*</p>
                <div className="flex gap-5">
                <select type="text" className='w-16 h-11 outline-[#6418C3] outline-1 text-center bg-[#F5F5F5] text-sm rounded-xl' >
                    { [...Array(41)].map((e,i)=><option value={i+60}>{i+60}</option>)}
                </select>
                <select type="text" className='w-16 h-11 outline-[#6418C3] outline-1 text-center bg-[#F5F5F5] text-sm rounded-xl' >
                    { [...Array(41)].map((e,i)=><option value={i+60}>{i+60}</option>)}
                </select>
                <select type="text" className='w-16 h-11 outline-[#6418C3] outline-1 text-center bg-[#F5F5F5] text-sm rounded-xl' >
                    { [...Array(41)].map((e,i)=><option value={i+60}>{i+60}</option>)}
                </select>
                </div>
            </div>

            <div className="space-y-2">
                <p className='text-sm font-bold'>Bio*</p>
                <textarea name="" id="" className='w-full h-32 outline-[#6418C3] outline-1 bg-[#F5F5F5] text-sm rounded-xl p-5'></textarea>
            </div>

        
        <button className='px-4 py-2 bg-[#6418C3] rounded-lg float-right text-white font-bold' onClick={()=>setPageNo(2)}>Next</button>

        </div>
    )
}

export default Page1