import React from 'react'
import { Link } from 'react-router-dom'

function Buttons() {
    return (
        <div className="flex gap-5 flex-wrap">
            <Link to={'/new-ads'}>
                <button className="h-10  px-5 rounded-full md:text-xl border-2 border-[#6418c3]">Create New Ads</button>
            </Link>
            <Link to={'/dashboard/buy-first-page'}>
                <button className="h-10  px-5 rounded-full md:text-xl border-2 border-[#e328af]">Live Spots</button>
            </Link>
            <Link to={'/faq'}>
                <button className="h-10  px-5 rounded-full md:text-xl border-2 border-[#5ecfff]">FAQ</button>
            </Link>
            <a href="mailto:info@redlightclub.net" rel="noreferrer" target="_blank">
                <button className="h-10  px-5 rounded-full md:text-xl border-2 border-[#e328af]">Help</button>
            </a>
        </div>
    )
}

export default Buttons