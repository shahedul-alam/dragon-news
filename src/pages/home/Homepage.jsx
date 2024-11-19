import { useEffect, useState } from "react";
import HomeLeftAside from "./HomeLeftAside";
import HomeMain from "./HomeMain";
import HomeRightAside from "./HomeRightAside";


const Homepage = () => {
  const [categoriesData, setCategoriesData] = useState([]);

  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((data) => setCategoriesData(data.data.news_category));
  }, []);

  return (
    <main className="container mx-auto grid grid-cols-12 gap-6">
      <HomeLeftAside categoriesData={categoriesData} />
      <HomeMain />
      <HomeRightAside />
    </main>
  );
};

export default Homepage;