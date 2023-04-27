import axios from 'axios'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import BackendIP from '../../../BackendIP'
import Login from './Login'

function Question({ads}) {
    const [question, setQuestion] = useState('')
    const [showLogin, setShowLogin] = useState(false)
    const {username} = useSelector(state=>state.user)
    return (
        <div className=" w-full lg:w-1/2 flex flex-col space-y-5">
            <div className="flex justify-center">
                <form
                onSubmit={e=>{
                    e.preventDefault()
                    if(localStorage.token){
                        axios.post(`${BackendIP}/ads/ask-question`,{id:ads.id,username,question}).then(res=>{
                            window.alert("Yor are asked a question Please wait for replay")
                        }).catch(err=>{
                            window.alert(err.message)
                        })
                    }else{
                        setShowLogin(true)
                    }
                }}
                 className="w-full lg:w-[622px] flex justify-center relative">
                    <input value={question} onChange={e=>setQuestion(e.target.value)} type="text" className="w-full lg:w-[571px] h-[45px] rounded-[10px] bg-[#CA9ED2] outline-none border-[#513968] border pl-[25px] text-white placeholder:text-white" placeholder="Ask me a question !" />
                    {
                        question && <button type='submit' className="absolute right-10 inset-y-2 my-0 text-white border duration-200 hover:border-2 h-[30px] px-3 border-[#513968] rounded-lg">Submit</button>
                    }
                </form>
            </div>
            <span className="text-white text-xl  font-medium ">Questions</span>
            <div className="max-h-[400px] lg:h-[400px] overflow-y-scroll">
                {
                    ads?.qna?.map(e=><QNA username={e.username} question={e.question} answer={e.answer} ads={ads} />)
                }
                
                
            </div>
            {
                showLogin && <Login setClose={setShowLogin}/>
            }
        </div>
    )
}

export default Question



function QNA({question,answer,username,ads}) {
    return (
        <div className=" h-[186px] flex-shrink-0 relative">
                <img src="/images/common/qna.png" className='w-full h-full' alt="" />
                <span className='absolute top-[19px] left-[84px] text-sm font-medium'>{username}</span>
                <p className='absolute top-[40px] left-[84px] text-xs '>{question}</p>
                <span className='absolute top-[114px] left-[131px] text-sm font-medium'>{ads?.adsTitle}</span>
                <p className='absolute top-[135px] left-[131px] text-xs '>{answer}</p>
                <div className="profile photo absolute h-12 w-12 rounded-full  -right-5 top-[80px] overflow-hidden">
                    <img src={`${BackendIP}${ads.profilePhoto}`} alt="profile" className='h-12 w-12'/>
                </div>
        </div>
    )
}