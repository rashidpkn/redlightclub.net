import { Email, LocalPhone, MenuOutlined } from "@mui/icons-material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import BackendIP from "../../BackendIP";
import { setToken } from "../../redux/slice/userSlice";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false)
  const { token } = useSelector((state) => state.user);
  const dispatch = useDispatch()
  const [adsTitle, setAdsTitle] = useState('')
  const [data, setData] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    axios.get(`${BackendIP}/ads/get-all-ads`).then(res=>{
      setData(res.data)
    })
  }, [])
  
  return (
    <div className=" text-white">
      <nav className="hidden lg:flex h-24 w-full justify-between px-[10%] absolute top-0 z-50">
        <ul className="flex gap-10 h-full justify-center items-center text-md">
          <li className="">
            <Link to={"/"}> Home </Link>
          </li>
          <li className="">
            <Link to={"/about"}> About </Link>
          </li>
          <li className="">
            <Link to={"/faq"}> FAQ </Link>
          </li>
        </ul>
        <div className="flex justify-center items-center gap-5">
          <input
          onChange={e=>{
            setAdsTitle(e.target.value)
          }}
            className="h-10 w-52 bg-transparent border  outline-none pl-3 placeholder:text-white placeholder:text-xs flex items-center capitalize"
            type="text"
            name=""
            placeholder="Search"
            id=""
          />
          <button 
          onClick={()=>{
            const profile = data.find(e=>
              e.adsTitle.toLowerCase()?.includes(adsTitle.toLowerCase())
              )
              if(profile){
                navigate(`/profile/${profile?.id}`)
              }else window.alert('Profile not found')
          }}
          className="h-10 px-3 text-white  ">
            Search
          </button>
          {token ? (
            <button className="h-10 px-3 text-white " onClick={() => { dispatch(setToken(undefined)); sessionStorage.clear() }}>
              Log Out
            </button>
          ) : (
            <Link to={"/auth"}>
              <button className="h-10 px-3 text-white ">
                Log In
              </button>
            </Link>
          )}
          <Link to={"/auth"}>
            <button className="h-10 px-3 text-white border border-white">
              Place Ads
            </button>
          </Link>
        </div>
      </nav>
      <nav className='bg-[#010313] h-20 w-full flex lg:hidden justify-between items-center px-5'>
        <MenuOutlined className='cursor-pointer' onClick={() => setShowMenu(!showMenu)} />
        <a href="https://my-thread.co.uk">
          <img src="/image/common/logo.svg" width={100} alt="" />
        </a>

        <div className="flex gap-3">
          <LocalPhone />
          <Email />
        </div>
      </nav>
      {
        showMenu && <ul className="flex lg:hidden flex-col w-full p-2 gap-3 ">
          <li className='cursor-pointer' onClick={()=>{setShowMenu(false)}}><Link to={'/'}> Home </Link></li>
          <li className='cursor-pointer' onClick={()=>{setShowMenu(false)}}><Link to={'/about'}> About </Link></li>
          <li className='cursor-pointer' onClick={()=>{setShowMenu(false)}}><Link to={'/faq'}> FAQ </Link></li>
          <li className='cursor-pointer' onClick={()=>{setShowMenu(false)}}><Link to={'/auth'}> Login </Link></li>
          <li className='cursor-pointer' onClick={()=>{setShowMenu(false)}}><Link to={'/new-ads'}> Place Ads </Link></li>
        </ul>
      }

    </div>
  );
}

export default Navbar;
