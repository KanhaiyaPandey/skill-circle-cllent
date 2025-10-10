/* eslint-disable no-unused-vars */

import { useState } from "react";
import { customeFetch } from "@/utils/helpers";
import CardNav from "@/components/CardNav";


const LandingPage = () => {

  const [user, setUser] = useState({
          name: "Kanhaiya Pandey",
          email: "kjzebsekvbsv",
        })

        

  const handleApiCalltest = async () => {
    try {
      const response = await customeFetch.post("/session/create-session", user);
      console.log("API Response:", response.data);
      if (response.data && response.data.user) {
        setUser(response.data.user);
      }
    } catch (error) {
      console.error("API Call Error:", error);
    }
  }

  const items = [
  { label: "About", bgColor: "#2726263d", textColor: "#fff", links: [{ label: "Company" }, { label: "Careers" }] },
  { label: "Support", bgColor: "#2726263d", textColor: "#fff", links: [{ label: "Featured" }, { label: "Case Studies" }] },
  { label: "Contact", bgColor: "#2726263d", textColor: "#fff", links: [{ label: "Email" }, { label: "Twitter" }, { label: "LinkedIn" }] },
];

  return (
    <div className=" w-screen px-8 flex flex-col items-center relative justify-center h-screen">

      <div className="sticky top-0 w-[90%] max-w-[800px] z-[99]">
        <CardNav items={items} />
      </div>

      <img src="/bg3.jpg" className=" absolute -z-10 w-full h-full object-cover" alt="" />

      <div className=" w-full h-screen p-4 flex items-center justify-center">

        <div className=" lg:w-1/3 w-full grid grid-cols-1 text-center">
           <h1 className=" text-3xl text-white">Learn What You Want. Teach What You Know.</h1>
           <div className=" w-full grid grid-cols-1 sm:grid-cols-2 items-center justify-between md:gap-4 gap-1 mt-10">


              <a  href="http://localhost:8080/oauth2/authorization/google"
               className="relative overflow-hidden z-10 p-4 rounded-full hover:scale-105  transition-all  ease-in-out duration-500 bg-white group flex items-center justify-center w-full" >
                  {/* Animated amber circle */}
                  <div className="absolute bottom-0 right-0 w-10 h-10 bg-gradient-to-br to-[#FFA62B] from-purple-300 rounded-full transform scale-0 group-hover:scale-[20] transition-transform duration-1000 ease-out -z-10" ></div>

                  <h1 className="relative z-20 text-black transition-colors duration-300 group-hover:text-black">
                    Sign in with Google
                  </h1>
                </a>

             <button
               onClick={handleApiCalltest}
               className=" rounded-full w-full p-4  bg-[#2726263d] backdrop-blur-sm 
               text-white border  cursor-pointer mt-4 sm:mt-0">
               Test API Call
             </button>
           </div>
           <div className=" mt-8 text-white">
             <p>
               Join a community of learners and educators. Discover courses,
               share knowledge, and grow together.
             </p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
