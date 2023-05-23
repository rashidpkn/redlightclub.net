import React from 'react'
import img4 from '../../../asset/images/home/screen4.png'

function Screen4() {
  return (
    <div className='min-h-screen h-full w-full flex justify-center items-center gap-16 bg-[#1E1E1E]'>
                <img src={img4} width={495} height={545} alt="" />
                <div className="">
                    <h2 className='text-[red] text-5xl'>Lorem ipsum dolor sit <br /> amet consectetur.</h2>
                    <p className='w-[631px] text-white text-lg '>
Lorem ipsum dolor sit amet consectetur. Enim leo venenatis lacinia 
amet at sit diam. Posuere nulla mauris est odio odio nibh lectus risus. 
Blandit ac montes mauris mattis cursus at facilisis aenean. Imperdiet 
integer neque rutrum ullamcorper nibh adipiscing quam. Tortor in 
faucibus nunc vel et. Bibendum vitae tellus luctus viverra diam nulla 
commodo diam. Id sed lorem duis morbi morbi vestibulum nisi. 
Pharetra eget viverra amet magna. Enim nisi tempor odio vel non 
venenatis. Pretium pellentesque ut facilisis senectus erat libero lacus 
pharetra diam. Velit feugiat enim pulvinar congue venenatis 
imperdiet id cras euismod.
                        </p>
                </div>
    </div>
  )
}

export default Screen4