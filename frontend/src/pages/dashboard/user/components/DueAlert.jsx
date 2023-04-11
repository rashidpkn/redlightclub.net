import dueImage from '../../../../asset/images/dashboard/user/due.png'

const DueAlert = () =>{
    return(
      <div className="fixed top-0 left-0 z-50 h-screen w-full bg-black/30 flex justify-center items-center p-3">
          <div className="max-w-[1114px] w-full  bg-red-800 p-5 flex flex-col justify-center items-center gap-5 text-white text-center rounded-xl">
              <p className='text-xl font-bold'>Looks like you have a Bid Payment Due!</p>
              <img src={dueImage} className='h-64' alt="" />
              <p className='text-sm'>You may have not completed the payment for the bid on 12/04/2023 for the Platinum Position 1. <br />
                Please ensure to complete payment to access the website.</p>
                <p className='font-bold'>Balance Due :  AED 280</p>
                <button className='px-4 py-3 bg-[#34C38F] rounded-xl'>Complete payment</button>
                <p className='text-xs'>*if you belive this is a mistake or for any other assistance please contact our customer service</p>
  
          </div>
        </div>
    )
  }

export default DueAlert