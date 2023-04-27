import { Close } from '@mui/icons-material'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import BackendIP from '../../../../BackendIP'


function Banner() {
    const [newBanner, setNewBanner] = useState(false)
    const { username } = useSelector(state => state.user)
    const [banners, setBanners] = useState([])
    const fetchDate = () =>{
        axios.get(`${BackendIP}/banner/get-by-user`,{params:{username}}).then(res=>{
            setBanners(res.data)
        })
    }

    useEffect(() => {
      fetchDate()
      // eslint-disable-next-line
    }, [])

    const [copy, setCopy] = useState(0)
    
    const copied = (size=1) =>{
        setCopy(size)
            if(size===1){
                navigator.clipboard.writeText(`
                    <a href='https://redlightclub.net'> 
                    <img src='https://redlightclub.net/banner/banner-1.png' alt='' height='144'/>
                    </a>
                `)
            }
            else if(size===2){
                navigator.clipboard.writeText(`
                <a href='https://redlightclub.net'> 
                    <img src='https://redlightclub.net/banner/banner-2.png' alt='' height='144'/>
                </a>
                `)
            }else{
                navigator.clipboard.writeText(`
                <a href='https://redlightclub.net'> 
                    <img src='https://redlightclub.net/banner/banner-3.png' alt='' height='144'/>
                </a>
                `)
            }
    }

    return (
        <div className='space-y-5'>
            <div className="flex justify-between items-center">
                <div className="">
                    <p className='text-2xl font-bold'>My Banners</p>
                    <p className='text-xs text-[#A5A5A5]'>Lorem ipsum dolor sit</p>
                </div>
                <div className="flex justify-center items-center gap-5">
                    <input className='h-12 w-52 rounded-xl pl-3' type="text" placeholder='Search here' />
                    <button className='h-12 w-44 rounded-xl bg-[#34C38f] text-white hover:shadow-xl' onClick={setNewBanner}>Add New Banner</button>
                </div>
            </div>
            <div className="">
                <p className='font-cairo font-bold text-lg'>Choose Banner</p>
                <div className="flex gap-6 mt-4">
                    <div className="flex flex-col gap-3 justify-center items-center">
                        <div className="">
                            <img src="/banner/banner-1.png" className=' h-36 rounded-xl' alt="" />
                        </div>
                        <button className='px-4 py-3 rounded-xl bg-[#474747] text-sm font-bold text-white' onClick={()=>copied(1)}>{'</>'}{copy===1 ? 'Code Copied': 'Copy Code' } </button>
                    </div>
                    <div className="flex flex-col gap-3 justify-center items-center">
                        <div className="">
                        <img src="/banner/banner-2.png" className=' h-36 rounded-xl' alt="" />
                        </div>
                        <button className='px-4 py-3 rounded-xl bg-[#474747] text-sm font-bold text-white' onClick={()=>copied(2)}>{'</>'}{copy===2 ? 'Code Copied': 'Copy Code' } </button>
                    </div>
                    <div className="flex flex-col gap-3 justify-center items-center">
                        <div className="">
                        <img src="/banner/banner-3.png" className=' h-36 rounded-xl' alt="" />
                        </div>
                        <button className='px-4 py-3 rounded-xl bg-[#474747] text-sm font-bold text-white' onClick={()=>copied(3)}>{'</>'}{copy===3 ? 'Code Copied': 'Copy Code' } </button>
                    </div>
                </div>
            </div>
            <table className='bg-white rounded-md w-full '>
                <thead className='w-full font-bold text-sm'>

                    <tr className='w-full h-16 border-b'>
                        <th className='h-full w-[5%]  text-start'></th>
                        <th className='h-full w-[20%] text-start'>Date of Approval</th>
                        <th className='h-full w-[20%] text-start'>URL</th>
                        <th className='h-full w-[15%] text-start'>Status</th>
                        <th className='h-full w-[15%] text-start'>Credit Earned</th>
                        <th className='h-full w-[10%] text-start'>Action</th>
                    </tr>

                </thead>
                <tbody>
                    {banners.map(e=><TableRow key={e.id} {...e}  />)}
                </tbody>

            </table>
            {banners.length ===0 && <p className='text-center font-medium'>Sorry, You are not submited any banners.</p>}
            {newBanner && <NewBanner setNewBanner={setNewBanner} fetchDate={fetchDate} />}

        </div>
    )
}

export default Banner


const TableRow = ({ url, status, credit }) => {
    return (
        <tr className='w-full h-16 border-b hover:shadow-lg'>
            <td className='h-full w-[5%]  font-bold text-xs text-center'>
                <input type="checkbox" name="" id="" />
            </td>
            <td className='h-full w-[20%] font-bold text-xs'>June 1,2020, 08:22 AM</td>
            <td className='h-full w-[20%] font-bold text-xs'>{url}</td>
            {status ?
            credit ?<td className='h-full w-[15%] font-bold text-xs text-[#34C38F]'>Approve</td> : <td className='h-full w-[15%] font-bold text-xs text-[#CE0000]'>Rejected</td>
                
                :<td className='h-full w-[15%] font-bold text-xs text-[#F4B000]'>Pending</td>
            }
            <td className='h-full w-[15%] font-bold text-xs'>{credit}</td>
            <td className='h-full w-[10%] font-bold text-xs'>
                <a href={url} target="_blank" rel="noopener noreferrer">
                    <button className='bg-[#0062F4] text-white px-2 py-3 rounded-lg'>View Banner</button>
                </a>
            </td>
        </tr>
    )
}
const NewBanner = ({ setNewBanner,fetchDate }) => {
    
    const [insideClick, setInsideClick] = useState(0)
    const [outsideClick, setOutsideClick] = useState(0)
    useEffect(() => {
  
      if (outsideClick > insideClick) {
        setNewBanner(false)
        setInsideClick(0)
        setOutsideClick(0)
      }
      // eslint-disable-next-line
    }, [outsideClick])



    const { username } = useSelector(state => state.user)
    const [url, setUrl] = useState('')

    const isValidUrl = urlString=> {
        try { 
            return Boolean(new URL(urlString)); 
        }
        catch(e){ 
            return false; 
        }
    }
    useEffect(() => {
        navigator.clipboard.readText().then(res=>isValidUrl(res)&& setUrl(res))
    }, [])
    


    const createBanner = () => {
        axios.post(`${BackendIP}/banner`, { username, url }).then(res=>{
            setNewBanner(false)
            window.alert('Url is Submitted')
            fetchDate()
        }).catch(err=>{
            window.alert(err.message)
        })
    }
    return (
        <div className="fixed -top-5 left-0 h-screen w-full bg-black/30 z-50 flex justify-center items-center p-3" onClick={()=>{setOutsideClick(outsideClick+1)}}>
            <form className="max-w-[592px]  rounded-lg bg-white w-full p-5 space-y-10" onSubmit={e=>{e.preventDefault();createBanner()}} onClick={()=>{setInsideClick(insideClick+1)}}>
                <Close className='text-[#A5A5A5] float-right' onClick={() => setNewBanner(false)} />
                <p className='text-black text-sm font-bold text-center'>Paste Link</p>
                <div className="px-0 md:px-5">
                    <input className='w-full h-12  border bg-[#F5F5F5] rounded-md pl-3' type="url" required value={url} onChange={e => setUrl(e.target.value)} />
                </div>
                <div className="flex justify-center items-center">
                    <button className='w-[250px] h-12 rounded-lg bg-[#34C38F] text-white hover:shadow-xl' type='submit'>Add new banner</button>
                </div>
                <p className='text-center text-xs'>Please note that all new banner requests and are approved after  inspection from the admin side and may take few days.</p>

                <Link to={'/terms-and-conditions'} >
                    <p className='text-center text-[#6418C3] mt-5'>Terms and conditions</p>
                </Link>
            </form>
        </div>
    )
}