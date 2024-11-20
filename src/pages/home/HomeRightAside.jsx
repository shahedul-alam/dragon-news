import AsideAdvertisement from "../../components/AsideAdvertisement";
import FindUsOn from "../../components/FindUsOn";
import LoginWith from "../../components/LoginWith";


const HomeRightAside = () => {
  return (
    <div className="col-span-3">
      <LoginWith />
      <FindUsOn />
      <AsideAdvertisement />
    </div>
  );
};

export default HomeRightAside;