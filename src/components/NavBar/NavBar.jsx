import React from "react";
import { useRouter } from "next/router";
import Request from "@/utils/Request";

function NavBar() {
  const router = useRouter();
  return (
    <nav>
      <div className="flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide">
        {Object.entries(Request).map(([key, { title }]) => (
          <h2
            className="cursor-pointer transition duration-100 transform hover:scale-125 active:text-red-500 last:pr-24"
            key={key}
            onClick={() => router.push(`/?genre=${key}`)}
          >
            {title}
          </h2>
        ))}
        <div className="absolute right-0 bg-gradient-to-l from-[#000] h-10 w-1/12" />
      </div>
    </nav>
  );
}

export default NavBar;
