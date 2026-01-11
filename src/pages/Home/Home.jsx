import React from "react";
import Banner from "../../components/Hero/Banner";
import AvailableLoans from "../../components/Available Loans/AvailableLoans";
import HowItWorks from "../../components/How It Works/HowItWorks";
import Feedback from "../../components/Feedback/Feedback";
import Statistics from "../../components/Achivements/Achievements";
import Partners from "../../components/Partners/Partners";
import SecurityTrust from "../../components/Security & Trust/SecurityTrust";
import FAQ from "../../components/FAQ/FAQ";
import CallToAction from "../../components/Call To Action/CallToAction";
import Eligibility from "../../components/Eligibilty/Eligibility";

const Home = () => {
  return (
    <div className="space-y-30 ">
      <Banner></Banner>
      <AvailableLoans></AvailableLoans>
      <SecurityTrust></SecurityTrust>
      <HowItWorks></HowItWorks>
      <FAQ></FAQ>
      <Feedback></Feedback>
      <Statistics></Statistics>
      <Partners></Partners>
      <Eligibility></Eligibility>
      <CallToAction></CallToAction>
    </div>
  );
};

export default Home;
