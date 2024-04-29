import React,{useEffect}from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import { useLocation } from "react-router-dom";

const Layout = () => {
  function ScrollToTop() {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  }
       
  return (
    <div>
      <div className="pb-5 mb-0">
        <div 
        style={{ position: "fixed", width: "100%", zIndex: "100" }}
        >
          <Navbar />
          <ScrollToTop />
        </div>
      </div>
      <Outlet />

      <Footer />
    </div>
  );
};

export default Layout;
