import React, { useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../Shared/Loading";

const Fresher = () => {
  const [jobs, setJobs] = useState(false);
  fetch("http://localhost:5000/fresherJobs")
    .then((res) => res.json())
    .then((data) => setJobs(data));

  if (!jobs) {
    return <Loading />;
  }
  return (
    <div>
      <h2
        data-aos="flip-down"
        className="lg:text-3xl text-2xl font-semibold text-center mt-14 md:mt-0"
      >
        Fresher's Jobs
      </h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 mx-10 lg:mx-20 my-4">
        {jobs.map((j) => (
          <div
            data-aos="zoom-out-down"
            className="hover:-translate-y-1 hover:shadow-xl duration-300 border-2 rounded-lg p-4 relative"
          >
            <div className="flex items-center">
              <img className="w-20" src={j.img} alt="" />
              <h2 className="text-xl font-bold ml-4">{j.jobTitle}</h2>
            </div>
            <p className="mt-2 text-lg">
              <span className="font-bold">Job Type: </span>
              {j.jobType}
            </p>
            <p className="">
              <span className="font-bold">Company Name: </span>
              {j.companyName}
            </p>
            <p className="mb-14">
              <span className="font-bold">Company Details: </span>
              {j.companyDetails.length >= 100
                ? j.companyDetails.slice(0, 100)
                : j.companyDetails}
              {j.companyDetails.length > 100 && (
                <>
                  ... <i>see more</i>
                </>
              )}
            </p>
            <div className="absolute bottom-4 right-4">
              <Link className="btn bg-orange-600">View More</Link>
            </div>
          </div>
        ))}
      </div>
      <div data-aos="zoom-in" className="flex justify-center">
        <button className="btn btn-info">See All Jobs</button>
      </div>
    </div>
  );
};

export default Fresher;
