import React from "react";
import { BellIcon, ExclamationCircleIcon } from "@heroicons/react/outline";
import Image from "next/image";
import HeaderItems from "../Header/HeaderItems";

function Header() {
  return (
    <div>
      <div className="flex items-center justify-center sm:justify-end w-full h-auto px-4">
        <div className="flex gap-5 items-center px-2 pt-8">
          <HeaderItems text="Messages" Icon={BellIcon} />
          <HeaderItems text="Help" Icon={ExclamationCircleIcon} />
        </div>
        <div className="flex items-center justify-center px-4 pt-8 pb-1 flex-col">
          <div className="flex flex-col items-center justify-center">
            <Image
              className="rounded-full"
              src="/picture.jpg"
              alt="picture"
              width={30}
              height={30}
            />
            <p>Name</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
