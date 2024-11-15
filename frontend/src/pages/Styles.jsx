import { FaBell, FaChevronDown, FaSearch } from "react-icons/fa";
import Sidenav from "../components/sidenav";
import user1 from '../../public/user1.png'
import Sun from '../../public/Sun.jpg'
import Lion from '../../public/Lion.jpg'
import Fall from '../../public/Fall.jpg'

const Styles = () =>{

    return (
        <div className="bg-black flex ">
            <Sidenav/>
        <div className="flex flex-col gap-2 w-[100%] min-h-screen ">
            <div className="flex justify-between mt-7 items-center">
                <p className="text-white font-bold">Setting &lt; Chat &lt; Styles</p>
                <div className="flex gap-4 items-center mr-5">
                <FaSearch className="text-white"/>
                <FaBell className="text-white"/>
                <img src={user1} alt="user profile" className="w-[30%]"/>
                <FaChevronDown className="text-white"/>
                </div>
                </div> 

                <div className="w-[100%] h-[100%] bg-[#040405] p-2 relative overflow-y-auto">
                   <h2 className="font-semibold text-white absolute left-[10%] top-[5%]">Choose Wallpaper</h2>

                   <div className="flex absolute top-[15%] left-[10%] mb-10">
                    <img src={Sun} alt="wallpaper" className="w-[20%] border-[5px] border-black"/>
                    <img src={Fall} alt="wallpaper" className="w-[15%] border-[5px] border-black"/>
                    <img src={Lion} alt="wallpaper" className="w-[20%] border-[5px] border-black"/>
                   </div>

                   <div className="flex justify-between items-center p-2 bg-[#0a0b0c]  w-[70%] absolute left-[10%] top-[40%]">
                    <p className="text-white">Choose your chat Wallpaper </p>
                    <button className="bg-[#B50418] text-[#fff] px-3 py-1">Choose</button>
                   </div>

                   <div className="flex justify-between items-center p-2 bg-[#0a0b0c]  w-[70%] absolute left-[10%] top-[55%]">
                    <p className="text-white">Browse your Photo </p>
                    <button className="bg-[#B50418] text-[#fff] px-3 py-1">Choose</button>
                   </div>


                   <h2 className="font-semibold text-white absolute left-[10%] top-[70%] text-white ">Change Font Styles</h2>

                   <div className="flex justify-between items-center p-2 bg-[#0a0b0c]  w-[70%] absolute left-[10%] top-[80%]">
                    <p className="text-white">Font Family</p>
                    <button className="bg-[#B50418] text-[#fff] px-3 py-1 flex items-center gap-2">Roboto <FaChevronDown className="text-white"/> </button>
                   </div>


                   <div className="flex justify-between items-center p-2 bg-[#0a0b0c]  w-[70%] absolute left-[10%] top-[95%] ">
                    <p className="text-white">Font Family</p>
                    <button className="bg-[#B50418] text-[#fff] px-3 py-1 flex items-center gap-2">50 <FaChevronDown className="text-white"/> </button>
                   </div>

                   
                </div>
         </div> 

        </div>
    )}


export default Styles;    