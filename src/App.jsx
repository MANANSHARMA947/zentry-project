import React from "react";
import Hero from "./components/Hero";
import About from "./About";
const App = () => {
  return (
    <div className="relative min-h-screen w-screen overflow-x-hidder">
      <Hero />
      {/* <section className="z-0 min-h-screen bg-blue-500" /> */}
      <About/>
    </div>
  );
};

export default App;
