import React from "react";
import Header from "../common/Header";
import Menu from "../common/Menu";
import Footer from "../common/Footer";
import HeroSection from "../components/Home/HeroSection";
import Brands from "../components/Home/Brands";
import PopularSection from "../components/Home/PopularSection";
import FilterSection from "../components/Home/FilterSection";

const Home = () => {
  return (
    <>
      <Header />
      <Menu />
      <HeroSection />
      <Brands />
      <PopularSection />
      <FilterSection />
      <Footer />
    </>
  );
};

export default Home;
