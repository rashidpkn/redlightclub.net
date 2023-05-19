import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import BackendIP from '../../BackendIP'
import Photos from './components/Photos'
import ProfileDetails from './components/ProfileDetails'
import Rate from './components/Rate'
import Description from './components/Description'
import SocialMedia from './components/SocialMedia'
import Ratings from './components/Ratings'
import Comments from './components/Comments'

import loading_animation from './components/loading-animation.gif'

function Profile() {
  const [loading, setLoading] = useState(true)
  const { id } = useParams()
  const [ads, setAds] = useState({})
  const navigate = useNavigate()
  const [adsIds, setAdsIds] = useState([])
  const [previosAds, setPreviosAds] = useState([])

  useEffect(() => {
    axios.get(`${BackendIP}/ads/get-all-ads`).then(res => {
      setAdsIds(res.data?.map(e => e.id))
    })

  }, [])

  const nextAds = () => {
    setLoading(true)
    setPreviosAds([...previosAds, id])
    navigate('/profile/' + adsIds[Math.floor(Math.random() * adsIds.length)])
  }

  const previousAds = () => {
    if (previosAds.length !== 0) {
      setLoading(true)
      navigate('/profile/' + previosAds.pop())
      setPreviosAds(previosAds)
    } else {
      window.alert("There is no previous ads Please select next button")
    }
  }


  useEffect(() => {
    if (isNaN(id)) {
      window.alert("Please Provide id")
      navigate('/filter')
    } else axios.get(`${BackendIP}/ads/get-by-id`, { params: { id: Number(id) } }).then(res => {
      if (Object.keys(res.data).length !== 0) {
        setAds(res.data);
        setLoading(false)
        // eslint-disable-next-line
      } else throw 'Profile not found'

    }).then(res => {
      axios.post(`${BackendIP}/analytics/profile`, { id })
    }).catch(err => {
      window.alert("Profile is not found")
      navigate('/filter')
    })
    // eslint-disable-next-line
  }, [id])

  return (
    <>
      <div className="md:pt-44 pb-24 bg-black space-y-5 text-white">
        <div className="w-full h-16 bg-[red] px-8 flex justify-between items-center">
          <button onClick={previousAds}>Previous</button>
          <button onClick={nextAds}>Next</button>
        </div>
        <div className="w-full h-20 bg-[red] flex md:hidden justify-between items-center px-8">
                <p className="text-xl font-bold capitalize">{ads.adsTitle}</p>
                <p>{ads.updatedAt}</p>
            </div>
        <div className="flex flex-wrap justify-center gap-3 ">
          <Photos {...ads} />
          <ProfileDetails {...ads} />
        </div>
        <Rate {...ads} />
        <Description {...ads} />
        <div className="flex flex-wrap justify-center gap-14 px-5 md:px-0">
          <SocialMedia />
          <Ratings />
        </div>

        <Comments {...ads} />

        <div className="w-full h-16 bg-[red] px-8 flex justify-between items-center">
          <button onClick={previousAds}>Previous</button>
          <button onClick={nextAds}>Next</button>
        </div>

      </div>
      {
        loading &&
      <div className="fixed top-0 left-0 h-screen w-full bg-black/50  z-50 flex justify-center items-center text-white">
        <img width={200} src={loading_animation}  alt="" />
      </div>
      }
    </>
  )
}

export default Profile