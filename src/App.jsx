import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Features from "./components/Features";
import Story from "./components/story";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div className="relative min-h-screen w-screen overflow-x-hidder">
      <Navbar />
      <Hero />
      {/* <section className="z-0 min-h-screen bg-blue-500" /> */}
      <About />
      <Features />
      <Story />
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;
