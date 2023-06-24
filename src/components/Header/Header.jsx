import HeaderItems from "./HeaderItems";
import Image from "next/image";
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
  UserCircleIcon,
  PlusCircleIcon,
} from "@heroicons/react/outline";
import useUser from "@/lib/app/hooks/useUser";

function Header() {
  const { isAuth } = useUser();
  return (
    <header className="flex flex-col sm:flex-row py-4 px-10 justify-between items-center h-auto">
      {isAuth ? (
        <div className="flex flex-row-reverse flex-grow justify-evenly items-center max-w-2xl">
          <HeaderItems text="HOME" Icon={HomeIcon} link="/" />
          <HeaderItems text="VERIFIED" Icon={BadgeCheckIcon} link="/" />
          <HeaderItems text="TRENDING" Icon={LightningBoltIcon} link="/" />
          <HeaderItems text="COLLECTION" Icon={CollectionIcon} link="/" />
          <HeaderItems text="SEARCH" Icon={SearchIcon} link="/" />
          <HeaderItems text="ACCOUNT" Icon={UserIcon} link="/login" />
        </div>
      ) : (
        <div className="flex flex-row-reverse flex-grow text-center pt-2 justify-end items-center max-w-xl">
          <HeaderItems text="Home" Icon={HomeIcon} link="/" />
          <HeaderItems text="SignIN" Icon={UserCircleIcon} link="/login" />
          <HeaderItems text="SignUP" Icon={PlusCircleIcon} link="/register" />
        </div>
      )}
      <Image
        className="object-contain"
        alt="Picture"
        src="/logopicture.png"
        width={150}
        height={70}
      />
    </header>
  );
}

export default Header;
