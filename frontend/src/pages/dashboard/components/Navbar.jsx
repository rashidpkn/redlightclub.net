
import { useState } from "react";
import DarkModeToggle from "react-dark-mode-toggle";

import NotificationIcon from '../../../asset/icons/navbar/notification.svg'

import EnglishIcon from '../../../asset/icons/navbar/english.png'
import SpanishIcon from '../../../asset/icons/navbar/spanish.png'
import ArabicIcon from '../../../asset/icons/navbar/arabic.png'


import { useDispatch, useSelector } from "react-redux";
import { setIsDarkMode, setRegion } from "../../../redux/slice/utilSlice";
import { useEffect } from "react";
import axios from "axios";
import BackendIP from "../../../BackendIP";


function Navbar() {
  const dispatch = useDispatch()
  const { isDarkMode } = useSelector(state => state.util)
  const [state, setState] = useState(() => isDarkMode)

  useEffect(() => {
    dispatch(setIsDarkMode(state))
    // eslint-disable-next-line
  }, [state])



  return (
    <div className={`w-full h-24    flex items-center justify-end px-[5%] gap-10 drop-shadow-xl ${isDarkMode && 'bg-[#1A1f28] menu-shadow shadow-blue-500'} duration-[1.5s]`}>
      <div className="flex justify-center items-center gap-10  text-[#A5A5A5]">
        <Notifications />
        <DarkModeToggle
          onChange={setState}
          checked={state}
          size={80}
        />
        <Language />
      </div>

      <div className="h-12 w-[2px] bg-[#A5A5A5]/40 rounded-full"></div>

      <Profile />
    </div>
  )
}

export default Navbar


const Profile = () => {
  const { isDarkMode } = useSelector(state => state.util)
  const { username, role } = useSelector(state => state.user)
  return (
    <div className="flex  items-center gap-5">
      <div className="w-12 h-12 bg-[#D8D8D8] rounded-2xl"></div>
      <div className="hidden md:flex flex-col justify-center items-center">
        <p className={`text-base font-bold ${isDarkMode ? 'text-white' : 'text-black'} duration-500 capitalize`}>{username}</p>
        <p className="text-xs font-light text-[#8F8F8F] capitalize">{role}</p>
      </div>
    </div>
  )
}



const Language = () => {
  const { isDarkMode } = useSelector(state => state.util)
  const dispatch = useDispatch()
  const { region } = useSelector(state => state.util)
  return (
    <div className="relative w-36 h-14 border rounded-full flex justify-center items-center pr-5">
      {region === 'UK' && <img src={EnglishIcon} className='w-6 h-6 rounded-full absolute top-4 left-3' alt="" />}
      {region === 'Dubai' && <img src={ArabicIcon} className='w-6 h-6 rounded-full absolute top-4 left-3' alt="" />}
      {region === 'Thailand' && <img src={SpanishIcon} className='w-6 h-6 rounded-full absolute top-4 left-3' alt="" />}
      <select value={region} className={`outline-none   pl-10 hidden md:block bg-transparent font-medium ${isDarkMode ? 'text-white' : 'text-black'}`}
        onChange={e => { dispatch(setRegion(e.target.value)) }}
      >
        <option value="Dubai">Dubai</option>
        <option value="UK">UK</option>
        <option value="Thailand">Thailand</option>
      </select>

    </div>

  )
}


const Notifications = () => {
  const [showNotification, setShowNotification] = useState(false)
  const { isDarkMode } = useSelector(state => state.util)
  const { role } = useSelector(state => state.user)

  useEffect(() => {


  }, [])

  useEffect(() => {
    if (role === 'admin') {

      const fetchBid = setInterval(() => {
        axios.get(`${BackendIP}/notification/admin`).then(res => {
          setNotification(res.data)
        })
      }, 5000);
      return () => clearInterval(fetchBid)
    }

    else {
      axios.get(`${BackendIP}/notification/admin`).then(res => {
        setNotification(res.data)
      })
    }


  }, [role])


  const [notification, setNotification] = useState([])

  // eslint-disable-next-line
  const [viewAllNotification, setViewAllNotification] = useState(true)
  const [insideClick, setInsideClick] = useState(0)
  const [outsideClick, setOutsideClick] = useState(0)
  const [clearall, setClearall] = useState(false)
  useEffect(() => {

    if (outsideClick > insideClick) {
      setShowNotification(false)
      setInsideClick(0)
      setOutsideClick(0)
    }
    // eslint-disable-next-line
  }, [outsideClick])

  return (
    <div className=" relative">
      <img src={NotificationIcon} className='w-6 h-6 z-50 relative cursor-pointer' alt="" onClick={() => { setShowNotification(!showNotification) }} />

      {showNotification && <div className="fixed h-screen w-full bg-black/20 top-0 left-0 z-40" onClick={() => { setOutsideClick(outsideClick + 1) }}>

        <div className="absolute top-20 right-56 w-[400px]  border bg-white rounded-xl overflow-y-scroll sc p-5 space-y-5" onClick={() => { setInsideClick(insideClick + 1) }}>

          <div className="flex justify-between items-center w-full">
            <p className="font-bold text-xl text-black">Notifications</p>
            <button className="font-bold text-sm text-[#A5A5A5]"
            onClick={setClearall}
            
            >Clear All</button>
          </div>

          <div className="space-y-5">
            {
              notification.map(e => <Notification clearall={clearall} key={e.id} {...e} setNotification={setNotification} notification={notification} time='2m' />)
            }


          </div>

          <div className="w-full flex justify-center">
            <button className="w-[330px] h-12 rounded-lg bg-[#F6EEFF] text-[#6418C3] font-bold" onClick={() => { setViewAllNotification(true) }}>View All Notification</button>
          </div>


        </div>

      </div>}


      <div className="h-6 w-6 rounded-full  absolute -top-3 -right-2 overflow-hidden bg-white flex justify-center items-center z-50 cursor-pointer">
        <div className={`h-5 w-5  rounded-full flex justify-center items-center ${isDarkMode ? 'bg-white text-black' : 'bg-red-500 text-white'} `}>{notification.length}</div>
      </div>

    </div>
  )
}


const Notification = ({ type, message, time, setNotification, notification, id,clearall }) => {
  const [deleteNotification, setDeleteNotification] = useState(false)
  useEffect(() => {
    clearall && deleteMessage()
    // eslint-disable-next-line
  }, [clearall])
  
  const deleteMessage = () =>{
    setDeleteNotification(true)
        setTimeout(() => {
          setNotification(notification.filter(e => e.id !== id))
        }, 500);

        axios.post(`${BackendIP}/notification/delete`, { id }).then(
          res => {
            console.log(res.data)
          }
        )
  }
  return (
    <div className={`flex justify-between items-end duration-500 ${deleteNotification && '-translate-x-[400px]'}`}>
      <div className="flex items-center gap-3">
        <div className={`
              ${type === ('newProfile' || 'verify') && 'bg-[#34C38F]'} 
              ${type === 'report' && 'bg-[#FF0000]'} 
              ${type === 'adsExpired' && 'border-2 border-[#FFB800]'} 
              w-11 h-11  rounded-md`}></div>
        <div className="">
          <p className="font-bold text-black">{message}</p>
          <p className="text-sm">{time} ago</p>
        </div>
      </div>
      <button className="text-[#6418C3] font-bold text-sm flex-shrink-0" onClick={deleteMessage}>Mark as read</button>
    </div>
  )
}

