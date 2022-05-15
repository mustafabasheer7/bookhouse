import Header from "../components/Header";
import Subjects from "../components/Subjects";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header
        imgURL="https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1290&q=80"
        title="The Books Website"
      />
      <Subjects />
    </div>
  );
};

export default Home;
