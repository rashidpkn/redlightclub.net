import { Menu } from "@mui/icons-material"
import { useSelector } from "react-redux"


function Sidebar({ children }) {
  const {isDarkMode} = useSelector(state=>state.util)
  return (
    <div className={`w-20 lg:w-72 h-auto  rounded-br-3xl ${isDarkMode && 'bg-[#1A1f28]'} duration-[1.5s] `}>
      <div className={`${isDarkMode && 'text-white'} hidden lg:flex justify-between items-center h-24 p-[5%]`}>
        <img src="/images/common/logo-rounded.png" className='h-12 w-12' alt="" />
        <h2 className=" text-lg font-medium">Red Light Club</h2>
        <Menu />
      </div>
      <div className="flex justify-center items-center lg:hidden px-[10%] py-[5%] h-20">
        <Menu fontSize="large" />
      </div>
      {children}
    </div>
  )
}

export default Sidebar