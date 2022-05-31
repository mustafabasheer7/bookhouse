import Header from "../components/Header";
import "@splidejs/react-splide/css";
import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import FadeLoader from "react-spinners/FadeLoader";
import { MenuBook, MenuBookOutlined } from "@mui/icons-material";
import WorksList from "../components/WorksList";

const Subject = () => {
  const [numberOfWorks, setNumberOfWorks] = useState(null);
  const [subjectWorks, setSubjectWorks] = useState([]);
  const [thereAreWorks, setThereAreWorks] = useState(true);
  const [offsetNumber, setOffsetNumber] = useState(10);
  const location = useLocation();
  const params = useParams();
  // if the request is from "/subjects/:subjectTitle" or "/search?:query"
  const title = location.state ? location.state.title : params.subjectTitle;
  let searchQuery = "";

  if (location.state) {
    let url = window.location.href;
    searchQuery = url.split("search")[1];
  }

  const handleClick = async () => {
    if (searchQuery) {
      const response = await axios.get(
        process.env.REACT_APP_API_URL +
          "/search.json" +
          searchQuery +
          "&offset=" +
          offsetNumber +
          "&limit=10"
      );
      let newList = [...subjectWorks, ...response.data.docs];
      setSubjectWorks(newList);
      const newOffset = offsetNumber + 10;
      setOffsetNumber(newOffset);
    } else {
      //if it is just a subject
      const response = await axios.get(
        process.env.REACT_APP_API_URL +
          "/subjects/" +
          title.split(" ").join("_").toLowerCase() +
          ".json?offset=" +
          offsetNumber +
          "&limit=10"
      );
      let newList = [...subjectWorks, ...response.data.works];
      setSubjectWorks(newList);
      const newOffset = offsetNumber + 10;
      setOffsetNumber(newOffset);
    }
  };

  useEffect(() => {
    const getSubjectData = async () => {
      try {
        // If it is a search query:
        if (searchQuery) {
          const response = await axios.get(
            process.env.REACT_APP_API_URL +
              "/search.json" +
              searchQuery +
              "&limit=10"
          );
          const { docs, ...other } = response.data;

          // if nothing is found
          if (other.numFound === 0) {
            setThereAreWorks(false);
            return;
          }
          setNumberOfWorks(other.numFound);
          setSubjectWorks(docs);
        }
        // If it is just a subject:
        else {
          const response = await axios.get(
            process.env.REACT_APP_API_URL +
              "/subjects/" +
              title.split(" ").join("_").toLowerCase() +
              ".json?limit=10"
          );
          const { works, ...other } = response.data;
          // if nothing is found
          if (other.work_count === 0) {
            setThereAreWorks(false);
            return;
          }
          setNumberOfWorks(other.work_count);
          setSubjectWorks(works);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getSubjectData();
  }, [numberOfWorks, searchQuery, title]);

  return (
    <div className="min-h-screen">
      <Header
        imgURL="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80"
        title="Subject Information"
      />

      <div className="bg-white m-10 rounded-lg border-2 pb-6 h-full">
        {thereAreWorks ? (
          <div className="w-full flex justify-center items-center flex-col mb-8">
            <h1 className="uppercase font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl p-10 text-teal-500 font-lora text-center">
              {title}
            </h1>
            {/* Horizontal Line */}
            <div className="border-b-2 border-gray-200 w-3/4"></div>
            {/* Subject Information */}
            <div className="my-4 p-4 flex items-center justify-between flex-col w-11/12 md:w-6/7 xl:w-2/3 bg-yellow-100 border-2 rounded-xl h-[720px]">
              {numberOfWorks && subjectWorks ? (
                <>
                  <span className="text-gray-800 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center">
                    Total of{" "}
                    <span className="text-teal-500">{numberOfWorks}</span> works
                    available for this subject!
                  </span>
                  {/* Horizontal Line */}
                  <div className="border-b-2 border-gray-200 w-2/4 mt-2"></div>
                  <div className="my-4 w-3/4 flex items-center justify-center flex-col">
                    <h1 className="text-md sm:text-lg md:text-xl lg:text-2xl font-bold text-center">
                      Some Works in this Subject
                    </h1>
                    <WorksList subjectWorks={subjectWorks} />
                  </div>
                  <button
                    onClick={handleClick}
                    className="inline-block mt-4 cursor-pointer py-4 px-4 md:px-8 border-2 border-black text-sm md:text-xl lg:text-2xl monitor:text-3xl hover:bg-teal-500 hover:text-white font-bold transform hover:scale-110 transition duration-150 ease-out hover:ease-in w-10/11 md:w-2/4 xl:w-3/7 self-center"
                  >
                    <div className="flex items-center justify-center">
                      <MenuBookOutlined className="transform scale-150 mr-4 text-black" />
                      <span>Load More Books</span>
                    </div>
                  </button>
                </>
              ) : (
                // Loading Spinner (Using React Spinners)
                <p className="h-full w-full flex items-center justify-center">
                  <FadeLoader color={"#14b8a6"} size={75} />
                </p>
              )}
            </div>
          </div>
        ) : (
          <div className="w-full flex justify-center items-center flex-col mb-8">
            <h1 className="uppercase font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl p-10 text-teal-500 font-lora text-center">
              no works available for this subject!
            </h1>
            <a
              href={"/"}
              className="inline-block mt-4 cursor-pointer py-4 px-4 md:px-8 border-2 border-black text-sm md:text-xl lg:text-2xl monitor:text-3xl hover:bg-teal-500 hover:text-white font-bold transform hover:scale-110 transition duration-150 ease-out hover:ease-in w-10/11 md:w-2/4 xl:w-3/7 self-center"
            >
              <div className="flex items-center justify-center">
                <MenuBook className="transform scale-150 mr-4 text-black" />
                <span>Back to Home</span>
              </div>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Subject;
