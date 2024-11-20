import HomeHeaderDetails from "../../components/HomeHeaderDetails";
import HomeHeaderMarquee from "../../components/HomeHeaderMarquee";
import Navbar from "../../components/Navbar";

const HomeHeader = () => {
  return (
    <header className="container mx-auto mt-12 mb-[72px]">
      <HomeHeaderDetails />
      <HomeHeaderMarquee />
      <Navbar />
    </header>
  );
};

export default HomeHeader;
