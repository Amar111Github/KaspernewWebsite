import React, { useEffect } from "react";
import AboutDirector from "../../Components/SubComponents/About/AboutDirector";
import OurClients from "../../Components/SubComponents/About/OurClients";
import IndustriesWeServe from "../../Components/SubComponents/About/IndustriesWeServe";
import OurProjects from "../../Components/SubComponents/About/OurProjects";
import MissionAndVission from "../../Components/SubComponents/MissionAndVission";
import { Helmet } from "react-helmet";

const AboutPage = () => {
  useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);
  return (
    <>
      <Helmet>
        <title>Know More About| Kasper Infotech</title>
        <meta
          name="discription"
          content="Learn about our expert team and comprehensive services in digital marketing and web development."
        />
        <meta name="keywords" content="About Kasper Infotech" />
      </Helmet>
      <AboutDirector />
      <OurClients />
      <OurProjects />
      <MissionAndVission />
      <IndustriesWeServe />
    </>
  );
};

export default AboutPage;
