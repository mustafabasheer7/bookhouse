import Header from "../components/Header";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import FadeLoader from "react-spinners/FadeLoader";

const Subject = () => {
  const [numberOfWorks, setNumberOfWorks] = useState(null);
  const [subjectWorks, setSubjectWorks] = useState([]);
  const location = useLocation();
  const title = location.state.title;
  let searchQuery = "";
  if (title.search) {
    let url = window.location.href;
    searchQuery = url.split("search")[1];
  }

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
          setNumberOfWorks(other.work_count);
          setSubjectWorks(works);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getSubjectData();
  }, [location.state.title, numberOfWorks, searchQuery, title]);

  return (
    <div className="min-h-screen">
      <Header
        imgURL="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80"
        title="Subject Information"
      />
      <div className="bg-white m-10 rounded-lg border-2 pb-6 h-full">
        <div className="w-full flex justify-center items-center flex-col mb-8">
          <h1 className="uppercase font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl p-10 text-teal-500 font-lora text-center">
            {title}
          </h1>
          {/* Horizontal Line */}
          <div className="border-b-2 border-gray-200 w-3/4"></div>
          {/* Subject Information */}
          <div className="my-4 p-4 flex items-center justify-between flex-col w-11/12 md:w-6/7 xl:w-2/3 bg-yellow-100 border-2 rounded-xl h-[600px]">
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
                  <div className="m-4 w-full h-full cursor-grabbing">
                    <Splide
                      hasTrack={true}
                      options={{
                        breakpoints: {
                          1024: {
                            perPage: 2,
                            gap: "2rem",
                          },
                          640: {
                            perPage: 1,
                            gap: "1rem",
                          },
                        },
                        perPage: 3,
                        gap: "5rem",
                        pagination: false,
                        arrows: true,
                        drag: "free",
                      }}
                    >
                      {/* Looping Thorough The Works In The Subject */}
                      {subjectWorks.map((work) => (
                        <SplideSlide key={work.key}>
                          <Link to={work.key}>
                            <div className="min-h-[25rem] rounded-xl overflow-hidden flex items-center flex-col cursor-pointer hover:brightness-125 text-teal-500 hover:text-teal-700 transition ease-in duration-200 mt-4hidden h-full w-full">
                              <img
                                src={
                                  work.cover_id || work.cover_i
                                    ? `https://covers.openlibrary.org/b/id/${
                                        work.cover_id
                                          ? work.cover_id
                                          : work.cover_i
                                      }-L.jpg`
                                    : "/images/default-placeholder.png"
                                }
                                alt="book title"
                                className="rounded-xl object-cover h-[300px] max-w-[200px]"
                              />
                              <p className="text-sm sm:text-lg md:text-xl mt-2 font-bold text-center">
                                {work.title}
                              </p>
                            </div>
                          </Link>
                        </SplideSlide>
                      ))}
                    </Splide>
                  </div>
                </div>
              </>
            ) : (
              // Loading Spinner (Using React Spinners)
              <p className="h-full w-full flex items-center justify-center">
                <FadeLoader color={"#14b8a6"} size={75} />
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subject;
