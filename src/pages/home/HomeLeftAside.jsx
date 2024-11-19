import AllCategoryBtns from "../../components/AllCategoryBtns";
import AsideSportsNews from "../../components/AsideSportsNews";
import { useEffect, useState } from "react";

const HomeLeftAside = () => {
  const [categoriesData, setCategoriesData] = useState([]);

  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((data) => setCategoriesData(data.data.news_category));
  }, []);

  return (
    <aside className="col-span-3">
      <AllCategoryBtns categoriesData={categoriesData} />
      <AsideSportsNews />
    </aside>
  ); 
};

export default HomeLeftAside;
