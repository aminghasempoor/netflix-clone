import Link from "next/link";

function HeaderItems({ text, Icon, link }) {
  return (
    <Link
      href={`${link}`}
      className="group flex flex-col justify-center items-center cursor-pointer w-7 sm:w-30 m-2"
    >
      <Icon className="h-8 mb-0.5 group-hover:animate-bounce" />
      <p className="tracking-widest opacity-0 group-hover:opacity-100 ">
        {text}
      </p>
    </Link>
  );
}

export default HeaderItems;
