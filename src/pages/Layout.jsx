import CardNav from "@/components/CardNav";
import { Outlet, useLoaderData } from "react-router-dom";
import { CiEdit } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";
import { icons } from "lucide-react";



const items = [
  { label: "Profile", bgColor: "#2726263d", textColor: "#fff", links: [{ label: "Edit", icon: <CiEdit />}, { label: "Logout", icon: <IoIosLogOut/> }] },
  { label: "Support", bgColor: "#2726263d", textColor: "#fff", links: [{ label: "Featured" }, { label: "Case Studies" }] },
  { label: "Contact", bgColor: "#2726263d", textColor: "#fff", links: [{ label: "Email" }, { label: "Twitter" }, { label: "LinkedIn" }] },
];


const Layout = () => {
    const user = useLoaderData();

  return (
       <div className="relative min-h-screen items-center justify-center flex flex-col">
      <div className="sticky top-0 w-[90%] max-w-[800px] z-[99]">
        <CardNav items={items} user={user} />
      </div>
      <main className="flex-1">
        <Outlet context={{user}}/> {/* Pass user to nested routes if needed */}
      </main>
    </div>
  )
}

export default Layout