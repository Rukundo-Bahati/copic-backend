import React from "react";

import UserHome from "../pages/UserHome";
import RightSidebar from "./RightSidebar";
import UserNavbar from "./usernavbar";

const UserHomePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <UserNavbar />
      <div className="flex flex-col md:flex-row flex-1 mt-4 gap-0"> {/* Removed or reduced margin-top */}
        {/* Main Content */}
        <div className="flex-1">
          <UserHome />
        </div>

        {/* Sidebar */}
        <div className="hidden md:block md:w-1/4 p-4"> {/* Adjust padding here if necessary */}
          <RightSidebar />
        </div>
      </div>
    </div>
  );
};

export default UserHomePage;
