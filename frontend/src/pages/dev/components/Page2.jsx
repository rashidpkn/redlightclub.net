import React, { useEffect, useState } from 'react'
import { Nationality, languages } from './values'
import PlacesAutocomplete from 'react-places-autocomplete';
import { setLanguage, setLocation, setNationality, setSocialMedia } from '../../../redux/slice/adsSlice';
import { useDispatch, useSelector } from 'react-redux';

import onlyfansImage from '../../../asset/images/new-ads/onlyfans.gif'

function Page2({ setDisable }) {

    const dispatch = useDispatch()
    const { language, location, nationality } = useSelector(state => state.ads)


    useEffect(() => {
        if (language && location && nationality) {
            setDisable(false)
        } else setDisable(true)
        // eslint-disable-next-line
    }, [language, location, nationality])


    return (
        <div className='h-full w-full space-y-4'>

            <div className="space-y-2">
                <p className='text-sm font-bold'>Language*</p>
                <select type="text" className='w-80 h-11 outline-[#6418C3] outline-1 bg-[#F5F5F5] text-sm rounded-xl pl-5' onChange={e => dispatch(setLanguage(e.target.value))} value={language} >
                    <option value="" disabled defaultValue>Select your language</option>
                    {languages.map(e => <option key={e} value={e}>{e}</option>)}
                </select>
            </div>

            <div className="flex gap-5 items-center flex-wrap">

                <div className="space-y-2">
                    <p className='text-sm font-bold'>Location*</p>
                    <Location />
                </div>

                <div className="space-y-2">
                    <p className='text-sm font-bold'>Nationality*</p>
                    <select type="text" className='w-80 h-11 outline-[#6418C3] outline-1 bg-[#F5F5F5] text-sm rounded-xl pl-5' onChange={e => dispatch(setNationality(e.target.value))} value={nationality} >
                        <option value="" disabled defaultValue>Select your Nationality</option>
                        {Nationality.map(e => <option key={e} value={e}>{e}</option>)}
                    </select>
                </div>

            </div>

            <p className='text-sm font-bold'>Social</p>
            <SocialMedia />




        </div>
    )
}

export default Page2


const Location = () => {
    const dispatch = useDispatch()
    const { location } = useSelector(state => state.ads)
    const [value, setValue] = useState(location)
    const handleSelect = address => {
        dispatch(setLocation(address))
        setValue(address)
    }
    return (
        <PlacesAutocomplete value={value} onChange={setValue} onSelect={handleSelect}>
            {({ getInputProps, suggestions, getSuggestionItemProps, loading, }) => (
                <div className='w-80 h-11 bg-white relative'>
                    <input {...getInputProps({ placeholder: 'eg: Dubai', className: 'w-80 h-11 outline-[#6418C3] outline-1 bg-[#F5F5F5] text-sm rounded-xl pl-5' })} />
                    <div className="autocomplete-dropdown-container bg-white absolute z-20 w-full space-y-2 rounded-xl p-2">
                        {loading && <div>Loading...</div>}
                        {suggestions.map(suggestion => <div{...getSuggestionItemProps(suggestion, { className: 'cursor-pointer border-b py-1' })}><span>{suggestion.description}</span></div>)}
                    </div>
                </div>
            )}
        </PlacesAutocomplete>
    )
}


const SocialMedia = () => {
    const dispatch = useDispatch()
    const { socialMedia } = useSelector(state => state.ads)


    const { video,
        website,
        instagram,
        twitter,
        telegram,
        facebook,
        tiktok } = socialMedia
    return (
        <div className="space-y-1">
            <div className="flex  items-center">
                <p className='text-sm w-32 '>Video Url</p>
                <input placeholder='Enter Url' type="text" className='w-80 h-11 outline-[#6418C3] outline-1 bg-[#F5F5F5] text-sm rounded-xl pl-5' onChange={e => dispatch(setSocialMedia({ type: 'video', value: e.target.value }))} value={video} />
            </div>



            <OnlyFans/>

            <div className="flex  items-center">
                <p className='text-sm w-32 '>Website</p>
                <input placeholder='Enter Website' type="text" className='w-80 h-11 outline-[#6418C3] outline-1 bg-[#F5F5F5] text-sm rounded-xl pl-5' onChange={e => dispatch(setSocialMedia({ type: 'website', value: e.target.value }))} value={website} />
            </div>

            <div className="flex  items-center">
                <p className='text-sm w-32 '>Instagram</p>
                <input placeholder='Enter username' type="text" className='w-80 h-11 outline-[#6418C3] outline-1 bg-[#F5F5F5] text-sm rounded-xl pl-5' onChange={e => dispatch(setSocialMedia({ type: 'instagram', value: e.target.value }))} value={instagram} />
            </div>

            <div className="flex  items-center">
                <p className='text-sm w-32 '>Facebook</p>
                <input placeholder='Enter username' type="text" className='w-80 h-11 outline-[#6418C3] outline-1 bg-[#F5F5F5] text-sm rounded-xl pl-5' onChange={e => dispatch(setSocialMedia({ type: 'facebook', value: e.target.value }))} value={facebook} />
            </div>

            <div className="flex  items-center">
                <p className='text-sm w-32 '>Telegram</p>
                <input placeholder='Enter Telegram number' type="text" className='w-80 h-11 outline-[#6418C3] outline-1 bg-[#F5F5F5] text-sm rounded-xl pl-5' onChange={e => dispatch(setSocialMedia({ type: 'telegram', value: e.target.value }))} value={telegram} />
            </div>

            <div className="flex  items-center">
                <p className='text-sm w-32 '>Tiktok</p>
                <input placeholder='Enter username' type="text" className='w-80 h-11 outline-[#6418C3] outline-1 bg-[#F5F5F5] text-sm rounded-xl pl-5' onChange={e => dispatch(setSocialMedia({ type: 'tiktok', value: e.target.value }))} value={tiktok} />
            </div>

            <div className="flex  items-center">
                <p className='text-sm w-32 '>Twitter</p>
                <input placeholder='Enter username' type="text" className='w-80 h-11 outline-[#6418C3] outline-1 bg-[#F5F5F5] text-sm rounded-xl pl-5' onChange={e => dispatch(setSocialMedia({ type: 'twitter', value: e.target.value }))} value={twitter} />
            </div>

        </div>
    )
}


const OnlyFans = ()=>{
    const dispatch = useDispatch()
    const { socialMedia } = useSelector(state => state.ads)

    const [fun, setFun] = useState(false)
    const { onlyFans } = socialMedia

    return(
        <div className="flex  items-center">
                <p className='text-sm w-32 '>Onlyfans</p>
                <div className="flex items-center gap-5 w-max p-2 rounded-xl bg-[#F6EEFF]">
                    <input onBlur={()=>{setFun(true)}} placeholder='Enter username' type="text" className='w-80 h-11 outline-[#6418C3] outline-1 bg-[#F5F5F5] text-sm rounded-xl pl-5' onChange={e => dispatch(setSocialMedia({ type: 'onlyFans', value: e.target.value }))} value={onlyFans} />
                    <p className='text-sm flex items-center'>
                        {fun ?<> <img src={onlyfansImage} className='w-12 h-12' alt="" /> Woohoo!! You earned 50 credit </> : <>🎉 You earn  50 credits by filling this info</>}
                        
                    </p>
                    

                </div>
            </div>
    )
}