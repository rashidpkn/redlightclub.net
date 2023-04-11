import React from 'react'

function Footer() {
    return (
        <div className=' bg-black text-white pt-5'>
            <div className="h-16  flex justify-around items-center">
                <span className="text-lg font-light">Want to receive the latest listings? Subscribe to our weekly newsletter!</span>
                <div className="signup h-12 w-80 bg-white flex rounded-2xl">
                    <input type="text" className="h-full w-[70%] rounded-l-2xl outline-none text-black pl-5" placeholder="Email" />
                    <button className="bg-red-600 h-full w-[30%] rounded-r-2xl text-xl">Sign Up</button>
                </div>
            </div>
            <div className="px-10 mt-5">
                <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias error harum maxime adipisci amet laborum. Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit</p>
            </div>

            <div className="flex flex-col md:flex-row justify-center  md:justify-around my-5 gap-y-5">

                <div className="flex justify-center">
                    <img src="/image/home/logo-rounded.webp" className='w-56 h-56' alt="logo" />
                </div>
                <div className="flex flex-col items-center">
                    <h6  className='text-xl font-medium mb-5'>Terms & Policies</h6>
                    <ul className='flex flex-row md:flex-col gap-x-3'>
                        <li>Terms Of Use</li>
                        <li>Privacy Policy</li>
                        <li>Copyright Notification</li>
                        <li>GDSR</li>
                        <li>Sitemap</li>
                    </ul>
                </div>
                <div className="flex flex-col  items-center gap-5">
                    <h4 className='text-xl font-semibold'>We are not so social!</h4>
                    <div className="flex justify-center gap-5">
                        <img src="/image/home/facebook.webp" alt="" className="h-10 w-10" />
                        <img src="/image/home/instagram.webp" alt="" className="h-10 w-10" />
                        <img src="/image/home/twitter.webp" alt="" className="h-10 w-10" />
                        <img src="/image/home/pinterest.webp" alt="" className="h-10 w-10" />
                    </div>
                </div>

            </div>
            <div className="copy  text-center py-5">
                <h6 className='text-sm '> © 2022 Red Light Club. All rights reserved </h6>
            </div>
        </div>
    )
}

export default Footer