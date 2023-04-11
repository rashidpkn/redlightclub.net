import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setLanguage, setLocation, setNationality } from '../../../redux/slice/adsSlice'
import { setDisableNext, setError } from '../../../redux/slice/utilSlice'
import { LocationSearchInput } from '../components/LocationSearchInput'
import Nationality from '../components/Nationality'

function Q2() {
    const {  nationality, language,location } = useSelector(state => state.ads)
    const dispatch = useDispatch()


    useEffect(() => {
        if(nationality && language && location){
          dispatch(setError(""))
            dispatch(setDisableNext(false))
        }else{
          dispatch(setError("Please Provide Nationality,language and location"))
        }
    // eslint-disable-next-line
      }, [nationality,language,location])


    const getLocation = location =>{
        dispatch(setLocation(location))
    }


    return (
        <div className='flex flex-col justify-center items-center gap-10 h-full'>
            <div className="Ads flex flex-col">
                <label htmlFor="Ads">Location</label>
                {/* <input value={location} onChange={e => dispatch(setLocation(e.target.value))} placeholder="DownTown" id="Ads" className="h-10 w-80 md:w-64 bg-transparent border-b outline-none" type="text" /> */}
                <LocationSearchInput getLocation={getLocation}/>
            </div>

            <div className="Ads flex flex-col">
                <label htmlFor="Ads">Nationality</label>
                <select value={nationality} onChange={e => dispatch(setNationality(e.target.value))} placeholder="UEA" id="Ads" className="h-10 w-80 md:w-64 bg-transparent border-b outline-none" type="text"  >
                    <Nationality />
                </select>
            </div>

            <div className="Ads flex flex-col">
                <label htmlFor="Ads">Language</label>
                <input value={language} onChange={e => dispatch(setLanguage(e.target.value))} placeholder="English" id="Ads" className="h-10 w-80 md:w-64 bg-transparent border-b outline-none" type="text" />
            </div>

        </div>
    )
}

export default Q2