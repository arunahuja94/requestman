import React from "react";
import HeaderContainer from "../components/HeaderContainer";
import MainContainer from "../components/MainContainer";
import UsageContainer from "../components/UsageContainer";
import '../styles/Home.css';

const Home = () => {

  return (
    <div className="HomeWrapper">
      <HeaderContainer />
      <div className="Grid">
        <MainContainer />
        {/* <UsageContainer /> */}
      </div>
    </div>
  );
}

export default Home;
