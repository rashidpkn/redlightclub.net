import { AddComment } from '@mui/icons-material'
import { Rating } from '@mui/material'
import React, { useState } from 'react'
import Login from './Login'
import WriteReviews from './WriteReviews'
import { useEffect } from 'react'

function Review({ads}) {
    const [writeReview, setWriteReview] = useState(false)
    const {review} = ads
    const [rating, setRating] = useState(0)
    useEffect(() => {
      let rate = 0
      // eslint-disable-next-line
        review?.map(e=>{
            rate = rate + e.rating
        })
        
        setRating(Math.round(rate/review?.length))
    }, [review])
    
    return (
        <div className=" w-full lg:w-1/2 space-y-5 flex flex-col items-center">

            

            <div className=" w-full lg:w-[90%]  rounded-3xl bg-white p-3 flex flex-col gap-2 items-center">
                <p className='text-xl font-medium'>Reviews</p>
                <div className="w-full lg:w-[60%] h-12 rounded-full bg-[#513968] flex justify-center items-center text-white gap-3">
                    <Rating value={rating} readOnly />
                    <p>3 out of 5 </p>
                    <AddComment className='text-white' onClick={() => { setWriteReview(true) }} />
                </div>
                <div className="w-full space-y-3 p-[5%]">

                        <Reviews title={'Service'} percent={50} />
                        <Reviews title={'Communication'} percent={20} />
                        <Reviews title={'Availabilility'} percent={70} />
                        <Reviews title={'Overall'} percent={46} />
                    
                </div>
                {
                    writeReview  && (localStorage.token ? <WriteReviews ads={ads} setWriteReview={setWriteReview} /> : <Login setClose={setWriteReview}/> )
                }


            </div>

            <div className="max-h-[400px] lg:h-[400px] w-full overflow-y-scroll">
                {
                    ads?.review?.map(e=><Rev name={e.username} rating={e.rating} title={e.title} desc={e.desc}  />)
                }
                {/* <Rev 
                    name={'Rashid'}                
                    rating={3}
                    title={'Good Job'}
                    review={'Somthing new '}
                /> */}
            </div>
        </div>
    )
}

export default Review


const Reviews = ({percent,title}) => <div className="w-full  h-[20px] flex items-center justify-between">
    <span className="text-base font-medium">{title}</span>
    <div className="w-[60%]  h-full bg-[#FAC1EA] rounded-[20px] flex justify-between items-center overflow-hidden"><div style={{width:`${percent}%`}} className={`h-full rounded-[20px] bg-[#513968]`}>
    </div>
        <span className="text-white">{percent}%</span>
    </div>
</div>


function Rev({ name,rating,desc,title }) {
    return (
        <div className="w-full lg:w-[445px] h-[132px] relative text-white">
            <img src="/images/common/comment-box.png" className='h-full w-full' alt="" />
            <h3 className='absolute left-[84px] top-[10px] text-sm font-medium '>{name}</h3>
            <h3 className='absolute left-[84px] top-[35px] text-base font-medium'>{title}</h3>
            <p className='absolute left-[84px] top-[55px] w-[347px] h-[60px] overflow-y-scroll sc text-xs'>{desc}</p>
            <div className="absolute top-[10px] right-[30px]">
                <Rating readOnly value={rating} />
            </div>
        </div>
    )
}