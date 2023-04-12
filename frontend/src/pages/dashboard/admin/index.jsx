// import { Analytics, BarChart, BugReport, Edit,  Pages, Payments, Pending, PersonOff, Rocket, SignalCellularAlt, SupportAgent } from '@mui/icons-material'
import React from 'react'
import { useParams } from 'react-router-dom'
import Main from '../components/Main'
import Menu from '../components/Menu'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Banner from './components/Banner'

import Customers from './components/Customers'
import Home from './components/Home'
import PaymentsHistory from './components/PaymentsHistory'
import ProfileAnalytics from './components/ProfileAnalytics'
import SiteAnalytics from './components/SiteAnalytics'
import Verification from './components/Verification'
import Profile from './components/Profile'
import ViewAds from './components/ViewAds'


// sidebar icons
import HomeIcon from '../../../asset/icons/sidebar/home.js'
import ProfileIcon from '../../../asset/icons/sidebar/profile.js'
import ReportedProfileIcon from '../../../asset/icons/sidebar/reported.js'
import BlacklistedProfileIcon from '../../../asset/icons/sidebar/blacklisted.js'
import AuctionIcon from '../../../asset/icons/sidebar/Auction.js'
import PaymentHistoryIcon from '../../../asset/icons/sidebar/payment-history.js'
// import PaymentAdsIcon from '../../../asset/icons/sidebar/payment-adverts.js'
import BidPaymentsIcon from '../../../asset/icons/sidebar/bid-Payment.js'
import SiteAnalyticsIcon from '../../../asset/icons/sidebar/site-analytics.js'
import AdsAnalyticsIcon from '../../../asset/icons/sidebar/ads-analytics.js'
import BannerIcon from '../../../asset/icons/sidebar/banner.js'
import SupportIcon from '../../../asset/icons/sidebar/support.js'
import ReportedIssueIcon from '../../../asset/icons/sidebar/reported-issue.js'

import BlacklistedProfiles from './components/BlacklistedProfiles'
import ReportedProfiles from './components/ReportedProfiles'
import AuctionProgress from './components/AuctionProgress'
import Support from './components/Support'
import ReportIssues from './components/ReportIssues'
import EditAds from './components/EditAds'


function AdminDashboard() {
  const { menu } = useParams()
  
  return (
    <div className='flex min-h-screen h-full'>
      <Sidebar >
        <div className="space-y-5">
          <Menu Icon={ HomeIcon } title={'Home'} url='home' />
          <Menu Icon={ProfileIcon} title={'Profiles'} url='profiles' />
          <Menu Icon={ReportedProfileIcon} title={'Reported Profiles'} url='reported-profiles' />
          <Menu Icon={BlacklistedProfileIcon} title={'Blacklisted Profiles'} url='blacklisted-profiles' />
          <Menu Icon={AuctionIcon} title={'Auction In Progress'} url='auction-progress' />
          <Menu Icon={PaymentHistoryIcon} title={'Payment History'} url='payment-history' />
          {/* <Menu Icon={PaymentAdsIcon} title={'Payments For Adverts'} url='payment-adverts' /> */}
          <Menu Icon={BidPaymentsIcon} title={'Bid Payments'} url='bid-Payments' />
          <Menu Icon={SiteAnalyticsIcon} title={'Site Analytics'} url='site-analytics' />
          <Menu Icon={AdsAnalyticsIcon} title={'Ads Analytics'} url='ads-analytics' />
          <Menu Icon={BannerIcon} title={'Banner'} url='banner' />
          <Menu Icon={SupportIcon} title={'Support'} url='support' />
          <Menu Icon={ReportedIssueIcon} title={'Reported Issues'} url='reported-issues' />

          
        </div>
        
      </Sidebar>
      <div className="min-h-screen h-full w-[calc(100%-5rem)] lg:w-[calc(100%-18rem)]">
        <Navbar />
        <Main >
          
          {(menu === 'home' || menu === undefined) && <Home/>}
          {menu === 'profiles'  && <Profile />}
          {menu === 'reported-profiles' && <ReportedProfiles/>}
          {menu === 'blacklisted-profiles' && <BlacklistedProfiles />}
          {menu === 'auction-progress' && <AuctionProgress/>}
          {menu === 'payment-history' && <PaymentsHistory />}
          {menu === 'banner' && <Banner />}
          {menu === 'view' && <ViewAds/>}
          {menu === 'support' && <Support />}
          {menu === 'reported-issues' && <ReportIssues/>}
          {menu === 'edit-ads' && <EditAds/>}

          {menu === 'site-analytics' && <SiteAnalytics />}
          {menu === 'ads-analytics' && <ProfileAnalytics />}          
          {menu === 'customers' && <Customers />}
          {menu === 'verification' && <Verification />}
        </Main>
      </div>
    </div>
  )
}

export default AdminDashboard