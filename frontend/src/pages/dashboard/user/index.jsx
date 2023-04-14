

import React from 'react'
import { useParams } from 'react-router-dom'
import Main from '../components/Main'
import Menu from '../components/Menu'

import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Analatics from './components/Analatics'
import Blacklisted from './components/Blacklisted'

import Comments from './components/Comments'
import Earn from './components/Earn'
import EditAds from './components/EditAds'
import HomeMenu from './components/HomeMenu'
import Manage from './components/Manage'
import SettingsMenu from './components/SettingsMenu'
import VerifyAds from './components/VerifyAds'


import HomeIcon from '../../../asset/icons/sidebar/home.js'
// import BlacklistedProfileIcon from '../../../asset/icons/sidebar/blacklisted.js'
import ProfileIcon from '../../../asset/icons/sidebar/profile.js'
import AuctionIcon from '../../../asset/icons/sidebar/Auction.js'
import PaymentHistoryIcon from '../../../asset/icons/sidebar/payment-history.js'
import BidPaymentsIcon from '../../../asset/icons/sidebar/bid-Payment.js'
import AdsAnalyticsIcon from '../../../asset/icons/sidebar/ads-analytics.js'

import BannerIcon from '../../../asset/icons/sidebar/banner.js'

import SupportIcon from '../../../asset/icons/sidebar/support.js'
import ReportedIssueIcon from '../../../asset/icons/sidebar/reported-issue.js'

import EarnCredit from '../../../asset/icons/sidebar/earn-credit.js'
import LiveCamIcon from '../../../asset/icons/sidebar/live-cam'
import SexToysIcon from '../../../asset/icons/sidebar/sex-toys'

import AuctionProgress from './components/AuctionProgress'
import LiveCam from './components/LiveCam'
import Banner from './components/Banner'
import Support from './components/Support'
import ReportIssues from './components/ReportIssues'
import PaymentsHistory from './components/PaymentsHistory'
import Profiles from './components/Profiles'
import ViewAds from './components/ViewAds'
import SexToys from './components/SexToys'

// import DueAlert from './components/DueAlert'




function UserDashboard() {
  const { menu } = useParams()

  return (
    <>
      <div className='flex'>
        <Sidebar >
          
          <div className="space-y-5">
            <Menu Icon={HomeIcon}               url='home'             title={'Home'} />
            <Menu Icon={ProfileIcon}            url='Profiles'         title={'Profiles'} />
            <Menu Icon={AuctionIcon}            url='auction-progress' title={'Auction In Progress'} />
            <Menu Icon={PaymentHistoryIcon}     url='payment-history'  title={'Payment History'} />
            <Menu Icon={BidPaymentsIcon}        url='billing'          title={'Billing'} />
            <Menu Icon={AdsAnalyticsIcon}       url='ads-analytics'    title={'Ads Analytics'} />
            <Menu Icon={EarnCredit}             url='earn-credit'      title={'Earn Credit'} />
            <Menu Icon={LiveCamIcon}            url='live-cam'         title={'Live Cam'} />
            <Menu Icon={SexToysIcon}            url='sex-toys'         title={'Sex Toys'} />
            <Menu Icon={BannerIcon}             url='banner'           title={'Banner'} />
            <Menu Icon={SupportIcon}            url='support'          title={'Support'} />
            <Menu Icon={ReportedIssueIcon}      url='reported-issues'  title={'Reported Issues'} />
            {/* <Menu Icon={BlacklistedProfileIcon} url='blacklisted'      title={'Blacklisted Profiles'} /> */}
          </div>
        </Sidebar>

        <div className="w-[calc(100%-5rem)] lg:w-[calc(100%-18rem)] min-h-screen">
          <Navbar />
          <Main >
            {(menu === undefined || menu === 'home') && <HomeMenu />}
            {menu === 'Profiles' && <Profiles/>}
            {menu === 'view' && <ViewAds/>}
            
            {menu === 'auction-progress' && <AuctionProgress/>}
            {menu === 'live-cam'  && <LiveCam/>}
            {menu === 'banner' && <Banner/>}
            {menu === 'support' && <Support/>}
            {menu === 'reported-issues' && <ReportIssues/>}
            {menu === 'payment-history' && <PaymentsHistory/>}
            {menu === 'sex-toys' && <SexToys/>}



            {menu === 'my-adverts' && <Manage />}
            {menu === 'analatics' && <Analatics />}
            {menu === 'free-credit' && <Earn />}
            {menu === 'comments' && <Comments />}
            {menu === 'settings' && <SettingsMenu />}
            {menu === 'blacklisted' && <Blacklisted />}
            {menu === 'edit-ads' && <EditAds />}
            {menu === 'verify' && <VerifyAds />}

          </Main>
        </div>
      </div>
      {/* <DueAlert /> */}
    </>
  )
}

export default UserDashboard





