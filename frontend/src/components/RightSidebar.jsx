import React from "react";
import Avatar from "../assets/MYLOGO.png"; // Adjust the path as needed

const RightSidebar = () => {
  return (
    <div className="w-full  p-4 bg-white shadow-lg rounded-lg ">
      <h3 className="text-xl font-semibold mb-4">Recommended Users</h3>
      <ul>
        {/* Example of recommended users */}
        <li className="flex items-center mb-4">
          <img
            src={Avatar}
            alt="User"
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="ml-3 text-gray-800">John Doe</span>
        </li>
        <li className="flex items-center mb-4">
          <img
            src={Avatar}
            alt="User"
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="ml-3 text-gray-800">John Doe</span>
        </li>
        <li className="flex items-center mb-4">
          <img
            src={Avatar}
            alt="User"
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="ml-3 text-gray-800">John Doe</span>
        </li>
        <li className="flex items-center mb-4">
          <img
            src={Avatar}
            alt="User"
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="ml-3 text-gray-800">Jane Smith</span>
        </li>
        {/* Add more recommended users or content */}
      </ul>
    </div>
  );
};

export default RightSidebar;
