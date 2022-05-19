import { MenuBook } from "@mui/icons-material";
import { Link } from "react-router-dom";

const BookInfo = ({ bookInfo, authorName }) => {
  return (
    <div className="my-4 p-4 flex items-center justify-between flex-col w-11/12 md:w-6/7 xl:w-2/3 bg-yellow-100 border-2 rounded-xl min-h-[630px] lg:min-h-[800px]">
      <a
        href={process.env.REACT_APP_API_URL + bookInfo.key}
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={
            bookInfo.covers
              ? `https://covers.openlibrary.org/b/id/${bookInfo.covers[0]}-L.jpg`
              : "/images/default-placeholder.png"
          }
          alt="book cover"
          className="w-32 sm:w-52 lg:w-80 rounded-lg border-2 border-black mt-8 max-h-[460px] max-w-[300px] object-cover hover:brightness-110 transition duration-150 ease-out hover:ease-in"
        />
      </a>
      <div className="p-6 flex flex-col justify-around gap-6 w-full">
        <span className="flex items-center">
          <b className="text-teal-500 hidden md:block flex-1 mr-8 lg:mr-2 text-lg lg:text-xl w-[60px]">
            description:
          </b>
          <span className="hidden md:block flex-[5] md:text-sm lg:text-xl">
            {!bookInfo.description
              ? "This book doesn't have a description yet :("
              : // Some Books Have Descriptions of type string, and some have description of type object.
              typeof bookInfo.description === "string"
              ? bookInfo.description
              : bookInfo.description.value}
          </span>
        </span>
        <span className="flex items-center flex-col md:flex-row">
          <b className="text-teal-500 flex-1 mr-8 lg:mr-2 text-lg lg:text-x w-[60px]">
            author(s):
          </b>
          <span className="flex-[5] text-center md:text-left text-sm lg:text-xl">
            {authorName}
          </span>
        </span>
        <span className="flex items-center flex-col justify-start md:flex-row">
          <b className="text-teal-500 flex-1 mr-8 lg:mr-2 text-lg lg:text-xl w-[60px]">
            Genre(s):
          </b>
          <div className="flex-[5] text-center md:text-left text-sm lg:text-xl">
            {bookInfo.subjects ? (
              bookInfo.subjects.map((subjectName, i) => (
                <Link
                  to={
                    "/subjects/" +
                    subjectName.split(" ").join("_").toLowerCase()
                  }
                  state={{ title: subjectName }}
                  key={subjectName}
                >
                  <span className="hover:text-teal-500">
                    {subjectName}
                    {subjectName.length === i + 1 ? "" : ", "}
                  </span>
                </Link>
              ))
            ) : (
              <div>no subject available!</div>
            )}
            {/* {bookInfo.subjects} */}
          </div>
        </span>
        <a
          href={process.env.REACT_APP_API_URL + bookInfo.key}
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-4 cursor-pointer py-4 px-4 md:px-8 border-2 border-black text-sm md:text-xl lg:text-2xl monitor:text-3xl hover:bg-teal-500 hover:text-white font-bold transform hover:scale-110 transition duration-150 ease-out hover:ease-in w-10/11 md:w-2/4 xl:w-3/7 self-center"
        >
          <div className="flex items-center justify-center">
            <MenuBook className="transform scale-150 mr-4 text-black" />
            <span>Visit Book Page</span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default BookInfo;
