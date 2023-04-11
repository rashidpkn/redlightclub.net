import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSocialMedia } from '../../../redux/slice/adsSlice'
import { setDisableNext, setError } from '../../../redux/slice/utilSlice'

function Q4() {
    const { video, website, instagram, twitter, telegram, facebook, tiktok } = useSelector(state => state.ads.socialMedia)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setError(""))
        dispatch(setDisableNext(false))
        // eslint-disable-next-line
    }, [])

    return (
        <div className='flex flex-col justify-center items-center gap-5 lg:gap-10 h-full'>
            <div className=" flex gap-5 flex-col lg:flex-row">
                <div className="video flex flex-col">
                    <input value={video} onChange={e => dispatch(setSocialMedia({ type: 'video', value: e.target.value }))} id='video' className='h-10 w-72 md:w-64 bg-transparent border-b outline-none' placeholder='Video Url' type="text" />
                </div>
                <div className="website flex flex-col">
                    <input value={website} onChange={e => dispatch(setSocialMedia({ type: 'website', value: e.target.value }))} id='website' className='h-10 w-72 md:w-64 bg-transparent border-b outline-none' placeholder='Website' type="text" />
                </div>
            </div>

            <div className=" flex gap-5 flex-col lg:flex-row">
                <div className="Instargram flex flex-col">
                    <input value={instagram} onChange={e => dispatch(setSocialMedia({ type: 'instagram', value: e.target.value }))} id='Instargram' className='h-10 w-72 md:w-64 bg-transparent border-b outline-none' placeholder='Instagram' type="text" />
                </div>
                <div className="Twitter flex flex-col">
                    <input value={twitter} onChange={e => dispatch(setSocialMedia({ type: 'twitter', value: e.target.value }))} id='Twitter' className='h-10 w-72 md:w-64 bg-transparent border-b outline-none' placeholder='Twitter' type="text" />
                </div>
            </div>

            <div className=" flex gap-5 flex-col lg:flex-row">
                <div className="Telegram flex flex-col">
                    <input value={telegram} onChange={e => dispatch(setSocialMedia({ type: 'telegram', value: e.target.value }))} id='Telegram' className='h-10 w-72 md:w-64 bg-transparent border-b outline-none' type="text" placeholder='Telegram' />
                </div>
                <div className="facebook flex flex-col">
                    <input value={facebook} onChange={e => dispatch(setSocialMedia({ type: 'facebook', value: e.target.value }))} id='facebook' className='h-10 w-72 md:w-64 bg-transparent border-b outline-none' type="text" placeholder='Facebook' />
                </div>
            </div>

            <div className="Tik Tok flex flex-col">
                <input value={tiktok} onChange={e => dispatch(setSocialMedia({ type: 'tiktok', value: e.target.value }))} id='Tik Tok' className='h-10 w-72 md:w-64 bg-transparent border-b outline-none' type="text" placeholder='Tik Tok' />
            </div>
        </div>
    )
}

export default Q4