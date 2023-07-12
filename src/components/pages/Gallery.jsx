import React from "react";
import FullPage from "../FullPageHeader/FullPageHeader"
import Filters from ".././theme/assets/Gallery/Filter"
function Gallery() {
  return (
    <>
      <FullPage HeaderName="GALLERY" pageNames="gallery"/>
      <Filters/>
    </>
  );
}
export default Gallery;
