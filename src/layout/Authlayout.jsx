import React from "react";
import ToyNavbar from "../components/ToyNavbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router";

const Authlayout = () => {
  return (
    <div>
      <header>
        <ToyNavbar></ToyNavbar>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Authlayout;
