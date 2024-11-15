import Navbar from "../components/navbar";

export default function Contact() {
  return (
    <div
      className="max-h-[100%]"
      style={{
        background: "linear-gradient(to right, black 50%, #0F0F0F 50%)",
        color: "black",
      }}
    >
      <Navbar />
     <div className="flex xl:flex-row flex-col gap-10 pl-10 pr-10">
     <div className="flex xl:flex-row flex-col p-10 items-center justify-center">
        <div className="flex flex-col text-white gap-10">
          <h2 className="text-opacity-80 text-white">Contact</h2>
          <h2 className="text-[40px] font-semibold">
            Our users love
            <br /> what we do
          </h2>
          <p className="max-w-[500px]">
            Over 100 Photographers & their Clients use Copic to connect, and get
            their wonderful moments captured all at one.
          </p>
          <h2 className="text-[40px] font-semibold">Connect Now!</h2>
          <button
            className="bg-[#B60418] text-white h-[50px] w-[100px] md:mx-[200px] flex items-center justify-center"
            style={{ minHeight: "50px", lineHeight: "50px", minWidth: "100px" }}
          >
            Sign Up
          </button>
        </div>
        
      </div>
      <div className="pt-10 flex flex-col gap-5 items-center justify-center pb-10 ">
            <h1 className="font-semibold text-[40px] text-center justify-center items-center  text-white">Contact us</h1>
                <input type="text" className="md:w-[500px] max-w-[500px] h-[50px] bg-white focus:outline-none rounded-md text-center" placeholder="Names" />
                <input type="text" className="md:w-[500px] max-w-[500px] h-[50px] bg-white focus:outline-none rounded-md text-center" placeholder="Email" />
                <input type="text" className="md:w-[500px] max-w-[500px] h-[50px] bg-white focus:outline-none rounded-md text-center" placeholder="Phone" />
                <input type="text" className="md:w-[500px] max-w-[500px] h-[200px] bg-white focus:outline-none rounded-md text-center" placeholder="Message" />
                <button
            className="bg-[#B60418] text-white h-[50px] w-[100px] md:mx-[200px] flex items-center justify-center"
            style={{ minHeight: "50px", lineHeight: "50px", minWidth: "100px" }}
          >
            Send
          </button>
        </div>
     </div>
    </div>  
  );
}
