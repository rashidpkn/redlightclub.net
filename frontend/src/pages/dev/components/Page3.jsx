import React from 'react'

function Page3({setPageNo}) {
    const services = [
        'Anal sex', 'Foot fetish', 'Parties', 'Submissive', 'BDSM', 'French kissing', 'Reverse oral', 'Squirting',
        'CIM', 'GFE', 'Giving rimming', 'Tantric massage', 'COB', 'Teabagging', 'Couples', 'Role play', 
        // 'Tie and tease', 
        // 'Deep  throat', 'Lap dancing', 'Sex toys', 'Uniforms','Domination', 'Massage', 'Spanking', 'Face sitting',
        // 'Nuru massage', 'Strapon','Fingering', 'Oral sex blow job', 'Striptease', 'Webcam sex', 'Fisting', 'OWO'
    ]
    return (
        <div className='w-full h-full space-y-4'>

            <div className="space-y-2">
                <p className='text-sm font-bold'>Currency*</p>
                <input type="text" className='w-80 h-11 outline-[#6418C3] outline-1 bg-[#F5F5F5] text-sm rounded-xl pl-5' />
            </div>

            <div className="flex gap-5">
            <p className='text-sm font-bold w-14'>Incalls</p>
                <div className="space-y-4">
                    <div className="flex gap-5">
                        <input type="text" className='h-10 w-32 outline-[#6418C3] outline-1 bg-[#F5F5F5] text-sm rounded-xl' />
                        <input type="text" className='h-10 w-32 outline-[#6418C3] outline-1 bg-[#F5F5F5] text-sm rounded-xl' />
                        
                    </div>
                    <div className="flex gap-5">
                        <input type="text" className='h-10 w-32 outline-[#6418C3] outline-1 bg-[#F5F5F5] text-sm rounded-xl' />
                        <input type="text" className='h-10 w-32 outline-[#6418C3] outline-1 bg-[#F5F5F5] text-sm rounded-xl' />
                        
                    </div>
                    <div className="flex gap-5">
                        <input type="text" className='h-10 w-32 outline-[#6418C3] outline-1 bg-[#F5F5F5] text-sm rounded-xl' />
                        <input type="text" className='h-10 w-32 outline-[#6418C3] outline-1 bg-[#F5F5F5] text-sm rounded-xl' />
                        
                    </div>
                </div>
            </div>

            <div className="flex gap-5">
            <p className='text-sm font-bold w-14'>Outcalls</p>
                <div className="space-y-4">
                    <div className="flex gap-5">
                        <input type="text" className='h-10 w-32 outline-[#6418C3] outline-1 bg-[#F5F5F5] text-sm rounded-xl' />
                        <input type="text" className='h-10 w-32 outline-[#6418C3] outline-1 bg-[#F5F5F5] text-sm rounded-xl' />
                        
                    </div>
                    <div className="flex gap-5">
                        <input type="text" className='h-10 w-32 outline-[#6418C3] outline-1 bg-[#F5F5F5] text-sm rounded-xl' />
                        <input type="text" className='h-10 w-32 outline-[#6418C3] outline-1 bg-[#F5F5F5] text-sm rounded-xl' />
                        
                    </div>
                    <div className="flex gap-5">
                        <input type="text" className='h-10 w-32 outline-[#6418C3] outline-1 bg-[#F5F5F5] text-sm rounded-xl' />
                        <input type="text" className='h-10 w-32 outline-[#6418C3] outline-1 bg-[#F5F5F5] text-sm rounded-xl' />
                        
                    </div>
                </div>
            </div>

            <p className='text-sm font-bold'>Services</p>
            <div className="flex flex-wrap gap-x-2 gap-y-1">
                {services.map(e=><button className='px-2 py-1 rounded-3xl border'>{e}</button>)}
            </div>

            <div className="flex justify-between items-center">
            <button className='font-bold' onClick={()=>setPageNo(2)}>Back</button>
            <button className='px-4 py-2 bg-[#6418C3] rounded-lg text-white font-bold' onClick={()=>setPageNo(4)}>Next</button>
        </div>



        </div>
    )
}

export default Page3