import { Link } from "react-router-dom";

const SearchResults = ({ results, handleClick }) => {
  return (
    <div className="w-4/6 xl:w-3/6 bg-white h-[19.5rem] absolute top-10 rounded-lg overflow-hidden border-2">
      {results.map((result) => (
        <Link to={result.key} key={result.key} onClick={handleClick}>
          <div className=" hover:bg-yellow-100 w-full mb-2 cursor-pointer">
            <div className="flex items-center p-2">
              <img
                src={
                  result.cover_i
                    ? `https://covers.openlibrary.org/b/id/${result.cover_i}-L.jpg`
                    : "/images/default-placeholder.png"
                }
                alt="book"
                className="w-10 h-10 rounded-lg mr-4 object-cover border border-black"
              />
              <p className="text-sm lg:text-md truncate">{result.title}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SearchResults;
