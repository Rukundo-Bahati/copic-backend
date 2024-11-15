import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from "react-router-dom";
import user from "./user.json";

export default function HelloBanner() {

    const getLinkClasses = (path) => {
        return window.location.pathname === path ? "active-link" : "inactive-link";
    };

    return (
        <div className="flex justify-between items-center h-[300px] bg-cover bg-center text-white p-2 relative" style={{ backgroundImage: `url('/Sony Alpha ILCE-7RM2.png')` }} >
            <div className="max-w-sm">
                <p className="text-[18px] font-bold mb-4">Hello {user.name}!</p>
                <p className="text-[14px] mb-4 pb-5 w-[17rem]">Customize your calendar to remember your appointments with Clients</p>
                <Link className={`${getLinkClasses("/calendar")} text-white underline text-[15px]`} to="/calendar" >Customize here!</Link>
            </div>

            <div className="absolute top-4 right-4">
                <BsThreeDotsVertical size={24} className="text-white cursor-pointer" />
            </div>
        </div>
    );
}
