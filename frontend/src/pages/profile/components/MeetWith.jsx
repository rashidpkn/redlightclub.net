import React from 'react'

function MeetWith() {
    return (
        <div className="mt-3 w-full flex flex-col items-center lg:block justify-center">
            <span className="text-xl text-[#010315] font-medium">I meet with</span>
            <div className="mt-[10px] flex gap-[35px]">
                <img className="h-[65px]" src="/image/profile/icon/men.png" alt="" />
                <img className="h-[65px]" src="/image/profile/icon/women.png" alt="" />
                <img className="h-[65px]" src="/image/profile/icon/couples-not.png" alt="" />
                <img className="h-[65px]" src="/image/profile/icon/group-not.png" alt="" />
            </div>
        </div>
    )
}

export default MeetWith