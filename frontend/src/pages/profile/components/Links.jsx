import React from 'react'
import { Link } from 'react-router-dom'

function Links({id}) {
    return (
        <div className="h-12 max-w-full bg-[#513968] px-[18px] flex justify-between items-center text-white text-sm mx-auto">
            <Link to={`/profile/${id - 1}`}>
                <button className="w-[81px] h-[29px] rounded-2xl bg-[#946FB7] hover:w-[90px] hover:h-[35px] hover:text-lg duration-200">Previous</button>
            </Link>
            <div className="flex gap-3 h-full items-center">
                <img className="cursor-pointer w-8 h-8 hover:w-10 hover:h-10 duration-200" src="/icon/mail.png" alt="contact" />
                <img className="cursor-pointer w-8 h-8 hover:w-10 hover:h-10 duration-200" src="/icon/call.png" alt="contact" />
                <img className="cursor-pointer w-8 h-8 hover:w-10 hover:h-10 duration-200" src="/icon/tele.png" alt="contact" />
                <img className="cursor-pointer w-8 h-8 hover:w-10 hover:h-10 duration-200" src="/icon/whts.png" alt="contact" />
            </div>
            <Link to={`/profile/${Number(id) + 1}`}>
                <button className="w-[81px] h-[29px] rounded-2xl bg-[#946FB7] hover:w-[90px] hover:h-[35px] hover:text-lg duration-200">Next</button>
            </Link>
        </div>
    )
}

export default Links