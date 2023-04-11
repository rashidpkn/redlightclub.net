import axios from "axios";
import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet, Route, Routes, useLocation } from "react-router-dom";
import BackendIP from "./BackendIP";
import NotFound from "./pages/404";
import Auth from "./pages/auth/login";
import AdvertiserSignup from "./pages/auth/signup/advertiser/AdvertiserSignup";
import UserSignup from "./pages/auth/signup/user/UserSignup";
import AdminDashboard from "./pages/dashboard/admin";
import UserDashboard from "./pages/dashboard/user";
import Filter from "./pages/filter";
import DataImport from "./pages/form";
import Home from "./pages/home";
import NewAds from "./pages/newAds";
import Profile from "./pages/profile";
import Footer from "./pages/shared/Footer";
import Navbar from "./pages/shared/Navbar";
import About from "./pages/static/about";
import FAQ from "./pages/static/faq";
import TermsAndConditions from "./pages/static/TermsAndConditions";
import Test from "./pages/test";
import { setRegion } from "./redux/slice/utilSlice";

function App() {

  // axios.defaults.baseURL='http://192.168.1.124:3000'

  const { token, role } = useSelector((state) => state.user);
  const dispatch = useDispatch()
  useEffect(() => {
    axios.post(`${BackendIP}/analytics`).catch(err => {
      window.alert(err.message)
    })
  }, [])

  const { region } = useSelector(state => state.util)
  return (
    <div className="App  font-inter">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Outlet />
              <Footer />
            </>
          }
        >

          <Route path="/import" element={<DataImport />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditions />}
          />
          <Route path='/filter' element={<Filter />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Route>

        <Route
          path="/auth"
          element={token ? <Navigate to={"/dashboard"} /> : <Auth />}
        />

        <Route
          path="/register"
          element={token ? <Navigate to={"/dashboard"} /> : <Outlet />}
        >
          <Route index element={<Navigate to={"/register/user"} />} />
          <Route path="user" element={<UserSignup />} />
          <Route path="advertiser" element={<AdvertiserSignup />} />
        </Route>

        <Route
          path="/dashboard"
          element={
            token ? (
              role === "admin" ? (
                <AdminDashboard />
              ) : (
                <UserDashboard />
              )
            ) : (
              <Navigate to={"/auth"} />
            )
          }
        />

        <Route
          path="/dashboard/:menu"
          element={
            token ? (
              role === "admin" ? (
                <AdminDashboard />
              ) : (
                <UserDashboard />
              )
            ) : (
              <Navigate to={"/auth"} />
            )
          }
        />

        <Route
          path="/new-ads"
          element={
            (token) ? <NewAds /> : <Navigate to={"/auth"} />
          } />

        <Route path="/test" element={<Test />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      {
        !region && <div className="fixed top-0 left-0 h-screen w-full bg-black/10 z-50 flex justify-center items-center">
          <div className="w-96  bg-white rounded-xl p-5 space-y-10">
            <p className="text-xl font-bold">Select Your Region</p>
            <div className="flex justify-center">

              <select className="h-12 outline-none border w-64 text-black" onChange={e=>{dispatch(setRegion(e.target.value))}}>
                <option className="text-black" value={''}>Select a region</option>
                <option className="text-black" value={'Dubai'}>Dubai</option>
                <option className="text-black" value={'UK'}>UK</option>
                <option className="text-black" value={'Thailand'}>Thailand</option>
              </select>
            </div>
          </div>
        </div>
      }
    </div>
  );
}

export default App;


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null

}