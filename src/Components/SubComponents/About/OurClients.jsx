import React from "react";
import AiimsRishikesh from "../../../Assets/Images/clients/AIIMSRISHIKESH.webp";
import MNRE from "../../../Assets/Images/clients/MNRE.webp";
import pyrexia from "../../../Assets/Images/clients/pyrexia.webp";
import AWARA from "../../../Assets/Images/clients/AWARA.webp";
import GrandThortan from "../../../Assets/Images/clients/GrandThortan.webp";
import GIZ from "../../../Assets/Images/clients/GIZ.webp";
import CNK from "../../../Assets/Images/clients/C&K.webp";
import PWC from "../../../Assets/Images/clients/PWC.webp";
import ServiceMainSection from "../ServiceComponents/ServiceSubComponents/ServiceMainSection";

const OurClients = () => {
  return (
    <div className="testimonial-mainarea">
      <section className="home-Service px-sm-1 px-md-0">
        <div className="container d-flex flex-column text-center py-3">
        <ServiceMainSection highlights="OUR CLIENT'S" highlightsDouble="CLIENT'S"/>
          <div className="clients-container">
            <li>
              <img src={AiimsRishikesh} alt="clients" />
            </li>
            <li>
              <img src={MNRE} alt="clients" />
            </li>
            <li>
              <img src={pyrexia} alt="clients" />
            </li>
            <li>
              <img src={GIZ} alt="clients" />
            </li>
            <li>
              <img src={CNK} alt="clients" />
            </li>

            <li>
              <img src={PWC} alt="clients" />
            </li>
            <li>
              <img src={GrandThortan} alt="clients" />
            </li>
            <li>
              <img src={AWARA} alt="clients" />
            </li>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurClients;
