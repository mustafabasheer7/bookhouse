import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Link } from "react-router-dom";

const WorksList = ({ subjectWorks }) => {
  return (
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
                          work.cover_id ? work.cover_id : work.cover_i
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
  );
};

export default WorksList;
