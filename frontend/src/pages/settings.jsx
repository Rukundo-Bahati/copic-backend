import { FaBell, FaChevronDown, FaChevronLeft, FaSearch } from "react-icons/fa";
import Sidenav from "../components/sidenav"
import user1 from "../../public/user1.png"
import {useState} from 'react'
import aperture from '../../public/Aperture.png'
import { FiMessageSquare } from "react-icons/fi";


const Settings= () =>{
    const[toggle,setToggle]=useState(false);
    const handleClick=()=>{
        setToggle(!toggle)
    }

    return (
        <div className="bg-black flex">
            <Sidenav/>
            <div className="w-[100%] h-[100%] flex flex-col">
            <div className="flex justify-between items-center mt-5 mb-5">
                <h1 className="text-white font-bold ">Settings</h1>
                <div className="flex items-center gap-4 mr-5">
                    <FaSearch className="text-white text-[120%]"/>
                    <FaBell className="text-white text-[120%]"/>
                    <img src={user1} alt="user profile" className="w-[40%]"/>
                    <FaChevronDown className="text-white text-[120%]"/>
                </div>
            </div>
            <div className="w-full min-h-screen bg-[#040405] relative">
              <div className="w-[50%] h-[30%] bg-[#0a0b0c] px-7 py-5 absolute top-[10%] left-[5%] rounded-xl">
              <div className="flex gap-4 mb-4">
                  <FaBell className="text-[#fff] text-[120%]"/>
                  <h2 className="text-[#fff] font-semibold">Notifications</h2>
              </div>
              <div className="flex justify-between items-center mb-4">
                <p className="text-white">Do not Disturb</p>

                <div className="flex items-center justify-center gap-2  w-[30%] " 
                onClick={handleClick}>
                    <p className="text-white font-bold">{toggle ? 'ON':'OFF'}</p>
                    <div className={`${toggle ? "w-[45%]  rounded-full py-1.5 bg-[#B50418] flex items-start relative" : "w-[45%] rounded-full py-1.5 bg-[#000] flex items-start "}`}>
                      <div className="w-[10%] p-3 rounded-full bg-white ml-1 "></div>
                    </div>
                </div>
              </div>
              <div className="flex justify-between items-center ">
                <p className="text-white">Allow popup on your screen</p>

                <div className="flex items-center justify-center gap-2  w-[30%]">
                    <div className="w-[45%]  rounded-full py-4 bg-[#B50418] flex items-start relative">
                      <div className="w-[10%] p-3 rounded-full bg-white ml-1 absolute right-1 bottom-1"></div>
                    </div>
                    <p className="text-white font-bold">ON</p>
                </div>

              </div>
            </div>  




            <div className="w-[50%] h-[30%] bg-[#0a0b0c] px-7 py-5 absolute bottom-[10%] left-[5%] rounded-xl">
              <div className="flex gap-4 mb-4">
                  <img src={aperture} alt="camera"/>
                  <h2 className="text-[#fff] font-semibold">Activity</h2>
              </div>
              <div className="flex justify-between items-center mb-4 bg-[#000000] p-2">
                <p className="text-white">Setting Working Hours</p>
                 <FaChevronLeft className="text-white" />
                </div>

                <div className="flex justify-between items-center bg-[#000000] p-2 ">
                <p className="text-white">Track Your Progress</p>
                <FaChevronLeft className="text-white"/>

              </div>
              </div>
             


              <div className="w-[30%] h-[30%] bg-[#0a0b0c] px-7 py-5 absolute top-[10%] right-[5%] rounded-xl">
              <div className="flex gap-4 mb-4">
                  <FiMessageSquare className="text-white text-[150%]"/>
                  <h2 className="text-[#fff] font-semibold">Chat</h2>
              </div>
              <div className="flex justify-between items-center mb-4 bg-[#000000] p-2">
                <p className="text-white">Styles</p>
                 <FaChevronLeft className="text-white" />
                </div>

                <div className="flex justify-between items-center bg-[#000000] p-2 ">
                <p className="text-white">Chat history</p>
                <FaChevronLeft className="text-white"/>

              </div>
              </div>


              <div className="w-[30%] h-[30%] bg-[#0a0b0c] px-7 py-5 absolute bottom-[10%] right-[5%] rounded-xl">
              <div className="flex gap-4 mb-4">
                  <FiMessageSquare className="text-white text-[150%]"/>
                  <h2 className="text-[#fff] font-semibold">Portofolio</h2>
              </div>
              <div className="flex justify-between items-center mb-4 bg-[#000000] p-2">
                <p className="text-white">Upload collection</p>
                 <FaChevronLeft className="text-white" />
                </div>

                <div className="flex justify-between items-center bg-[#000000] p-2 ">
                <p className="text-white">Connect</p>
                <FaChevronLeft className="text-white"/>

              </div>
              </div>
              
             
            </div>  

       
       
            </div>

            </div>
    )
}

export default Settings;