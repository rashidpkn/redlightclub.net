import React from 'react'

function Description({intro}) {
  return (
    <div className="Description flex justify-center px-5 md:px-0">
        <div className=" max-w-[1272px] w-full space-y-3">
          
          <div className="w-full flex justify-between items-center">
            <p className='text-[red] text-lg font-bold'>Description</p>
            <button className=''>Report User</button>
          </div>
            <div className="w-full h-[276px] bg-white/20 p-9">
              {intro}
            </div>
        </div>
      </div>
  )
}

export default Description