import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setAge, setHeight, setWeight } from '../../../redux/slice/adsSlice'
import { setDisableNext, setError } from '../../../redux/slice/utilSlice'

function Q5() {
    const dispatch = useDispatch()
    const { height, weight, age } = useSelector(state => state.ads)
    
    useEffect(() => {
        if(height && weight && age){
          dispatch(setError(""))
            dispatch(setDisableNext(false))
        }else{
          dispatch(setError("Please Provide height , weight and age"))
        }
    // eslint-disable-next-line
      }, [height, weight, age])

    return (
        <div className='flex flex-col justify-center items-center gap-10 h-full'>

            <div className="Height flex flex-col">
                <label htmlFor="Height">Height</label>
                <input value={height} onChange={e => dispatch(setHeight(Number(e.target.value)))} placeholder='160' min={100} id='Height' className='h-10 w-80 md:w-64 bg-transparent border-b outline-none' type="number" />
            </div>

            <div className="Weight flex flex-col">
                <label htmlFor="Weight">Weight in Kg</label>
                <input value={weight} onChange={e => dispatch(setWeight(Number(e.target.value)))} placeholder='55' min={45} id='Weight' className='h-10 w-80 md:w-64 bg-transparent border-b outline-none' type="number" />
            </div>

            <div className="Age flex flex-col">
                <label htmlFor="Age">Age</label>
                <input value={age} onChange={e => dispatch(setAge(Number(e.target.value)))} placeholder='22' min={18} id='Age' className='h-10 w-80 md:w-64 bg-transparent border-b outline-none' type="number" />
            </div>

        </div>
    )
}

export default Q5