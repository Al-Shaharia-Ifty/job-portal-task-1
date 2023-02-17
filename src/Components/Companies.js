import React from "react";
import gra from "../Assets/grameenphone.png";
import aug from "../Assets/augmedix.png";
import aam from "../Assets/aamra.png";
import mic from "../Assets/RWCZER.png";
import app from "../Assets/Apple-Logo.png";
import amz from "../Assets/amazon.png";

const Companies = () => {
  return (
    <div>
      <h2 className="lg:text-4xl text-2xl font-bold text-center mt-10">
        Top IT Companies
      </h2>
      <div>
        <h2 className="text-xl lg:text-2xl text-center mt-5">
          Bangladeshi IT Company
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-10 lg:mx-20 mt-10">
          {/* grameenphone */}
          <div
            data-aos-delay="300"
            data-aos="zoom-in-up"
            className="text-center"
          >
            <div className="flex justify-center">
              <img className="h-24" src={gra} alt="" />
            </div>
            <p className="text-lg lg:text-xl font-semibold">Grameenphone IT</p>
            <p className="text-justify mt-2">
              Grameenphone IT is the IT arm of Grameenphone, the largest
              telecommunications service provider in Bangladesh. It provides a
              wide range of IT services, including software development, system
              integration, and business process outsourcing.
            </p>
            <button className="btn btn-info btn- flex mt-2">
              View Details
            </button>
          </div>
          {/* Augmedix */}
          <div
            data-aos-delay="300"
            data-aos="zoom-in-up"
            className="text-center"
          >
            <div className="flex justify-center">
              <img className="h-24" src={aug} alt="" />
            </div>
            <p className="text-lg lg:text-xl font-semibold">
              Augmedix Bangladesh
            </p>
            <p className="text-justify mt-2">
              Augmedix Bangladesh is a software development company that focuses
              on healthcare technology. It develops software solutions to help
              doctors and other healthcare professionals to better manage their
              patient data and workflows.
            </p>
            <button className="btn btn-info btn- flex mt-2">
              View Details
            </button>
          </div>
          {/* aamra */}
          <div
            data-aos-delay="300"
            data-aos="zoom-in-up"
            className="text-center"
          >
            <div className="flex justify-center">
              <img className="h-24" src={aam} alt="" />
            </div>
            <p className="text-lg lg:text-xl font-semibold">
              Aamra Technologies Limited
            </p>
            <p className="text-justify mt-2">
              Aamra Technologies Limited is a leading IT company in Bangladesh
              that provides a wide range of IT services, including system
              integration, software development, and managed services. It has a
              strong presence in the banking and financial services sector, as
              well as in the telecommunications industry.
            </p>
            <button className="btn btn-info btn- flex mt-2">
              View Details
            </button>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-xl lg:text-2xl text-center mt-5">
          World Wide Company
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-10 lg:mx-20 mt-10">
          {/* micresoft */}
          <div
            data-aos-delay="300"
            data-aos="zoom-in-up"
            className="text-center"
          >
            <div className="flex justify-center">
              <img className="h-24" src={mic} alt="" />
            </div>
            <p className="text-lg lg:text-xl font-semibold">Micresoft</p>
            <p className="text-justify mt-2">
              Microsoft is one of the world's largest technology companies,
              known for its software products like the Windows operating system,
              Office Suite, and the Xbox gaming console. The company has also
              been investing in cloud computing, artificial intelligence, and
              other emerging technologies.
            </p>
            <button className="btn btn-info btn- flex mt-2">
              View Details
            </button>
          </div>
          {/* apple */}
          <div
            data-aos-delay="300"
            data-aos="zoom-in-up"
            className="text-center"
          >
            <div className="flex justify-center">
              <img className="h-24" src={app} alt="" />
            </div>
            <p className="text-lg lg:text-xl font-semibold">Apple</p>
            <p className="text-justify mt-2">
              Apple is a multinational technology company that designs and
              develops consumer electronics, computer software, and online
              services. Its products include the iPhone, iPad, Mac, Apple Watch,
              and Apple TV. The company is also known for its design aesthetic
              and user-friendly interface.
            </p>
            <button className="btn btn-info btn- flex mt-2">
              View Details
            </button>
          </div>
          {/* ammazon */}
          <div
            data-aos-delay="300"
            data-aos="zoom-in-up"
            className="text-center"
          >
            <div className="flex justify-center">
              <img className="h-24" src={amz} alt="" />
            </div>
            <p className="text-lg lg:text-xl font-semibold">Amazon</p>
            <p className="text-justify mt-2">
              Amazon is a multinational e-commerce company that started as an
              online bookstore but has since expanded to become a major player
              in many industries, including retail, cloud computing, and digital
              streaming. The company is also known for its AI assistant, Alexa.
            </p>
            <button className="btn btn-info btn- flex mt-2">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Companies;
