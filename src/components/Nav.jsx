import { Search } from "@mui/icons-material";

const Nav = () => {
  return (
    <div className="w-full h-12 bg-teal-500 sticky top-0 flex items-center border-b border-black z-20">
      {/* Left Side */}
      <div className="hidden md:block flex-[3]">
        <div className="flex items-center justify-center">
          <span className="font-yellowtail font-bold text-4xl text-yellow-100 hover:text-yellow-300 cursor-pointer transition ease-in duration-200">
            BookHouse
          </span>
        </div>
      </div>
      {/* Center */}
      <div className="flex-[4] md:flex-[6]">
        <ul className="flex items-center justify-center">
          <li className="uppercase mr-3 sm:mr-6 text-sm sm:text-xl font-bold text-yellow-100 hover:text-yellow-300 transition ease-in duration-200 cursor-pointer tracking-wider">
            Home
          </li>
          <li className="uppercase text-sm sm:text-xl font-bold text-yellow-100 hover:text-yellow-300 transition ease-in duration-200 cursor-pointer tracking-wider">
            Subjects
          </li>
        </ul>
      </div>
      {/* Right Side */}
      <div className="flex-[3] md:flex-[3]">
        <div className="bg-yellow-100 rounded-lg w-5/6 xl:w-3/6 p-1 flex items-center justify-center border border-black">
          <Search className="w-4 h-4 mr-1 text-yellow-500" />
          <input
            type="text"
            className="bg-transparent outline-none text-xs sm:text-md sm:font-semibold w-full"
            placeholder="Search a book..."
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
