import React from "react";
import Nav from "../Header/Nav";
import Footer from "../Footer/Footer";
import Whatapps from "../Icon/Whatapp";
import Instagram from "../Icon/Instagram";
import Twitter from "../Icon/Twitter";
import Facebook from "../Icon/Facebook";
import Email from "../Icon/Email";
import Phone from "../Icon/Phone";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />

      {children}
      <Email />
      <Phone />
      <Whatapps />
      <Instagram />
      <Twitter />
      <Facebook />
      <Footer />
    </>
  );
};
export default Layout;
