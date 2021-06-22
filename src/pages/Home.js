import React from "react";

import MainContainer from "../components/MainContainer";
import UsageContainer from "../components/UsageContainer";
import '../styles/Home.css';

const Home = () => {

  return (
    <div className="HomeWrapper">
      <div className="Grid">
        <MainContainer />
        <UsageContainer />
      </div>
    </div>
  );
}

export default Home;
