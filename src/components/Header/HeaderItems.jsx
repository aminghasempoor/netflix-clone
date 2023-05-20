function HeaderItems({ text, Icon }) {
  return (
    <div className="group flex flex-col items-center cursor-pointer w-12 sm:w-20">
      <Icon className="h-8 mb-1 group-hover:animate-bounce" />
      <p className="tracking-widest opacity-0 group-hover:opacity-100 ">
        {text}
      </p>
    </div>
  );
}

export default HeaderItems;
