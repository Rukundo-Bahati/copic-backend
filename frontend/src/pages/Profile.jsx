import React from "react";
import Sidenav from "../components/sidenav";
import Hand from "../images/Private.png";
import user1v1 from "../images/usertwo.png";
import { FaCamera, FaPencilAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

const Profile = () => {
  const dispatch = useDispatch();

  // Get user data from Redux store
  const user = useSelector((state) => state.user.user);
  console.log("User data from Redux:", user);

  if (!user) {
    return (
      <div className="bg-black flex">
        <Sidenav />
        <div className="flex flex-col w-[100%]">
          <h1 className="text-white font-bold mt-8 mb-5">Loading Profile...</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black flex">
      <Sidenav />
      <div className="flex flex-col w-[100%]">
        <h1 className="text-white font-bold mt-8 mb-5">Profile</h1>
        <div className="bg-[#040504] w-[100%] h-[100%]">
          <div className="flex flex-col items-center mt-10">
            <div className="relative flex flex-col items-center">
              <img
                src={user.profilePicture || user1v1} // Default to user1v1 if no profile picture
                alt="user"
                className="w-60 h-60 object-cover rounded-full"
              />
              <FaCamera className="text-[#ffffff80] absolute bottom-[10%] right-[20%] text-[200%]" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-[#ffff] text-2xl text-center my-5 font-bold">{user.username || "Ange Vanessa"}</h1>
              <div className="flex gap-1 items-center">
                <p className="text-white">
                  {user.bio || "Hello there I am using COPIC"}
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
                defaultValue={user.username || "Ange Vanessa"}
                id="name"
                className="py-1 ml-2 bg-[#303030] text-[#d9d9d980] p-4 rounded-md"
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
                defaultValue={user.credential || "Ange25@gmail.com"}
                id="email"
                className="py-1 ml-10 bg-[#303030] text-[#d9d9d980] p-4 rounded-md"
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
                defaultValue={user.password || "ange25vanessa"}
                id="password"
                className="py-1 ml-2 bg-[#303030] text-[#d9d9d980] p-4 rounded-md"
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
                defaultValue={user.role || "Photographer"}
                id="Role"
                className="py-1 ml-12 bg-[#303030] text-[#d9d9d980] p-4 rounded-md"
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
