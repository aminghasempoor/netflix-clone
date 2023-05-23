import HeaderItems from "./HeaderItems";
import Image from "next/image";
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-4 justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly items-center max-w-2xl">
        <HeaderItems text="HOME" Icon={HomeIcon} link="/" />
        <HeaderItems text="VERIFIED" Icon={BadgeCheckIcon} link="/" />
        <HeaderItems text="TRENDING" Icon={LightningBoltIcon} link="/" />
        <HeaderItems text="COLLECTION" Icon={CollectionIcon} link="/" />
        <HeaderItems text="SEARCH" Icon={SearchIcon} link="/" />
        <HeaderItems text="ACCOUNT" Icon={UserIcon} link="/login" />
      </div>
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
