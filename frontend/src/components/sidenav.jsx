import { useState } from "react";
import { FaRegUserCircle, FaRegCalendar } from "react-icons/fa";
import { FiMessageSquare } from "react-icons/fi";
import { IoSettingsSharp } from "react-icons/io5";
import { BsPostcard } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";

// Sidebar data array
const sideData = [
    {
        path: "/Dashboard",
        icon: "FaRegUserCircle",
        label: "Dashboard"
    },
    {
        path: "/Chat",
        icon: "FiMessageSquare",
        label: "Chat"
    },
    {
        path: "/Calendar",
        icon: "FaRegCalendar",
        label: "Calendar"
    },
    {
        path: "/Settings",
        icon: "IoSettingsSharp",
        label: "Settings"
    },
    {
        path: "/newPost",
        icon: "BsPostcard",
        label: "Create A Post"
    }

];

// Mapping icons to their corresponding components
const icons = {
    FaRegUserCircle: <FaRegUserCircle className="w-[20px] h-[20px]" />,
    FaRegCalendar: <FaRegCalendar className="w-[20px] h-[20px]" />,
    FiMessageSquare: <FiMessageSquare className="w-[20px] h-[20px]" />,
    IoSettingsSharp: <IoSettingsSharp className="w-[20px] h-[20px]" />,
};

export default function Sidenav() {
    const location = useLocation(); // Get current location from router
    const [activeLink, setActiveLink] = useState(location.pathname); // Set initial active link based on current path

    const handleLinkClick = (path) => {
        setActiveLink(path); // Update active link on click
    };

    return (
        <div className="bg-[#000] w-[304px] h-screen">
            <img className="w-[304px] h-[86px]" src="/copic.png" alt="logo" />
            <div className="flex flex-col">
                {sideData.map((item, index) => (
                    <Link
                        to={item.path} // Dynamic link path from sideData array
                        key={index}
                        onClick={() => handleLinkClick(item.path)} // Set active state on click
                        className={`w-[304px] h-[2.65rem] flex items-center gap-[0.5rem] text-[12px] ${
                            activeLink === item.path
                                ? 'text-white border-l-[#86070C] border-l-[4px] ' // Active link styles: red border, white text, darker background
                                : 'text-[#686868]' // Inactive link styles: grey text
                        } pl-[3rem]`} // Adjusted padding for better icon alignment
                    >
                        {icons[item.icon] /* Dynamically rendered icons */}
                        <span className="hidden md:block">{item.label}</span> {/* Hide text on small screens */}
                    </Link>
                ))}
            </div>
        </div>
    );
}
