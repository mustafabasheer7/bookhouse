import { MenuBook } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import axios from "axios";
import FadeLoader from "react-spinners/FadeLoader";

const Book = () => {
  const [bookInfo, setBookInfo] = useState([]);
  const [bookTitle, setBookTitle] = useState("");
  const [authorName, setAuthorName] = useState("");
  let workId = useParams();

  useEffect(() => {
    const getBookData = async () => {
      try {
        const response = await axios.get(
          process.env.REACT_APP_API_URL + "/works/" + workId.bookId + ".json"
        );
        const d = await axios.get(
          process.env.REACT_APP_API_URL +
            response.data.authors[0].author.key +
            ".json"
        );

        setAuthorName(d.data.name);

        const { title, ...other } = response.data;
        setBookInfo(other);
        setBookTitle(title);
      } catch (error) {
        console.log(error);
      }
    };
    getBookData();
  }, [workId]);
  return (
    <div className="min-h-screen">
      <Header
        imgURL="https://images.unsplash.com/photo-1615791287388-6f1bd87ace4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80"
        title="Book Information"
      />
      <div className="bg-white m-10 rounded-lg border-2 pb-6 h-full">
        {Object.keys(bookInfo).length > 0 &&
        bookTitle !== "" &&
        authorName !== "" ? (
          <div className="w-full flex justify-center items-center flex-col mb-8">
            <h1 className="uppercase font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl p-10 text-teal-500 font-lora text-center">
              {bookTitle}
            </h1>
            {/* Horizontal Line */}
            <div className="border-b-2 border-gray-200 w-3/4 mb-8"></div>
            {/* Subject Information */}
            <div className="my-4 p-4 flex items-center justify-between flex-col w-11/12 md:w-6/7 xl:w-2/3 bg-yellow-100 border-2 rounded-xl min-h-[630px] lg:min-h-[800px]">
              <img
                src={
                  bookInfo.covers
                    ? `https://covers.openlibrary.org/b/id/${bookInfo.covers[0]}-L.jpg`
                    : "/images/default-placeholder.png"
                }
                alt="book cover"
                className="w-32 sm:w-52 lg:w-80 rounded-lg border-2 border-black mt-8 max-h-[460px] max-w-[300px] object-cover"
              />
              <div className="p-6 flex flex-col justify-around gap-6 w-full">
                <span className="flex items-center">
                  <b className="text-teal-500 hidden md:block flex-1 mr-8 lg:mr-2 text-lg lg:text-xl w-[60px]">
                    description:
                  </b>
                  <span className="hidden md:block flex-[5] md:text-sm lg:text-xl">
                    {bookInfo.description
                      ? bookInfo.description
                      : "This book doesn't have a description yet :("}
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
                  <span className="flex-[5] text-center md:text-left text-sm lg:text-xl">
                    {bookInfo.subjects.join(", ")}
                  </span>
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
          </div>
        ) : (
          // Loading Spinner (Using React Spinners)
          <p className="h-full w-full flex items-center justify-center">
            <FadeLoader color={"#14b8a6"} size={75} />
          </p>
        )}
      </div>
    </div>
  );
};

export default Book;
