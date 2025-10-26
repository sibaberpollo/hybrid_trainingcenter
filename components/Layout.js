import { useEffect } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import LegacyScripts from "./LegacyScripts";

const Layout = () => {
  useEffect(() => {
    const hidePreloader = () => {
      const preloader = document.getElementById("preloader");
      if (preloader) {
        preloader.style.display = "none";
      }
    };
    const timer = setTimeout(hidePreloader, 500);
    window.addEventListener("load", hidePreloader);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("load", hidePreloader);
    };
  }, []);

  return (
    <>
      <div className="wrapper">
        <div id="preloader" />
        <Header />
        <Main />
        <Footer />
      </div>
      <a href="index.html" className="scrollToTop" />
      <LegacyScripts />
    </>
  );
};

export default Layout;
