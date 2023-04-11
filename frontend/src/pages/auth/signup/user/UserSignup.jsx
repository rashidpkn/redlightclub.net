import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import BackendIP from "../../../../BackendIP";
import { setEmail, setPassword, setRole, setToken, setUsername } from "../../../../redux/slice/userSlice";

function UserSignup() {
  const { username, email, password, } = useSelector(state => state.user)
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const Signup = () => {
    axios.post(`${BackendIP}/user/signup`, { username, email, password }).then(res => {
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
          <img src="/image/auth/men.png" className='h-12 w-8' alt="" />
          <span>User Register</span>
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

        <button><Link to={'/register/advertiser'}> Go to new Advertiser Registration </Link></button>

      </form>
      <div className="min-h-full w-full  lg:w-1/2 items-center justify-center hidden lg:flex">

        <div className="flex w-full h-3/4 flex-col mx-20 justify-center items-center">
          <div className="flex flex-col gap-3 text-lg">
            <span>We know you want to!</span>
          </div>
          <div className="w- h-full p-5 mt-10 backdrop-blur-2xl flex divide-x rounded-2xl">
            <img src="/image/auth/userRegister.png" className='w-full h-64' alt="" />
          </div>

        </div>

      </div>
    </div>
  );
}

export default UserSignup;
