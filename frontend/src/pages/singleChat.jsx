// import Sidenav from "../components/sidenav";
// import user1 from "../../public/user1.png"
// import {   FaEllipsisV,  FaPaperPlane,  FaPhoneAlt, FaPlus, FaVideo } from "react-icons/fa";


// const SingleChat= () =>{


//     return (
//      <div className="flex bg-black w-full h-[100%]">
//         <Sidenav/>
//         <div className="flex flex-col w-[100%]">
//         <div className="flex mt-5 justify-between items-center">
//             <div className="flex items-center gap-4 ml-10">
//                 <img src={user1} alt="user profile"/>
//                 <p className="text-white font-bold">Ange Vanessa</p>
//             </div>
//           <div className="flex mr-20 gap-5">
//          <FaVideo className="text-[#ffffff] text-[150%]"/>
//          <FaPhoneAlt className="text-[#ffffff] text-[150%]" />
//          <FaEllipsisV className="text-[#ffffff] text-[150%]" />
//           </div>
//         </div>
//         <div className="bg-[#0a0b0c] flex flex-col w-full h-[100%] mt-5 relative">
//           <div className="flex flex-col ml-5 gap-3 absolute top-[20%] w-[100%]">
//              <div className="  bg-[#6193DD] w-[10%] max-w-[100%] flex  items-center rounded-lg p-1 ">
//                   <p className=" text-[#ffff] lg:ml-5 ">Hello</p>
//              </div>
//              <div className="  bg-[#6193DD] w-[30%] max-w-[100%] flex  items-center rounded-lg p-1 ">
//                   <p className="text-[#ffff] lg:ml-5">I would like to book for a Gala</p>
//              </div>
//           </div>
          
//           <div className="flex flex-col mr-5   gap-5   absolute right-0 absolute top-[40%]  ">
//              <div className=" self-end bg-[#ffff] w-[20%] max-w-[100%] flex  items-center rounded-lg p-1  ">
//                   <p className="   lg:ml-5 ">Hello</p>
//              </div>
//              <div className=" self-end  bg-[#ffff] w-[40%] max-w-[100%] flex  items-center rounded-lg p-1 ">
//                   <p className=" lg:ml-5">I would love to work  in a Gala saturday. I&apos; ll be there. give me  the location</p>
//              </div>
//           </div>

//           <div className=" flex  justify-between bg-[#272727]  mb-10 rounded-full p-2 flex  w-[80%] mx-auto absolute ml-20 bottom-0">
//             <div className="w-full flex items-center">
//                 <div className="bg-[#ADADAD]  rounded-full p-2 mr-4">
//                      <FaPlus className="text-white text-[150%]" />
//                 </div>
//                 <input type="text"  placeholder="New message" className=" bg-transparent placeholder-[#4d4d4d] rounded-full outline-none text-white"/>
//             </div>
//             <FaPaperPlane className="text-white text-[150%] self-center mr-4"/>
//           </div>
//         </div>

//         </div>
//      </div>
//     )}
// export default SingleChat;

import { useState, useEffect } from "react";
import Sidenav from "../components/sidenav";
import { FaEllipsisV, FaPaperPlane, FaPhoneAlt, FaPlus, FaVideo } from "react-icons/fa";
import { useParams } from "react-router-dom";
import axios from "axios";
import io from "socket.io-client";

const socket = io("http://localhost:5000"); // Replace with your backend URL

const SingleChat = () => {
  const { photographerId } = useParams(); // Dynamic route to identify the photographer
  const [photographer, setPhotographer] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    // Fetch photographer details
    axios.get(`/api/photographers/${photographerId}`).then((response) => {
      setPhotographer(response.data);
    });

    // Fetch chat history
    axios.get(`/api/chat/${photographerId}`).then((response) => {
      setMessages(response.data);
    });

    // Listen for real-time messages
    socket.on("receiveMessage", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => socket.disconnect();
  }, [photographerId]);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const message = { text: newMessage, sender: "user", photographerId };
      socket.emit("sendMessage", message);
      setMessages((prevMessages) => [...prevMessages, message]);
      setNewMessage("");

      // Optionally save the message to the backend
      axios.post(`/api/chat/${photographerId}`, message);
    }
  };

  return (
    <div className="flex bg-black w-full h-[100%]">
      <Sidenav />
      <div className="flex flex-col w-full">
        {/* Chat Header */}
        <div className="flex mt-5 justify-between items-center bg-[#0a0b0c] p-4">
          <div className="flex items-center gap-4 ml-10">
            {photographer && (
              <>
                <img
                  src={photographer.image}
                  alt={`${photographer.name}'s profile`}
                  className="w-10 h-10 rounded-full"
                />
                <p className="text-white font-bold">{photographer.name}</p>
              </>
            )}
          </div>
          <div className="flex mr-20 gap-5">
            <FaVideo className="text-[#ffffff] text-[150%]" />
            <FaPhoneAlt className="text-[#ffffff] text-[150%]" />
            <FaEllipsisV className="text-[#ffffff] text-[150%]" />
          </div>
        </div>

        {/* Chat Body */}
        <div className="bg-[#0a0b0c] flex flex-col w-full h-full mt-5 relative p-4 overflow-y-scroll">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`${
                msg.sender === "user" ? "self-end bg-[#ffff]" : "bg-[#6193DD]"
              } max-w-[60%] p-3 rounded-lg mb-3`}
            >
              <p className={`text-${msg.sender === "user" ? "black" : "white"}`}>
                {msg.text}
              </p>
            </div>
          ))}
        </div>

        {/* Chat Input */}
        <div className="flex justify-between bg-[#272727] p-4 rounded-full w-[80%] mx-auto mt-5">
          <div className="w-full flex items-center">
            <div className="bg-[#ADADAD] rounded-full p-2 mr-4">
              <FaPlus className="text-white text-[150%]" />
            </div>
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="New message"
              className="bg-transparent placeholder-[#4d4d4d] rounded-full outline-none text-white w-full"
            />
          </div>
          <FaPaperPlane
            className="text-white text-[150%] cursor-pointer"
            onClick={handleSendMessage}
          />
        </div>
      </div>
    </div>
  );
};

export default SingleChat;
