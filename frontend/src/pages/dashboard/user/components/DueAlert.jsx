import axios from 'axios'
import dueImage from '../../../../asset/images/dashboard/user/due.png'
import BackendIP from '../../../../BackendIP'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import DiamondIcon from '../../../../asset/icons/dashboard/profile/diamond.svg'


const DueAlert = ({ dueAmount, username,bid }) => {
  const [step, setStep] = useState(1)
  const [ads, setAds] = useState([])
  const clearDue = () => {
    axios.post(`${BackendIP}/user/clear-due`, { username }).then(res => {
    setStep(2)
    })
  }
  useEffect(() => {
    
    axios.get(`${BackendIP}/ads/get-user-ads`, { params: { username } }).then(res => {
      setAds(res.data)
  })
  // eslint-disable-next-line
  }, [])

  const [selectedAds, setSelectedAds] = useState({})
  const [selectedBid, setSelectedBid] = useState({})
  const navigate = useNavigate()

  return (
    <div className="fixed top-0 left-0 z-50 h-screen w-full bg-black/30 flex justify-center items-center p-3">
      {
        step === 1 && <div className="max-w-[1114px] w-full  bg-red-800 p-5 flex flex-col justify-center items-center gap-5 text-white text-center rounded-xl">
          <p className='text-xl font-bold'>Looks like you have a Bid Payment Due!</p>
          <img src={dueImage} className='h-64' alt="" />
          <p className='text-sm'>You may have not completed the payment for the bid on 12/04/2023 for the Platinum Position 1. <br />
            Please ensure to complete payment to access the website.</p>
          <p className='font-bold'>Balance Due : {dueAmount} AED </p>
          <button className='px-4 py-3 bg-[#34C38F] rounded-xl' onClick={clearDue}>Complete payment</button>
          <p className='text-xs'>*if you belive this is a mistake or for any other assistance please contact our customer service</p>

        </div>
      }
      {
        step === 2 && <div className="max-w-[1114px] w-full p-5 flex flex-col justify-center items-center gap-5 text-black text-center rounded-xl bg-[#F5F5F5]">
            <p className='font-bold'>Choose Profile</p>
            <p>Choose profile to be displayed on the bid position that you have won</p>
            <div className="flex gap-4 justify-center items-center flex-wrap">
              {ads.map(e=><div className={`${selectedAds === e && 'border-2 border-[#6418C3]'} w-[176px] py-3 rounded-xl bg-white flex flex-col gap-1 justify-center items-center`} onClick={()=>setSelectedAds(e)}>
                  <img src={e.profilePhoto} className="w-[160px] h-[145px] rounded-lg" alt='' />
                  <p className='text-sm font-bold'>{e.adsTitle}</p>
                  {e.visibility ? <p className='text-[#38E25D] text-[8px] font-bold'>Active</p> : <p className='text-[#E11700] text-[8px] font-bold'>Inactive</p>}
                  
              </div>)}
            </div>
            <button className='px-10 py-3 rounded-xl bg-[#34C38F] text-white' onClick={()=>{setStep(3)}}>Continue</button>
        </div>
      }
      {
        step === 3 && <div className="max-w-[1114px] w-full p-5 flex flex-col justify-center items-center gap-5 text-black text-center rounded-xl bg-[#F5F5F5]">
          <p className='font-bold'>Choose Position</p>
            <p>Choose Position to be displayed the profile on website <br /> Start Bidding to own more Position</p>
            <div className="flex gap-4 justify-center items-center flex-wrap">
              {bid.map(e=><div className={`${selectedBid === e && 'border-2 border-[#6418C3]'} w-[200px] rounded-xl bg-white  p-3 flex justify-center items-center gap-3`} onClick={()=>setSelectedBid(e)}>
                  <div className={`w-10 h-10 rounded-lg flex justify-center items-center
                  ${e.tier === 'platinum' && 'bg-[#0062F4]'}
                  ${e.tier === 'gold' && 'bg-[#F4B000]'}
                  ${e.tier === 'silver' && 'bg-[#A63200]'}
                  `}>
                    <img src={DiamondIcon} alt="" />
                  </div>
                  <div className="flex flex-col items-start">
                    <p className='text-2xl font-bold capitalize'>{e.tier}</p>
                    <p className='text-xs text-[#A5A5A5]'>Position {e.position}</p>
                  </div>
              </div>)}
            </div>
            <button className='px-10 py-3 rounded-xl bg-[#34C38F] text-white' onClick={()=>{setStep(4)}}>Continue</button>
        </div>
      }

{
        step === 4 && <div className="max-w-[1114px] w-full p-5 flex flex-col justify-center items-center gap-5 text-black text-center rounded-xl bg-[#F5F5F5]">
          <p className='font-bold'>Choose Confirm</p>
            <p>Note: This Position will be locked for this profile and cannot be changed after confirmation</p>
            <div className="flex gap-4 justify-center items-center flex-wrap">
            <div className={`border-2 py-3
            ${selectedBid.tier === 'platinum' && 'border-[#0062F4]'}
            ${selectedBid.tier === 'gold' && 'border-[#F4B000]'}
            ${selectedBid.tier === 'silver' && 'border-[#A63200]'}
             w-[176px] rounded-xl bg-white  flex flex-col gap-1 justify-center items-center`}>
              <div className="w-[160px] h-[145px] relative">
                 <img src={selectedAds.profilePhoto} className="w-full h-full rounded-lg object-cover object-top" alt='' />
                <div className={`absolute bottom-0 w-full h-[43px] rounded-b-lg p-5 flex justify-between items-center text-white
                 ${selectedBid.tier === 'platinum' && 'bg-[#0062F4]'}
                 ${selectedBid.tier === 'gold' && 'bg-[#F4B000]'}
                 ${selectedBid.tier === 'silver' && 'bg-[#A63200]'}
                
                `}>
                  <img src={DiamondIcon} alt="" />
                  <p className='text-sm font-bold capitalize'>{selectedBid.tier}</p>
                  <p className='text-[10px]'>{selectedBid.position}</p>
                </div>
              </div>
                  <p className='text-sm font-bold'>{selectedAds.adsTitle}</p>
                  <p className='text-[#6418C3] text-[8px] font-bold'>Expired in 7 Days</p>

             </div>
            </div>
            <button className='px-10 py-3 rounded-xl bg-[#34C38F] text-white' onClick={()=>{
              axios.post(`${BackendIP}/bid/assign`,{username,...selectedBid,adsTitle:selectedAds.adsTitle}).then(res=>{
                if(res.data){
                    navigate('/filter')
                }
              })
            }}

            >Continue</button>
        </div>
      }

    </div>
  )
}

export default DueAlert