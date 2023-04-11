import { Close } from "@mui/icons-material"
import { useDispatch, useSelector } from "react-redux"
import { setAge, setEye, setHair, setHeight, setLocation, setNationality, setWeight } from "../../../redux/slice/filterSlice"
import { setShowFilter } from "../../../redux/slice/utilSlice"
import Nationality from "../../newAds/components/Nationality"
import { LocationSearchInput } from "./LocationSearchInput"

export const  DesktopFilter = () => {
    const dispatch = useDispatch()
    const {age,height,weight} = useSelector(state=>state.filter)
    const getLocation = location =>{
      dispatch(setLocation(location))
  }
    return (
      <div className="hidden lg:block fixed w-[960px] h-[500px] inset-0 m-auto bg-[#0B0B0B] z-50 rounded-lg px-[15px]">
        <div className="w-full h-[80px] border-b border-white flex items-center justify-between px-5">
          <span className='text-2xl font-medium text-white'>Advanced Search</span>
          <span className='text-2xl font-medium text-white' onClick={()=>{dispatch(setShowFilter())}}><Close/></span>
        </div>
        <div className="w-full min-h-[292px] flex flex-wrap mt-5">
          {/* <div className="w-[232px] h-[86px] px-[15px]">
            <h1 className='text-lg text-white '>Ads Title</h1>
            <input

            className='bg-white rounded w-full h-[34px] pl-3' type="text" name="" id="" placeholder='Stacy' />
          </div> */}
          <div className="w-[232px] h-[86px] px-[15px]">
            <h1 className='text-lg text-white '>Location</h1>
            <LocationSearchInput getLocation={getLocation}/>
          </div>
          <div className="w-[232px] h-[86px] px-[15px]">
            <h1 className='text-lg text-white '>Height</h1>
            <div className="w-full flex justify-between gap-3">
              <input onChange={e=>{dispatch(setHeight({...height,from:Number(e.target.value)}))}}  className='bg-white rounded w-1/2 h-[34px] pl-2' type="number" name="" id="" placeholder='150' />
              <input onChange={e=>{dispatch(setHeight({...height,to:Number(e.target.value)}))}}     className='bg-white rounded w-1/2 h-[34px] pl-2' type="number" name="" id="" placeholder='170' />
            </div>
          </div>
          <div className="w-[232px] h-[86px] px-[15px]">
            <h1 className='text-lg text-white '>Weight in KG</h1>
            <div className="w-full flex justify-between gap-3">
              <input onChange={e=>{dispatch(setWeight({...weight,from:Number(e.target.value)}))}} className='bg-white rounded w-1/2 h-[34px] pl-2' type="number" name="" id="" placeholder='40' />
              <input onChange={e=>{dispatch(setWeight({...weight,to:Number(e.target.value)}))}}   className='bg-white rounded w-1/2 h-[34px] pl-2' type="number" name="" id="" placeholder='65' />
            </div>
          </div>
          <div className="w-[232px] h-[86px] px-[15px]">
            <h1 className='text-lg text-white '>Nationality</h1>
            <select onChange={e=>{dispatch(setNationality(e.target.value))}} className='bg-white rounded w-full h-[34px] pl-3' type="text" name="" id="" placeholder='UAE' >
              <Nationality />
            </select>
          </div>
          <div className="w-[232px] h-[86px] px-[15px]">
            <h1 className='text-lg text-white '>Languages</h1>
            <select className='bg-white rounded w-full h-[34px] pl-3' type="text" name="" id="" placeholder='English' >
              {/* <Languages /> */}
            </select>
          </div>
          <div className="w-[232px] h-[86px] px-[15px]">
            <h1 className='text-lg text-white '>Age</h1>
            <div className="w-full flex justify-between gap-3">
              <input  onChange={e=>{dispatch(setAge({...age,from:Number(e.target.value) }))}} className='bg-white rounded w-1/2 h-[34px] pl-2' type="number" name="" id="" placeholder='20' />
              <input  onChange={e=>{dispatch(setAge({...age,to:Number(e.target.value)}))}}    className='bg-white rounded w-1/2 h-[34px] pl-2' type="number" name="" id="" placeholder='30' />
            </div> 
          </div>
          <div className="w-[232px] h-[86px] px-[15px]">
            <h1 className='text-lg text-white '>Eye Color</h1>
            <select onClick={e=>{dispatch(setEye(e.target.value))}} className='bg-white rounded w-full h-[34px] pl-3' type="text" name="" id="" placeholder='Brown' >
              <option value="Brown">Brown</option>
              <option value="Blue">Blue</option>
              <option value="Hazel">Hazel</option>
              <option value="Amber">Amber</option>
              <option value="Green">Green</option>
              <option value="Gray">Gray</option>
            </select>
          </div>

          {/* <div className="w-[232px] h-[86px] px-[15px]">
            <h1 className='text-lg text-white '>Region</h1>
            <input className='bg-white rounded w-full h-[34px] pl-3' type="text" name="" id="" placeholder='Dubai' />
          </div> */}

          {/* <div className="w-[232px] h-[86px] px-[15px]">
            <h1 className='text-lg text-white '>Service</h1>
            <input className='bg-white rounded w-full h-[34px] pl-3' type="text" name="" id="" placeholder='Party' />
          </div> */}
          <div className="w-[232px] h-[86px] px-[15px]">
            <h1 className='text-lg text-white '>Hair Color</h1>
            <select onChange={e=>dispatch(setHair(e.target.value))} className='bg-white rounded w-full h-[34px] pl-3' type="text" name="" id="" placeholder='Black' >
              <option value="Black">Black</option>
              <option value="Brown">Brown</option>
              <option value="Blond">Blond</option>
              <option value="White/Gray">White/Gray</option>
              <option value="Red">Red</option>
            </select>
          </div>
          {/* <div className="w-[232px] h-[86px] px-[15px]">
            <h1 className='text-lg text-white '>Measurement</h1>
            <div className="w-full flex justify-between gap-3">
              <input className='bg-white rounded w-1/3 h-[34px] pl-2' type="number" name="" id="" placeholder='90' />
              <input className='bg-white rounded w-1/3 h-[34px] pl-2' type="number" name="" id="" placeholder='80' />
              <input className='bg-white rounded w-1/3 h-[34px] pl-2' type="number" name="" id="" placeholder='85' />
            </div>
          </div> */}
        </div>
        <div className="w-full h-[calc(100%-80px-292px)] flex justify-end  items-center">
          <button className='w-[129px] h-[46px] bg-[#f4b827] text-[#333333] rounded-xl text-lg font-medium' onClick={()=>{dispatch(setShowFilter())}}>Search</button>
        </div>
      </div>
    )
  }
  