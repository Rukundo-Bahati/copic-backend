import Navbar from "../components/navbar";
import Card from "../components/card";

export default function About() {
  return (
<div
className="max-h-[100%]"
        style={{
          background: "linear-gradient(to right, black 50%, #0F0F0F 50%)",
          color: "black",
        }}
      >
        <Navbar/>
     <div className="flex xl:flex-row flex-col pl-10 pr-10 pb-10 items-center justify-center">
     <div className="flex flex-col text-white gap-10">
          <h2 className="text-opacity-80 text-white">Testimonials</h2>
          <h2 className="text-[40px] font-semibold ">
            Our users love
            <br /> what we do
          </h2>
          <p className=" max-w-[500px]">
            Over 100 Photographers & their Clients use Copic to connect, and get
            their wonderful moments captures all at one
          </p>
          <h2 className="text-[40px] font-semibold">
            Connect Now !
          </h2>
          <button
            className="bg-[#B60418] text-white h-[50px] w-[100px] md:mx-[200px] flex items-center justify-center "
            style={{ minHeight: "50px", lineHeight: "50px",minWidth:"100px" }}
          >
            Sign Up
          </button>
        </div>
       <div className="pt-10 flex items-center justify-center">
       <Card  />

       </div>

     </div>
              </div>  
);
}
