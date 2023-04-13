import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addService, removeService, setCurrencyType, setInCall, setOutCall } from '../../../redux/slice/adsSlice'
import { services } from './values'

function Page3({ setDisable }) {
    const dispatch = useDispatch()
    const { currencyType,service } = useSelector(state => state.ads)


    useEffect(() => {
        if (currencyType && service.length) {
            setDisable(false)
        } else setDisable(true)
        // eslint-disable-next-line
    }, [currencyType,service])


    return (
        <div className='w-full h-full space-y-4'>

            <div className="space-y-2">
                <p className='text-sm font-bold'>Currency*</p>
                <select type="text" className='w-80 h-11 outline-[#6418C3] outline-1 bg-[#F5F5F5] text-sm rounded-xl pl-5' onChange={e => dispatch(setCurrencyType(e.target.value))} value={currencyType} >
                    <option value="">Select your  currency</option>
                    <option value="AED">UAE Dirham (AED)</option>
                    <option value="USD"> United States Dollar (USD)</option>
                    <option value="BHD">Bahraini Dinar (BHD)</option>
                    <option value="GBP">British Pound (GBP)</option>
                    <option value="HKD">Hong Kong Dollar (HKD)</option>
                    <option value="EUR">Euro (EUR)</option>
                </select>
            </div>


            <InCall />
            <OutCall />




            <p className='text-sm font-bold'>Services</p>
            <Service />





        </div>
    )
}

export default Page3


const Service = () => {
    return (
        <div className="flex flex-wrap gap-x-2 gap-y-1 h-36 overflow-y-scroll">
            {services.map(e => <Buttons key={e} value={e} /> )}
        </div>
    )
}


const Buttons = ({ value }) => {
    const { service } = useSelector(state => state.ads)
    const dispatch = useDispatch()
    const cliked = () => {
        if (service.find(e => e.name === value)) {
            dispatch(removeService(value))
        } else {
            dispatch(addService(value))
        }
    }
    return (
        <button onClick={cliked} className={` ${service.find(e => e.name === value) ?'bg-[#6418C3] text-white' : 'border-black'} border  px-2 py-1 rounded-full   `}>{value}</button>
    )
}


const InCall = () => {
    const dispatch = useDispatch()
    const { inCall } = useSelector(state => state.ads)
    const { oneHourIn, twoHourIn, nightIn } = inCall

    return (
        <div className="flex gap-5">
            <p className='text-sm font-bold w-14'>Incalls</p>
            <div className="space-y-4">
                <div className="flex gap-5">
                    <input type="text" className='h-10 w-32 outline-[#6418C3] outline-1 bg-[#F5F5F5] text-sm rounded-xl text-center font-bold' value={'1 Hr'} readOnly />
                    <input type="number" className='h-10 w-32 outline-[#6418C3] outline-1 bg-[#F5F5F5] text-sm rounded-xl text-center' value={oneHourIn} onChange={e => dispatch(setInCall({ type: 'oneHourIn', value: Number(e.target.value) }))} />

                </div>
                <div className="flex gap-5">
                    <input type="text" className='h-10 w-32 outline-[#6418C3] outline-1 bg-[#F5F5F5] text-sm rounded-xl text-center font-bold' value={'3 Hr'} readOnly />
                    <input type="number" className='h-10 w-32 outline-[#6418C3] outline-1 bg-[#F5F5F5] text-sm rounded-xl text-center' value={twoHourIn} onChange={e => dispatch(setInCall({ type: 'twoHourIn', value: Number(e.target.value) }))} />

                </div>
                <div className="flex gap-5">
                    <input type="text" className='h-10 w-32 outline-[#6418C3] outline-1 bg-[#F5F5F5] text-sm rounded-xl text-center font-bold' value={'Full Night'} readOnly />
                    <input type="number" className='h-10 w-32 outline-[#6418C3] outline-1 bg-[#F5F5F5] text-sm rounded-xl text-center' value={nightIn} onChange={e => dispatch(setInCall({ type: 'nightIn', value: Number(e.target.value) }))} />

                </div>
            </div>
        </div>
    )
}

const OutCall = () => {
    const dispatch = useDispatch()
    const { outCall } = useSelector(state => state.ads)
    const { oneHourOut, twoHourOut, nightOut } = outCall
    return (
        <div className="flex gap-5">
            <p className='text-sm font-bold w-14'>Outcalls</p>
            <div className="space-y-4">
                <div className="flex gap-5">
                    <input type="text" className='h-10 w-32 outline-[#6418C3] outline-1 bg-[#F5F5F5] text-sm rounded-xl text-center font-bold' value={'1 Hr'} readOnly />
                    <input type="number" className='h-10 w-32 outline-[#6418C3] outline-1 bg-[#F5F5F5] text-sm rounded-xl text-center' value={oneHourOut} onChange={e => { dispatch(setOutCall({ type: 'oneHourOut', value: Number(e.target.value) })) }} />

                </div>
                <div className="flex gap-5">
                    <input type="text" className='h-10 w-32 outline-[#6418C3] outline-1 bg-[#F5F5F5] text-sm rounded-xl text-center font-bold' value={'3 Hr'} readOnly />
                    <input type="number" className='h-10 w-32 outline-[#6418C3] outline-1 bg-[#F5F5F5] text-sm rounded-xl text-center' value={twoHourOut} onChange={e => { dispatch(setOutCall({ type: 'twoHourOut', value: Number(e.target.value) })) }} />

                </div>
                <div className="flex gap-5">
                    <input type="text" className='h-10 w-32 outline-[#6418C3] outline-1 bg-[#F5F5F5] text-sm rounded-xl text-center font-bold' value={'Full Night'} readOnly />
                    <input type="number" className='h-10 w-32 outline-[#6418C3] outline-1 bg-[#F5F5F5] text-sm rounded-xl text-center' value={nightOut} onChange={e => { dispatch(setOutCall({ type: 'nightOut', value: Number(e.target.value) })) }} />

                </div>
            </div>
        </div>
    )
}