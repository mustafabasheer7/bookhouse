import { Search } from "@mui/icons-material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SearchResults from "./SearchResults";

const Nav = () => {
  const [search, setSearch] = useState({
    searchValue: "",
    results: [],
  });

  const [showSearchResults, setShowSearchResults] = useState(false);

  const handleClick = () => {
    setShowSearchResults(false);
    search.searchValue = "";
  };

  useEffect(() => {
    if (search.searchValue !== "") {
      const searchValueForURL = search.searchValue
        .split(" ")
        .join("_")
        .toLocaleLowerCase();
      const timeoutId = setTimeout(() => {
        const fetchResults = async () => {
          try {
            const res = await axios.get(
              process.env.REACT_APP_API_URL +
                "/search.json?q=" +
                searchValueForURL +
                "&limit=5"
            );
            /* eslint-disable */
            setSearch({
              ...search,
              results: res.data.docs,
            }); /* eslint-disable */
            setShowSearchResults(true);
            console.log(res.data.docs);
          } catch (error) {
            console.log(error);
          }
        };
        fetchResults();
      }, 1000);
      return () => clearTimeout(timeoutId);
    }
  }, [search.searchValue]);

  return (
    <div className="w-full h-12 bg-teal-500 sticky top-0 flex items-center justify-around border-b border-black z-20">
      {/* Left Side */}
      <div className="flex-1 sm:flex-[3]">
        <div className="flex items-center justify-center">
          <Link to="/">
            <span className="font-yellowtail font-bold text-xl sm:text-4xl text-yellow-100 hover:text-yellow-300 cursor-pointer transition ease-in duration-200">
              BookHouse
            </span>
          </Link>
        </div>
      </div>
      {/* Center */}
      <div className="hidden md:block flex-[4] md:flex-[6]">
        <ul className="flex items-center justify-center">
          <Link to="/">
            <li className="uppercase mr-3 sm:mr-6 text-sm sm:text-xl font-bold text-yellow-100 hover:text-yellow-300 transition ease-in duration-200 cursor-pointer tracking-wider">
              Home
            </li>
          </Link>
        </ul>
      </div>
      {/* Right Side */}
      <div className="flex-[3] md:flex-[3] flex-col relative flex items-center justify-center">
        <div className="bg-yellow-100 rounded-lg w-4/6 xl:w-3/6 p-1 flex items-center justify-center border border-black">
          <Search className="w-4 h-4 mr-1 text-yellow-500" />
          <input
            type="text"
            className="bg-transparent outline-none text-xs sm:text-md sm:font-semibold w-full"
            placeholder="Search a book..."
            value={search.searchValue}
            onChange={(e) =>
              setSearch({ ...search, searchValue: e.target.value })
            }
          />
        </div>

        {/* Search Results */}
        {search.results.length > 0 && showSearchResults && (
          <SearchResults results={search.results} handleClick={handleClick} />
        )}
      </div>
    </div>
  );
};
export default Nav;
