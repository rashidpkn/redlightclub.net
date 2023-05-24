import React from "react";
import { Link } from "react-router-dom";

function Footer() {

  return (
    <div className="bg-white">
      <div className="flex justify-center gap-5 md:gap-0 md:justify-between items-center md:px-24 py-14 border-b flex-wrap">
        <div className="hidden md:flex"></div>
        <div className="">
          <p className="text-[#FF0000] text-2xl font-medium">Terms & Policies</p>
          <ul className="mt-8 text-black/50">
            <li><Link to={'/terms-and-conditions'}> Terms of Use</Link></li>
            <li><Link to={'/terms-and-conditions'}> Privacy Policy</Link></li>
            <li><Link to={'/terms-and-conditions'}> Copyright Notification Page</Link></li>
          </ul>
        </div>
        <div className="space-y-2">
          <div className="w-[362px] h-[36px] border-[red] border">
            <input type="text" className="h-full w-[calc(100%-96px)] pl-5" placeholder="Enter your email" />
            <button className="h-full w-24 bg-[red] text-white">Subscribe</button>
          </div>
          <p className="w-362px text-lg">Lorem ipsum dolor sit amet consectetur. <br /> Enim leo venenatis lacinia amet</p>
          <div className="text-[red] font-medium">
            <p className="text-sm">We are Anti Social</p>
            <p className="text-xl"> So don’t go look us over there!</p>
          </div>
        </div>
      </div>
      <div className="h-16 flex justify-center items-center">
        <p className="text-center text-black/50 text-lg">©Red Light Club2023 all rights reserved</p>
      </div>
    </div>
  );
}

export default Footer;
