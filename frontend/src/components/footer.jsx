import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Logo from "../images/logo.png";

export default function Footer() {
  return (
    <div className="bg-black flex flex-col gap-10 pt-20">
      <div className=" flex xl:flex-row flex-col justify-center items-center text-center xl:gap-[400px] ">
        <img src={Logo} alt="Logo"className="h-16" />
        <div className="flex items-center justify-center gap-5 mb-10 ">
          <FaTwitter className="text-[#B60418] w-[40px] h-[40px]" />
          <FaInstagram className="text-[#B60418] w-[40px] h-[40px]" />
          <FaFacebook className="text-[#B60418] w-[40px] h-[40px]" />
          <FaLinkedin className="text-[#B60418] w-[40px] h-[40px]" />
        </div>

      </div>
      <div className="flex gap-1">
       <ul className="list-none text-white flex-wrap flex gap-10 pb-5 items-center flex-1 justify-center">
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Terms of Services</li>
        <li>Cookie Preference</li>
        <li>Privacy</li>
        <li>2023 COPIC
        Project By Andy </li>
       </ul>
      </div>
    </div>
  );
}
