import React from "react";
import Sliderhome from "../theme/assets/Home/SliderHome/Sliderhome";

import Trainers from "../theme/assets/Home/Trainers/Trainers";
import Stories from "../theme/assets/Home/Stories/Stories";
import GetToday from "../theme/assets/Home/GetToday/GetToday";
import Header from "../theme/assets/Home/Header/Header";
import AboutHome from "../theme/assets/Home/AboutHome/AboutHome";
import TrainingSec from "../theme/assets/Home/TrainingSec/TrainingSec";
import MemberShip from "../theme/assets/Home/MemberShip/MemberShip";
import Register from "../theme/assets/Register/Register";
import Blog from "../theme/assets/Home/Blog/Blog";

function Home() {
  return (
    <>
      <Header />
      <AboutHome />
      <TrainingSec />

      <Sliderhome />
      <Trainers />
      <Stories />
      <GetToday />
      <MemberShip/>
      <Register/>
      <Blog/>
    </>
  );
}
export default Home;
