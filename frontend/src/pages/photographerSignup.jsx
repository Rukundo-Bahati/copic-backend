import Logo from "../images/logo.png";
import Bg from "../images/bg.png";
import { Link } from "react-router-dom";
export default function SignUpPhotographer() {
  return (
    <div
      className=" pb-10  z-10 "
      style={{
        backgroundImage: `url(${Bg})`,
        backgroundSize: "cover",
        height:"100vh",
        backgroundRepeat: "no-repeat",
      }}
    >
      <img
        src={Logo}
        className="w-[300px] flex items-start justify-start"
      ></img>
      <div className=" flex items-center justify-center flex-col ">
        <div className=" bg-[#0A0B0C] p-5 flex md:w-[400px] max-w-[400px] flex-col items-center justify-center rounded-md text-white gap-5">
          <div className="flex flex-col gap-1">
            <h1 className="font-bold text-[30px]">Sign Up As</h1>
            <p className="font-thin opacity-50">Photographer</p>
          
          </div>
          <input
              type="text"
              className="md:w-[350px] max-w-[350px] h-[50px] text-white bg-opacity-35 bg-[#817575] focus:outline-none rounded-md text-center"
              placeholder="Email or phone number"
            />
            <input
              type="text"
              className="md:w-[350px] max-w-[350px] h-[50px] text-white bg-opacity-35 bg-[#817575] focus:outline-none rounded-md text-center"
              placeholder="Password"
            /><input
            type="text"
            className="md:w-[350px] max-w-[350px] h-[50px] text-white bg-opacity-35 bg-[#817575] focus:outline-none rounded-md text-center"
            placeholder="Confirm password"
          />
            <button
            className="bg-[#B60418] text-white h-[40px] max-w-[350px] md:w-[350px] "
            style={{ minHeight: "50px", lineHeight: "40px",minWidth:"100px" }}
          >
         <Link to="/choice" >Sign up</Link>
          </button>
          <p>New to Copic ? Sign up now</p>

        </div>
      </div>
    </div>
  );
}
