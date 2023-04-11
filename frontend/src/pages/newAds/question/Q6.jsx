import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrencyType, setInCall, setOutCall } from '../../../redux/slice/adsSlice'
import { setDisableNext, setError } from '../../../redux/slice/utilSlice'

function Q6() {
    const dispatch = useDispatch()
    const { currencyType,outCall,inCall } = useSelector(state => state.ads)
    // const { oneHourOut, twoHourOut, nightOut } = outCall
    // const { oneHourIn, twoHourIn, nightIn } = inCall

    useEffect(() => {
        if(currencyType && outCall && inCall){
          dispatch(setError(""))
            dispatch(setDisableNext(false))
        }else{
          dispatch(setError("Please Provide Currency Type ,inCall and outCall Charges"))
        }
    // eslint-disable-next-line
      }, [currencyType,outCall,inCall])

    return (
        <div className='flex flex-col justify-center items-center gap-10 h-full'>
            <div className=" flex gap-5">
                <div className=" flex flex-col">
                    <select onChange={e => dispatch(setCurrencyType(e.target.value))} value={currencyType} className='h-10 w-80 md:w-64 bg-transparent border-b outline-none' placeholder='OutCall Currency' type="text" >
                        <option className='text-black' value="">OutCall Currency</option>
                        <option className='text-black' value="AED">UAE Dirham (AED)</option>
                        <option className='text-black' value="USD"> United States Dollar (USD)</option>
                        <option className='text-black' value="BHD">Bahraini Dinar (BHD)</option>
                        <option className='text-black' value="GBP">British Pound (GBP)</option>
                        <option className='text-black' value="HKD">Hong Kong Dollar (HKD)</option>
                        <option className='text-black' value="EUR">Euro (EUR)</option>
                    </select>
                </div>

            </div>

            <div className=" flex gap-5">
                <div className=" flex flex-col">
                    <input onChange={e => dispatch(setOutCall({ type: 'oneHourOut', value: Number(e.target.value) }))} className='h-10 w-80 md:w-64 bg-transparent border-b outline-none' placeholder='One Hour OutCall' type="number" />
                </div>
                <div className=" flex flex-col">
                    <input onChange={e => dispatch(setInCall({ type: 'oneHourIn', value: Number(e.target.value) }))} className='h-10 w-80 md:w-64 bg-transparent border-b outline-none' placeholder='One Hour InCall' type="number" />
                </div>
            </div>

            <div className=" flex gap-5">
                <div className=" flex flex-col">
                    <input onChange={e => dispatch(setOutCall({ type: 'twoHourOut', value: Number(e.target.value) }))} className='h-10 w-80 md:w-64 bg-transparent border-b outline-none' type="number" placeholder='Two Hour OutCall' />
                </div>
                <div className=" flex flex-col">
                    <input onChange={e => dispatch(setInCall({ type: 'twoHourIn', value: Number(e.target.value) }))} className='h-10 w-80 md:w-64 bg-transparent border-b outline-none' type="number" placeholder='Two Hour InCall' />
                </div>
            </div>

            <div className=" flex gap-5">
                <div className=" flex flex-col">
                    <input onChange={e => dispatch(setOutCall({ type: 'nightOut', value: Number(e.target.value) }))} className='h-10 w-80 md:w-64 bg-transparent border-b outline-none' type="number" placeholder='Full Night OutCall' />
                </div>
                <div className=" flex flex-col">
                    <input onChange={e => dispatch(setInCall({ type: 'nightIn', value: Number(e.target.value) }))} className='h-10 w-80 md:w-64 bg-transparent border-b outline-none' type="number" placeholder='Full Night InCall' />
                </div>
            </div>
        </div>
    )
}

export default Q6