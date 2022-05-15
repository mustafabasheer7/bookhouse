const Footer = () => {
  return (
    <div className="relative bg-black mt-10">
      <div className="absolute z-10 inset-x-0 inset-y-1/3">
        <div className="flex flex-col items-center text-yellow-100 font-lora">
          <span className="text-sm md:text-lg lg:text-xl font-bold">
            © Open Library API | Images used are from{" "}
            <span className="text-teal-500">Unsplash</span>
          </span>
        </div>
      </div>
      <div className="border-b border-black">
        <img
          src="https://images.unsplash.com/photo-1526285759904-71d1170ed2ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGJvb2tzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="books"
          className="object-cover w-full h-[200px] brightness-50 filter blur-[2px]"
        />
      </div>
    </div>
  );
};

export default Footer;
