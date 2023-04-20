import { useSelector } from "react-redux"


function Main({ children }) {
  const {isDarkMode} = useSelector(state=>state.util)
  return (
    <div className={`w-full h-full min-h-screen px-5 py-11   ${isDarkMode ? 'bg-[#0f121A] shadow-inner shadow-blue-500' : 'bg-[#f7f7f7]'}  duration-[1.5s]`}>
      {children}
    </div>
  )
}

export default Main