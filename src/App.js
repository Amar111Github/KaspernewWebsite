import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Components/Layout/Layout";
import Home from "./Pages/HomePage/Home";
import AboutPage from "./Pages/AboutPage/AboutPage";
import Career from "./Pages/Career/Career";
import Contact from "./Pages/Contact/Contact";
import Webdevelopment from "./Pages/ServicesPages/Webdevelopment";
import AppDevelopment from "./Pages/ServicesPages/AppDevelopment";
import DigitalMarketing from "./Pages/ServicesPages/DigitalMarketing";
import CMSdevelopmet from "./Pages/ServicesPages/CMSdevelopmet";
import HealthandFitness from "./Pages/IndustriesPage/HealthandFitness";
import BusinessAppdev from "./Pages/IndustriesPage/BusinessAppdev";
import ITESDevelopment from "./Pages/IndustriesPage/ITESDevelopment";
import CRMDevelopment from "./Pages/ServicesPages/CRMDevelopment";
import TravelApp from "./Pages/IndustriesPage/TravelApp";
import MediaEntertainment from "./Pages/IndustriesPage/MediaEntertainment";
import ERPDevlopment from "./Pages/ServicesPages/ERPDevlopment";
import SportsAppDev from "./Pages/IndustriesPage/SportsAppDev";
import EducationAppdev from "./Pages/IndustriesPage/EducationAppdev";
import FinanceAppdev from "./Pages/IndustriesPage/FinanceAppdev";
import RealEstateAppdev from "./Pages/IndustriesPage/RealEstateAppdev";
import EcommerceAppDev from "./Pages/IndustriesPage/EcommerceAppDev";
import SocialMediaAppDev from "./Pages/IndustriesPage/SocialMediaAppDev";
import PrivacyPolicy from "./Components/PrivacyPolicy/PrivacyPolicy";
function App() {
 
       
  return (
    <div className="App">
      <Routes>
     
          <Route  element={<Layout />}>
       
          {/* Pages */}
          <Route index path="/"  element={<Home />} />
          <Route path="Home" element={<Home />} />
          <Route path="About-us" element={<AboutPage />} />
          <Route path="Career" element={<Career />} />
          <Route path="Contact-us" element={<Contact />} />
          <Route path="Privacy-Policy" element={<PrivacyPolicy/>} />

          {/* SERVICES PAGE */}
          <Route path="ERP-Development-Service" element={<ERPDevlopment />}/>
          <Route path="CRM-Development-Service" element={<CRMDevelopment/>}/>
          <Route path="Web-Development-Service" element={<Webdevelopment/>}/>
          <Route path="CMS-Development-Service" element={<CMSdevelopmet/>} />
          <Route path="App-Development-Service" element={<AppDevelopment/>}/>
          <Route
            path="/Digital-Marketing-Service"
            element={<DigitalMarketing />}
          />
          {/* Industries Page */}

          <Route 
            path="travel-app-development-company"
            element={<TravelApp />}
          />
          <Route
            path="sports-app-development-company"
            element={<SportsAppDev />}
          />
          <Route
            path="Health-&-Fitness-app-development"
            element={<HealthandFitness />}
          />
          <Route
            path="Business-App-development"
            element={<BusinessAppdev />}
          />
          <Route path="ITES-App-Development" element={<ITESDevelopment />} />
          <Route
            path="media-entertainment-app-development"
            element={<MediaEntertainment />}
          />
          <Route
            path="education-app-development"
            element={<EducationAppdev />}
          />
          <Route path="Finance-app-development" element={<FinanceAppdev />} />
          <Route
            path="Real-Estate-app-development"
            element={<RealEstateAppdev />}
          />
          <Route
            path="Ecommerce-app-development"
            element={<EcommerceAppDev />}
          />
          <Route
            path="Social-Network-app-development"
            element={<SocialMediaAppDev />}
          />
          

        </Route>
      </Routes>
    </div>
  );
}

export default App;
