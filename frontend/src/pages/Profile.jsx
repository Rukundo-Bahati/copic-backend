import React from "react";
import Sidenav from "../components/sidenav";
import Hand from "../images/Private.png";
import user1v1 from "../images/user1v2.png";
import { FaCamera, FaPencilAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";

const Profile = () => {
  const dispatch = useDispatch();

  return (
    <div className="bg-black flex">
      <Sidenav />
      <div className="flex flex-col w-[100%]">
        <h1 className="text-white font-bold mt-8 mb-5">Profile</h1>
        <div className="bg-[#040504] w-[100%] h-[100%]">
          <div className="flex flex-col items-center mt-10">
            <div className="relative flex flex-col items-center">
              <img
                src={user1v1}
                alt="user number one"
                className="w-[70%]"
              />
              <FaCamera className="text-[#ffffff80] absolute bottom-[10%] right-[20%] text-[200%]" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-[#ffff] text-[120%]">Ange Vanessa</h1>
              <div className="flex gap-1 items-center">
                <p className="text-white text-[50%]">
                  Hello there I am using COPIC
                </p>
                <img src={Hand} alt="hello" />
              </div>
            </div>
          </div>

          <form className="ml-20 mt-20">
            <div className="flex gap-5 mb-5 items-center">
              <label htmlFor="name" className="text-[#ffff]">
                Username
              </label>
              <input
                type="text"
                defaultValue="Ange Vanessa"
                id="name"
                className="py-1 ml-2 bg-[#303030] text-[#d9d9d980]"
              />
              <button className="bg-[#B50418] py-1 px-7">
                <FaPencilAlt className="text-[#ffff]" />
              </button>
            </div>
            <div className="flex gap-5 mb-5 items-center">
              <label htmlFor="email" className="text-[#ffff]">
                Email
              </label>
              <input
                type="email"
                defaultValue="Ange25@gmail.com"
                id="email"
                className="py-1 ml-10 bg-[#303030] text-[#d9d9d980]"
              />
              <button className="bg-[#B50418] py-1 px-7">
                <FaPencilAlt className="text-[#ffff]" />
              </button>
            </div>
            <div className="flex gap-5 mb-5 items-center">
              <label htmlFor="password" className="text-[#ffff]">
                Password
              </label>
              <input
                type="password"
                defaultValue="ange25vanessa"
                id="password"
                className="py-1 ml-2 bg-[#303030] text-[#d9d9d980]"
              />
              <button className="bg-[#B50418] py-1 px-7">
                <FaPencilAlt className="text-[#ffff]" />
              </button>
            </div>
            <div className="flex gap-5 mb-5 items-center">
              <label htmlFor="Role" className="text-[#ffff]">
                Role
              </label>
              <input
                type="text"
                defaultValue="Photographer"
                id="Role"
                className="py-1 ml-12 bg-[#303030] text-[#d9d9d980]"
              />
              <button className="bg-[#B50418] py-1 px-7">
                <FaPencilAlt className="text-[#ffff]" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
