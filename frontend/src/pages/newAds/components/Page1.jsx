import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setAdsTitle, setAge, setEye, setHair, setHeight, setInto, setBust, setWeight, SetOrientation } from '../../../redux/slice/adsSlice'
import { setPhone } from '../../../redux/slice/adsSlice'
import { codes } from './values'

function Page1({ setDisable }) {
    const dispatch = useDispatch()
    const { adsTitle, phone, age, height, weight, hair, eye, bust, intro,orientation } = useSelector(state => state.ads)

    const [type, setType] = useState('independent')


    useEffect(() => {
        if (adsTitle && phone.code && phone.number && age && height && weight && hair && eye && bust && intro && orientation) {
            setDisable(false)
        } else {
            setDisable(true)
        }
        // eslint-disable-next-line
    }, [adsTitle, phone, age, height, weight, hair, eye, bust, intro,orientation])

    return (
        <div className='h-full w-full space-y-4'>

            <div className="space-y-2">
                <p className='text-sm font-bold'>I Am</p>

                <div className="flex gap-5">
                    <div className="space-x-2">
                        <input className='accent-[#6418C3]' type="radio" name="type" onChange={e => setType(e.target.value)} defaultChecked value={'independent'} id="independent" />
                        <label htmlFor="independent">Independent</label>
                    </div>
                    <div className="space-x-2">
                        <input className='accent-[#6418C3]' type="radio" name="type" onChange={e => setType(e.target.value)} value={'agency'} id="agency" />
                        <label htmlFor="agency">Agency</label>
                    </div>
                </div>
            </div>
            {type === 'agency' && <div className="space-y-2">
                <p className='text-sm font-bold'>Agency Name*</p>
                <input placeholder='eg: agency_name' type="text" className='w-80 h-11 outline-[#6418C3] outline-1 bg-[#F5F5F5] text-sm rounded-xl pl-5' />
            </div>}

            <div className="space-y-2">
                <p className='text-sm font-bold'>Profile Title*</p>
                <input placeholder='eg: Stacy' type="text" className='w-80 h-11 outline-[#6418C3] outline-1 bg-[#F5F5F5] text-sm rounded-xl pl-5' value={adsTitle} onChange={e => dispatch(setAdsTitle(e.target.value))} />
            </div>

            <div className="space-y-2">
                <p className='text-sm font-bold'>Phone Number*</p>
                <div className="w-fit h-11 outline-[#6418C3] outline-1 bg-[#F5F5F5] text-sm rounded-xl flex  overflow-hidden">
                    <select className={`w-20 h-full outline-[#6418C3] outline-1 rounded-l-xl bg-[#F5F5F5] text-sm text-center ${phone.code === '' && 'text-[#A5A5A5]'}`} placeholder='eg:+971' value={phone.code} onChange={e => dispatch(setPhone({ type: 'code', value: e.target.value }))} >
                        <option value="" disabled defaultValue>eg: +971</option>
                        {codes.map(e => <option key={e.name} value={e.code}>{e.code} {e.name}</option>)}
                    </select>
                    <input placeholder='eg : 55 022 0116' type="tel" className='w-56 h-full outline-[#6418C3] outline-1 rounded-r-xl bg-[#F5F5F5] text-sm pl-5' value={phone.number} onChange={e => dispatch(setPhone({ type: 'number', value: e.target.value }))} />
                </div>
            </div>

            <div className="flex gap-5 flex-wrap">
                <div className="space-y-2">
                    <p className='text-sm font-bold'>Age*</p>
                    <select type="text" className={`w-20 h-11 outline-[#6418C3] outline-1 text-center bg-[#F5F5F5] text-sm rounded-xl ${age === '' && 'text-[#A5A5A5]'}`} onChange={e => dispatch(setAge(Number(e.target.value)))} value={age} >
                        <option value="" disabled defaultValue>eg: 22</option>
                        {[...Array(23)].map((e, i) => <option className='text-black' key={i} value={i + 18}>{i + 18}</option>)}
                    </select>
                </div>

                <div className="space-y-2">
                    <p className='text-sm font-bold'>Height(cm)*</p>
                    <select type="text" className={`w-20 h-11 outline-[#6418C3] outline-1 text-center bg-[#F5F5F5] text-sm rounded-xl ${height === '' && 'text-[#A5A5A5]'}`} value={height} onChange={e => dispatch(setHeight(Number(e.target.value)))} >
                        <option value="" disabled defaultValue>eg: 160</option>
                        {[...Array(101)].map((e, i) => <option className='text-black' key={i} value={i + 100}>{i + 100}</option>)}
                    </select>
                </div>

                <div className="space-y-2">
                    <p className='text-sm font-bold'>Weight(kg)*</p>
                    <select type="text" className={`w-20 h-11 outline-[#6418C3] outline-1 text-center bg-[#F5F5F5] text-sm rounded-xl ${weight === '' && 'text-[#A5A5A5]'}`} value={weight} onChange={e => dispatch(setWeight(Number(e.target.value)))}>
                        <option value="" disabled defaultValue>eg: 50</option>
                        {[...Array(41)].map((e, i) => <option className='text-black' key={i} value={i + 40}>{i + 40}</option>)}
                    </select>
                </div>


                <div className="space-y-2">
                    <p className='text-sm font-bold'>Hair*</p>
                    <select type="text" className='w-44 h-11 outline-[#6418C3] outline-1 bg-[#F5F5F5] text-sm rounded-xl text-center' onChange={e => dispatch(setHair(e.target.value))} value={hair} >
                        <option value="" disabled defaultValue>Select your hair colour</option>
                        <option value="Black">Black</option>
                        <option value="Brown">Brown</option>
                        <option value="Blond">Blond</option>
                        <option value="White/Gray">White/Gray</option>
                        <option value="Red">Red</option>
                    </select>
                </div>

                <div className="space-y-2">
                    <p className='text-sm font-bold'>Eye Color*</p>
                    <select type="text" className='w-44 h-11 outline-[#6418C3] outline-1 bg-[#F5F5F5] text-sm rounded-xl text-center' onChange={e => dispatch(setEye(e.target.value))} value={eye} >
                        <option value="" disabled defaultValue>Select your eye colour</option>
                        <option value="Brown">Brown</option>
                        <option value="Blue">Blue</option>
                        <option value="Hazel">Hazel</option>
                        <option value="Amber">Amber</option>
                        <option value="Green">Green</option>
                        <option value="Gray">Gray</option>
                    </select>
                </div>

            </div>



            <div className="flex gap-3">

                <div className="space-y-2">
                    <p className='text-sm font-bold'>Bust*</p>
                    <div className="flex gap-5 text">
                        <select type="text" className={`w-32 h-11 outline-[#6418C3] outline-1 text-center bg-[#F5F5F5] text-sm rounded-xl ${bust === '' && 'text-[#A5A5A5]'}`} onChange={e => dispatch(setBust(e.target.value))} value={bust} >
                            <option value="" disabled defaultValue>eg: Large</option>
                            <option value="s">Small</option>
                            <option value="m">Medium</option>
                            <option value="l">Large</option>
                            <option value="xl">Extra Large</option>
                        </select>
                    </div>
                </div>


                <div className="space-y-2">
                    <p className='text-sm font-bold'>Orientation*</p>
                    <div className="flex gap-5 text">
                        <button className={`border  px-4 py-2 rounded-full ${orientation === 'Heterosexual' ? 'bg-[#6418C3] text-white' : 'border-black' } `} onClick={()=>dispatch(SetOrientation('Heterosexual'))}>Heterosexual</button>
                        <button className={`border  px-4 py-2 rounded-full ${orientation === 'Bisexual' ? 'bg-[#6418C3] text-white' : 'border-black' } `} onClick={()=>dispatch(SetOrientation('Bisexual'))}>Bisexual</button>
                        <button className={`border  px-4 py-2 rounded-full ${orientation === 'Lesbian or Gay' ? 'bg-[#6418C3] text-white' : 'border-black' } `} onClick={()=>dispatch(SetOrientation('Lesbian or Gay'))}>Lesbian or Gay</button>
                    </div>
                </div>


            </div>



            <div className="space-y-2">
                <p className='text-sm font-bold'>Bio*</p>
                <textarea
                    placeholder='I’m Stacy, born on 14 April 1998, brought up and raised in a well-to-do Christian family who is fair and tall.  I’ve completed my qualification at the Moscow state university, Russia in interior designing.  As I had a keen interest in the modelling career  I luckily had received opportunities to endorse various brands and have done various commercials ads as well where  I was one amongst to walk on the ramp for Louis Vuitton in 2018.'
                    name="" id="" className='w-full h-32 outline-[#6418C3] outline-1 bg-[#F5F5F5] text-sm rounded-xl p-5' onChange={e => { dispatch(setInto(e.target.value)) }} value={intro}></textarea>
            </div>




        </div>
    )
}

export default Page1