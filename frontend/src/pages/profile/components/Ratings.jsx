import React from 'react'

function Ratings() {
  return (
    <div className="w-[600px] space-y-3">
          <p className='text-[red] text-lg font-bold'>Reviews</p>
          <div className="w-full bg-white/20 h-[250px] flex flex-col justify-between p-9 text-lg">
              
              <div className="w-full flex justify-between items-center ">
                <p>Service</p>
                <div className="w-[280px] h-[11px] bg-white rounded-full">
                  <div className="w-[50%] h-full bg-[red] rounded-full"></div>
                </div>
              </div>

              <div className="w-full flex justify-between items-center ">
                <p>Communication</p>
                <div className="w-[280px] h-[11px] bg-white rounded-full">
                  <div className="w-[50%] h-full bg-[red] rounded-full"></div>
                </div>
              </div>

              <div className="w-full flex justify-between items-center ">
                <p>Availabilility</p>
                <div className="w-[280px] h-[11px] bg-white rounded-full">
                  <div className="w-[50%] h-full bg-[red] rounded-full"></div>
                </div>
              </div>

              <div className="w-full flex justify-between items-center ">
                <p>Overall</p>
                <div className="w-[280px] h-[11px] bg-white rounded-full">
                  <div className="w-[50%] h-full bg-[red] rounded-full"></div>
                </div>
              </div>

          </div>
        </div>
  )
}

export default Ratings