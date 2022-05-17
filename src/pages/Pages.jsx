import Home from "./Home";
import Book from "./Book";
import Subject from "./Subject";
import { Route, Routes } from "react-router-dom";

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/works/:bookId" element={<Book />} />
      <Route path="/:search" element={<Subject />} />
      <Route path="/subjects/:subjectTitle" element={<Subject />} />
    </Routes>
  );
};

export default Pages;
