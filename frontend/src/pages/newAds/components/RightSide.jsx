import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { back, next } from '../../../redux/slice/utilSlice'

function RightSide({ children }) {
    const dispatch = useDispatch()
    const { disableNext,error } = useSelector(state=>state.util.newAds)
    return (
        <div className="h-full w-full lg:w-[55%] bg-cover bg-no-repeat bg-right-bottom text-white" style={{ backgroundImage: "url('/images/new-ads/catWomen2.webp')" }}>
            <div className="h-[90%] w-full border-b p-[5%]">
                {children}
            </div>
            <div className="h-[10%] w-full p-[2%] flex justify-between items-center">
                <button className="border h-10  px-6 rounded-full md:text-xl   border-red-500 shadow-md shadow-red-600" onClick={() => dispatch(back())}>Back</button>
                <button className="border h-10  px-6 rounded-full md:text-xl   border-red-500 shadow-md shadow-red-600" onClick={() => {
                    if(disableNext){
                            window.alert(error)
                    }else{
                            dispatch(next())
                    }
                    }}>Next</button>
            </div>
        </div>
    )
}

export default RightSide