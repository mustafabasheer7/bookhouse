import { MenuBook } from "@mui/icons-material";
import Header from "../components/Header";

const Book = () => {
  return (
    <div className="min-h-screen">
      <Header
        imgURL="https://images.unsplash.com/photo-1615791287388-6f1bd87ace4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80"
        title="Book Information"
      />
      <div className="bg-white m-10 rounded-lg border-2 pb-6 h-full">
        <div className="w-full flex justify-center items-center flex-col mb-8">
          <h1 className="uppercase font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl p-10 text-teal-500 font-lora text-center">
            Book Title
          </h1>
          {/* Horizontal Line */}
          <div className="border-b-2 border-gray-200 w-3/4 mb-8"></div>
          {/* Subject Information */}
          <div className="flex items-center px-3 w-11/12 md:w-6/7 xl:w-2/3 flex-col bg-yellow-100 border-2 rounded-xl">
            <img
              src="https://ia600607.us.archive.org/view_archive.php?archive=/22/items/olcovers24/olcovers24-L.zip&file=240727-L.jpg"
              alt="book cover"
              className="w-32 sm:w-52 lg:w-80 rounded-lg border-2 border-black mt-8"
            />
            <div className="p-6 flex flex-col justify-around gap-6">
              <span className="flex items-center">
                <b className="text-teal-500 hidden md:block flex-1 mr-2">
                  description:{" "}
                </b>
                <span className="hidden md:block flex-[5]">
                  The main character of Fantastic Mr. Fox is an extremely clever
                  anthropomorphized fox named Mr. Fox. He lives with his wife
                  and four little foxes. In order to feed his family, he steals
                  food from the cruel, brutish farmers named Boggis, Bunce, and
                  Bean every night.\r\n\r\nFinally tired of being constantly
                  outwitted by Mr. Fox, the farmers attempt to capture and kill
                  him. The foxes escape in time by burrowing deep into the
                  ground. The farmers decide to wait outside the hole for the
                  foxes to emerge. Unable to leave the hole and steal food, Mr.
                  Fox and his family begin to starve. Mr. Fox devises a plan to
                  steal food from the farmers by tunneling into the ground and
                  borrowing into the farmer's houses.\r\n\r\nAided by a friendly
                  Badger, the animals bring the stolen food back and Mrs. Fox
                  prepares a great celebratory banquet attended by the other
                  starving animals and their families. Mr. Fox invites all the
                  animals to live with him underground and says that he will
                  provide food for them daily thanks to his underground
                  passages. All the animals live happily and safely, while the
                  farmers remain waiting outside in vain for Mr. Fox to show up.
                </span>
              </span>
              <span className="flex items-center flex-col md:flex-row">
                <b className="text-teal-500 flex-1 mr-2">author(s): </b>
                <span className="flex-[5] text-center md:text-left">
                  Roald Dahl
                </span>
              </span>
              <span className="flex items-center flex-col md:flex-row">
                <b className="text-teal-500 flex-1 mr-2">Genre: </b>
                <span className="flex-[5] text-center md:text-left">
                  Children's literature, Novel, Fiction
                </span>
              </span>
              <span className="flex items-center flex-col md:flex-row">
                <b className="text-teal-500 flex-1 mr-2">Characters: </b>
                <span className="flex-[5] text-center md:text-left">
                  Mr. Fox, Mrs. Fox, Nathan Bunce, Walter Boggis, Franklin Bean
                </span>
              </span>
              <a
                href="#about"
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
      </div>
    </div>
  );
};

export default Book;
