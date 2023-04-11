import { Close } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'

function Login({setClose}) {
    return (
        <div className="fixed inset-0 m-auto h-48 lg:w-[600px] border bg-white z-50 rounded-xl p-5 space-y-5">
            <div className="w-full  flex items-center justify-between text-xl border-b py-3">
                <span>Please Login First</span>
                <Close onClick={()=>setClose(false)} />
            </div>
            <div className="w-full  flex flex-col gap-5">
                <p>You need to Log in first  for </p>
            </div>
            <div className="w-full  ">
                <Link to={'/auth'}>
                    <button className="border px-3 py-1 float-right rounded-lg border-[#e8b7e5]">Login</button>
                </Link>
            </div>
        </div>
    )
}

export default Login