import { useState } from 'react';
import { FaBars, FaBell, FaTimes } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import Logo from "../images/logo.png";

const UserNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const getLinkClasses = (path) =>
    location.pathname === path
      ? "text-[#B60418] border-b-4 border-[#B60418] transition-all duration-300"
      : "text-white hover:text-[#B60418] border-b-4 border-transparent hover:border-[#B60418] transition-all duration-300";

  return (
    <div className="w-full flex items-center justify-between p-3 bg-black text-white">
      <img src={Logo} className="w-36" alt="Logo" />
      
      <div
        className={`fixed inset-0 bg-black bg-opacity-95 flex flex-col items-center justify-center gap-12 transition-transform transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } md:transform-none md:static md:flex md:flex-row md:gap-8 md:bg-transparent`}
      >
        <button
          className="absolute top-4 right-4 text-2xl md:hidden"
          onClick={toggleMenu}
        >
          <FaTimes />
        </button>

        <ul className="flex flex-col md:flex-row gap-6 items-center">
          <Link className={getLinkClasses("/user")} to="/user">
            Home
          </Link>
          <Link className={getLinkClasses("/gallery")} to="/gallery">
            Gallery
          </Link>
          <Link className={getLinkClasses("/profile")} to="/profile">
            My Account
          </Link>
          <div className="relative">
            <FaBell className="text-red-500 cursor-pointer" />
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              3
            </span>
          </div>
        </ul>
      </div>
      
      <FaBars
        className="cursor-pointer md:hidden text-2xl"
        onClick={toggleMenu}
      />
    </div>
  );
};

export default UserNavbar;
