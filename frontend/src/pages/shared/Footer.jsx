
import React from "react";

import { Link } from "react-router-dom";

function Footer() {

  return (
    <>
      <div className="footer   px-5 md:px-[100px] bg-[#17191E] text-white pt-3 hidden lg:flex  flex-col gap-3 pb-5">
        <div className="w-full  flex  justify-center items-center flex-wrap gap-x-20 gap-y-10">
          <span className="text-sm">
            Want to receive the latest listings? Subscribe to our weekly
            newsletter!
          </span>
          <div className="w-[276px] h-[38px] rounded-3xl bg-white overflow-hidden flex items-center">
            <input
              className="outline-none h-full w-2/3 text-black pl-5 placeholder:font-light  placeholder:text-xs"
              placeholder="yourmail@gmail.com"
              type="text"
            />
            <button className="h-full w-1/3 bg-[#FB0202]">Sign Up</button>
          </div>
        </div>
        <div className="flex justify-center lg:justify-start flex-wrap text-[#FB0202] gap-[15px]">
          <Link to={"/"}>
            <button className="w-48">Forum</button>
          </Link>
          <Link to={"/about"}>
            <button className="w-48">About</button>
          </Link>
          <Link to={"/"}>
            <button className="w-48">Blog</button>
          </Link>
          <Link to={"/"}>
            <button className="w-48">Advertise Escort Services</button>
          </Link>
          <Link to={"/"}>
            <button className="w-48">Help for Advertisers</button>
          </Link>
          <Link to={"/"}>
            <button className="w-48">Guide to seeing an escort</button>
          </Link>
        </div>
        <p className="text-xs">
          This website only allows adult individuals to advertise their time and
          companionship to other adult individuals. We do not provide a booking
          service nor arrange meetings. Any price indicated relates to time only
          and nothing else. Any service offered or whatever else that may occur
          is the choice of consenting adults and a private matter between them.
          In some countries, individuals do not legally have the choice to
          decide this; it is your responsibility to comply with local laws.
        </p>
        <div className="flex gap-[18px] justify-center md:justify-start text-sm text-[#FB0202]">
          <span>© 2022 Red Light Club</span>
          <Link to={"/terms-and-conditions"}>
            <button>Terms and Conditions</button>
          </Link>
        </div>
      </div>
      {/* <img src="/images/common/footer/home.png" className='cursor-pointer absolute top-[25px] left-[70px]' alt="" /> */}
      {/* <img src="/images/common/footer/search.png" className='cursor-pointer' alt="" /> */}
      {/*   <img src="/images/common/footer/profile.png" className='cursor-pointer absolute top-[25px] right-[70px]'  alt="" /> */}

    </>
  );
}

export default Footer;
