import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setServiceCharge } from '../../../redux/slice/adsSlice'
import { setDisableNext, setError } from '../../../redux/slice/utilSlice'

function Q9() {
    const dispatch = useDispatch()
    const { service } = useSelector(state => state.ads)
    useEffect(() => {
        dispatch(setError(""))
        dispatch(setDisableNext(false))
        // eslint-disable-next-line
    }, [])
    return (
        <div className='flex flex-col justify-center items-center gap-10 h-full'>
            {
                service.map(e => <div className='flex flex-col'> <label htmlFor="">{e.name} Charge </label> <input value={e.charge} onChange={evt => dispatch(setServiceCharge({ name: e.name, charge: Number(evt.target.value) }))} placeholder={`${e.name} Charge`} className='h-10 w-80 md:w-64 bg-transparent border-b outline-none' type={'number'} /> </div>)
            }
            {
                service.length === 0 && <h1>Please Select any Services</h1>
            }
        </div>
    )
}

export default Q9