

import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Main from '../components/Main'
import Menu from '../components/Menu'

import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Analatics from './components/Analatics'
import Blacklisted from './components/Blacklisted'


import Earn from './components/Earn'
import EditAds from './components/EditAds'

import SettingsMenu from './components/SettingsMenu'



import HomeIcon from '../../../asset/icons/sidebar/home.js'
// import BlacklistedProfileIcon from '../../../asset/icons/sidebar/blacklisted.js'
import ProfileIcon from '../../../asset/icons/sidebar/profile.js'
import AuctionIcon from '../../../asset/icons/sidebar/Auction.js'
// import PaymentHistoryIcon from '../../../asset/icons/sidebar/payment-history.js'
import BidPaymentsIcon from '../../../asset/icons/sidebar/bid-Payment.js'
import AdsAnalyticsIcon from '../../../asset/icons/sidebar/ads-analytics.js'

import BannerIcon from '../../../asset/icons/sidebar/banner.js'

import SupportIcon from '../../../asset/icons/sidebar/support.js'
import ReportedIssueIcon from '../../../asset/icons/sidebar/reported-issue.js'

import EarnCredit from '../../../asset/icons/sidebar/earn-credit.js'
import LiveCamIcon from '../../../asset/icons/sidebar/live-cam'
import SexToysIcon from '../../../asset/icons/sidebar/sex-toys'
import affiliativeIcon from '../../../asset/icons/sidebar/affiliative'
import AuctionProgress from './components/AuctionProgress'
import LiveCam from './components/LiveCam'
import Banner from './components/Banner'
import Support from './components/Support'
import ReportIssues from './components/ReportIssues'
import PaymentsHistory from './components/PaymentsHistory'
import Profiles from './components/Profiles'
import ViewAds from './components/ViewAds'
import SexToys from './components/SexToys'
import AvailableCredit from './components/AvailableCredit'

import sidebarImage from '../../../asset/images/dashboard/user/user-sidebar.png'
import Home from './components/Home'
import axios from 'axios'
import BackendIP from '../../../BackendIP'
import { useSelector } from 'react-redux'

import DueAlert from './components/DueAlert'
import Affiliative from './components/Affiliative'




function UserDashboard() {
  const { menu } = useParams()
  const [showBillMenu, setShowBillMenu] = useState(false)
  const {username} = useSelector(state=>state.user)
  const [user, setUser] = useState({})
  useEffect(() => {
    axios.get(`${BackendIP}/user/get-a-user`, { params: { username } }).then(res => {
      setUser(res.data)
  })
  // eslint-disable-next-line
  }, [])
  
  return (
    <>
      <div className='flex'>
        <Sidebar >

          <div className="space-y-5" style={{boxShadow:'4px 10px 18px -1px rgba(0,0,0,0.14)'}}>
            <Menu Icon={HomeIcon} url='home' title={'Home'} />
            <Menu Icon={ProfileIcon} url='Profiles' title={'Profiles'} />
            <Menu Icon={AuctionIcon} url='auction-progress' title={'Top Spot Live Auctions'} />
            <div style={{margin:'0px'}} onClick={setShowBillMenu}>
              <Menu Icon={BidPaymentsIcon} url='payment-history' title={'Billing'}  />
            </div>
            {
              showBillMenu && 
              <div className="pl-5" style={{margin:'2px'}}>
                <Menu url='payment-history' title={'Payment History'} />
                <Menu url='available-credit' title={'Available Credit'} />
              </div>
            }

            <Menu Icon={AdsAnalyticsIcon} url='ads-analytics' title={'Ads Analytics'} />
            <Menu Icon={EarnCredit} url='earn-credit' title={'Earn Credit'} />
            <Menu Icon={LiveCamIcon} url='live-cam' title={'Live Cam'} />
            <Menu Icon={SexToysIcon} url='sex-toys' title={'Sex Toys'} />
            <Menu Icon={BannerIcon} url='banner' title={'Banner'} />
            <Menu Icon={affiliativeIcon} url={'affiliative'} title={'Affiliative'} />
            <Menu Icon={SupportIcon} url='support' title={'Support'} />
            <Menu Icon={ReportedIssueIcon} url='reported-issues' title={'Reported Issues'} />
            <Link to={'/dashboard/earn-credit'}>
              <div className="flex justify-center cursor-pointer">
                <img src={sidebarImage} className='w-[238px]' alt="" />
              </div>
            </Link>
            {/* <Menu Icon={BlacklistedProfileIcon} url='blacklisted'      title={'Blacklisted Profiles'} /> */}
          </div>
        </Sidebar>

        <div className="w-[calc(100%-5rem)] lg:w-[calc(100%-280px)] min-h-screen">
          <Navbar />
          <Main >
            {(menu === undefined || menu === 'home') && <Home />}
            {menu === 'Profiles' && <Profiles />}
            {menu === 'view' && <ViewAds />}

            {menu === 'auction-progress' && <AuctionProgress />}
            {menu === 'live-cam' && <LiveCam />}
            {menu === 'banner' && <Banner />}
            {menu === 'support' && <Support />}
            {menu === 'reported-issues' && <ReportIssues />}
            {menu === 'payment-history' && <PaymentsHistory />}
            {menu === 'available-credit' && <AvailableCredit />}
            {menu === 'sex-toys' && <SexToys />}
            {menu === 'ads-analytics' && <Analatics />}
            {menu === 'earn-credit' && <Earn />}

            {menu === 'settings' && <SettingsMenu />}
            {menu === 'blacklisted' && <Blacklisted />}
            {menu === 'edit-ads' && <EditAds />}
            {menu === 'affiliative' && <Affiliative/>}
            

          </Main>
        </div>
      </div>
      {user.due && <DueAlert {...user}/>}
      
    </>
  )
}

export default UserDashboard





