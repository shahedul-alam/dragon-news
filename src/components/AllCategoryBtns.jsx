import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const CategoryBtns = ({ category }) => {
  return (
    <NavLink to={`/category/${category.category_id}`}>
      <button className="w-full text-left text-xl font-medium text-[#9F9F9F] px-12 py-4 hover:bg-stone-100 hover:text-[#403F3F] rounded-md">
        {category.category_name}
      </button>
    </NavLink>
  );
};

const AllCategoryBtns = () => {
  const [categoriesData, setCategoriesData] = useState([]);

  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((data) => setCategoriesData(data.data.news_category));
  }, []);

  return (
    <>
      <h2 className="text-xl text-[#403F3F] font-semibold mb-5">
        All Category
      </h2>
      <div className="flex flex-col category-btn-container mb-5">
        {categoriesData.map((category) => (
          <CategoryBtns key={category.category_id} category={category} />
        ))}
      </div>
    </>
  );
};

export default AllCategoryBtns;
