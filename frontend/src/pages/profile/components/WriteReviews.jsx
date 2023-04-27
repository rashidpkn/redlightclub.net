import { Close } from '@mui/icons-material'
import axios from 'axios'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import BackendIP from '../../../BackendIP'
import { Rating } from '@mui/material'

function WriteReviews({setWriteReview ,ads}) {
    const [review, setReview] = useState({
        title:'',
        desc:'',
        rating:3
    })
    

    const {username} = useSelector(state=>state.user)
    return (
        <div className="fixed inset-0 m-auto h-[500px] w-[600px] border bg-white z-50 rounded-xl p-5">
            <div className="w-full h-1/5 flex items-center justify-between text-xl border-b">
                <span>Write Your Reviews</span>
                <Close onClick={()=>{setWriteReview(false)}} />
            </div>

            <div className="flex justify-center items-center gap-5 mt-5">
                <p className=''>Your Rating : </p> <Rating value={review.rating} onChange={(e,newValue)=>{
                    setReview({...review,rating:newValue})
                    
                }} />
            </div>

            <div className="w-full h-3/5 flex flex-col gap-5 mt-5">
                <input    onChange={e=>{setReview({...review,title:e.target.value})}} type="text" className="h-10 w-full border px-2 outline-none rounded-lg capitalize" placeholder="Review Title" />
                <textarea onChange={e=>{setReview({...review,desc :e.target.value})}} className="w-full h-[calc(100%-4rem)] border outline-none rounded-lg p-2 " placeholder="Review Description" />
            </div>
            <div className="w-full h-1/5 ">
                <button className="border px-3 py-1 float-right rounded-lg border-[#e8b7e5]" onClick={()=>{
                    axios.post(`${BackendIP}/ads/write-review`,{id:ads.id,username,...review}).then(res=>{
                        setWriteReview(false)
                        window.alert('Your ads is Published')
                    }).catch(err=>{
                        window.alert(err.message)
                    })
                }}>Submit</button>
            </div>
        </div>
    )
}

export default WriteReviews