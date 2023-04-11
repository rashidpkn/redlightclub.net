import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BackendIP from '../../../BackendIP'

// function Screen5() {
// const [ads, setAds] = useState([])
// const fetchData = () => {
//     axios.get(`${BackendIP}/ads/get-all-ads`).then(res => {
//         setAds(res.data.sort((a, b) => a.id - b.id))
//     })
// }

// useEffect(() => {
//     fetchData()
// }, [])

//     return (
//         <div className="h-screen w-full bg-[#1e1e1e]  border-[white] hidden lg:flex gap-5 p-3 overflow-hidden sticky top-0" >
//             <div className="h-full w-full flex justify-between gap-5 overflow-auto relative px-5">
//                 <div className="h-full w-1/2 sticky top-0 flex gap-5">

//                     <div className="h-full w-[15%] relative">
//                         <p className='rotate-[270deg] text-8xl text-red-600 absolute bottom-28 -left-[7.5rem] h-max w-max'>{'Layana'}</p>
//                     </div>

//                     <div className="h-full w-[60%]">
//                         <img src="https://cm.dubaiescortstars.com/files/questionary/18720/thumbs/0x650/2f5455e83c82.jpeg?1669225963" className='h-full w-full object-cover' alt="" />
//                     </div>

//                     <div className="h-full w-[15%] relative ">
//                         <p className='rotate-[270deg] text-3xl text-red-600 absolute top-28 -right-5 h-max w-max '>Red Light Club</p>
//                     </div>
//                 </div>

//                 <div className="h-full w-1/4 sticky top-0 flex justify-center items-end text-justify text-white">
//                     <p>
//                         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum autem earum quisquam debitis obcaecati vel in reprehenderit, tempora, nihil qui rem ad perferendis, alias ab repellat corrupti explicabo blanditiis laboriosam!
//                         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad cum labore inventore beatae enim aliquam, ut aspernatur perspiciatis sequi, aliquid vel quos neque minus quis esse, atque eaque. Quod, reiciendis.
//                         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus neque laudantium tempore odit velit porro quisquam rem error minus beatae. Quasi temporibus provident saepe laboriosam voluptates error quas repellat cum.
//                     </p>
//                 </div>
//                 <div className="h-full w-1/4 space-y-5 ">
// <Profile {...ads.find(e => e.id === 2)} />
// <Profile {...ads.find(e => e.id === 3)} />
// <Profile {...ads.find(e => e.id === 4)} />
// <Profile {...ads.find(e => e.id === 5)} />
// <Profile {...ads.find(e => e.id === 6)} />
// <Profile {...ads.find(e => e.id === 7)} />
// <Profile {...ads.find(e => e.id === 8)} />
// <Profile {...ads.find(e => e.id === 11)} />
// <Profile {...ads.find(e => e.id === 12)} />
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Screen5











function Screen5({ scroll }) {

    const [ads, setAds] = useState([])
    const fetchData = () => {
        axios.get(`${BackendIP}/ads/get-all-ads`).then(res => {
            setAds(res.data.sort((a, b) => a.id - b.id))
        })
    }

    useEffect(() => {
        fetchData()
    }, [])


    const [mainScroll, setMainScroll] = useState(false)
    return (
        <div className={`h-screen  bg-[#1e1e1e] overflow-hidden sticky top-0 space-y-5 text-white `}

        >
            <div className={`h-full w-full ${mainScroll && scroll === 100 ? 'overflow-auto' : 'overflow-hidden'}  sc`} onScroll={e => {
                var { target } = e
                var percent = target.scrollTop / (target.scrollHeight - target.clientHeight) * 100
                if ((percent === 100)) {
                    setMainScroll(false)
                } else {
                    setMainScroll(true)
                }
            }}>
                <Screen bgColor={'red'} setMainScroll={setMainScroll} scroll={scroll} mainScroll={mainScroll} profile={[2,4,5,6,7,8,11,12]} ads={ads} img={'https://cm.dubaiescortstars.com/files/questionary/18720/thumbs/0x650/2f5455e83c82.jpeg'} location='Dubai' />
                <Screen bgColor={'white'} setMainScroll={setMainScroll} scroll={scroll} mainScroll={mainScroll} profile={[14,17,18,19,20]} ads={ads} img={'https://cm.dubaiescortstars.com/files/questionary/19678/thumbs/0x650/2796be892082.jpeg'} location='Thailand' />
            </div>
        </div>
    )
}

export default Screen5


function Screen({ setMainScroll, mainScroll, ads, img, location, scroll,profile,bgColor }) {

    return (
        <div className={`${bgColor==='red'?'text-[#E3E3E3] bg-[#CA3A31]' : 'text-[#CA3A31] bg-[#E3E3E3]'} px-5 sticky top-0 flex h-full w-full space-x-5 overflow-auto sc  ${mainScroll ? 'overflow-hidden' : 'overflow-auto'}`} onScroll={e => {
            var { target } = e
            var percent = target.scrollTop / (target.scrollHeight - target.clientHeight) * 100
            if (percent === 100 || percent===0) {
                setMainScroll(true)
            } else {
                setMainScroll(false)
            }
        }}>

            <div className="sticky top-0 h-full w-3/4 flex gap-5 ">
                <div className="h-full w-[65%]  flex font-times">
                    <div className="w-[20%] h-full relative">
                        <p className='rotate-[270deg] text-8xl  absolute bottom-44 -left-[4.5rem] h-max w-max'>{location}</p>
                    </div>
                    <div className="w-[75%] h-full ">
                        <img src={img} className='h-full w-full object-cover object-top' alt="" />
                    </div>
                    <div className="w-[5%] h-full relative">
                        <p className='rotate-[270deg] text-3xl  absolute top-28 -right-[5rem] h-max w-max '>Red Light Club</p>
                    </div>
                </div>

                <div className="h-full w-[35%]  flex items-end">
                    <p className='text-justify pb-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ab, modi eaque alias minima, similique laboriosam aliquid quis, facere eum praesentium doloribus magni totam omnis pariatur recusandae. Accusantium, excepturi possimus.</p>
                </div>
            </div>

            <div className={`h-full w-1/4 space-y-5 ${scroll === 100 ? '' : 'overflow-hidden'} sc`} >
                {profile.map(ev=><Profile key={ev} {...ads.find(e => e.id === ev)} />)}
                
            </div>
        </div>
    )
}

const Profile = ({ profilePhoto, adsTitle, location, id }) => {
    const navigate = useNavigate()
    return (
        <div className=" h-1/2" onClick={() => navigate(`profile/${id}`)}>
            <img src={`${profilePhoto}`} className='h-3/4 w-full object-cover object-top' alt="" />
            <div className="flex flex-col justify-between w-full h-1/4 p-3">
                <p className='text-2xl'>{adsTitle}</p>
                <p className=''>{location}</p>
            </div>
        </div>
    )
}