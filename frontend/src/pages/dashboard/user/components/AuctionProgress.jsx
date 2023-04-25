import { Add, Close, Remove } from '@mui/icons-material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import BackendIP from '../../../../BackendIP'

import diamondIcon from '../../../../asset/icons/dashboard/profile/diamond.svg'
import UpArrow from '../../../../asset/icons/dashboard/auction/upArrow.png'
import popup from '../../../../asset/images/dashboard/user/onlyfans.gif'

function AuctionProgress() {
    const [bidPosition, setBidPosition] = useState([])
    const fetchData = async () => {
        const data = (await axios.get(`${BackendIP}/bid`)).data
        setBidPosition(data)
    }
    useEffect(() => {
        const fetchBid = setInterval(() => {
            fetchData()
        }, 3000);

        return () => clearInterval(fetchBid)

    }, [])
    return (
        <div className=' space-y-5'>
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                {
                    bidPosition.map(e => e.tier === 'platinum' && <Card e={e} key={e.id} {...e} fetchData={fetchData} bid={e?.bid?.sort((a,b)=>b.amount - a.amount)}/>)
                }
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                {
                    bidPosition.map(e => e.tier === 'gold' && <Card e={e} key={e.id} {...e} fetchData={fetchData} bid={e?.bid?.sort((a,b)=>b.amount - a.amount)}/>)
                }
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                {
                    bidPosition.map(e => e.tier === 'silver' && <Card e={e} key={e.id} {...e} fetchData={fetchData} bid={e?.bid?.sort((a,b)=>b.amount - a.amount)}/>)
                }
            </div>


        </div>
    )
}

export default AuctionProgress


const Card = ({ tier, largestBidAmount, position, status, bid, e, fetchData }) => {

    const [insideClick, setInsideClick] = useState(0)
    const [outsideClick, setOutsideClick] = useState(0)
    useEffect(() => {
  
      if (outsideClick > insideClick) {
        setMakeOffer(false)
        setInsideClick(0)
        setOutsideClick(0)
      }
      // eslint-disable-next-line
    }, [outsideClick])

    const { username } = useSelector(state => state.user)
    const [makeOffer, setMakeOffer] = useState(false)
    const [amount, setAmount] = useState(largestBidAmount + 10)
    const [effect, setEffect] = useState(false)
    
    return (
        <>
            <div className={`${status === 'close' && 'opacity-70'} w-[170px] h-56 bg-white rounded-lg flex flex-col justify-center items-center gap-3 hover:shadow-xl`}>


                {
                    status === 'open' ?
                        (bid?.find(e => e.username === username) ? (bid?.find(e => e.username === username && e.amount === largestBidAmount) ? <p className='text-xs font-bold text-[#34C38F]'>You are winning</p> : <p className='text-xs font-bold text-[#D80027]'>You are losing</p>) : <p className='text-xs font-bold'>Make an offer</p>)
                        :
                        (bid?.find(e => e.username === username) ? (bid?.find(e => e.username === username && e.amount === largestBidAmount) ? <p className='text-xs font-bold text-[#34C38F]'>You Won This Auction &#128515;</p> : <p className='text-xs font-bold text-[#D80027]'>You are loss &#128542;</p>) : <p className='text-xs font-bold'>Auction Closed</p>)
                }



                <div className={`w-8 h-8 rounded-lg flex justify-center items-center
                    ${tier === 'platinum' && 'bg-[#0062F4]'}  
                    ${tier === 'gold' && 'bg-[#F4B000]'}
                    ${tier === 'silver' && 'bg-[#A63200]'}
                    `}>
                    <img src={diamondIcon} className='' alt="" />
                </div>
                <div className={`
                    space-y-1 text-center font-bold text-xs
                    ${tier === 'platinum' && 'text-[#0062F4]'}  
                    ${tier === 'gold' && 'text-[#F4B000]'}
                    ${tier === 'silver' && 'text-[#A63200]'}
                    `}>
                    <p>AED {largestBidAmount}</p>
                    <p >{tier.toUpperCase()}</p>
                </div>
                {status==='open'?
                <p className='text-xs text-[#A5A5A5]'>Bid on {position} is  started </p>
                :<p className='text-xs text-[#A5A5A5]'>This Auction Is Finished</p>
            }
                {
                    status === 'open'
                        ?
                        <button className='w-[137px] h-6 rounded-md bg-[#6418C3] text-xs font-bold text-white' onClick={setMakeOffer}>Make Offer</button>
                        :
                        <button className='w-[137px] h-6 rounded-md bg-[#6418C3] text-xs font-bold text-white'
                            onClick={() => {
                                window.alert('we will notify when the bid is start')
                            }}

                        >Notify Me When Live</button>
                }

                <p className='text-xs text-[#6418C3]'>
                    {status === 'open' ? 'Finishes in 1 Day' : 'Finishes in 0m'}
                </p>
            </div>
            {
                makeOffer &&
                <div onClick={()=>{setOutsideClick(outsideClick+1)}}
                className={`
                    h-screen w-full fixed top-0 left-0 bg-black/10 flex justify-center items-center z-50
                    

                `}
                
                >
                    <div
                    onClick={()=>{setInsideClick(insideClick+1)}} 
                    onAnimationEnd={()=>{setEffect(false)}}
                    className={`
                    w-[600px] bg-white rounded-lg p-5 space-y-5
                    ${effect && 'animate-cardSwing'}

                    ${bid?.find(e => e.username === username) && (bid?.find(e => e.username === username && e.amount === largestBidAmount) ? 'border-[#34C38F] border-8 ' : 'border-[#D80027] border-8')}
                    `}>
                        <div className="flex justify-end">
                            <Close className='cursor-pointer' onClick={() => setMakeOffer(false)} />
                        </div>
                        <div className="flex justify-between gap-5">
                            <div className="w-1/2  space-y-5">
                                <div className="flex gap-5 items-center">
                                    <div className={`
                                    w-10 h-10 rounded-xl flex justify-center items-center
                                    ${tier === 'platinum' && 'bg-[#0062F4]'}  
                                    ${tier === 'gold' && 'bg-[#F4B000]'}
                                    ${tier === 'silver' && 'bg-[#A63200]'}
                                    `}>
                                        <img src={diamondIcon} alt="" />
                                    </div>
                                    <div className="">
                                        <p className='text-2xl font-bold capitalize'>{tier}</p>
                                        <p className='text-xs '>Position {position}</p>
                                    </div>
                                </div>

                                <div className="w-[250px] flex justify-between items-center">
                                    <p className='text-xs'>Current <br /> Bid amount</p>
                                    <div className="flex justify-center items-center gap-3">
                                        <div className="text-end text-xs">
                                            <p className='font-bold text-lg'>{largestBidAmount}</p>
                                            <p>AED</p>
                                        </div>
                                        <div className="h-8 w-8">
                                            <img src={UpArrow} alt="" />
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full">
                                    <div className="h-2 w-full rounded-full bg-[#F6EEFF]">
                                        <div className="h-full w-[75%] rounded-full bg-[#6418C3] duration-500" />
                                    </div>
                                    <div className="flex justify-between items-center text-xs font-bold text-[#A5A5A5]">
                                        <p>{status === 'open' ? 'Close in' : 'Closed'}</p>
                                        <p>{status === 'open' ? '51m' : '0 mins'}</p>
                                    </div>

                                </div>

                                <p>Enter you bid</p>

                                <div className="flex justify-between items-center gap-3">

                                    <button className='h-14 w-14 border rounded-xl' onClick={() => { amount > largestBidAmount + 10 && setAmount(amount - 10) }}>
                                        <Remove />
                                    </button>

                                    <input className='h-14 w-3/6 border rounded-xl text-center' type="text" value={amount} />

                                    <button className='h-14 w-14 border rounded-xl' onClick={() => { setAmount(amount + 10) }}>
                                        <Add />
                                    </button>




                                </div>

                                <button className='w-full h-12 bg-[#34C38F] rounded-xl text-xs font-bold text-white'
                                    onClick={() => {
                                        if (amount > largestBidAmount) {

                                            axios.post(`${BackendIP}/bid/auction`, { amount, username, ...e })
                                            fetchData()
                                            // setMakeOffer(false)
                                            setEffect(true)

                                        } else {
                                            window.alert("Amount must be greater than Largest Amount")
                                        }
                                    }}
                                >Place a Bid</button>

                            </div>
                            <div className="w-1/2  rounded-xl bg-[#F6EEFF] p-5 space-y-5 overflow-scroll sc">
                                <p className='text-sm font-bold text-center'>Live Bidding</p>
                                {bid?.find(e => e.username === username) && (bid?.find(e => e.username === username && e.amount === largestBidAmount) ?
                                    <div className='flex justify-center items-center'>
                                        <img src={popup} className='h-7 w-7' alt="" />
                                        <p className='text-center text-xs text-[#34C38F]'>Wow! You are Winning</p>
                                    </div> : <p className='text-center text-xs text-[#D80027]'>Sorry! You are loosing</p>)}
                                {bid?.slice(0,4).map((e, index) =>
                                    <div className='flex justify-between items-center'>
                                        <div className="flex gap-2 items-center">
                                            <div className="w-9 h-9 rounded-lg bg-[#0062F4] flex justify-center items-center text-white">{index + 1}</div>
                                            <p className='text-xs font-bold capitalize'>{e.username[0]} {e.username.split('').map(e => '*')}</p>
                                        </div>
                                        <p className='text-xs font-bold'>AED {e.amount}</p>
                                    </div>
                                )}
                            </div>

                        </div>
                        <p className='text-center text-xs'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, nihil modi doloribus iusto animi tenetur quisquam distinctio dolore cum. Mollitia in ad officia, fugit molestias natus culpa alias accusamus! Nostrum?</p>
                        <p className='text-center text-xs'>Terms and conditions</p>
                    </div>
                </div>
            }

        </>
    )
}