import { NavLink } from "react-router-dom";

const CategoryBtns = ({ category }) => {
  return (
    <NavLink to={`/category/${category.category_id}`}>
      <button className="w-full text-left text-xl font-medium text-[#9F9F9F] px-12 py-4 hover:bg-stone-100 hover:text-[#403F3F] rounded-md">
        {category.category_name}
      </button>
    </NavLink>
  );
};

const AllCategoryBtns = ({ categoriesData }) => {
  return (
    <div className="flex flex-col category-btn-container mb-5">
      {categoriesData.map((category) => (
        <CategoryBtns key={category.category_id} category={category} />
      ))}
    </div>
  );
};

export default AllCategoryBtns;
