const HomeHeader = ({ imgURL, title }) => {
  return (
    <div className="relative bg-black">
      <div className="absolute z-10 inset-x-0 inset-y-1/3">
        <div className="flex flex-col items-center text-yellow-100 font-lora">
          <span className="text-xl md:text-2xl lg:text-3xl font-bold">
            using React & Open Library
          </span>
          <span className="uppercase font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            {title}
          </span>
        </div>
      </div>
      <div className="border-b border-black">
        <img
          src={imgURL}
          alt="header"
          className="object-cover w-full h-[450px] brightness-50 filter blur-[2px]"
        />
      </div>
    </div>
  );
};

export default HomeHeader;
