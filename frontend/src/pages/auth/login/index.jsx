import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import BackendIP from "../../../BackendIP";
import { setEmail, setPassword, setRole, setToken, setUsername } from "../../../redux/slice/userSlice";


import banner from '../../../asset/images/signin/banner.png'
import logo from '../../../asset/images/signin/logo.png'

import user from '../../../asset/images/signin/user.png'
import advertiser from '../../../asset/images/signin/advertiser.png'

import userIcon from '../../../asset/images/signin/username-icon.png'
import passwordIcon from '../../../asset/images/signin/password-icon.png'



function Auth() {

  const { email, password } = useSelector(state => state.user)
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
  return (
    // <div
    //   className="lg:h-screen w-full bg-cover bg-no-repeat flex flex-col lg:flex-row text-white"
    //   style={{ backgroundImage: "url('/images/auth/banner.webp')" }}
    // >
    //   <form onSubmit={e => {
    //     e.preventDefault()
    //     Login()
    //   }} className="px-[10%] py-[5%] w-full lg:w-1/2 h-1/2 lg:h-full backdrop-blur-xl space-y-5">
    //     <img src="/images/common/logo-rounded.png" alt="" />
    //     <h1 className="text-2xl font-semibold">Sign In</h1>

    //     <div className="flex flex-col gap-3">
    //       <label htmlFor="">Email Address</label>
    //       <input required onChange={e => dispatch(setEmail(e.target.value))} value={email} className="h-12 w-full lg:w-3/4 rounded-lg text-black pl-2 outline-none" type={"email"} />
    //     </div>

    //     <div className="flex flex-col gap-3">
    //       <label htmlFor="">Password</label>
    //       <input required onChange={e => dispatch(setPassword(e.target.value))} value={password} className="h-12 w-full lg:w-3/4 rounded-lg text-black pl-2 outline-none" type="password" />
    //     </div>

    //     <div className="flex gap-3">
    //       <input type={"checkbox"} />
    //       <label htmlFor="">Remember me</label>
    //     </div>

    //     <div className="flex gap-3 items-center" >
    //       <button type="submit" className="h-12 px-5 bg-red-800 rounded-md">Sign In</button>
    //       <h2 className="text-lg font-medium">Forgot Your Password ?</h2>
    //     </div>

    //   </form>
    //   <div className=" h-1/2 lg:h-full w-full lg:w-1/2 flex items-center justify-center">

    //     <div className="flex w-full h-1/2 flex-col mx-20">
    //       <div className="hidden lg:flex flex-col gap-3 text-lg">
    //         <span className=''>Don't have an account yet?</span>
    //         <span className=''>Register now - it's free!</span>
    //       </div>

    //       <div className="lg:w-full h-72 mt-10 backdrop-blur-2xl flex divide-x rounded-2xl justify-center">

    //         <div className="h-full w-48 lg:w-1/2 flex flex-col items-center justify-center gap-8">
    //           <span className='text-lg'>User</span>
    //           <img src="/image/auth/men.png" className='w-12 h-16' alt="" />
    //           <div className="flex flex-col items-center">
    //             <span>Keep update on</span>
    //             <span>activity in your area!</span>
    //           </div>
    //           <button className='h-10 w-28 bg-white border text-red-700 rounded-xl text-lg' onClick={() => navigate('/register/user')}>Register</button>
    //         </div>

    //         <div className="h-full w-48 lg:w-1/2 flex flex-col items-center justify-center gap-8">
    //           <span className='text-lg'>Advertiser</span>
    //           <img src="/image/auth/women.png" className='w-14 h-14' alt="" />
    //           <div className="flex flex-col items-center">
    //             <span>Get listed for free </span>
    //             <span>today!</span>
    //           </div>
    //           <button className='h-10 w-28 bg-white border text-red-700 rounded-xl text-lg' onClick={() => navigate('/register/advertiser')}>Register</button>
    //         </div>

    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="h-screen w-full relative flex justify-center items-center text-white">
      <img src={banner} className="absolute w-full h-full object-cover" alt="" />
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
              Login()
            }}
            className="space-y-5">
            <p>Login</p>

            <div className="w-[360px] h-16 rounded-2xl bg-black/40 flex items-center px-4 gap-3">
              <div className="w-5 h-5">
                <img src={userIcon} className="w-full h-full" alt="" />
              </div>
              <input placeholder="Username" type="text" className="h-full w-[calc(100%-20px)] bg-transparent outline-none" onChange={e => dispatch(setEmail(e.target.value))} required />
            </div>
            <div className="w-[360px] h-16 rounded-2xl bg-black/40 flex items-center px-4 gap-3">
              <div className="w-5 h-5">
                <img src={passwordIcon} className="w-full h-full" alt="" />
              </div>
              <input placeholder="password" type="password" className="h-full w-[calc(100%-20px)] bg-transparent outline-none" onChange={e => dispatch(setPassword(e.target.value))} required />
            </div>

            <div className="flex items-center gap-4">
              <button className="w-[170px] h-12 rounded-2xl bg-black/40">Login</button>
              <p className="text-sm">Forgot your password?</p>
            </div>
          </form>
        </div>
        <div className="w-1/2 h-full flex flex-col justify-center items-center gap-16">

          <div className="text-center space-y-5">
            <p>Don't have an account yet?</p>
            <p>Register now - it's free!</p>
          </div>

          <div className="flex flex-col justify-center items-center gap-6">
            <Link to={'/register/user'}>
              <button className="w-[450px]  bg-black/40 rounded-2xl px-9 py-6 flex items-center gap-5">
                <div className="w-14 h-12">
                  <img src={user} className="w-full h-full" alt="" />
                </div>
                <div className="flex flex-col gap-3 items-start">
                  <p className="text-lg font-semibold">I am a User</p>
                  <p>Keep update on activity in your area!</p>
                </div>
              </button>
            </Link>

            <Link to={'/register/advertiser'}>
              <button className="w-[450px]  bg-black/40 rounded-2xl px-9 py-6 flex items-center gap-5">
                <div className="w-14 h-12">
                  <img src={advertiser} className="w-full h-full" alt="" />
                </div>
                <div className="flex flex-col gap-3 items-start">
                  <p className="text-lg font-semibold">I am an Advertiser</p>
                  <p>Get listed for free today!</p>
                </div>
              </button>
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
