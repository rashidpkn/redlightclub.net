import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setAdsTitle, setInto, setPhone } from '../../../redux/slice/adsSlice'
import { setDisableNext, setError } from '../../../redux/slice/utilSlice'
import Country from '../components/Country'

function Q1() {
  const { adsTitle, phone, intro } = useSelector(state => state.ads)
  const { code, number } = phone

  useEffect(() => {
    if(adsTitle && phone && intro){
      dispatch(setError(""))
        dispatch(setDisableNext(false))
    }else{
      dispatch(setError("Please Provide Title, Phone No and introduction"))
    }
// eslint-disable-next-line
  }, [adsTitle,phone,intro])
  
  const dispatch = useDispatch()
  return (
    <div className='flex flex-col justify-center items-center gap-10 h-full'>

      <div className="Ads flex flex-col">
        <label htmlFor="Ads">Ads Title</label>
        <input value={adsTitle} onChange={e => dispatch(setAdsTitle(e.target.value))} placeholder="Stacy" id="Ads" className="h-10 w-80 md:w-64 bg-transparent border-b outline-none" type="text" />
      </div>

      <div className="Phone flex flex-col items-start">
        <label htmlFor="Phone">Phone No</label>
        <div className="flex gap-3  justify-start ">
          <select value={code} onChange={e => dispatch(setPhone({ type: 'code', value: e.target.value }))} name="" id="" className="h-10 w-24  bg-transparent border-b outline-none ">
            <Country />
          </select>
          <input value={number} onChange={e => dispatch(setPhone({ type: 'number', value: e.target.value }))} placeholder="9632587569" id="Phone" className="h-10 w-56 md:w-40 bg-transparent border-b outline-none" type="text" />
        </div>
      </div>

      <div className="introduction flex flex-col">
        <label htmlFor="introduction">Introduction</label>
        <textarea
          value={intro}
          onChange={e => dispatch(setInto(e.target.value))}
          placeholder={`I’m Stacy, born on 14 April 1998, brought up and raised in a well-to-do Christian family who is fair and tall.  I’ve completed my qualification at the Moscow state university, Russia in interior designing.  As I had a keen interest in the modelling career  I luckily had received opportunities to endorse various brands and have done various commercials ads as well where  I was one amongst to walk on the ramp for Louis Vuitton in 2018.`}
          cols="10" id="introduction" className="h-36 w-80 md:w-64 bg-transparent border-b outline-none text-justify" type="text" />
      </div>

    </div>
  )
}

export default Q1