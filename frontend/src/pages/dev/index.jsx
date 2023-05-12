import React from 'react'

function Dev() {
  return (
    <>

      {/* <div className="py-24 bg-[#D80027] space-y-5">
                <div className="flex justify-center items-center px-12">
                    <div className="w-full h-[240px] bg-[#4D3A66] rounded-xl"></div>
                </div>
                <div className="flex justify-center items-center px-12 flex-wrap gap-3">
                    <select className='w-52 h-10 bg-white rounded-md ' name="" id=""></select>
                    <select className='w-52 h-10 bg-white rounded-md ' name="" id=""></select>
                    <select className='w-36 h-10 bg-white rounded-md ' name="" id=""></select>
                    <select className='w-52 h-10 bg-white rounded-md ' name="" id=""></select>
                    <select className='w-52 h-10 bg-white rounded-md ' name="" id=""></select>
                    <button className='h-10 px-12 bg-[#ff0000] text-white rounded-md'>Search</button>
                    <button className='text-white'>Advanced Search</button>
                </div>
        </div> */}
      <div className="pt-44 pb-24 bg-black space-y-5">
        <div className="hidden lg:flex px-12 justify-center items-center w-full gap-3 text-white flex-wrap">
          <select className='w-52 h-10  rounded-md bg-transparent outline-none' name="" id="">
            <option value="">Select Price Range</option>
          </select>
          <select className='w-52 h-10  rounded-md bg-transparent outline-none' name="" id="">
            <option value="">Select Language</option>
          </select>
          <select className='w-36 h-10  rounded-md bg-transparent outline-none' name="" id="">
            <option value="">Select Age</option>
          </select>
          <select className='w-52 h-10  rounded-md bg-transparent outline-none' name="" id="">
            <option value="">Select Eye Color</option>
          </select>
          <select className='w-52 h-10  rounded-md bg-transparent outline-none' name="" id="">
            <option value="">Select Hair Color</option>
          </select>
          <button className='h-10 px-12 bg-[#ff0000]  rounded-md'>Search</button>
          <button className='text-[#f00]'>Advanced Search</button>
        </div>

        <div className="flex justify-center items-center px-14">
          <div className="w-full h-60 rounded-xl bg-[#4D3A66]"></div>
        </div>

        <div className="profiles space-y-5">
            <div className="platinum flex flex-wrap justify-center items-center gap-6">
                  <Platinum/>
                  <Platinum/>
                  <Platinum/>
                  <Platinum/>
                  <Platinum/>
            </div>
            <div className="gold flex flex-wrap justify-center items-center gap-6">
                <Gold/>
                <Gold/>
                <Gold/>
                <Gold/>
                <Gold/>
            </div>
            <div className="silver flex flex-wrap justify-center items-center gap-4">
                  <Silver/>
                  <Silver/>
                  <Silver/>
                  <Silver/>
                  <Silver/>
                  <Silver/>
            </div>
            <div className="none flex flex-wrap justify-center items-center gap-3">
              <None/>
              <None/>
              <None/>
              <None/>
              <None/>
              <None/>
              <None/>
            </div>
        </div>
      </div>



    </>
  )
}

export default Dev


const Platinum = () =>{
  return(
    <div className="w-[260px] h-[450px]" style={{background:'linear-gradient(0deg, #FF0000 -51.52%, #BE1722 100%)',}}></div>
  )
}

const Gold = () =>{
  return(
    <div className="w-[260px] h-[450px]" style={{background:'linear-gradient(162.09deg, #663500 0%, #B28A4C 48.44%, #FDEDC9 100.18%, #D0AD6A 100.18%)',}}></div>
  )
}

const Silver = () =>{
  return(
    <div className="w-[220px] h-[370px]" style={{background:'linear-gradient(0deg, #FFFFFF 0%, #BEBEBE 39.28%, #C8C8C8 59.71%, #C9C9C9 69.33%, #CFCFCF 79.97%, #AAAAAA 88.25%, #9F9F9F 95%, #C8C8C8 100%)',}}></div>
  )
}

const None = () =>{
  return(
    <div className="w-[190px] h-[370px]" style={{background:'white',}}></div>
  )
}