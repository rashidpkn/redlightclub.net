import Slider from '@mui/material/Slider';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAge, setEye, setHair, setPrice } from '../../../redux/slice/filterSlice';


const MobileFilter = () => {
    const { price } = useSelector(state => state.filter)

    const [prices, setPrices] = useState([price.from, price.to])

    const priceChanger = (event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
            return;
        }
        dispatch(setPrice({
            from: Math.min(newValue[0], prices[1] - 1000),
            to: Math.max(newValue[1], prices[0] + 1000)
        }))

        if (activeThumb === 0) {
            setPrices([Math.min(newValue[0], prices[1] - 10), prices[1]]);
        } else {
            setPrices([prices[0], Math.max(newValue[1], prices[0] + 10)]);
        }
    }
    const dispatch = useDispatch()
    const { hair, eye } = useSelector(state => state.filter)
    return (
        <div className={` block  lg:hidden backdrop-blur-md h-screen fixed bottom-0 w-full duration-200 delay-75 z-[45]`}>

            <div className={`border bg-white   fixed duration-500 bottom-0 w-full rounded-t-[30px] z-[45]  overflow-hidden  pb-[100px] p-[30px] blur-none`}>
                <div className="w-full flex justify-between">
                    <span>Price Range</span>
                    <select name="" id="" className='outline-none bg-transparent'>
                        <option value="">InCall</option>
                        <option value="">OutCall</option>
                    </select>
                </div>
                <div className="text-red-600">
                    <Slider
                        min={10}
                        max={5000}
                        step={10}
                        value={prices}
                        onChange={priceChanger}
                        valueLabelDisplay={'on'}
                        disableSwap
                    />
                </div>
                <div className="w-full flex justify-between ">

                    <select onChange={e => {
                        const { value } = e.target
                        
                        dispatch(setAge(value))
                    }
                    } className='w-[138px] h-[22px] rounded-xl border outline-none pl-[11px] text-xs bg-transparent' placeholder='18-25' type="text" >
                        <option value={1}>18 - 25</option>
                        <option value={2}>25 - 30</option>
                        <option value={3}>30 - 35</option>
                        <option value={4}>35 - 40</option>
                    </select>
                </div>
                <div className="mt-3">
                    <span>Hair Color</span>
                    <div className=" ml-flex flex flex-wrap gap-x-5 gap-y-3 mt-3">
                        <button onClick={() => dispatch(setHair('Black'))} className={`${hair === 'Black' ? 'bg-[#F13353] text-white' : 'bg-white'} px-[17px] border rounded-md`} >Black</button>
                        <button onClick={() => dispatch(setHair('Brown'))} className={`${hair === 'Brown' ? 'bg-[#F13353] text-white' : 'bg-white'} px-[17px] border rounded-md`} >Brown</button>
                        <button onClick={() => dispatch(setHair('Blonde'))} className={`${hair === 'Blonde' ? 'bg-[#F13353] text-white' : 'bg-white'} px-[17px] border rounded-md`} >Blonde</button>
                        <button onClick={() => dispatch(setHair('Red'))} className={`${hair === 'Red' ? 'bg-[#F13353] text-white' : 'bg-white'} px-[17px] border rounded-md`} >Red</button>
                        <button onClick={() => dispatch(setHair('White/Gray'))} className={`${hair === 'White/Gray' ? 'bg-[#F13353] text-white' : 'bg-white'} px-[17px] border rounded-md`}>White/Gray</button>
                    </div>
                </div>
                <div className="mt-3">
                    <span>Eye Color</span>
                    <div className=" ml-flex flex flex-wrap gap-x-5 gap-y-3 mt-3">
                        <button onClick={() => dispatch(setEye('Brown'))} className={`${eye === 'Brown' ? 'bg-[#F13353] text-white' : 'bg-white'} px-[17px] border rounded-md`} >Brown</button>
                        <button onClick={() => dispatch(setEye('Blue'))} className={`${eye === 'Blue' ? 'bg-[#F13353] text-white' : 'bg-white'} px-[17px] border rounded-md`} >Blue</button>
                        <button onClick={() => dispatch(setEye('Hazel'))} className={`${eye === 'Hazel' ? 'bg-[#F13353] text-white' : 'bg-white'} px-[17px] border rounded-md`} >Hazel</button>
                        <button onClick={() => dispatch(setEye('Amber'))} className={`${eye === 'Amber' ? 'bg-[#F13353] text-white' : 'bg-white'} px-[17px] border rounded-md`} >Amber</button>
                        <button onClick={() => dispatch(setEye('Green'))} className={`${eye === 'Green' ? 'bg-[#F13353] text-white' : 'bg-white'} px-[17px] border rounded-md`} >Green</button>
                        <button onClick={() => dispatch(setEye('Grey'))} className={`${eye === 'Grey' ? 'bg-[#F13353] text-white' : 'bg-white'} px-[17px] border rounded-md`} >Grey</button>
                    </div>
                </div>
                <div className="mt-3">
                    <span>Interested In </span>
                    <fieldset className=" flex flex-wrap gap-y-2  flex-start mt-3">

                        <div className="w-1/2 flex gap-3">
                            <input className='peer checked:bg-[#F13353]' type="radio" name="interest" value={'Male'} id="radio1" />
                            <label className='peer-checked:text-[#F13353]' htmlFor='radio1'> Male </label>
                        </div>

                        <div className="w-1/2 flex gap-3">
                            <input className='peer' type="radio" name="interest" value={'Female'} id="radio2" defaultChecked />
                            <label className='peer-checked:text-[#F13353]' htmlFor='radio2'> Female </label>
                        </div>

                        <div className="w-1/2 flex gap-3">
                            <input className='peer' type="radio" name="interest" value={'Couple'} id="radio3" />
                            <label className='peer-checked:text-[#F13353]' htmlFor='radio3'> Couple </label>
                        </div>

                        <div className="w-1/2 flex gap-3">
                            <input className='peer' type="radio" name="interest" value={'Group'} id="radio4" />
                            <label className='peer-checked:text-[#F13353]' htmlFor='radio4'> Group </label>
                        </div>

                    </fieldset>
                </div>
                <div className="mt-3 flex gap-5">
                    <button className='w-[191px] h-[30px] rounded-lg bg-[#F13353] text-white' >Show Result</button>
                    <button>Clear</button>
                </div>
            </div>
        </div>
    )
}


export default MobileFilter