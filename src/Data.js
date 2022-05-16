import {
  Article,
  ChildCare,
  ColorLens,
  ConnectWithoutContact,
  Engineering,
  Favorite,
  History,
  Language,
  MenuBook,
  Paid,
  Pets,
  Place,
  Science,
} from "@mui/icons-material";

export const subjects = [
  {
    id: 1,
    title: "Arts",
    urlValue: "subjects/arts",
    icon: <ColorLens className="text-black scale-125 mr-2" />,
    subjects: [
      { id: 1, value: "Architecture", urlValue: "subjects/architecture" },
      {
        id: 2,
        value: "Art Instruction",
        urlValue: "subjects/art__art_instruction",
      },
      {
        id: 3,
        value: "Art History",
        urlValue: "subjects/history_of_art__art__design_styles",
      },
      { id: 4, value: "Dance", urlValue: "subjects/dance" },
      { id: 5, value: "Design", urlValue: "subjects/design" },
      { id: 6, value: "Fashion", urlValue: "subjects/fashion" },
      { id: 7, value: "Film", urlValue: "subjects/film" },
      { id: 8, value: "Graphic Design", urlValue: "subjects/graphic_design" },
      { id: 9, value: "Music", urlValue: "subjects/music" },
      { id: 10, value: "Music Theory", urlValue: "subjects/music_theory" },
      { id: 11, value: "Painting", urlValue: "subjects/painting__paintings" },
      { id: 12, value: "Photography", urlValue: "subjects/photography" },
    ],
  },
  {
    id: 2,
    title: "Animals",
    urlValue: "subjects/animals",
    icon: <Pets className="text-black scale-125 mr-2" />,
    subjects: [
      { id: 1, value: "Bears", urlValue: "subjects/bears" },
      { id: 2, value: "Cats", urlValue: "subjects/cats" },
      { id: 3, value: "Kittens", urlValue: "subjects/kittens" },
      { id: 4, value: "Dogs", urlValue: "subjects/dogs" },
      { id: 5, value: "Puppies", urlValue: "subjects/puppies" },
    ],
  },
  {
    id: 3,
    title: "Fiction",
    urlValue: "subjects/fiction",
    icon: <Engineering className="text-black scale-125 mr-2" />,
    subjects: [
      { id: 1, value: "Fantasy", urlValue: "subjects/fantasy" },
      {
        id: 2,
        value: "Historical Fiction",
        urlValue: "subjects/historical_fiction",
      },
      { id: 3, value: "Horror", urlValue: "subjects/horror" },
      { id: 4, value: "Humor", urlValue: "subjects/humor" },
      { id: 5, value: "Literature", urlValue: "subjects/literature" },
      { id: 6, value: "Magic", urlValue: "subjects/magic" },
      {
        id: 7,
        value: "Mystery and detective stories",
        urlValue: "subjects/mystery_and_detective_stories",
      },
      { id: 8, value: "Plays", urlValue: "subjects/plays" },
      { id: 9, value: "Poetry", urlValue: "subjects/poetry" },
      { id: 10, value: "Romance", urlValue: "subjects/romance" },
      {
        id: 11,
        value: "Science Fiction",
        urlValue: "subjects/science_fiction",
      },
      { id: 12, value: "Short Stories", urlValue: "subjects/short_stories" },
      { id: 13, value: "Thriller", urlValue: "subjects/thriller" },
      {
        id: 14,
        value: "Young Adult",
        urlValue: "subjects/young_adult_fiction",
      },
    ],
  },
  {
    id: 4,
    title: "Science & Mathematics",
    urlValue: "subjects/sciencemathematics",
    icon: <Science className="text-black scale-125 mr-2" />,
    subjects: [
      { id: 1, value: "Biology", urlValue: "subjects/biology" },
      { id: 2, value: "Chemistry", urlValue: "subjects/chemistry" },
      { id: 3, value: "Mathematics", urlValue: "subjects/mathematics" },
      { id: 4, value: "Physics", urlValue: "subjects/physics" },
      { id: 5, value: "Programming", urlValue: "subjects/programming" },
    ],
  },
  {
    id: 5,
    title: "Business & Finance",
    urlValue: "subjects/business",
    icon: <Paid className="text-black scale-125 mr-2" />,
    subjects: [
      { id: 1, value: "Management", urlValue: "subjects/management" },
      {
        id: 2,
        value: "Entrepreneurship",
        urlValue: "subjects/entrepreneurship",
      },
      {
        id: 3,
        value: "Business Economics",
        urlValue: "subjects/business__economics",
      },
      {
        id: 4,
        value: "Business Success",
        urlValue: "subjects/success_in_business",
      },
      { id: 5, value: "Finance", urlValue: "subjects/finance" },
    ],
  },
  {
    id: 6,
    title: "Children's",
    urlValue: "subjects/juvenile_fiction",
    icon: <ChildCare className="text-black scale-125 mr-2" />,
    subjects: [
      { id: 1, value: "Kids Books", urlValue: "subjects/juvenile_literature" },
      {
        id: 2,
        value: "Stories in Rhyme",
        urlValue: "subjects/stories_in_rhyme",
      },
      { id: 3, value: "Baby Books", urlValue: "subjects/infancy" },
      { id: 4, value: "Bedtime Books", urlValue: "subjects/bedtime" },
      { id: 5, value: "Picture Books", urlValue: "subjects/picture_books" },
    ],
  },
  {
    id: 7,
    title: "History",
    urlValue: "subjects/history",
    icon: <History className="text-black scale-125 mr-2" />,
    subjects: [
      {
        id: 1,
        value: "Ancient Civilization",
        urlValue: "subjects/ancient_civilization",
      },
      { id: 2, value: "Archaeology", urlValue: "subjects/archaeology" },
      { id: 3, value: "Anthropology", urlValue: "subjects/anthropology" },
      {
        id: 4,
        value: "World War II",
        urlValue:
          "search?q=subject%3AHistory&subject_facet=History&subject_facet=World+War%2C+1939-1945",
      },
      {
        id: 5,
        value: "Social Life and Customs",
        urlValue:
          "search?q=subject%3AHistory&subject_facet=History&subject_facet=Social+life+and+customs",
      },
    ],
  },
  {
    id: 8,
    title: "Health & Wellness",
    urlValue: "subjects/health",
    icon: <Favorite className="text-black scale-125 mr-2" />,
    subjects: [
      { id: 1, value: "Cooking", urlValue: "subjects/cooking" },
      { id: 2, value: "Cookbooks", urlValue: "subjects/cookbooks" },
      { id: 3, value: "Mental Health", urlValue: "subjects/mental_health" },
      { id: 4, value: "Exercise", urlValue: "subjects/exercise" },
      { id: 5, value: "Nutrition", urlValue: "subjects/nutrition" },
      { id: 6, value: "Self-help", urlValue: "subjects/self-help" },
    ],
  },
  {
    id: 9,
    title: "Biography",
    urlValue: "subjects/biography",
    icon: <Article className="text-black scale-125 mr-2" />,
    subjects: [
      { id: 1, value: "Autobiographies", urlValue: "subjects/autobiography" },
      {
        id: 2,
        value: "History",
        urlValue:
          "search?q=subject%3ABiography&subject_facet=Biography&subject_facet=History",
      },
      {
        id: 3,
        value: "Politics and Government",
        urlValue:
          "search?q=subject%3ABiography&subject_facet=Biography&subject_facet=Politics+and+government",
      },
      {
        id: 4,
        value: "World War II",
        urlValue:
          "search?q=subject%3ABiography&subject_facet=Biography&subject_facet=World+War%2C+1939-1945",
      },
      {
        id: 5,
        value: "Women",
        urlValue:
          "search?q=subject%3ABiography&subject_facet=Biography&subject_facet=Women",
      },
      {
        id: 6,
        value: "Kings and Rulers",
        urlValue:
          "search?q=subject%3ABiography&subject_facet=Biography&subject_facet=Kings+and+rulers",
      },
      {
        id: 7,
        value: "Composers",
        urlValue:
          "search?q=subject%3ABiography&subject_facet=Biography&subject_facet=Composers",
      },
      {
        id: 8,
        value: "Artists",
        urlValue:
          "search?q=subject%3ABiography&subject_facet=Biography&subject_facet=Artists",
      },
    ],
  },
  {
    id: 10,
    title: "Social Sciences",
    urlValue: "subjects/social_sciences",
    icon: <ConnectWithoutContact className="text-black scale-125 mr-2" />,
    subjects: [
      { id: 1, value: "Anthropology", urlValue: "subjects/anthropology" },
      { id: 2, value: "Religion", urlValue: "subjects/religion" },
      {
        id: 3,
        value: "Political Science",
        urlValue: "subjects/political_science",
      },
      { id: 4, value: "Psychology", urlValue: "subjects/psychology" },
    ],
  },
  {
    id: 11,
    title: "Places",
    urlValue: "subjects/places",
    icon: <Place className="text-black scale-125 mr-2" />,
    subjects: [
      { id: 1, value: "Brazil", urlValue: "subjects/place%3Abrazil" },
      { id: 2, value: "India", urlValue: "subjects/place%3Aindia" },
      { id: 3, value: "Indonesia", urlValue: "subjects/place%3Aindonesia" },
      {
        id: 4,
        value: "United States",
        urlValue: "subjects/place%3Aunited_states",
      },
    ],
  },
  {
    id: 12,
    title: "Textbooks",
    urlValue: "subjects/textbooks",
    icon: <MenuBook className="text-black scale-125 mr-2" />,
    subjects: [
      {
        id: 1,
        value: "History",
        urlValue:
          "search?q=subject%3ATextbooks&subject_facet=Textbooks&subject_facet=History",
      },
      {
        id: 2,
        value: "Mathematics",
        urlValue:
          "search?q=subject%3ATextbooks&subject_facet=Textbooks&subject_facet=Mathematics",
      },
      {
        id: 3,
        value: "Geography",
        urlValue:
          "search?q=subject%3ATextbooks&subject_facet=Textbooks&subject_facet=Geography",
      },
      {
        id: 4,
        value: "Psychology",
        urlValue:
          "search?q=subject%3ATextbooks&subject_facet=Textbooks&subject_facet=Psychology",
      },
      {
        id: 5,
        value: "Algebra",
        urlValue:
          "search?q=subject%3ATextbooks&subject_facet=Textbooks&subject_facet=Algebra",
      },
      {
        id: 6,
        value: "Education",
        urlValue:
          "search?q=subject%3ATextbooks&subject_facet=Textbooks&subject_facet=Education",
      },
      {
        id: 7,
        value: "Business & Economics",
        urlValue:
          "search?q=subject%3ATextbook+subject%3ABusiness&subject_facet=Textbooks",
      },
      {
        id: 8,
        value: "Science",
        urlValue:
          "search?q=subject%3ATextbooks&subject_facet=Textbooks&subject_facet=Science",
      },
      {
        id: 9,
        value: "Chemistry",
        urlValue:
          "search?q=subject%3ATextbooks&subject_facet=Textbooks&subject_facet=Chemistry",
      },
      {
        id: 10,
        value: "English Language",
        urlValue:
          "search?q=subject%3ATextbooks&subject_facet=Textbooks&subject_facet=English+language",
      },
      {
        id: 11,
        value: "Physics",
        urlValue:
          "search?q=subject%3ATextbooks&subject_facet=Textbooks&subject_facet=Physics",
      },
      {
        id: 12,
        value: "Computer Science",
        urlValue:
          "search?q=subject%3AComputer+science&sort=editions&subject_facet=Computer+science",
      },
    ],
  },
  {
    id: 13,
    title: "Books by Language",
    urlValue: "subjects/language",
    icon: <Language className="text-black scale-125 mr-2" />,
    subjects: [
      { id: 1, value: "English", urlValue: "search?q=language%3Aeng" },
      { id: 2, value: "French", urlValue: "search?q=language%3Afre" },
      { id: 3, value: "Spanish", urlValue: "search?q=language%3Aspa" },
      { id: 4, value: "German", urlValue: "search?q=language%3Ager" },
      { id: 5, value: "Russian", urlValue: "search?q=language%3Arus" },
      { id: 6, value: "Italian", urlValue: "search?q=language%3Aita" },
      { id: 7, value: "Chinese", urlValue: "search?q=language%3Achi" },
      { id: 8, value: "Japanese", urlValue: "search?q=language%3Ajpn" },
    ],
  },
];
