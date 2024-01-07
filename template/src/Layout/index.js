import React from "react";
import Header from "./header";
import Navigate from "../routes/router";
import Footer from "./footer";
import { useLocation } from "react-router-dom";

const Layout = () => {
  // use for getting current route
  const location = useLocation("");

  // added a route which you not need to add header footer
  const hiddenLayoutRoutes = ["/"];

  return (
    <>
      {hiddenLayoutRoutes.includes(location.pathname) ? (
        <Navigate />
      ) : (
        <>
          <Header />
          <Navigate />
          <Footer />
        </>
      )}
    </>
  );
};

export default Layout;
