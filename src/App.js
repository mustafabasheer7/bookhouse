import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Pages from "./pages/Pages";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="font-poppins bg-gray-100 selection:bg-black selection:text-teal-500">
      <BrowserRouter>
        <Nav />
        <Pages />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
