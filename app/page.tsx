import Header from "./_components/header";
import CategoryList from "./category-list";
import Search from "./search";

const Home = () => {
  return (
    <>
      <Header />
      <div className="px-5 pt-6">
        <Search />
      </div>
      <div className="px-5 pt-6">
        <CategoryList/>
      </div>
    </>
  );
};

export default Home;
