import React from 'react'

function Charges({ ads }) {
    return (
        <div className="flex  gap-[30px] ">
            <div className="w-[141px] ">
                <span className='text-xl text-[#010315] font-medium'>Outcalls </span>
                <OutCall currencyType={ads.currencyType} outCall={ads.outCall} />
            </div>
            <div className="w-[141px]">
                <span className='text-xl text-[#010315] font-medium'>Incalls </span>
                <InCall currencyType={ads.currencyType} inCall={ads.inCall} />
            </div>
        </div>
    )
}

export default Charges


function InCall({ currencyType, inCall }) {
    return (
        <div className="w-[150px]  mt-[10px] flex flex-col gap-[2px] text-base text-white">
            <div className="h-[30px] w-full flex rounded-t-lg overflow-hidden">
                <div className="h-full w-1/2 bg-[#513968] flex items-center justify-center">1 hr</div>
                <div className="h-full w-1/2 bg-[#946FB7] flex items-center justify-center">{inCall?.oneHourIn} {currencyType}</div>
            </div>
            <div className="h-[30px] w-full flex">
                <div className="h-full w-1/2 bg-[#513968] flex items-center justify-center">2 hr</div>
                <div className="h-full w-1/2 bg-[#946FB7] flex items-center justify-center">{inCall?.oneHourIn} {currencyType}</div>
            </div>

            <div className="h-[30px] w-full flex rounded-b-lg overflow-hidden">
                <div className="h-full w-1/2 bg-[#513968] flex items-center justify-center">Full Night</div>
                <div className="h-full w-1/2 bg-[#946FB7] flex items-center justify-center">{inCall?.oneHourIn} {currencyType}</div>
            </div>
        </div>
    )
}


function OutCall({ currencyType, outCall }) {
    return (
        <div className="w-[150px] mt-[10px] flex flex-col gap-[2px] text-base text-white">
            <div className="h-[30px] w-full flex rounded-t-lg overflow-hidden">
                <div className="h-full w-1/2 bg-[#513968] flex items-center justify-center">1 hr</div>
                <div className="h-full w-1/2 bg-[#946FB7] flex items-center justify-center">{outCall?.oneHourOut} {currencyType}</div>
            </div>
            <div className="h-[30px] w-full flex">
                <div className="h-full w-1/2 bg-[#513968] flex items-center justify-center">2 hr</div>
                <div className="h-full w-1/2 bg-[#946FB7] flex items-center justify-center">{outCall?.twoHourOut} {currencyType}</div>
            </div>

            <div className="h-[30px] w-full flex rounded-b-lg overflow-hidden">
                <div className="h-full w-1/2 bg-[#513968] flex items-center justify-center">Full Night</div>
                <div className="h-full w-1/2 bg-[#946FB7] flex items-center justify-center">{outCall?.oneHourOut} {currencyType}</div>
            </div>


        </div>
    )
}