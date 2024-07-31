import PlusIcon from "@/assets/PlusIcon";
import Automate from "@/assets/topbar/Automate";
import Calender from "@/assets/topbar/Calender";
import Filter from "@/assets/topbar/Filter";
import Search from "@/assets/topbar/Search";
import Share from "@/assets/topbar/Share";
import React from "react";

const TopBar = () => {
  return (
    <div className="flex items-center justify-between mt-4">
      <div className="flex items-center relative">
        <input
          type="text"
          placeholder="Search"
          className="rounded-md p-2 border-inherit border-2"
        />
        <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
          <Search />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button className="flex items-center bg-gray-100 p-2 rounded-md">
          <span className="mr-2">Calendar view</span>
          <Calender />
        </button>
        <button className="flex items-center bg-gray-100 p-2 rounded-md">
          <span className="mr-2">Automation</span>
          <Automate />
        </button>
        <button className="flex items-center bg-gray-100 p-2 rounded-md">
          <span className="mr-2">Filter</span>
          <Filter />
        </button>
        <button className="flex items-center bg-gray-100 p-2 rounded-md">
          <span className="mr-2">Share</span>
          <Share />
        </button>
        <div className="flex space-x-2 p-2">
          <button className="w-full bg-gradient-to-r from-indigo-700 to-blue-600 text-white py-2 px-2 rounded-md hover:from-indigo-700 hover:to-blue-600 flex items-center justify-center">
            Create new
            <span className="ml-2">
              <PlusIcon />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
