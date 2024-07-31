"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import HomeIcon from "@/assets/HomeIcon";
import DarkMode from "@/assets/DarkMode";
import RightArrow from "@/assets/RightArrow";
import Image from "next/image";
import Notification from "@/assets/Notification";
import LogOut from "@/assets/LogOut";
import BoardIcon from "@/assets/BoardIcon";
import SettingIcon from "@/assets/SettingIcon";
import TeamIcon from "@/assets/TeamIcon";
import AnalyticsIcon from "@/assets/AnalyticsIcon";
import PlusIcon from "@/assets/PlusIcon";
import FooterNav from "@/assets/FooterNav";

const LeftSideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const menuItems = [
    { name: "Home", icon: <HomeIcon />, path: "/" },
    { name: "Boards", icon: <BoardIcon />, path: "/boards" },
    { name: "Settings", icon: <SettingIcon />, path: "/settings" },
    { name: "Teams", icon: <TeamIcon />, path: "/teams" },
    { name: "Analytics", icon: <AnalyticsIcon />, path: "/analytics" },
  ];
  return (
    <>
      <button
        className="md:hidden fixed top-4 left-4 z-20 p-2 bg-white rounded-md shadow-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>
      <div
        className={`bg-white h-screen w-64 flex flex-col shadow-md fixed left-0 top-0 z-10 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <div className="p-4">
          <div className="flex space-x-2">
            <Image src="/image.png" alt="profile" width={31} height={31} />
            <h2 className="text-xl font-semibold">Joe Gardner</h2>
          </div>
          <div className="flex space-x-2 mt-2">
            <button className="p-1 hover:bg-gray-100 rounded">
              <Notification />
            </button>
            <button className="p-1 hover:bg-gray-100 rounded">
              <DarkMode />
            </button>
            <button className="p-1 hover:bg-gray-100 rounded">
              <RightArrow />
            </button>
            <button className="pl-10">
              <LogOut />
            </button>
          </div>
        </div>
        <nav className="flex-1">
          <ul>
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link href={item.path}>
                  <span
                    className={`flex items-center p-2 ml-1 mr-1 hover:bg-gray-100 rounded-md ${
                      pathname === item.path
                        ? "bg-gray-100 ml-1 mr-1 rounded-md border-inherit border-2"
                        : ""
                    }`}
                  >
                    <button className="mr-3">{item.icon}</button>
                    <span className="text-slate-500">{item.name}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex space-x-2 p-3">
            <button className="w-full bg-gradient-to-r from-indigo-700 to-blue-600 text-white py-4 px-4 rounded-md hover:from-indigo-700 hover:to-blue-600 flex items-center justify-center">
              Create new task
              <span className="ml-3"><PlusIcon /></span>
            </button>
          </div>
        </nav>
        <div className="p-3 pl-0 pb-4">
          <FooterNav />
        </div>
      </div>
    </>
  );
};

export default LeftSideBar;
