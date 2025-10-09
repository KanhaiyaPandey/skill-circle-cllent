/* eslint-disable no-unused-vars */
import SignUpButtons from "../components/ui/SignUpButtons";
import CardNav from "../components/CardNav";
import axios from "axios";


const LandingPage = () => {
  const items = [
    {
      label: "About",
      bgColor: "#2726263d",
      textColor: "#fff",
      links: [
        { label: "Company", ariaLabel: "About Company" },
        { label: "Careers", ariaLabel: "About Careers" },
      ],
    },
    {
      label: "Projects",
      bgColor: "#2726263d",
      textColor: "#fff",
      links: [
        { label: "Featured", ariaLabel: "Featured Projects" },
        { label: "Case Studies", ariaLabel: "Project Case Studies" },
      ],
    },
    {
      label: "Contact",
      bgColor: "#2726263d",
      textColor: "#fff",
      links: [
        { label: "Email", ariaLabel: "Email us" },
        { label: "Twitter", ariaLabel: "Twitter" },
        { label: "LinkedIn", ariaLabel: "LinkedIn" },
      ],
    },
  ];

  const handleAnimationComplete = () => {
    console.log("Animation completed");
  };

  const handleApiCalltest = async () => {
    console.log("pressing");
    try {
      const response = await axios.post(
        "http://localhost:8080/api/skill-circle/protected/user/session/create-session",
        {
          name: "Kanhaiya Pandey",
          email: "kjzebsekvbsv",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      console.log("API response:", response.data);
    } catch (error) {
      if (error.response) {
        console.log(
          "API error:",
          error.response.status,
          error.response.statusText
        );
      } else {
        console.log("Axios error:", error.message);
      }
    }
  };

  return (
    <div className=" w-screen px-8 flex flex-col items-center relative justify-center h-screen">
      <div className="sticky top-0 w-[90%] max-w-[800px] z-[99]">
        <CardNav items={items} />
      </div>

      <div className=" w-full h-screen p-4 flex items-center justify-center">

        <div className=" lg:w-1/3 w-full grid grid-cols-1 text-center">
           <h1 className=" text-3xl text-white">Learn What You Want. Teach What You Know.</h1>
           <div className=" w-full grid grid-cols-1 sm:grid-cols-2 items-center justify-between md:gap-4 gap-1 mt-10">


              <a
                  href="http://localhost:8080/oauth2/authorization/google"
                  className="relative overflow-hidden z-10 p-4 rounded-full hover:scale-105  transition-all  ease-in-out duration-500 bg-white group flex items-center justify-center w-full"
                >
                  {/* Animated amber circle */}
                  <div
                    className="absolute bottom-0 right-0 w-10 h-10 bg-[#ffa72bc5] rounded-full 
                              transform scale-0 group-hover:scale-[20] transition-transform duration-1000 ease-out -z-10"
                  ></div>

                  <h1 className="relative z-20 text-black transition-colors duration-300 group-hover:text-black">
                    Sign in with Google
                  </h1>
                </a>

             <button
               onClick={handleApiCalltest}
               className=" rounded-full w-full p-4  bg-[#2726263d] backdrop-blur-sm   text-white border  cursor-pointer mt-4 sm:mt-0"
             >
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
