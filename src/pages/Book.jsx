import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import axios from "axios";
import FadeLoader from "react-spinners/FadeLoader";
import BookInfo from "../components/BookInfo";

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
      <div className="bg-white m-10 rounded-lg border-2 pb-6 h-full min-h-[750px] lg:min-h-[900px]">
        {Object.keys(bookInfo).length > 0 &&
        bookTitle !== "" &&
        authorName !== "" ? (
          <div className="w-full h-full flex justify-center items-center flex-col mb-8">
            <a
              href={process.env.REACT_APP_API_URL + bookInfo.key}
              target="_blank"
              rel="noreferrer"
            >
              <h1 className="uppercase font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl p-10 text-teal-500 hover:text-teal-700 transition duration-150 ease-out hover:ease-in font-lora text-center">
                {bookTitle}
              </h1>
            </a>
            {/* Horizontal Line */}
            <div className="border-b-2 border-gray-200 w-3/4 mb-8"></div>
            {/* Subject Information */}
            <BookInfo bookInfo={bookInfo} authorName={authorName} />
          </div>
        ) : (
          // Loading Spinner (Using React Spinners)
          <div className="min-h-[750px] lg:min-h-[900px] flex items-center justify-center text-center">
            <FadeLoader color={"#14b8a6"} size={75} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Book;
