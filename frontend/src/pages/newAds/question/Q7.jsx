import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addService, removeService } from '../../../redux/slice/adsSlice'
import { setDisableNext, setError } from '../../../redux/slice/utilSlice'

function Q7() {
    const dispatch = useDispatch()
    const { service } = useSelector(state => state.ads)

    useEffect(() => {
        if(service.length !== 0){
          dispatch(setError(""))
            dispatch(setDisableNext(false))
        }else{
          dispatch(setError("Please Provide any services"))
        }
    // eslint-disable-next-line
      }, [service])

      
    const services = [
        'Anal sex', 'Foot fetish', 'Parties', 'Submissive', 'BDSM', 'French kissing', 'Reverse oral', 'Squirting',
        'CIM', 'GFE', 'Giving rimming', 'Tantric massage', 'COB', 'Teabagging', 'Couples', 'Role play', 'Tie and tease', 
        'Deep  throat', 'Lap dancing', 'Sex toys', 'Uniforms','Domination', 'Massage', 'Spanking', 'Face sitting', 
        'Nuru massage', 'Strapon','Fingering', 'Oral sex blow job', 'Striptease', 'Webcam sex', 'Fisting', 'OWO']
    return (
        <div className='flex flex-wrap  justify-center items-center gap-5 h-full'>
            <div className="flex flex-wrap justify-center gap-3">
                {services.map(e => <Buttons key={e} value={e} />)}
            </div>
        </div>
    )
}

export default Q7

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
        <button onClick={cliked} className={` ${service.find(e => e.name === value) && 'shadow-md border-2'} border h-8  px-3 rounded-full    border-red-500  shadow-red-600`}>{value}</button>
    )
}



