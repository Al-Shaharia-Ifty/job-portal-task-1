import React from "react";

const Header = () => {
  return (
    <div>
      <div data-aos="fade-up" className="relative">
        <div className="headerImg bg-center bg-contain md:bg-center lg:bg-center bg-no-repeat h-[124px] md:h-[253px] lg:h-[475px]"></div>
        <h2
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-duration="1000"
          className="lg:text-3xl text-2xl md:ml-16 font-bold relative md:top-[-100px] lg:top-[-210px] text-center md:text-start"
        >
          Find Your Dream Job Now!
        </h2>
        <div
          data-aos="fade-right"
          data-aos-delay="300"
          data-aos-duration="1000"
          className="form-control w-full md:w-72 lg:w-80 text-black font-bold md:ml-20 absolute md:bottom-12 lg:bottom-28"
        >
          <label className="label justify-evenly cursor-pointer bg-white rounded-full border-4 border-white p-2">
            <span className="lg:text-xl text-center">Job Seeker</span>
            <input
              type="checkbox"
              className="toggle bg-orange-500 border-orange-500"
            />
            <span className="lg:text-xl text-center">Job Poster</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Header;
