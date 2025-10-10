/* eslint-disable no-unused-vars */
import toast from "react-hot-toast";
import { customeFetch } from "./helpers";
import { redirect } from "react-router-dom";


export const homeLoader = () => {

};


export const layeoutLoader = async () => {
    try {
      const user = localStorage.getItem("user");
      if(user){
        console.log("User info from loader local :", JSON.parse(user));
        return JSON.parse(user);
      }
        const respopnse =  await customeFetch.get("/personal/userinfo", { withCredentials: true });
        localStorage.setItem("user", JSON.stringify(respopnse.data.data));
        console.log("User info from loader:", respopnse.data.data);
        return respopnse.data.data;
    } catch (error) {
      localStorage.removeItem("user");
        toast.error("Session expired. Please log in again.");
    } 
}

export const landingLoader = () => {
       const user = localStorage.getItem("user");
        if(user){
           return redirect("/");
        }
        return null;
}
