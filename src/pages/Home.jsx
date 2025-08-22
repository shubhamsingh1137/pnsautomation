import React from "react";
import Nav from "../Header/Nav";
import First from "../Herosection/First";
import Second from "../Herosection/Second";
import Whylearn from "../Herosection/Whylearn";
import Benefitfrom from "../Herosection/Benefitfrom";
import Testimonial from "../Herosection/Testimonials";
import Upcomingbatches from "../Herosection/Upcomingbatches";
import CallToAction from "../Herosection/Calltoaction";
import Footer from "../Footer/Footer";
import Whatapps from "../Icon/Whatapp";
import Instagram from "../Icon/Instagram";
import Twitter from "../Icon/Twitter";
import Facebook from "../Icon/Facebook";
import Email from "../Icon/Email";
import Phone from "../Icon/Phone";
import Third from "../Herosection/Third";

const Home = () => {
  return (
    <div>
      <Nav />
      <First />

      <Second />
      <Third />
      <Email />
      <Phone />
      <Whatapps />
      <Instagram />
      <Twitter />
      <Facebook />
      <Whylearn />
      <Benefitfrom />
      <Testimonial />
      <Upcomingbatches />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Home;
