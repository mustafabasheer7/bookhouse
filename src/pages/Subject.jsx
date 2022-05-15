import Header from "../components/Header";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Subject = () => {
  return (
    <div className="min-h-screen">
      <Header
        imgURL="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80"
        title="Architecture Subject"
      />
      <div className="bg-white m-10 rounded-lg border-2 pb-6 h-full">
        <div className="w-full flex justify-center items-center flex-col mb-8">
          <h1 className="uppercase font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl p-10 text-teal-500 font-lora text-center">
            Architecture Information
          </h1>
          {/* Horizontal Line */}
          <div className="border-b-2 border-gray-200 w-3/4"></div>
          {/* Subject Information */}
          <div className="my-4 p-4 flex items-center justify-between flex-col w-11/12 md:w-6/7 xl:w-2/3 flex-col bg-yellow-100 border-2 rounded-xl">
            <span className="text-gray-800 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center">
              Total of <span className="text-teal-500">54493</span> works
              available for this subject!
            </span>
            {/* Horizontal Line */}
            <div className="border-b-2 border-gray-200 w-2/4 mt-2"></div>
            <div className="my-4 w-3/4 flex items-center justify-center flex-col">
              <h1 className="text-md sm:text-lg md:text-xl lg:text-2xl font-bold text-center">
                Some Works in this Subject
              </h1>
              <div className="m-4 w-full cursor-grabbing">
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
                  <SplideSlide>
                    <div className="min-h-[25rem] rounded-xl overflow-hidden flex items-center justify-center flex-col cursor-pointer hover:brightness-110 transition ease-in duration-200">
                      <img
                        src="https://ia600607.us.archive.org/view_archive.php?archive=/22/items/olcovers24/olcovers24-L.zip&file=240727-L.jpg"
                        alt="book title"
                        className="rounded-xl"
                      />
                      <p className="text-lg mt-2 font-bold text-center text-teal-500">
                        Book Title
                      </p>
                    </div>
                  </SplideSlide>
                  <SplideSlide>
                    <div className="min-h-[25rem] rounded-xl overflow-hidden flex items-center justify-center flex-col cursor-pointer hover:brightness-110 transition ease-in duration-200">
                      <img
                        src="https://ia600607.us.archive.org/view_archive.php?archive=/22/items/olcovers24/olcovers24-L.zip&file=240727-L.jpg"
                        alt="book title"
                        className="rounded-xl"
                      />
                      <p className="text-lg mt-2 font-bold text-center text-teal-500">
                        Book Title
                      </p>
                    </div>
                  </SplideSlide>
                  <SplideSlide>
                    <div className="min-h-[25rem] rounded-xl overflow-hidden flex items-center justify-center flex-col cursor-pointer hover:brightness-110 transition ease-in duration-200">
                      <img
                        src="https://ia600607.us.archive.org/view_archive.php?archive=/22/items/olcovers24/olcovers24-L.zip&file=240727-L.jpg"
                        alt="book title"
                        className="rounded-xl"
                      />
                      <p className="text-lg mt-2 font-bold text-center text-teal-500">
                        Book Title
                      </p>
                    </div>
                  </SplideSlide>
                  <SplideSlide>
                    <div className="min-h-[25rem] rounded-xl overflow-hidden flex items-center justify-center flex-col cursor-pointer hover:brightness-110 transition ease-in duration-200">
                      <img
                        src="https://ia600607.us.archive.org/view_archive.php?archive=/22/items/olcovers24/olcovers24-L.zip&file=240727-L.jpg"
                        alt="book title"
                        className="rounded-xl"
                      />
                      <p className="text-lg mt-2 font-bold text-center text-teal-500">
                        Book Title
                      </p>
                    </div>
                  </SplideSlide>
                  <SplideSlide>
                    <div className="min-h-[25rem] rounded-xl overflow-hidden flex items-center justify-center flex-col cursor-pointer hover:brightness-110 transition ease-in duration-200">
                      <img
                        src="https://ia600607.us.archive.org/view_archive.php?archive=/22/items/olcovers24/olcovers24-L.zip&file=240727-L.jpg"
                        alt="book title"
                        className="rounded-xl"
                      />
                      <p className="text-lg mt-2 font-bold text-center text-teal-500">
                        Book Title
                      </p>
                    </div>
                  </SplideSlide>
                  <SplideSlide>
                    <div className="min-h-[25rem] rounded-xl overflow-hidden flex items-center justify-center flex-col cursor-pointer hover:brightness-110 transition ease-in duration-200">
                      <img
                        src="https://ia600607.us.archive.org/view_archive.php?archive=/22/items/olcovers24/olcovers24-L.zip&file=240727-L.jpg"
                        alt="book title"
                        className="rounded-xl"
                      />
                      <p className="text-lg mt-2 font-bold text-center text-teal-500">
                        Book Title
                      </p>
                    </div>
                  </SplideSlide>
                  <SplideSlide>
                    <div className="min-h-[25rem] rounded-xl overflow-hidden flex items-center justify-center flex-col cursor-pointer hover:brightness-110 transition ease-in duration-200">
                      <img
                        src="https://ia600607.us.archive.org/view_archive.php?archive=/22/items/olcovers24/olcovers24-L.zip&file=240727-L.jpg"
                        alt="book title"
                        className="rounded-xl"
                      />
                      <p className="text-lg mt-2 font-bold text-center text-teal-500">
                        Book Title
                      </p>
                    </div>
                  </SplideSlide>
                  <SplideSlide>
                    <div className="min-h-[25rem] rounded-xl overflow-hidden flex items-center justify-center flex-col cursor-pointer hover:brightness-110 transition ease-in duration-200">
                      <img
                        src="https://ia600607.us.archive.org/view_archive.php?archive=/22/items/olcovers24/olcovers24-L.zip&file=240727-L.jpg"
                        alt="book title"
                        className="rounded-xl"
                      />
                      <p className="text-lg mt-2 font-bold text-center text-teal-500">
                        Book Title
                      </p>
                    </div>
                  </SplideSlide>
                  <SplideSlide>
                    <div className="min-h-[25rem] rounded-xl overflow-hidden flex items-center justify-center flex-col cursor-pointer hover:brightness-110 transition ease-in duration-200">
                      <img
                        src="https://ia600607.us.archive.org/view_archive.php?archive=/22/items/olcovers24/olcovers24-L.zip&file=240727-L.jpg"
                        alt="book title"
                        className="rounded-xl"
                      />
                      <p className="text-lg mt-2 font-bold text-center text-teal-500">
                        Book Title
                      </p>
                    </div>
                  </SplideSlide>
                  <SplideSlide>
                    <div className="min-h-[25rem] rounded-xl overflow-hidden flex items-center justify-center flex-col cursor-pointer hover:brightness-110 transition ease-in duration-200">
                      <img
                        src="https://ia600607.us.archive.org/view_archive.php?archive=/22/items/olcovers24/olcovers24-L.zip&file=240727-L.jpg"
                        alt="book title"
                        className="rounded-xl"
                      />
                      <p className="text-lg mt-2 font-bold text-center text-teal-500">
                        Book Title
                      </p>
                    </div>
                  </SplideSlide>
                  <SplideSlide>
                    <div className="min-h-[25rem] rounded-xl overflow-hidden flex items-center justify-center flex-col cursor-pointer hover:brightness-110 transition ease-in duration-200">
                      <img
                        src="https://ia600607.us.archive.org/view_archive.php?archive=/22/items/olcovers24/olcovers24-L.zip&file=240727-L.jpg"
                        alt="book title"
                        className="rounded-xl"
                      />
                      <p className="text-lg mt-2 font-bold text-center text-teal-500">
                        Book Title
                      </p>
                    </div>
                  </SplideSlide>
                </Splide>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subject;
