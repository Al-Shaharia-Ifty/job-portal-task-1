import React from "react";
import Companies from "../Components/Companies";
import Experienced from "../Components/Experienced";
import Fresher from "../Components/Fresher";
import Header from "../Components/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <Fresher />
      <Experienced />
      <Companies />
    </div>
  );
};

export default Home;
