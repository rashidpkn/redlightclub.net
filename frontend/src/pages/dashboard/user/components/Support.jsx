import { Close } from '@mui/icons-material'
import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import BackendIP from '../../../../BackendIP'
import { useEffect } from 'react'

function Support() {
    const [newTicket, setNewTicket] = useState(false)
    const { username} = useSelector(state => state.user)
    const [ticket, setTicket] = useState([])

    const fetchData = () =>{
        axios.get(`${BackendIP}/support/get-by-user`,{params:{username}}).then(res=>{
            setTicket(res.data)
          })
    }


    useEffect(() => {
      fetchData()
    // eslint-disable-next-line
    }, [])
    

    return (
        <div className='space-y-5'>
            <div className="flex justify-between items-center">
                <div className="">
                    <p className='text-2xl font-bold'>Support</p>
                    <p className='text-xs text-[#A5A5A5]'>Check the status of any grievances raised by you or raise a ticket for a new grievance </p>
                </div>
                <div className="flex justify-center items-center gap-5">
                    <input className='h-12 w-52 rounded-xl pl-3' type="text" placeholder='Enter Ticket Number' />
                    <button className='h-12 w-44 rounded-xl bg-[#34C38f] text-white' onClick={setNewTicket}>Create New Ticket</button>
                </div>
            </div>
            <table className='bg-white rounded-md w-full '>
                <thead className='w-full font-bold text-sm'>
                    <tr className='w-full h-16 border-b'>
                        <th className='h-full w-[5%]  text-start'></th>
                        <th className='h-full w-[20%] text-start'>Ticket Number</th>
                        <th className='h-full w-[20%] text-start'>Subject</th>
                        <th className='h-full w-[15%] text-start'>Ticket Type</th>
                        <th className='h-full w-[15%] text-start'>Status</th>
                        <th className='h-full w-[10%] text-start'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        ticket.map(e=><TableRow {...e}/>)
                    }
                    
                </tbody>


            </table>
            {newTicket && <NewTicket setNewTicket={setNewTicket} fetchData={fetchData} />}
        </div>
    )
}

export default Support

const NewTicket = ({ setNewTicket,fetchData }) => {
    const { username, email } = useSelector(state => state.user)
    const [ticket, setTicket] = useState({
        username,
        email,
        type: '',
        subject: '',
        detail: ''

    })

    const createTicket = () =>{
        axios.post(`${BackendIP}/support`,ticket).then(res=>{
            window.alert("Your ticket is created")
            setNewTicket(false)
            fetchData()
        })
    }

    return (
        <div className="fixed -top-5 left-0 h-screen w-full bg-black/30 z-50 flex justify-center items-center px-3">
            <form className="max-w-[736px] w-full  bg-white rounded-lg p-5 space-y-5" onSubmit={e=>{e.preventDefault();createTicket()}}>
                <div className="flex justify-between items-center">
                    <p className='text-2xl font-bold'>Please Provide the below details</p>
                    <Close  onClick={() => { setNewTicket(false) }}/>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center gap-10 ">
                    <div className="w-full md:w-1/2">
                        <p className='text-[#C7C7C7] font-bold text-sm'>Name</p>
                        <input type="text" className='w-full h-12 bg-[#F5f5f5] rounded-md pl-3 capitalize' readOnly value={username} />
                    </div>
                    <div className="w-full md:w-1/2">
                        <p className='text-[#C7C7C7] font-bold text-sm'>Email</p>
                        <input type="text" className='w-full h-12 bg-[#F5f5f5] rounded-md pl-3 ' readOnly value={email } />
                    </div>
                </div>
                <p className='text-2xl font-bold'>General Info</p>
                <div className="w-full md:w-1/2">
                    <p className='text-[#C7C7C7] font-bold text-sm'>Ticket Type</p>
                    <select type="text" className='w-full h-12 bg-[#F5f5f5] rounded-md pl-3 ' value={ticket.type} onChange={e=>setTicket({...ticket,type:e.target.value})}>
                        <option value="Query">Query</option>
                        <option value="Data Correction request">Data Correction request</option>
                        <option value="Issue">Issue</option>
                        </select>
                </div>
                <div className="w-full">
                    <p className='text-[#C7C7C7] font-bold text-sm'>Subject</p>
                    <input type="text" className='w-full h-12 bg-[#F5f5f5] rounded-md pl-3 ' value={ticket.subject}  onChange={e=>setTicket({...ticket,subject:e.target.value})}/>
                </div>

                <div className="w-full">
                    <p className='text-[#C7C7C7] font-bold text-sm'>details</p>
                    <textarea type="text" className='w-full h-32 bg-[#F5f5f5] rounded-md p-3 ' value={ticket.detail} onChange={e=>setTicket({...ticket,detail:e.target.value})} />
                </div>
                
                <button className='w-40 h-12 rounded-xl bg-[#34C38F] text-white text-sm font-bold' type='submit'>Submit</button>

            </form>
        </div>
    )
}


const TableRow = ({ id, subject, type, status, }) => {
    return (
        <tr className='w-full h-16 border-b hover:shadow-lg'>
            <td className='h-full w-[5%]  font-bold text-xs text-center'>
                <input type="checkbox" name="" id="" />
            </td>
            <td className='h-full w-[20%] font-bold text-xs'>{id}</td>
            <td className='h-full w-[20%] font-bold text-xs'>{subject}</td>
            <td className='h-full w-[15%] font-bold text-xs'>{type}</td>
            <td className='h-full w-[15%] font-bold text-xs'>{status?'Resolve':'Open'}</td>
            <td className='h-full w-[10%] font-bold text-xs'>
                <button className='bg-[#0062F4] text-white px-2 py-3 rounded-lg'>View Details</button>
            </td>
        </tr>
    )
}