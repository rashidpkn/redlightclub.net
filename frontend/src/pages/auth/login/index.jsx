import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import BackendIP from "../../../BackendIP";
import { setEmail, setPassword, setRole, setToken, setUsername } from "../../../redux/slice/userSlice";


import banner from '../../../asset/images/signin/banner.png'

import bannermp4 from '../../../asset/videos/bg-video.mp4'
// import bannerwebm from '../../../asset/videos/bg-video.webm'

import logo from '../../../asset/images/signin/logo.png'

import user from '../../../asset/images/signin/user.png'
import advertiser from '../../../asset/images/signin/advertiser.png'

import userIcon from '../../../asset/images/signin/username-icon.png'
import passwordIcon from '../../../asset/images/signin/password-icon.png'



function Auth() {
  const [role, setRoles] = useState('')

  const { email, password, username } = useSelector(state => state.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const Login = () => {
    axios.post(`${BackendIP}/user/signin`, { email, password }).then(res => {
      const { status } = res.data
      if (status) {
        navigate('/dashboard')
        dispatch(setToken(res.data.token))
        dispatch(setRole(res.data.role))
        dispatch(setUsername(res.data.username))
      } else {
        window.alert(res.data.reason)
      }
    })
  }

  const Signup = () => {
    axios.post(`${BackendIP}/user/signup`, { username, email, password, role }).then(res => {
      const { status } = res.data
      if (status) {
        navigate('/dashboard')
        dispatch(setToken(res.data.token))
        dispatch(setRole(res.data.role))
      } else {
        window.alert(res.data.reason)
      }
    })
  }

  return (

    <div className="h-screen w-full relative flex justify-center items-center text-white">





      <img src={banner} className="absolute w-full h-full object-cover" alt="" />

      
        <video loop={true} autoPlay={true} muted={true} className="fixed w-full h-full object-cover z-0">
          <source src={bannermp4} type="video/mp4" />
        </video>



      <div className="w-[1114px] h-[689px] bg-[#FF0000]/40 z-10 rounded-xl flex">
        <div className="w-1/2 h-full flex flex-col justify-center items-center gap-12">
          <div className="flex flex-col items-center gap-6">
            <div className="w-36 h-36">
              <img src={logo} className="w-full h-full" alt="" />
            </div>
            <p className="text-lg font-semibold">Welcome to Red Light Club</p>
          </div>
          <form
            onSubmit={e => {
              e.preventDefault()
              role ? Signup() : Login()

            }}
            className="space-y-5">
            {
              role ? 
              role==='advertiser'?<p>Sign Up  As  An <span className="capitalize">{role}</span> </p> : <p>Sign Up  As  A <span className="capitalize">{role}</span> 
              </p> : <p>Login</p>
            }

            <div className="w-[360px] h-16 rounded-2xl bg-black/40 flex items-center px-4 gap-3">
              <div className="w-5 h-5">
                <img src={userIcon} className="w-full h-full" alt="" />
              </div>
              <input placeholder="Email" type="text" className="h-full w-[calc(100%-20px)] bg-transparent outline-none" onChange={e => dispatch(setEmail(e.target.value))} required />
            </div>

            {role &&
              <div className="w-[360px] h-16 rounded-2xl bg-black/40 flex items-center px-4 gap-3">
                <div className="w-5 h-5">
                  <img src={userIcon} className="w-full h-full" alt="" />
                </div>
                <input placeholder="Username" type="text" className="h-full w-[calc(100%-20px)] bg-transparent outline-none" onChange={e => dispatch(setUsername(e.target.value))} required />
              </div>}

            <div className="w-[360px] h-16 rounded-2xl bg-black/40 flex items-center px-4 gap-3">
              <div className="w-5 h-5">
                <img src={passwordIcon} className="w-full h-full" alt="" />
              </div>
              <input placeholder="password" type="password" className="h-full w-[calc(100%-20px)] bg-transparent outline-none" onChange={e => dispatch(setPassword(e.target.value))} required />
            </div>

            <div className="flex items-center gap-4">
              <button className="w-[170px] h-12 rounded-2xl bg-black/40 hover:bg-[#ff0000]"> {role? "Sign Up": "Login"}</button>
              {role==='' && <p className="text-sm">Forgot your password?</p>}
              
            </div>
          </form>
        </div>
        <div className="w-1/2 h-full flex flex-col justify-center items-center gap-16">

          <div className="text-center space-y-5">
            {role ? <p>You  have an account ?</p>
              : <>
                <p>Don't have an account yet?</p>
                <p>Register now - it's free!</p>
              </>}
          </div>

          {role ? <div className="flex flex-col justify-center items-center gap-6">
            <button className="w-[450px]  bg-black/40 hover:bg-[#ff0000] rounded-2xl px-9 py-6 flex items-center gap-5"
              onClick={() => setRoles('')}
            >
              <div className="w-14 h-12">
                <img src={user} className="w-full h-full" alt="" />
              </div>
              <div className="flex flex-col gap-3 items-start">
                <p className="text-lg font-semibold">Login</p>
                <p className="text-[14px]">Keep updated on new profiles in your area!</p>
              </div>
            </button>
          </div> : <div className="flex flex-col justify-center items-center gap-6">

            <button className="w-[450px]  bg-black/40 hover:bg-[#ff0000] rounded-2xl px-9 py-6 flex items-center gap-5"
            onClick={() => setRoles('user')}
            >
              <div className="w-14 h-12">
                <img src={user} className="w-full h-full" alt="" />
              </div>
              <div className="flex flex-col gap-3 items-start">
                <p className="text-lg font-semibold">I am a User</p>
                <p className="text-[14px]">Keep updated on new profiles in your area!</p>
              </div>
            </button>



            <button className="w-[450px]  bg-black/40 hover:bg-[#ff0000] rounded-2xl px-9 py-6 flex items-center gap-5"
              onClick={() => setRoles('advertiser')}
            >
              <div className="w-14 h-12">
                <img src={advertiser} className="w-full h-full" alt="" />
              </div>
              <div className="flex flex-col gap-3 items-start">
                <p className="text-lg font-semibold">I am an Advertiser</p>
                <p className="text-[14px]">List Your Profile Free Now!</p>
              </div>
            </button>
          </div>}

        </div>
      </div>
    </div>
  );
}

export default Auth;
