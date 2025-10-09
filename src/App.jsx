import React from "react";
import LandingPage from "./pages/LandingPage";


const App = () => {

  return (
    <div className="poppins">

      <div className=" relative flex items-center justify-center h-screen">
        <img src="/new_ai.jpg" className=" w-full h-full object-cover absolute -z-10 top-0 left-0" alt="" />
        <LandingPage />
      </div>

    </div>
  );
};

export default App;
