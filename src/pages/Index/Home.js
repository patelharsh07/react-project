import React from "react";
import FollowUs from "../../Common/FollowUs";
import InspirationsIndex from "./InspirationsIndex";
import OurSupporters from "../../Common/OurSupporters";
import OurWorkshop from "../../Common/OurWorkshop";
import AboutInfo from "./AboutInfo";

const Home = () => {
  return (
    <>
      <AboutInfo />
      <OurSupporters />
      <InspirationsIndex />
      <OurWorkshop />
      <FollowUs />

      {/* <!--modal sidebar--> */}
      
    </>
  );
};

export default Home;
