import React from 'react'
import vidioIcon from './icons/video.svg'
import websiteIcon from './icons/website.svg'
import onlyfansIcon from './icons/onlyfans.svg'
import instagramIcon from './icons/instagram.svg'
import facebookIcon from './icons/facebook.svg'
import tiktokIcon from './icons/tiktok.svg'

function SocialMedia() {
    return (
        <div className="w-[600px] space-y-3">
            <p className='text-[red] text-lg font-bold'>Look me up at</p>
            <div className="flex flex-wrap w-full gap-4">
                <div className="flex flex-col items-center">
                    <button className='w-[132px] h-[40px] bg-[red] flex justify-center items-center hover:scale-110 duration-200'>
                        <img src={vidioIcon} alt="" />
                        </button>
                    <p>Video Link</p>
                </div>
                <div className="flex flex-col items-center">
                    <button className='w-[132px] h-[40px] bg-[red] flex justify-center items-center hover:scale-110 duration-200'>
                        <img src={websiteIcon} alt="" />
                        </button>
                    <p>Website</p>
                </div>
                <div className="flex flex-col items-center">
                    <button className='w-[132px] h-[40px] bg-[red] flex justify-center items-center hover:scale-110 duration-200'>
                        <img src={onlyfansIcon} alt="" />
                        </button>
                    <p>OnlyFans</p>
                </div>
                <div className="flex flex-col items-center">
                    <button className='w-[132px] h-[40px] bg-[red] flex justify-center items-center hover:scale-110 duration-200'>
                        <img src={instagramIcon} alt="" />
                        </button>
                    <p>Instagram</p>
                </div>
                <div className="flex flex-col items-center">
                    <button className='w-[132px] h-[40px] bg-[red] flex justify-center items-center hover:scale-110 duration-200'>
                        <img src={facebookIcon} alt="" />
                        </button>
                    <p>Facebook</p>
                </div>
                <div className="flex flex-col items-center">
                    <button className='w-[132px] h-[40px] bg-[red] flex justify-center items-center hover:scale-110 duration-200'>
                        <img src={tiktokIcon} alt="" />
                        </button>
                    <p>TikTok</p>
                </div>
                
            </div>
        </div>
    )
}

export default SocialMedia