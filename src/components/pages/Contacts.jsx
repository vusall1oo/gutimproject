import React from "react";
import FullPage from "../FullPageHeader/FullPageHeader"
import Map from "../theme/assets/Contacts/Map/Map";
import ContactForm from "../theme/assets/Contacts/ContactForm/ContactForm";
// import ContactForm from "../theme/assets/Contacts/ContactForm/ContactForm";
function Contacts() {
  return (
    <>
      <FullPage HeaderName="CONTACTS" pageNames="contacts"/>
      <Map/>
      <ContactForm/>
    </>
  );
}
export default Contacts;
