import Sidenav from "../components/sidenav";
import user1 from "../../public/user1.png"
import {   FaEllipsisV,  FaPaperPlane,  FaPhoneAlt, FaPlus, FaVideo } from "react-icons/fa";


const SingleChat= () =>{


    return (
     <div className="flex bg-black w-full h-[100%]">
        <Sidenav/>
        <div className="flex flex-col w-[100%]">
        <div className="flex mt-5 justify-between items-center">
            <div className="flex items-center gap-4 ml-10">
                <img src={user1} alt="user profile"/>
                <p className="text-white font-bold">Ange Vanessa</p>
            </div>
          <div className="flex mr-20 gap-5">
         <FaVideo className="text-[#ffffff] text-[150%]"/>
         <FaPhoneAlt className="text-[#ffffff] text-[150%]" />
         <FaEllipsisV className="text-[#ffffff] text-[150%]" />
          </div>
        </div>
        <div className="bg-[#0a0b0c] flex flex-col w-full h-[100%] mt-5 relative">
          <div className="flex flex-col ml-5 gap-3 absolute top-[20%] w-[100%]">
             <div className="  bg-[#6193DD] w-[10%] max-w-[100%] flex  items-center rounded-lg p-1 ">
                  <p className=" text-[#ffff] lg:ml-5 ">Hello</p>
             </div>
             <div className="  bg-[#6193DD] w-[30%] max-w-[100%] flex  items-center rounded-lg p-1 ">
                  <p className="text-[#ffff] lg:ml-5">I would like to book for a Gala</p>
             </div>
          </div>
          
          <div className="flex flex-col mr-5   gap-5   absolute right-0 absolute top-[40%]  ">
             <div className=" self-end bg-[#ffff] w-[20%] max-w-[100%] flex  items-center rounded-lg p-1  ">
                  <p className="   lg:ml-5 ">Hello</p>
             </div>
             <div className=" self-end  bg-[#ffff] w-[40%] max-w-[100%] flex  items-center rounded-lg p-1 ">
                  <p className=" lg:ml-5">I would love to work  in a Gala saturday. I&apos; ll be there. give me  the location</p>
             </div>
          </div>

          <div className=" flex  justify-between bg-[#272727]  mb-10 rounded-full p-2 flex  w-[80%] mx-auto absolute ml-20 bottom-0">
            <div className="w-full flex items-center">
                <div className="bg-[#ADADAD]  rounded-full p-2 mr-4">
                     <FaPlus className="text-white text-[150%]" />
                </div>
                <input type="text"  placeholder="New message" className=" bg-transparent placeholder-[#4d4d4d] rounded-full outline-none text-white"/>
            </div>
            <FaPaperPlane className="text-white text-[150%] self-center mr-4"/>
          </div>
        </div>

        </div>
     </div>
    )}
export default SingleChat;