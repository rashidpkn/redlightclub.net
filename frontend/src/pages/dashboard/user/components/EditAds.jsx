import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import BackendIP from '../../../../BackendIP'

import Buttons from './Buttons'

function EditAds() {
  const { id } = useSelector(state => state.util.dashboard)
  const [edit, setEdit] = useState({})
  const [ads, setAds] = useState({})

  useEffect(() => {

    axios.get(`${BackendIP}/ads/get-by-id`, { params: { id } }).then(res => {
      setAds(res.data)
    })
  }, [id])
  
  return (
    <div className='h-full w-full space-y-5'>
      <h1 className='text-2xl font-bold'>Edit</h1>
      <Buttons />
      <div className="flex gap-5 flex-wrap">
          <MainInput title={'Ads Title'} part='adsTitle' ads={ads} edit={edit} setEdit={setEdit} />
          <MainInput title={'Introduction'} part='intro' ads={ads} edit={edit} setEdit={setEdit} />
          <SelectInput title={'Eye'} part='eye' ads={ads} edit={edit} setEdit={setEdit} options={["black",'brown','grey']}/>
          <SelectInput title={'Hair'} part='hair' ads={ads} edit={edit} setEdit={setEdit} options={["black",'brown','grey']}/>
          <SelectInput title={'Language'} part='language' ads={ads} edit={edit} setEdit={setEdit} options={["English","Hindi","Spanish","Arabic"]}/>
          <button className='fixed bottom-5 right-5 border bg-red-500 px-3 py-2 rounded-lg text-white'>Submit your edit</button>
      </div>
    </div>
  )
}

export default EditAds

const MainInput = ({title,part,ads, edit, setEdit }) => {
  return(

    <div className="space-x-3">
    <label htmlFor="">{title}</label>
    <input type="text" className='h-12 w-56 border outline-none pl-3' placeholder={ads[part]} onChange={e => { setEdit({ ...edit, [part]: e.target.value }) }} />
    
  </div>
    )
}

const SelectInput = ({title,part,ads, edit, setEdit,options }) => {
  return(

    <div className="space-x-3">
    <label htmlFor="">{title}</label>
    <select type="text" className='h-12 w-56 border outline-none pl-3' placeholder={ads[part]} onChange={e => { setEdit({ ...edit, [part]: e.target.value }) }} >
      <option>{ads[part]}</option>
      {options.map(e=><option value={e}>{e}</option>)}
      </select>
  </div>
    )
}