import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import Loading from "../Shared/Loading";

const ViewDetails = () => {
  const [details, setDetails] = useState(false);
  const params = useParams();
  const {
    img,
    jobTitle,
    jobType,
    companyName,
    jobLocation,
    companyDetails,
    jobDetails,
    responsibilities,
    qualification,
  } = details;

  fetch(`https://jobfinder-server.vercel.app/fresher/${params.id}`)
    .then((res) => res.json())
    .then((data) => {
      setDetails(data);
    });
  if (!details) {
    return <Loading />;
  }
  return (
    <div>
      <div className="m-10 mt-5 lg:mx-20">
        <div className="flex items-center mb-5">
          <img className="h-32" src={img} alt="" />
          <p className="text-2xl lg:text-3xl ml-4 font-bold">{jobTitle}</p>
        </div>
        <p>
          <span className="font-bold">Job Type:</span> {jobType}
        </p>
        <p>
          <span className="font-bold">Company Name:</span> {companyName}
        </p>
        <p>
          <span className="font-bold">Job Location:</span> {jobLocation}
        </p>
        <div className="mt-5">
          <p className="text-2xl font-semibold">Company Details</p>
          <p className="text-lg text-justify">{companyDetails}</p>
        </div>
        <div className="mt-5">
          <p className="text-2xl font-semibold">Job Details</p>
          <p className="text-lg text-justify">{jobDetails}</p>
        </div>
        <div className="mt-5">
          <p className="text-2xl font-semibold">Responsibilities</p>
          <p className="text-lg text-justify">{responsibilities}</p>
        </div>
        <div className="mt-5">
          <p className="text-2xl font-semibold">Qualification</p>
          <p className="text-lg text-justify">{qualification}</p>
        </div>
        <div className="mt-5">
          <button
            className="btn btn-info"
            onClick={() => {
              Swal.fire("Your Apply is Successful", "", "success");
            }}
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
