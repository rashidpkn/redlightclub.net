import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import BackendIP from "../../../../BackendIP";
import { setEmail, setPassword, setRole, setToken, setUsername } from "../../../../redux/slice/userSlice";

function AdvertiserSignup() {
  const { username, email, password, } = useSelector(state => state.user)
  const dispatch = useDispatch()

  const navigate = useNavigate()
  const Signup = () => {
    axios.post(`${BackendIP}/user/signup`, { username, email, password, role: 'advertiser' }).then(res => {
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
    <div
      className="lg:h-screen w-full bg-cover bg-no-repeat flex flex-col lg:flex-row text-white"
      style={{ backgroundImage: "url('/images/auth/banner.webp')" }}
    >
      <form onSubmit={e => { e.preventDefault(); Signup() }}
        className="px-[10%] py-[5%] w-full lg:w-1/2 h-1/2 lg:h-full backdrop-blur-xl space-y-5 relative">
        <div className="absolute top-3 right-0 flex flex-col items-center gap-3">
          <img src="/image/auth/women.png" className='h-12 w-12' alt="" />
          <span>Advertiser Register</span>
        </div>
        <img src="/images/common/logo-rounded.png" alt="" />
        <h1 className="text-2xl font-semibold">Register now , It's free!</h1>

        <div className="flex flex-col gap-3">
          <label htmlFor="">Username</label>
          <input
            value={username}
            onChange={e => dispatch(setUsername(e.target.value))}
            className="h-12 w-full lg:w-3/4 rounded-lg text-black pl-2 outline-none"
            type="text"
          />
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="">Email Address</label>
          <input
            value={email}
            onChange={e => dispatch(setEmail(e.target.value))}
            className="h-12 w-full lg:w-3/4 rounded-lg text-black pl-2 outline-none"
            type="text"
          />
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="">Password</label>
          <input
            value={password}
            onChange={e => dispatch(setPassword(e.target.value))}
            className="h-12 w-full lg:w-3/4 rounded-lg text-black pl-2 outline-none"
            type="text"
          />
        </div>

        <div className="flex gap-3">
          <input type={"checkbox"} />
          <label htmlFor="">I accept the Terms and Conditons of use</label>
        </div>

        <div className="flex gap-3 items-center">
          <button className="h-12 px-5 bg-red-800 rounded-md" type="submit">Register</button>
          <h2 className="text-lg font-medium"><Link to={'/auth'}> Already a user? Sign In </Link></h2>
        </div>

        <button><Link to={'/register/user'}> Go to new User Registration </Link></button>

      </form>
      <div className="min-h-full w-1/2 hidden lg:flex items-center ">
        <div className="flex w-full h-full flex-col ">
          <div className="w-full h-full  backdrop-blur-2xl flex divide-x  justify-center items-center">
            {/* <img src="/image/auth/banner2.png" className='w-full h-full' alt="" /> */}
            <img src="/image/auth/auth.png" className='w-[506px] h-[760px]' alt="" />
          </div>

        </div>

      </div>
    </div>
  );
}

export default AdvertiserSignup;
