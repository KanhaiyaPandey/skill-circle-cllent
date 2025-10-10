import CardNav from "@/components/CardNav";
import { Outlet, useLoaderData } from "react-router-dom";


const items = [
  { label: "About", bgColor: "#2726263d", textColor: "#fff", links: [{ label: "Company" }, { label: "Careers" }] },
  { label: "Support", bgColor: "#2726263d", textColor: "#fff", links: [{ label: "Featured" }, { label: "Case Studies" }] },
  { label: "Contact", bgColor: "#2726263d", textColor: "#fff", links: [{ label: "Email" }, { label: "Twitter" }, { label: "LinkedIn" }] },
];


const Layout = () => {
    const user = useLoaderData();

  return (
       <div className="relative min-h-screen items-center justify-center flex flex-col">
      <div className="sticky top-0 w-[90%] max-w-[800px] z-[99]">
        <CardNav items={items} />
      </div>
      <main className="flex-1">
        <Outlet context={{user}}/> {/* Pass user to nested routes if needed */}
      </main>
    </div>
  )
}

export default Layout