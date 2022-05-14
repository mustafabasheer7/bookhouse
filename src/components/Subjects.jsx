import { subjects } from "../Data";
const Subjects = () => {
  return (
    <>
      <h1 className="text-4xl p-10 text-teal-500 font-bold">Book Subjects:</h1>
      <div className="h-full grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {subjects.map((subject) => (
          <div className="flex items-center justify-center" key={subject.id}>
            <div className="w-4/5 bg-teal-500 rounded-lg border border-gray-600 shadow-2xl">
              <h1 className="text-2xl p-2 font-bold text-white flex items-center justify-center text-center border-b border-gray-600">
                {subject.icon}
                {subject.title}
              </h1>
              <ul className="flex flex-col items-center justify-center gap-2 bg-yellow-100 rounded-b-lg">
                {subject.subjects.map((s) => (
                  <li
                    className="text-2xl p-2 font-bold hover:text-teal-500 hover:scale-125 transition ease-in duration-200 cursor-pointer text-center"
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
    </>
  );
};

export default Subjects;
