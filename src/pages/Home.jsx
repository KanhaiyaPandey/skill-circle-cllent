import { useOutletContext } from "react-router-dom";
import LandingPage from "./LandingPage";


const Home = () => {

  const {user} = useOutletContext();

  return (
    <div className=" h-screen w-screen bg-black">Home</div>
  )

}

export default Home