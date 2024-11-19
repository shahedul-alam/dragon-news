import { NavLink } from "react-router-dom";

const CategoryBtns = ({ category }) => {
  return (
    <NavLink to={`/category/${category.category_id}`}>
      <button className="w-full text-left text-xl font-medium text-[#9F9F9F] px-12 py-4 hover:text-[#403F3F] rounded-md">
        {category.category_name}
      </button>
    </NavLink>
  );
};

const HomeLeftAside = ({categoriesData}) => {
  console.log('left aside');

  return (
    <aside className="border border-blue-600 col-span-3">
      <h2 className="text-xl text-[#403F3F] font-semibold mb-5">
        All Category
      </h2>
      <div className="flex flex-col category-btn-container border">
        {categoriesData.map((category) => (
          <CategoryBtns key={category.category_id} category={category} />
        ))}
      </div>
    </aside>
  );
};

export default HomeLeftAside;
