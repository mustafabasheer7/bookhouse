const Header = () => {
  return (
    <div className="relative bg-black">
      <div className="absolute z-10 inset-x-0 inset-y-1/3">
        <div className="flex flex-col items-center text-yellow-100 font-lora">
          <span className="text-xl md:text-2xl lg:text-3xl font-bold">
            React & Open Library
          </span>
          <span className="uppercase font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            The Books Website
          </span>
        </div>
      </div>
      <div className="border-b border-black">
        <img
          src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1290&q=80"
          alt="books"
          className="object-cover w-full h-[450px] brightness-50 filter blur-[2px]"
        />
      </div>
    </div>
  );
};

export default Header;
