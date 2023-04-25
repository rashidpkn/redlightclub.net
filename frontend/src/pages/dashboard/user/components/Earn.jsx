import React, { useEffect } from 'react'

import AOS from 'aos';
import 'aos/dist/aos.css';

import earn1 from '../../../../asset/images/dashboard/user/earn/earn1.png'
import earn2 from '../../../../asset/images/dashboard/user/earn/earn2.png'
import earn3 from '../../../../asset/images/dashboard/user/earn/earn3.png'
import earn4 from '../../../../asset/images/dashboard/user/earn/earn4.png'
import earn5 from '../../../../asset/images/dashboard/user/earn/earn5.png'
import earn6 from '../../../../asset/images/dashboard/user/earn/earn6.png'
import earn7 from '../../../../asset/images/dashboard/user/earn/earn7.png'

import ball1 from '../../../../asset/images/dashboard/user/earn/ball/ball1.png'
import ball2 from '../../../../asset/images/dashboard/user/earn/ball/ball2.png'
import ball3 from '../../../../asset/images/dashboard/user/earn/ball/ball3.png'
import ball4 from '../../../../asset/images/dashboard/user/earn/ball/ball4.png'
import ball5 from '../../../../asset/images/dashboard/user/earn/ball/ball5.png'
import ball6 from '../../../../asset/images/dashboard/user/earn/ball/ball6.png'

function Earn() {
//    const [percent, setPercent] = useState(0)
    useEffect(() => {
        AOS.init()
        AOS.refresh()
    }, [])
    
    
    return (
        <div className='' 
        // onScroll={e=>{
        //     var { target } = e
        //         setPercent(target.scrollTop / (target.scrollHeight - target.clientHeight) * 100)
        // }}
        >
            <div className="w-full p-5 bg-white">
                <div className="flex items-center gap-8 ">
                    <div className="w-56 h-56  flex-shrink-0 hover:scale-110 hover:z-10 duration-500 cursor-pointer">
                        <img src={earn1} alt="" />
                    </div>
                    <div className="space-y-3">
                        <p className='font-cairo text-2xl font-bold text-[#6418C3]'>Red Light Club Affiliate Scheme</p>
                        <p className='text-sm'>Welcome to the Red Light Club Affiliate Scheme, where you can earn money simply by referring new customers to our website. As an affiliate, you will receive a unique affiliate URL link that you can share with your friends, family, or anyone who may be interested in our services.</p>
                    </div>
                </div>
                <p className='text-xl font-bold font-cairo'>How It Works</p>
                <Benefits />
                <p className='text-xl font-bold font-cairo mt-6'>How to Join</p>
                <p className='mt-3 text-sm'>Joining our affiliate scheme is simple and free. All you need to do is generate your unique affiliate link and start promoting it to your network. To do this click generate my link.</p>
                <p className='text-xl font-bold font-cairo mt-6'>Terms and Conditions</p>
                <p className='mt-3 text-sm'>
                    By participating in our affiliate scheme, you agree to abide by our terms and conditions. We reserve the right to cancel or suspend your account if we suspect any fraudulent activity. You must not use any illegal or unethical methods to promote our website.
                </p>

                <p className='mt-3 text-sm'>
                    We hope you find our affiliate scheme to be a great way to earn extra income while promoting our services. If you have any questions or concerns, please do not hesitate to contact us. Thank you for your interest in Red Light Club.
                </p>

            </div>

            <div className="w-full p-5 bg-white">
                <div className="flex items-center gap-5">
                    <div className="w-[235px] h-[235px]  flex-shrink-0 hover:scale-110 hover:z-10 duration-500 cursor-pointer">
                        <img src={earn4} alt="" />
                    </div>
                    <div className="">
                        <p className='font-cairo text-2xl font-bold text-[#6418C3]'>Earn Credits by Placing Our Banner on Your Website</p>
                        <p className='mt-4 text-sm'>Welcome to our banner advert section where you can earn credits simply by placing our banner on your website. By participating in our banner advert programme, you can promote our website while earning credits that you can use to purchase our products or services.</p>
                    </div>
                </div>
                <p className='text-xl font-bold font-cairo'>How It Works</p>
                <div className="mt-6 flex gap-6 flex-wrap justify-center">
                     <Step1 />
                     <Step2 />
                     <Step3 />
                </div>
                <p className='text-xl font-bold font-cairo mt-11'>Terms and Conditions</p>
                <p className='mt-3 text-sm'>By participating in our banner advert programme, you agree to our terms and conditions. You must use the banners provided on our website and link them directly to our website. You must not modify the banners in any way. We reserve the right to cancel or suspend your account if we suspect any fraudulent activity.</p>
                <p className='text-xl font-bold font-cairo mt-6'>Conclusion</p>
                <p className="mt-3 text-sm">We hope you find our banner advert programme to be a great way to earn credits while promoting our website. If you have any questions or concerns, please do not hesitate to contact us. Thank you for your interest in our banner advert programme</p>
            </div>
        </div>
    )
}

export default Earn


const Step1 = ()=>{
    return(
<div className={`h-[480px]  w-[325px] relative hover:scale-110 hover:z-10 duration-500 cursor-pointer`} data-aos='zoom-in' data-aos-duration="1000">
                        <div className="absolute top-2 -left-7 -z-10">
                            <img src={ball3} alt="" />
                        </div>
                        <div className="absolute h-full w-full backdrop-blur-xl rounded-xl px-7 py-10 text-white z-10 " style={{ background: 'linear-gradient(0.6deg, rgba(0, 89, 169, 0.6) 0.41%, rgba(80, 165, 241, 0.6) 99.39%)' }}>
                            <p className='font-bold'>Step 1</p>
                            <div className="w-[230] h-[160px] mt-8 mb-6 flex justify-center items-center">
                                <img src={earn5} alt="" />
                            </div>
                            <p className='w-[260px] text-sm'>Go to the "Choose Banner" section on our website and select the banner you would like to use on your website. Once you have chosen a banner, copy the code provided and paste it onto your website, linking it to our website.</p>
                        </div>
                    </div>
    )
}

const Step2 = ()=>{

    return(
        <div className={`h-[480px] w-[325px] relative hover:scale-110 hover:z-10 duration-500 cursor-pointer`} data-aos='zoom-in' data-aos-duration="1000" data-aos-delay="500">
                        <div className="absolute -top-7 right-3 -z-10">
                            <img src={ball4} alt="" />
                        </div>
                        <div className="absolute -bottom-10 -left-14 -z-10">
                            <img src={ball5} alt="" />
                        </div>
                        <div className="absolute h-full w-full backdrop-blur-xl rounded-xl px-7 py-10 text-white z-10" style={{ background: 'linear-gradient(0.6deg, rgba(0, 95, 60, 0.6) 0.41%, rgba(52, 195, 143, 0.6) 99.39%)' }}>
                            <p className='font-bold'>Step 2</p>
                            <div className="w-[230] h-[160px] mt-8 mb-6 flex justify-center items-center">
                                <img src={earn6} alt="" />
                            </div>
                            <p className='w-[260px] text-sm'>Navigate to the "Add New Banner" section on our website and submit the link to the page where the banner is located on your website. We will review your submission and, if approved, credit your account with the appropriate number of credits.</p>
                        </div>
                    </div>
    )
}

const Step3 = ()=>{
    return(
        <div className={`h-[480px] w-[325px] relative hover:scale-110 hover:z-10 duration-500 cursor-pointer delay-[1.5s]`} data-aos='zoom-in' data-aos-duration="1000" data-aos-delay="1000">
                        <div className="absolute -bottom-10 right-3 -z-10">
                            <img src={ball6} alt="" />
                        </div>
                        <div className="absolute h-full w-full backdrop-blur-xl rounded-xl px-7 py-10 text-white z-10" style={{ background: 'linear-gradient(0.6deg, rgba(0, 89, 169, 0.6) 0.41%, rgba(80, 165, 241, 0.6) 99.39%)' }}>
                            <p className='font-bold'>Step 3</p>
                            <div className="w-[230] h-[160px] mt-8 mb-6 flex justify-center items-center">
                                <img src={earn7} alt="" />
                            </div>
                            <p className='w-[260px] text-sm'>Credits can be used to purchase products or services on our website. The more banners you place on your website, the more credits you can earn.</p>
                        </div>
                    </div>
    )
}


const Benefits = ()=>{
    return(
        <div className="w-full min-h-[435px] h-full  relative mt-2 hover:shadow-earn-credit-shadow duration-200 cursor-pointer rounded-xl" >
        <div className="absolute -top-8 -right-8">
            <img src={ball1} alt="" />
        </div>
        <div className="absolute -bottom-10 left-8">
            <img src={ball2} alt="" />
        </div>
        <div className="absolute h-full w-full backdrop-blur-xl rounded-xl px-7 py-8  text-white" style={{ background: 'linear-gradient(0.6deg, rgba(0, 95, 60, 0.6) 0.41%, rgba(52, 195, 143, 0.6) 99.39%)' }}>
            <p className='font-bold'>Your Benefits,</p>
            <div className="flex justify-center gap-16 mt-6 flex-wrap">
                
                <div className="flex flex-col items-center gap-6 w-[415px] " >
                    <div className="w-[304px] h-[170px] flex justify-center items-center hover:scale-110 hover:z-10 duration-500 cursor-pointer">
                        <img src={earn2} alt="" />
                    </div>
                    <p className='text-sm'>When someone clicks on your affiliate link and creates a new account on our website, you will receive a profit share of 20% of their lifetime spend. For example, if your referral spends $1000 on our website over their lifetime, you will receive $200 (20% of $1000) as your commission.</p>
                </div>

                <div className="flex flex-col items-center gap-6 w-[415px]" >
                    <div className="w-[304px] h-[170px] flex justify-center items-center hover:scale-110 hover:z-10 duration-500 cursor-pointer">
                        <img src={earn3} alt="" />
                    </div>
                    <p className='text-sm'>Your commission payments will be credited to your account and can be viewed in the affiliate section of our website. You can withdraw your earnings once you have reached a minimum balance of $150. Payments will be made via Bitcoin or USDT.</p>
                </div>

            </div>
        </div>
    </div>
    )
}