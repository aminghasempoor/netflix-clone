import React from "react";
import {
  FilmIcon,
  ChevronRightIcon,
  UserIcon,
  ChatIcon,
  LinkIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";

function Sidebar() {
  return (
    <div className="h-screen px-6">
      <div className="px-4 py-8 flex items-center justify-center border-b border-[#EDEDED]/[0.3]">
        <h1 className="leading-10 text-2xl cursor-pointer">Dashbord</h1>
      </div>
      <div className="flex item-center gap-3 py-5 border-b border-[#EDEDED]/[0.3]">
        <FilmIcon className="h-8" />
        <p className="cursor-pointer">My Movies</p>
      </div>
      <div className="pt-1 border-b border-[#EDEDED]/[0.3]">
        <p className="text-white/[0.4]">Setting</p>
        <div className="flex items-center cursor-pointer justify-between py-3 gap-2">
          <div className="flex items-center">
            <UserIcon className="h-7" />
            <p className="pl-2">Edit Profile</p>
          </div>
          <ChevronRightIcon className="h-5" />
        </div>
        <div className="flex items-center cursor-pointer justify-between py-3 gap-2">
          <div className="flex items-center">
            <ChatIcon className="h-7" />
            <p className="pl-2">Support</p>
          </div>
          <ChevronRightIcon className="h-5" />
        </div>
      </div>
      <div className="pt-1 border-b border-[#EDEDED]/[0.3]">
        <p className="text-white/[0.4]">List</p>
        <div className="flex items-center cursor-pointer justify-between py-3 gap-2">
          <div className="flex items-center">
            <LinkIcon className="h-7" />
            <p className="pl-2">Following</p>
          </div>
        </div>
        <div className="flex items-center cursor-pointer justify-between py-3 gap-2">
          <div className="flex items-center">
            <UserGroupIcon className="h-7" />
            <p className="pl-2">Followers</p>
          </div>
        </div>
      </div>
      <div className="bg-red-500/25 mx-4 my-4 rounded flex items-center justify-center">
        <button className="leading-10 text-2xl font-bold cursor-pointer text-white/60">
          Log Out
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
