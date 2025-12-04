import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet, useNavigation } from "react-router";
import Footer from "../Components/Footer/Footer";
import Loading from "../Components/Loading/Loading";

const Root = () => {
  const { state } = useNavigation();
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50">
 <Navbar></Navbar>
      </header>

     
      <section className="flex-grow">
        {state == "loading" ? <Loading></Loading> : <Outlet></Outlet>}
      </section>
      <Footer></Footer>
    </div>
  );
};

export default Root;
