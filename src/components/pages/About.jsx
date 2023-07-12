import React from "react";
import Trainers from "../theme/assets/Home/Trainers/Trainers";
import GetToday from "../theme/assets/Home/GetToday/GetToday";
import FullPage from "../FullPageHeader/FullPageHeader";
import IncrementSec from "../theme/assets/About/IncrementSec/IncrementSec";
import SignatureAbout from "../theme/assets/About/SignatureAbout/SignatureAbout";
import BestAward from "../theme/assets/About/BestAward/BestAward";

function About() {
  return (
    <>
   
    <FullPage HeaderName="ABOUT" pageNames="about"/>
    <SignatureAbout/>
    <BestAward/>
    <IncrementSec/>
   <GetToday/>
      <Trainers/>
    </>
  );
}
export default About;
