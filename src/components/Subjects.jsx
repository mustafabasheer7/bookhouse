import { subjects } from "../Data";
const Subjects = () => {
  return (
    <div className="bg-white m-10 rounded-lg border-2 pb-6">
      <div className="w-full flex justify-center items-center flex-col mb-8">
        <h1 className="uppercase text-7xl p-10 text-teal-500 font-bold font-lora">
          Book Subjects
        </h1>
        {/* Horizontal Line */}
        <div className="border-b-2 border-gray-200 w-3/4"></div>
      </div>
      {/* Subject Containers */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 auto-rows-fr">
        {subjects.map((subject) => (
          <div className="flex items-center justify-center" key={subject.id}>
            <div className="w-4/5 lg:w-full h-full bg-yellow-100 rounded-lg border border-gray-600 shadow-2xl m-4">
              <h1 className="text-lg p-2 font-bold bg-teal-500 text-white hover:text-yellow-300 transition ease-in duration-200 cursor-pointer flex items-center justify-center text-center border-b border-gray-600">
                {subject.icon}
                {subject.title}
              </h1>
              <ul className="flex flex-col items-center justify-center gap-2  rounded-b-lg">
                {subject.subjects.map((s) => (
                  <li
                    className="text-lg p-2 font-bold hover:text-teal-500 hover:scale-110 transition ease-in duration-200 cursor-pointer text-center"
                    key={s.id}
                  >
                    {s.value}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Subjects;
