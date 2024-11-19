import AllCategoryBtns from "../../components/AllCategoryBtns";
import AsideSportsNews from "../../components/AsideSportsNews";

const HomeLeftAside = ({categoriesData}) => {

  return (
    <aside className="col-span-3">
      <h2 className="text-xl text-[#403F3F] font-semibold mb-5">
        All Category
      </h2>

      <AllCategoryBtns categoriesData={categoriesData} />
      <AsideSportsNews />
    </aside>
  ); 
};

export default HomeLeftAside;
