import React from "react";

const Header = () => {
  return (
    <div>
      <div className="relative">
        <div className="headerImg bg-center bg-contain md:bg-center lg:bg-center bg-no-repeat h-[124px] md:h-[253px] lg:h-[475px]"></div>
        <h2 className="lg:text-3xl text-2xl md:ml-16 font-bold relative md:top-[-100px] lg:top-[-210px] text-center md:text-start">
          Find Your Dream Job Now!
        </h2>
        <div className="">
          <div className="form-control w-full md:w-72 lg:w-80 text-black font-bold md:ml-20 relative md:top-[-100px] lg:top-[-200px]">
            <label className="label justify-evenly cursor-pointer bg-white rounded-full border-4 border-white p-2">
              <span className="lg:text-xl text-center">Job Seeker</span>
              <input type="checkbox" className="toggle" />
              <span className="lg:text-xl text-center">Job Poster</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
