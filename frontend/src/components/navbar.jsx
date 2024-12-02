import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import Logo from "../images/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // Get the current location

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const getLinkClasses = (path) => {
    // Determine if the link matches the current path
    return location.pathname === path
      ? "hover:text-[#B60418] border-b-4 border-[#B60418] transition-all duration-300"
      : "hover:text-[#B60418] border-b-4 border-transparent hover:border-[#B60418] transition-all duration-300";
  };

  return (
    <div className="w-full p-4 md:p-6 flex items-center justify-between top-0 z-50 bg-transparent">
      <img src={Logo} className="h-16" alt="Logo" />
      <div className={`fixed inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center gap-12 transition-transform transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'} md:transform-none md:static md:flex md:flex-row md:gap-8 md:bg-transparent`}>
        <button className="absolute top-4 right-4 text-2xl md:hidden text-white" onClick={toggleMenu}>
          <FaTimes />
        </button>
        <ul className="flex flex-col text-white font-semibold md:text-base items-center gap-6 md:flex-row md:gap-8 md:mb-10">
          <Link className={getLinkClasses("/")} to="/">Home</Link>
          <Link className={getLinkClasses("/about")} to="/about">About Us</Link>
          <Link className={getLinkClasses("/contact")} to="/contact">Contact</Link>
        </ul>
        <button className="h-10 w-24 text-white bg-[#B60418] hover:bg-[#8B0313] transition-all duration-300 md:mb-10">
          <Link to="/signin" >Sign in</Link>
        </button>
      </div>
      <FaBars className="cursor-pointer md:hidden text-white text-2xl mb-10" onClick={toggleMenu} />
    </div>
  );
};

export default Navbar;
