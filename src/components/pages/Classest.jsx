import React from "react";
import Register from "../theme/assets/Register/Register";
import Sliderhome from "../theme/assets/Home/SliderHome/Sliderhome";
import FullPage from "../FullPageHeader/FullPageHeader"
import ClassTables from "../theme/assets/Classest/ClassTables/ClassTables";
function Classest() {
  return (
    <>
    <FullPage HeaderName="CLASSES" pageNames="class"/>
      <Register/>
      <Sliderhome/>
      <ClassTables/>
    </>
  );
}
export default Classest;
