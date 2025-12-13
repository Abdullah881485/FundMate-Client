import React from "react";
import Banner from "../../components/Hero/Banner";
import AvailableLoans from "../../components/Available Loans/AvailableLoans";
import HowItWorks from "../../components/How It Works/HowItWorks";
import Feedback from "../../components/Feedback/Feedback";
import Statistics from "../../components/Achivements/Achievements";
import Partners from "../../components/Partners/Partners";

const Home = () => {
  return (
    <div className="space-y-30 ">
      <Banner></Banner>
      <AvailableLoans></AvailableLoans>
      <HowItWorks></HowItWorks>
      <Feedback></Feedback>
      <Statistics></Statistics>
      <Partners></Partners>
    </div>
  );
};

export default Home;
