import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import BackendIP from '../../BackendIP'
import Photos from './components/Photos'
import ProfileDetails from './components/ProfileDetails'
import Rate from './components/Rate'
import Description from './components/Description'
import SocialMedia from './components/SocialMedia'
import Ratings from './components/Ratings'
import Comments from './components/Comments'
function Profile() {
  const { id } = useParams()
  const [ads, setAds] = useState({})
  const navigate = useNavigate()

  useEffect(() => {
    if (isNaN(id)) {
      window.alert("Please Provide id")
      navigate('/filter')
    } else axios.get(`${BackendIP}/ads/get-by-id`, { params: { id: Number(id) } }).then(res => {
      if (Object.keys(res.data).length !== 0) {
        setAds(res.data);
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
    <div className="pt-44 pb-24 bg-black space-y-5 text-white">
      <div className="w-full h-16 bg-[red] px-8 flex justify-between items-center">
        <Link to={`/profile/${Number(id)-1}` }> <button>Previous</button></Link>
        <Link to={`/profile/${Number(id)+1}` }> <button>Next</button></Link>
      </div>
      <div className="flex justify-center gap-3">
        <Photos {...ads} />
        <ProfileDetails {...ads} />
      </div>
      <Rate {...ads} />
      <Description {...ads} />
      <div className="flex justify-center gap-14">
        <SocialMedia />
        <Ratings />
      </div>

     <Comments {...ads} />

     <div className="w-full h-16 bg-[red] px-8 flex justify-between items-center">
     <Link to={`/profile/${Number(id)-1}` }> <button>Previous</button></Link>
        <Link to={`/profile/${Number(id)+1}` }> <button>Next</button></Link>
      </div>

    </div>
  )
}

export default Profile