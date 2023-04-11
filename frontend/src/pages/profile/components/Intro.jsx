import React from 'react'

function Intro({ads}) {
  return (
    <p className='mt-3 w-full h-28 overflow-x-auto  text-sm cursor-move text-[#010315] font-medium sb'>{ads.intro}</p>
  )
}

export default Intro