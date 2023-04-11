import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function NavBar() {
  const navigate = useNavigate()
  return (
    <div className='h-14 bg-[#000B17] flex items-center text-white' >
      <div className="w-1/2 py-1">
        <img src="/image/home/logo-rounded.webp" className='ml-20  h-10 w-10' alt="" />
      </div>
      <div className="w-1/2 h-full flex items-center gap-10">
        <ul className='flex items-center h-full gap-x-12 text-lg'>
          <li className='cursor-pointer' onClick={() => navigate('/')}>Home</li>
          <li className='cursor-pointer' onClick={() => navigate('/static/about')}>About Us</li>
          <li className='cursor-pointer' onClick={() => navigate('/auth')}>Place Your Ad</li>
          <li className='cursor-pointer' onClick={() => navigate('/auth')}>Login</li>
        </ul>
        <div className="search">

        </div>
        <div className="faq text-lg">
            <Link to={'/static/faq'} >FAQ</Link>
        </div>
      </div>
    </div>
  )
}

export default NavBar