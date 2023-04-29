import { useSelector } from "react-redux"


function Main({ children }) {
  const {isDarkMode} = useSelector(state=>state.util)
  return (
    <div className={`w-full h-[calc(100vh-6rem)] overflow-y-scroll sc px-5 py-11   ${isDarkMode ? 'bg-[#0f121A] shadow-inner shadow-blue-500' : 'bg-[#f7f7f7]'}  duration-[1.5s]`} style={{boxShadow:' inset 20px 20px 22px -20px rgba(0,0,0,0.2)'}}>
      {children}
    </div>
  )
}

export default Main