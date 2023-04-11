import React from 'react'

function Screen3() {
    const heading = 'Lorem ipsum dolor sit amet consectetur. Ipsum urna dis natoque in ullamcorper. Suspendisse vivamus sapien diam nisl'.split(' ')
  return (
    <div className='p-[5%] bg-[#1E1E1E] text-white space-y-5'>
        <h2 className='text-3xl lg:text-6xl text-justify lg:text-start font-times'>
            {heading.map((e,index)=><p key={index} className='inline-block hover:text-red-500 cursor-pointer'>{e} &nbsp;</p>)}
        </h2>
        <div className="flex gap-5 text-justify flex-col md:flex-row">
            <div className="flex-1">
                <p>Lorem ipsum dolor sit amet consectetur. Vulputate arcu ornare urna nisi adipiscing penatibus ultrices duis. Magnis eget mauris imperdiet a scelerisque lacus velit cursus. Ut morbi dui diam velit sed elit. Dui sit auctor leo luctus erat pulvinar pretium arcu.</p>
            </div>
            <div className="flex-1">
            <p>Lorem ipsum dolor sit amet consectetur. Vulputate arcu ornare urna nisi adipiscing penatibus ultrices duis. Magnis eget mauris imperdiet a scelerisque lacus velit cursus. Ut morbi dui diam velit sed elit. Dui sit auctor leo luctus erat pulvinar pretium arcu.</p>
            </div>
            <div className="flex-1">
            <p>Lorem ipsum dolor sit amet consectetur. Vulputate arcu ornare urna nisi adipiscing penatibus ultrices duis. Magnis eget mauris imperdiet a scelerisque lacus velit cursus. Ut morbi dui diam velit sed elit. Dui sit auctor leo luctus erat pulvinar pretium arcu.</p>
            </div>
        </div>
    </div>
  )
}

export default Screen3