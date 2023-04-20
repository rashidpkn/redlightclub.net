import { Menu } from "@mui/icons-material"
import { useSelector } from "react-redux"


function Sidebar({ children }) {
  const {isDarkMode} = useSelector(state=>state.util)
  return (
    <div className={`w-20 lg:w-[280px] h-auto  rounded-br-3xl ${isDarkMode && 'bg-[#1A1f28]'} duration-[1.5s] `} >
      <div className={`${isDarkMode && 'text-white'} hidden lg:flex justify-between  items-center h-24 px-[10px]`}>
        <div className="flex">
          <img src="/images/common/logo-rounded.png" className='h-[39px] w-[39px]' alt="" />
          <h2 className=" text-xl font-bold ml-3 text-[#E11700] leading-9 font-cairo mt-2">Red Light Club</h2>

        </div>
        <Menu style={{position:'relative',right:'15px'}} fontSize="medium"/>
      </div>
      <div className="flex justify-center items-center lg:hidden px-[10%] py-[5%] h-20">
        <Menu fontSize="large" />
      </div>
      <div className="mt-6 relative z-10" >
        {children}
      </div>
    </div>
  )
}

export default Sidebar