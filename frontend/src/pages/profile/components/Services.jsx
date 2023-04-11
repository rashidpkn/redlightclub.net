import React from 'react'

function Services({ ads }) {
   
    return (
        <div className="">
            <div className="w-full flex bg-[#513968] py-5 text-white rounded-t-2xl">

                <div className="w-[40%] ml-5">I Do Provide</div>
                <div className="w-[60%] ml-5">I Don't Provide</div>
            </div>

            <div className="w-full bg-[#D2A9DF] flex h-[250px] overflow-y-scroll  rounded-b-2xl ">
                <Provide ads={ads} />
                <NotProvide ads={ads} />
            </div>
        </div>
    )
}

export default Services


const NotProvide = ({ads})=>{
    const allServices = [
        'Anal sex', 'Foot fetish', 'Parties', 'Submissive', 'BDSM', 'French kissing', 'Reverse oral', 'Squirting',
        'CIM', 'GFE', 'Giving rimming', 'Tantric massage', 'COB', 'Teabagging', 'Couples', 'Role play', 'Tie and tease', 
        'Deep  throat', 'Lap dancing', 'Sex toys', 'Uniforms','Domination', 'Massage', 'Spanking', 'Face sitting', 
        'Nuru massage', 'Strapon','Fingering', 'Oral sex blow job', 'Striptease', 'Webcam sex', 'Fisting', 'OWO']
    return(
<div className="w-[60%]  p-5 flex flex-wrap gap-y-3">
                    {
                        allServices?.filter(e => !ads?.service?.map(ev => ev.name).includes(e))?.map(e => <h2 key={e.id} className='w-1/2 font-light'>{e}</h2>)
                    }
                </div>
    )
}
 
const Provide = ({ads})=>{
    return(
<div className="w-[40%] space-y-2  p-5">
                    {ads?.service?.map(e => <div key={e.id} className='flex justify-between font-light'> <p>{e.name}</p> <p>{e.charge}</p> </div>)}
                </div>
    )
}