import { Link } from "react-router-dom";
import { subjects } from "../Data";
const Subjects = () => {
  return (
    <div className="bg-white m-10 rounded-lg border-2 pb-6 flex items-center justify-center flex-col">
      <div className="w-full flex justify-center items-center flex-col mb-4">
        <h1 className="uppercase font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl p-10 text-teal-500 font-lora text-center">
          Popular Book Subjects
        </h1>
        {/* Horizontal Line */}
        <div className="border-b-2 border-gray-200 w-3/4"></div>
      </div>
      {/* Subject Containers */}
      <div className="w-full max-w-5xl h-full">
        {subjects.map((subject) => (
          <div
            className="flex items-center justify-center flex-col w-full"
            key={subject.id}
          >
            <div className="hover:scale-110 transition ease-in duration-200 text-center px-2">
              {/* Avoid searching for "Books by Language" subject */}
              {subject.title !== "Books by Language" ? (
                <Link to={subject.urlValue} state={{ title: subject.title }}>
                  <h1 className="uppercase text-2xl sm:text-3xl md:text-4xl font-bold my-8 font-lora text-teal-500">
                    {subject.icon}
                    {subject.title}
                  </h1>
                </Link>
              ) : (
                <h1 className="uppercase text-2xl sm:text-3xl md:text-4xl font-bold my-8 font-lora text-teal-500 cursor-default">
                  {subject.icon}
                  {subject.title}
                </h1>
              )}
            </div>
            <div className="grid grid-rows-1 grid-cols-3 lg:grid-cols-5 gap-4 place-items-center w-11/12 md:w-full">
              {subject.subjects.map((s) => (
                <Link to={s.urlValue} key={s.id} state={{ title: s.value }}>
                  <div
                    className="w-20 sm:w-36 md:w-44 h-16 sm:h-28 md:h-32 rounded-xl bg-yellow-100 hover:bg-yellow-300 text-teal-500 hover:text-black flex items-center justify-center text-center text-xs sm:text-lg md:text-xl font-bold border-2 border-black hover:border-teal-500 cursor-pointer overflow-hidden p-2 transition ease-in duration-100"
                    title={s.value}
                  >
                    {s.value}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Subjects;
