import React from 'react'

function Comments({review}) {
  return (
    <div className="Comments flex justify-center">
    <div className=" max-w-[1272px] w-full space-y-3">
      <p className='text-[red] text-lg font-bold'>Comments</p>
      <p>Add your comments</p>
      <div className="flex justify-center items-center w-full h-[96px] bg-white/20">
        <p><span className='font-bold text-[red]'>Sign in</span>  or <span className='font-bold text-[red]'>Sign up</span>  to add your comment</p>
      </div>
      <div className="space-y-5 mt-5">
        {review?.map(e => <div className='w-full space-y-3'>
          <p>{e?.username}</p>
          <p>{e?.desc}</p>
        </div>)}

      </div>
    </div>
  </div>
  )
}

export default Comments