import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setEye, setHair, setMesurement } from '../../../redux/slice/adsSlice'
import { setDisableNext, setError } from '../../../redux/slice/utilSlice'

function Q3() {
    const dispatch = useDispatch()
    const { eye, hair, measurement } = useSelector(state => state.ads)
    const { bust, waist, hip } = measurement

    useEffect(() => {
        if(eye && hair && measurement){
          dispatch(setError(""))
            dispatch(setDisableNext(false))
        }else{
          dispatch(setError("Please Provide eye ,hair and measurement"))
        }
    // eslint-disable-next-line
      }, [eye, hair, measurement])

    return (
        <div className='flex flex-col justify-center items-center gap-10 h-full'>
            <div className="Eye flex flex-col">
                <label htmlFor="Eye">Eye Color</label>
                <select value={eye} onChange={e => { dispatch(setEye(e.target.value)) }} placeholder='Black' id='Eye' className='h-10 w-80 md:w-64 bg-transparent border-b outline-none' type="text" >
                    <option className='text-black' value="">Select Your Eye color</option>
                    <option className='text-black' value="Brown">Brown</option>
                    <option className='text-black' value="Blue">Blue</option>
                    <option className='text-black' value="Hazel">Hazel</option>
                    <option className='text-black' value="Amber">Amber</option>
                    <option className='text-black' value="Green">Green</option>
                    <option className='text-black' value="Gray">Gray</option>
                </select>
            </div>
            <div className="Hair flex flex-col">
                <label htmlFor="Hair">Hair Color</label>
                <select value={hair} onChange={e => { dispatch(setHair(e.target.value)) }} placeholder='Brown' id='Hair' className='h-10 w-80 md:w-64 bg-transparent border-b outline-none' type="text" >\
                    <option className='text-black' value="">Select Your Hair color</option>
                    <option className='text-black' value="Black">Black</option>
                    <option className='text-black' value="Brown">Brown</option>
                    <option className='text-black' value="Blond">Blond</option>
                    <option className='text-black' value="White/Gray">White/Gray</option>
                    <option className='text-black' value="Red">Red</option>
                </select>
            </div>
            <div className="Measurments flex flex-col ">
                <label htmlFor="Measurments">Measurments</label>
                <div className="flex gap-12">
                    <input onChange={e => { dispatch(setMesurement({ type: 'bust', value: Number(e.target.value) })) }} value={bust} type="number" min={40} max={99} className='h-10 w-10 bg-transparent border-b outline-none text-center' />
                    <input onChange={e => { dispatch(setMesurement({ type: 'waist', value: Number(e.target.value) })) }} value={waist} type="number" min={40} max={99} className='h-10 w-10 bg-transparent border-b outline-none text-center' />
                    <input onChange={e => { dispatch(setMesurement({ type: 'hip', value: Number(e.target.value) })) }} value={hip} type="number" min={40} max={99} className='h-10 w-10 bg-transparent border-b outline-none text-center' />
                </div>

            </div>
        </div>
    )
}

export default Q3