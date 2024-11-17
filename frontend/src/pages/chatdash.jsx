import { FaSearch,FaBell,FaChevronDown } from "react-icons/fa";
import Sidenav from "../components/sidenav";
export const Chatdash = () => {
  const userData=[
    {id:1, names:"Kagabo Jean Remy"},
    {id:2, names:"Uwase Vanessa"},
    {id:3, names:"Andy Melvin"},
    {id:4, names:"Beyonce Priase"},
    {id:5, names:"Bwiza Official" },
    {id:6, names:"Butera Knowless"},
    {id:7, names:"Anifa Gaella"},
    {id:8, names:"Keza Joanna"},
    {id:9, names:"Mike Peter"}
  ]

  return (
    <div className="bg-black w-full h-screen text-white">
                <Sidenav/>
      <div className="flex flex-col w-[100%]">
        <div className="flex justify-between mt-10 ">
          <h2 className="font-bold">Client Chat</h2>
         <div className="flex mr-10 gap-5">
        <FaSearch className=" h-[100%]"/>
        <FaBell className=" h-[100%]"/>
         <div className="flex items-center gap-2">
          <FaChevronDown/>
         </div>
          </div>   
        </div>

     <div className="flex flex-col bg-soft_black w-[50%] max-h-[100%] overflow-y-auto container ">
      <div  className="rounded-full flex gap-4 items-center bg-[#ADADAD] w-[80%] mx-auto p-1 mt-5">
        <FaSearch className="ml-4"/>
        <input type="text" placeholder="Search for client" className="bg-[#ADADAD] rounded-full outline-none placeholder-white"/>
        </div>
        <div className="mt-10" >
         {userData.map(user =>(
          <div key={user.id}className="flex justify-between mb-10 items-center ml-4 ">
          <div className="flex gap-4 items-center ">
             <img src={user.image} alt="user"/>
             <p>{user.names}</p>
          </div>
           <p className="mr-10 text-[#A3A3A3] text-[80%]">20:30 PM</p>
          </div>
         ))}
        </div>
      
    

     </div>

        </div>          
    </div>
  )
}

export default Chatdash;